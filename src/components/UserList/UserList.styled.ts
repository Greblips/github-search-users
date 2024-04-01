import { styled } from "styled-components";

export const wrapper = styled.div`
  margin-top: 20px;
`;

export const UserListBlock = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
export const UserInfo = styled.div`
  width: 330px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 10%;
  border: none;
  align-items: center;
  background-color: seashell;
  z-index: 0;
  justify-content: space-between;
`;

export const UserDivForImg = styled.div`
  padding-top: 10px;
  display: flex;
  height: 50%;
`;

export const UserAva = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const UserLogin = styled.p`
  display: flex;
  flex-wrap: wrap;
`;
export const TextUrl = styled.p`
  text-align: center;
`;

export const GoToUser = styled.button`
  padding: 8px;
  margin-bottom: 25px;
  border: none;
  border-radius: 10px;
  background-color: black;
  color: #fff;
  outline: none;
  transition: background-color 0.4s ease;
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;

export const UserText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 42px;
  color: black;
  margin-top: 30px;
  text-align: center;
`;
