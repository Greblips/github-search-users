import { useState } from "react";
import * as S from "./Users.styled";
import { useSelector } from "react-redux";
import { Search } from "../../components/Search/Search";
import { flagSelector } from "../../store/selector/selector";
import { Filter } from "../../components/Filter/Filter";
import { LoaderSpinner } from "../../components/LoaderSpinner/LoaderSpinner";
import UserList from "../../components/UserList/UserList";
import Modal from "../../components/Modal/Modal";
import Pagination from "../../components/Pagination/Pagination";

export const Users = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const flagForOpenModal: boolean = useSelector(flagSelector);
  return (
    <S.wrapper>
      <Search setLoading={setLoading} />
      {flagForOpenModal && <Modal />}
      {loading ? (
        <LoaderSpinner />
      ) : (
        <>
          <UserList />
          <Pagination />
          <Filter />
        </>
      )}
    </S.wrapper>
  );
};

export default Users;
