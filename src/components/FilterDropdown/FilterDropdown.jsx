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
} from "./FilterDropdown.styled";

import { ReactComponent as SortIcon } from "images/icons/filters-2.svg";

import { ReactComponent as ArrowDown } from "images/icons/arrow-down-small.svg";
import { ReactComponent as ArrowUp } from "images/icons/arrow-up-small.svg";

import { filters } from "data/filters";

export const FilterDropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  const isMobileDevice = useMedia("(max-width: 764px)");

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

  let newDropdownBtnTitle;

  if (selected.endsWith("up") && selected.includes("name")) {
    newDropdownBtnTitle = "Sort by A-Z";
  } else if (selected.endsWith("down") && selected.includes("name")) {
    newDropdownBtnTitle = "Sort by Z-A";
  } else if (selected.endsWith("up")) {
    newDropdownBtnTitle = "Sort " + selected.slice(0, selected.length - 3);
  } else if (selected.endsWith("down")) {
    newDropdownBtnTitle = "Sort " + selected.slice(0, selected.length - 5);
  }

  const handleClick = (filter) => {
    if (selected === filter) {
      setSelected("");
    } else setSelected(filter);

    setIsActive(false);
  };

  return (
    <DropdownStyled id={"sort"}>
      <DropdownBtn
        type="button"
        onClick={() => {
          setIsActive(!isActive);
          console.log(isActive);
        }}
      >
        {selected && !isMobileDevice ? (
          <>
            <DropdownBtnTitle style={{ color: "#3F3F3F" }}>
              {newDropdownBtnTitle}
            </DropdownBtnTitle>
            {selected.endsWith("up") ? (
              <ArrowUp style={{ stroke: "#3F3F3F" }} />
            ) : (
              <ArrowDown style={{ stroke: "#3F3F3F" }} />
            )}
          </>
        ) : (
          <>
            <DropdownBtnTitle> Sort by</DropdownBtnTitle>
            <SortIcon />
          </>
        )}
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          <DropdownContentHeader onClick={() => setIsActive(!isActive)}>
            Sort by
            <SortIcon />
          </DropdownContentHeader>

          <DropdownList>
            {filters.map((filter) => {
              let filterNew;
              if (filter.endsWith("up")) {
                filterNew = filter.slice(0, filter.length - 3);
              } else if (filter.endsWith("down")) {
                filterNew = filter.slice(0, filter.length - 5);
              }
              return (
                <DropdownItem
                  key={nanoid()}
                  onClick={() => handleClick(filter)}
                  style={
                    selected === filter
                      ? { color: "#7B61FF", borderColor: "#7B61FF" }
                      : {}
                  }
                >
                  {filterNew}

                  {filter.endsWith("up") ? (
                    <ArrowUp
                      style={selected === filter ? { stroke: "#7B61FF" } : {}}
                    />
                  ) : (
                    <ArrowDown
                      style={selected === filter ? { stroke: "#7B61FF" } : {}}
                    />
                  )}
                </DropdownItem>
              );
            })}
          </DropdownList>
        </DropdownContent>
      )}
    </DropdownStyled>
  );
};
