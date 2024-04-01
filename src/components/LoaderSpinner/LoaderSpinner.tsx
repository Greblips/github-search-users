import { RotatingLines } from "react-loader-spinner";
import * as S from "./LoaderSpinner.styled";

export const LoaderSpinner = () => (
  <S.wrapper>
    <RotatingLines
      visible={true}
      width="196"
      strokeWidth="4"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    />
  </S.wrapper>
);
