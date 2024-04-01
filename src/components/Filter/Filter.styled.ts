import styled from "styled-components";

export const Sort = styled.div`
  display: flex;
  gap: 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const header = styled.h3`
  text-align: center;
`;

export const ButtonFilter = styled.button`
  min-width: fit-content;
  padding: 8px 16px;
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
