import PuffLoader from "react-spinners/PuffLoader";
import { LoaderWrap, Backdrop } from "./Loader.styled";

export const Loader = () => {
  return (
    <Backdrop>
      <LoaderWrap>
        <PuffLoader color="#7B61FF" size={85} />
      </LoaderWrap>
    </Backdrop>
  );
};
