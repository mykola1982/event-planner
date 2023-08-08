import { useState } from "react";
import {
  DropdownStyled,
  DropdownBtn,
  DropdownContent,
  DropdownItem,
} from "./CustomSelect.styled";

import { ReactComponent as DownIcon } from "images/icons/chevron-down-small.svg";
import { ReactComponent as UpIcon } from "images/icons/chevron-up-small.svg";

export const CustomSelect = ({ title, data, selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <DropdownStyled id={title}>
      <DropdownBtn
        type="button"
        onClick={() => setIsActive(!isActive)}
        style={isActive ? { color: "#7B61FF" } : {}}
      >
        {isActive ? (
          <>
            {title} <UpIcon />
          </>
        ) : (
          <>
            {selected} <DownIcon />
          </>
        )}
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          {data.map((el) => (
            <DropdownItem
              key={el}
              onClick={(e) => {
                setSelected(el);
                setIsActive(false);
              }}
            >
              {el}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownStyled>
  );
};
