import styled from "styled-components";
import Select from "react-select";

export const SearchFormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 25px;
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: end;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  color: #8a8a89;

  line-height: calc(18 / 14);
`;

export const Input = styled.input`
  max-width: 160px;
  padding: 9px 24px;
  margin-top: 8px;

  &::placeholder {
    color: #121417;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 136px;
  height: 40px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(20 / 14);
  transition: background 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
`;

export const Img = styled.svg`
  fill: currentColor;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;
////////////////////////////////

export const SelectedStyled = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#121417",
  }),
};

export const SelectStyles = styled(Select)`
  margin-top: 10px;
`;
