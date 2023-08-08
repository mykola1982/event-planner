import { DeleteButton, DeleteIconStyled } from "./CustomInput.styled";

export const CustomInput = ({ name, title, inputValue, setInputValue, id }) => {
  console.log(setInputValue);
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input
        type="text"
        placeholder="Search by keywords"
        name={name}
        onChange={(event) => setInputValue(event.currentTarget.value)}
        value={inputValue}
      />
      {inputValue && (
        <DeleteButton type="button" onClick={() => setInputValue("")}>
          <DeleteIconStyled />
        </DeleteButton>
      )}
    </div>
  );
};
