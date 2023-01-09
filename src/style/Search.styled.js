import styled from "styled-components";
import Search from "../components/search/Search";
import "./style.css";

export const SearchSection = styled(Search)`
  /* Rectangle 351 */

  position: absolute;
  width: 1000px;
  height: 68px;
  left: 240px;
  top: 243px;

  background: #ffffff;
  border-radius: 4px;
`;
export const FlexButton = styled.div`
  display: flex;
  flex-wrap: nowrap;

  margin-left: 24px;
`;

export const Select = styled.select`
  box-sizing: border-box;
  position: absolute;
  width: 236px;
  height: 44px;
  top: 12px;
  left: 24px;
`;

export const Input = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 275px;
  height: 44px;
  left: 276px;
  top: 12px;
`;

export const Button = styled.button`
  position: absolute;
  width: 139px;
  height: 44px;
  left: 803px;
  top: 12px;
`;
