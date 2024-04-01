import type { FC, ButtonHTMLAttributes } from "react";
import * as S from "./Button.styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <S.ButtonFilter>{children}</S.ButtonFilter>;
};
