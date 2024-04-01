import { useDispatch } from "react-redux";
import * as S from "./Filter.styled";
import { filterUpdate } from "../../store/reducers/reducers";

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <S.Sort>
      <S.header>Сортировка :</S.header>

      <S.ButtonFilter
        type="button"
        onClick={() => dispatch(filterUpdate(true))}
      >
        сначала больше репозиториев
      </S.ButtonFilter>
      <S.ButtonFilter
        type="button"
        onClick={() => dispatch(filterUpdate(false))}
      >
        сначала меньше репозиториев
      </S.ButtonFilter>
    </S.Sort>
  );
};
