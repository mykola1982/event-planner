import { useState, useEffect, useCallback } from "react";
import { useMedia } from "react-use";
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

  const isMobileDevice = useMedia("(max-width: 768px)");

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

  const handleClick = (category) => {
    if (selected === category) {
      setSelected("");
    } else setSelected(category);

    setIsActive(false);
  };

  return (
    <DropdownStyled id={"category"} type="button">
      <DropdownBtn
        type="button"
        onClick={() => {
          setIsActive(!isActive);
          console.log(isActive);
        }}
      >
        {selected ? (
          <>
            <DropdownBtnTitle style={{ color: "#7B61FF" }}>
              {selected}
            </DropdownBtnTitle>
            <FilterCategoryIcon style={{ stroke: "#7B61FF" }} />
          </>
        ) : (
          <>
            <DropdownBtnTitle> Category</DropdownBtnTitle>
            <FilterCategoryIcon />
          </>
        )}
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          <DropdownContentHeader
            onClick={() => setIsActive(!isActive)}
            style={isMobileDevice ? { justifyContent: "flex-start" } : {}}
          >
            {isMobileDevice && <FilterCategoryIcon />}
            {selected ? selected : "Category"}
            {!isMobileDevice && <FilterCategoryIcon />}
          </DropdownContentHeader>

          <DropdownList>
            {categories.map((category) => (
              <DropdownItem
                key={nanoid()}
                onClick={() => handleClick(category)}
                style={
                  selected === category
                    ? { color: "#7B61FF", borderColor: "#7B61FF" }
                    : {}
                }
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
