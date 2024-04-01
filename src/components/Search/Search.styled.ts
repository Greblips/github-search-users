import styled from "styled-components";

export const SearchContainer = styled.div`
  text-align: center;
  max-width: 100%;
  background-color: #f0f0;
`;
export const GeneralBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBlock = styled.div`
  width: 700px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background-color: #f0f0f0;
  border-radius: 15px;
`;

export const SearchInput = styled.input`
  border-radius: 15px;
  margin-right: 15px;
  padding: 8px;
  flex: 1;
  border: none;
  outline: none;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  border: none;
`;

export const Header = styled.p`
  font-size: 1.5rem;
`;

export const ForErrors = styled.div`
  color: red;
  font-weight: 400;
  font-size: 28px;
  line-height: 25px;
  text-align: center;
`;
