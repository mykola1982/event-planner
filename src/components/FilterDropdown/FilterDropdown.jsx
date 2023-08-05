import { useState, useEffect, useCallback } from "react";
import { nanoid } from "nanoid";
import {
  DropdownStyled,
  DropdownBtn,
  DropdownBtnTitle,
  DropdownContent,
  DropdownContentHeader,
  DropdownList,
  DropdownItem,
} from "./FilterDropdown.styled";

// ---------
import { ReactComponent as SortIcon } from "images/icons/filters-2.svg";

import { filters } from "data/filters";
// ---------

export const FilterDropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  const handleDocumentClick = useCallback((event) => {
    if (!event.target.closest(`#sort`)) {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return (
    <DropdownStyled id={"sort"}>
      <DropdownBtn
        onClick={() => {
          setIsActive(!isActive);
          console.log(isActive);
        }}
      >
        <DropdownBtnTitle>Sort by</DropdownBtnTitle>
        <SortIcon />
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          <DropdownContentHeader onClick={() => setIsActive(!isActive)}>
            Sort by
            <SortIcon />
          </DropdownContentHeader>

          <DropdownList>
            {filters.map((filter) => (
              <DropdownItem
                key={nanoid()}
                onClick={(e) => {
                  setSelected(filter);
                  setIsActive(false);
                }}
              >
                {filter}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownContent>
      )}
    </DropdownStyled>
  );
};
