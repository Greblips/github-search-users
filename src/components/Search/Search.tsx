import * as S from "./Search.styled";
import { useState, useEffect } from "react";
import { ReactComponent as SearchLogo } from "../../assets/img/search.svg";
import getUsers from "../../api/api";
import { filterSelector } from "../../store/selector/selector";
import { IforLoaderOpen, IRespUsers } from "../../interface/interface";
import { useDispatch, useSelector } from "react-redux";
import {
  searchUserNameUpdate,
  textInInputSearchUpdate,
  totalPagesFoundUpdate,
} from "../../store/reducers/reducers";

export const Search = ({ setLoading }: IforLoaderOpen) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>("");
  const filter: boolean = useSelector(filterSelector);
  const [showError, setShowError] = useState<string>("");
  const [match, setMatch] = useState<number>(0);
  const page: number = 1;

  const searchClick = async () => {
    try {
      setLoading(true);

      const response: IRespUsers = await getUsers({
        userName,
        filter,
        page,
      });
      setMatch(response.total_count);

      const PageforShow: number = 8;
      const resultAllPages: number = Math.ceil(
        response.total_count / PageforShow
      );

      dispatch(totalPagesFoundUpdate(resultAllPages));

      const users = response.items.map((user) => ({
        login: user.login,
        avatar: user.avatar_url,
        url: user.url,
        id: user.id,
      }));

      dispatch(searchUserNameUpdate(users));
      dispatch(textInInputSearchUpdate(userName));
    } catch (error: any) {
      if (error.response.status === 403) {
        setShowError("Слишком много запросов");
      } else if (error.response.status === 422) {
        setShowError("Ошибка на сервере");
      } else if (error.response.status === 503) {
        setShowError("Сервер не доступен");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!userName) return;
    searchClick();
  }, [filter]);

  return (
    <S.SearchContainer>
      <S.Header>Поиск пользователя GitHub</S.Header>
      <S.SearchBlock>
        <S.SearchInput
          type="search"
          placeholder="Введите ник пользвователя"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <S.SearchButton>
          <SearchLogo onClick={searchClick}></SearchLogo>
        </S.SearchButton>
      </S.SearchBlock>
      {showError && <S.ForErrors>{showError}</S.ForErrors>}
    </S.SearchContainer>
  );
};
