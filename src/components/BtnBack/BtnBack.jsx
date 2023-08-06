import { Button, ButtonTitle, IconButton } from "./BtnBack.styled";

export const BtnBack = ({ to }) => {
  return (
    <Button to={to}>
      <IconButton />
      <ButtonTitle>Back</ButtonTitle>
    </Button>
  );
};
