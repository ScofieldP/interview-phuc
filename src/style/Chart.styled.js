import styled from "styled-components";
import Charts from "../components/chart/Charts";
import { mobile } from "./responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 77px 0 71px 0;

  ${mobile({
    /* Mobile ver */

    padding: "63px 20px",
  })}
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 400;
  color: #e87722;
  font-size: 26px;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: var(--orange-fs);

  ${mobile({
    fontSize: "20px",
    marginBottom: "15px",

    /* Orange */

    color: "var(--orange-fs)",
  })}
`;
export const SubTitle = styled.p`
  width: 819px;
  height: 48px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #0a3b32;

  ${mobile({
    width: "335px",
    height: "74px",
    fontSize: "16px",
    lineHeight: "24px",
    // overflow: "hidden",
    textOverflow: "ellipsis",
  })}
`;

export const LineContainer = styled.div`
  position: relative;
  margin: auto;
  height: 60vh;
  width: 80vw;

  ${mobile({
    width: "80vw",
    height: "250px",
  })}
`;

export const ChartAll = styled.div`
  min-width: 400px;
  min-height: 530px;
  background-color: #dbdfe1;
  border-radius: 4px;
  padding: 40px 40px 35px 40px;
  ${mobile({
    minWidth: "400px",
    backgroundColor: "#fff",
    padding: "0",
  })}
`;
export const ChartContainer = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
  padding: 18px 20px 20px 31px;
  ${mobile({
    padding: 0,
  })}
`;

// export const ChartSection = styled(Charts)`
//   box-sizing: border-box;
//   position: absolute;
//   width: 1000px;
//   height: 367px;
//   left: 249px;
//   top: 331px;
//   background: #ffffff;
//   border-radius: 4px;

//   ${mobile({
//     position: "relative",
//     top: "420px",
//     height: "2  00vh",
//     width: "100vw",
//     left: "0",
//   })}
// `;

export const ChartButton = styled.a`
  margin: 16px 0;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  transition: background 0.25s, border-color 0.25s;
  background: rgba(40, 44, 52, 0.05);
  border: 1px solid transparent;
  border-radius: 6px;
  color: #3080d0;
  text-decoration: none !important;
  display: inline-block;
  font-size: 0.8rem;
  padding: 8px 16px;
  margin: 0 8px 8px 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  font-family: Roboto, sans-serif;

  &:hover {
    background: rgba(48, 128, 208, 0.15);
    border-color: rgba(48, 128, 208, 0.2);
    color: #3080d0;
  }

  &:active {
    background: rgba(48, 128, 208, 0.3);
    border-color: rgba(48, 128, 208, 0.4);
    color: #3080d0;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
  text-align: center;
`;
