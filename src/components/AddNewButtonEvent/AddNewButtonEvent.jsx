import {
  ButtonStyled,
  PlusIconStyled,
  BtnTitle,
} from "./AddNewButtonEvent.styled";

export const AddNewButtonEvent = ({ location }) => {
  return (
    <ButtonStyled to="/add" state={{ from: location }}>
      <PlusIconStyled />
      <BtnTitle>Add new event</BtnTitle>
    </ButtonStyled>
  );
};
