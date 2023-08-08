import { useState } from "react";

import {
  InputSearchWrapper,
  InputSearch,
  DeleteButton,
  DeleteIconStyled,
} from "./SearchInput.styled";

export const SearchInput = () => {
  const [search, setSearch] = useState("");

  return (
    <InputSearchWrapper>
      <InputSearch
        type="text"
        placeholder="Search by keywords"
        name="search"
        onChange={(event) => setSearch(event.currentTarget.value)}
        value={search}
      />
      {search && (
        <DeleteButton type="button" onClick={() => setSearch("")}>
          <DeleteIconStyled />
        </DeleteButton>
      )}
    </InputSearchWrapper>
  );
};
