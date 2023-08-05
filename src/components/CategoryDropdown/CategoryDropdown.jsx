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
} from "./CategoryDropdown.styled";

import { ReactComponent as FilterCategoryIcon } from "images/icons/filters-3.svg";
import { categories } from "data/categories";

export const CategoryDropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  const handleDocumentClick = useCallback((event) => {
    if (!event.target.closest(`#category`)) {
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
    <DropdownStyled id={"category"}>
      <DropdownBtn
        onClick={() => {
          setIsActive(!isActive);
          console.log(isActive);
        }}
      >
        <DropdownBtnTitle>Category</DropdownBtnTitle>
        <FilterCategoryIcon />
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          <DropdownContentHeader onClick={() => setIsActive(!isActive)}>
            <FilterCategoryIcon />
            Category
          </DropdownContentHeader>

          <DropdownList>
            {categories.map((category) => (
              <DropdownItem
                key={nanoid()}
                onClick={(e) => {
                  setSelected(category);
                  setIsActive(false);
                }}
              >
                {category}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownContent>
      )}
    </DropdownStyled>
  );
};
