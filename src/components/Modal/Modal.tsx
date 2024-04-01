import { useDispatch, useSelector } from "react-redux";
import * as S from "./Modal.styled";
import { userSelector } from "../../store/selector/selector";
import { flagUpdate } from "../../store/reducers/reducers";
import { IUser } from "../../interface/interface";

export default function Modal() {
  const dispatch = useDispatch();
  const user: IUser = useSelector(userSelector);

  return (
    <S.Modal>
      <S.Parent>
        <S.UserBlock>
          <S.UserDivForImg>
            <S.UserAva src={user.avatar_url} />
          </S.UserDivForImg>
          <S.UserLogin>Никнейм: {user.login}</S.UserLogin>
          <S.RepoCount>
            Количество репозиториев: {user?.public_repos}
          </S.RepoCount>
          <S.Subscribers>Подписчиков: {user.followers}</S.Subscribers>
          <S.TextUrl>{user.html_url}</S.TextUrl>

          <S.GoToUser onClick={() => dispatch(flagUpdate(false))}>
            закрыть
          </S.GoToUser>
        </S.UserBlock>
      </S.Parent>
    </S.Modal>
  );
}
