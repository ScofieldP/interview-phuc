import styled from "styled-components";
import Search from "../components/search/Search";
import { mobile } from "./responsive";
import { Form, DatePicker } from "antd";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: #ffffff;
  border-radius: 4px;
  ${mobile({
    flexDirection: "column",
    // marginTop: "40px",
  })}
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  ${mobile({
    display: "inline-block",

    width: "100%",
    marginBottom: "14px",
  })};
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
  width: 275px;
  height: 44px;
  border: 1px solid #dbdfe1;
  border-radius: 4px;
  cursor: pointer;

  ${mobile({
    width: "100%",
  })}
`;

// export const Input1 = styled.input`
//   color: var(--orange-fs);
//   font-weight: bold;
//   font-size: 16px;
//   line-height: 24px;
//   width: 275px;
//   height: 44px;
//   border: 1px solid #dbdfe1;
//   border-radius: 4px;
//   cursor: pointer;
//   margin-left: 30px;
//   ${mobile({
//     width: "100%",
//     marginTop: "20px",
//     marginLeft: 0,
//   })};
// `;

export const StyleForm = styled(Form)`
  ${mobile({
    width: "275px",
    marginTop: "20px",
    marginLeft: 0,
  })};
`;

export const StyledDate = styled(DatePicker.RangePicker)`
  color: var(--orange-fs);
  width: "100%";
  
}
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
    width: "100%",
    marginLeft: "0",
    marginTop: "20px",
  })}
`;

export const FlexIcon = styled.div`
  display: inline-flex;
  align-items: center;
  ${mobile({
    left: "130px",
    top: "160px",
  })}
`;
