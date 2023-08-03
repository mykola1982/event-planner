import {
  InputSearchWrapper,
  InputSearch,
  DeleteButton,
  DeleteIconStyled,
} from "./SearchInput.styled";

export const SearchInput = () => {
  return (
    <InputSearchWrapper>
      <InputSearch type="text" placeholder="Search by keywords" name="search" />
      <DeleteButton type="button">
        <DeleteIconStyled />
      </DeleteButton>
    </InputSearchWrapper>
  );
};
