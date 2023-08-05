import { useState, useEffect, useCallback } from "react";
import {
  DropdownStyled,
  DropdownBtn,
  DropdownContent,
  DropdownItem,
} from "./LangSwitcher.styled";

import { ReactComponent as DownIcon } from "images/icons/chevron-down-small.svg";

import { languages } from "../../data/languages";

export const LangSwitcher = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  const handleDocumentClick = useCallback((event) => {
    if (!event.target.closest("#langSwitche")) {
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
    <DropdownStyled id="langSwitche">
      <DropdownBtn type="button" onClick={() => setIsActive(!isActive)}>
        {selected}
        <DownIcon />
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          {languages.map((language) => (
            <DropdownItem
              key={language}
              onClick={(e) => {
                setSelected(language);
                setIsActive(false);
              }}
            >
              {language}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownStyled>
  );
};
