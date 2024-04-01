import styled from "styled-components";
import { Link } from "react-router-dom";

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 400px;
  height: 500px;
  background-color: #d3d3d3;
  border-radius: 10%;
  border: 1px solid;
  margin-top: 20px;
  margin-bottom: 23px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const Parent = styled.div``;

export const UserBlock = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-top: 30px;
`;
export const UserInfo = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 10%;
  border-color: black;
  align-items: center;
  background-color: seashell;
`;

export const UserDivForImg = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid;
  border-radius: 10%;
  margin-top: 30px;
`;

export const UserAva = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
`;

export const GoToUser = styled.button`
  width: 70%;
  height: auto;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: black;
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: white;
  margin: 10px;
  text-align: center;
  transition: background-color 0.4s ease;
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;
export const UserLogin = styled.p`
  height: 30px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: black;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const RepoCount = styled.div`
  word-break: break-all;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const TextUrl = styled.a`
  word-break: break-all;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;
export const Bio = styled.p`
  word-break: break-all;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Subscribers = styled.p`
  word-break: break-all;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
`;
