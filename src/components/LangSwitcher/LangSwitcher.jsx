import { SelectWrapper, Select } from "./LangSwitcher.styled";

export const LangSwitcher = () => {
  return (
    <SelectWrapper>
      <Select name="switcher" defaultValue="UK">
        <option value="UK">UK</option>
        <option value="UA">UA</option>
      </Select>
    </SelectWrapper>
  );
};
