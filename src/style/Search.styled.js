import styled from "styled-components";
import Search from "../components/search/Search";
import { mobile } from "./responsive";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: #ffffff;
  border-radius: 4px;
  ${mobile({
    flexDirection: "column",
  })}
`;

export const SelectContainer = styled.div`
  display: inline-block;
  position: relative;

  ${mobile({
    width: "100%",
    marginBottom: "14px",
  })}
`;
// export const SearchSection = styled(Search)`
//   /* Rectangle 351 */

//   position: absolute;
//   width: 1000px;
//   height: 68px;
//   left: 249px;
//   top: 243px;

//   background: #ffffff;
//   border-radius: 4px;

//   ${mobile({
//     width: 0,
//     left: "20px",
//     top: "220px",
//   })}
// `;

export const Select = styled.select`
  color: var(--orange-fs);
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 110px 10px 20px;
  border: 1px solid #dbdfe1;
  border-radius: 4px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;

  ${mobile({
    width: "100%",
  })}
`;

export const Input = styled.input`
  color: var(--orange-fs);
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 110px 10px 20px;
  border: 1px solid #dbdfe1;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 30px;
  ${mobile({
    boxSizing: "border-box",

    position: "absolute",
    width: "335px",
    height: "44px",
    left: "1px",
    top: "50px",

    background: "#FFFFFF",
    border: "1px solid #DBDFE1",
    borderRadius: "4px",
  })};
`;

export const Button = styled.button`
  color: #ffffff;
  line-height: 24px;
  font-size: 14px;
  font-weight: 700;
  background-color: #e87722;
  padding: 10px 35px;
  border: none;
  border-radius: 4px;
  margin-left: 30px;
  cursor: pointer;
  text-transform: uppercase;

  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "14px 131px",
    gap: "10px",

    position: "absolute",
    width: "335px",
    height: "44px",
    left: "1px",
    top: "100px",

    /* Orange */

    background: "#E87722",
    borderRadius: "4px",
  })}
`;

export const FlexIcon = styled.div`
  display: inline-flex;
  align-items: center;
  ${mobile({
    width: "200px",
    left: "130px",
    top: "160px",
  })}
`;
