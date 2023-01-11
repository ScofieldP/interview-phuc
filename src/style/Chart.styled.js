import styled from "styled-components";
import Charts from "../components/chart/Charts";
import { mobile } from "./responsive";
import "./style.css";

export const Container = styled.div`
  position: relative;
  width: 1440px;
  height: 804px;
  background: #ffffff;
  ${mobile({
    /* Mobile ver */

    position: "relative",
    height: "823px",
    background: "white",
  })}
`;

export const Title = styled.p`
  position: absolute;
  width: 280px;
  height: 30px;
  left: 589px;
  top: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: var(--orange-fs);

  ${mobile({
    position: "absolute",
    width: "202px",
    height: "28px",
    left: "90px",
    top: "63px",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "28px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    textTransform: "uppercase",

    /* Orange */

    color: "var(--orange-fs)",
  })}
`;
export const SubTitle = styled.p`
  position: absolute;
  width: 819px;
  height: 48px;
  left: 311px;
  top: 100px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #0a3b32;

  ${mobile({
    position: "absolute",
    width: "335px",
    height: "74px",
    left: "20px",
    top: "106px",

    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    /* or 150% */

    display: "flex",
    alignItems: "center",
    textAlign: "center",

    color: "#0A3B32",
  })}
`;

export const ChartContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 1080px;
  height: 530px;
  left: 200px;
  top: 203px;
  background: #dbdfe1;
  border: 1px solid #dbdfe1;
  border-radius: 4px;

  ${mobile({
    background: "none",
  })}
`;

export const ChartSection = styled(Charts)`
  box-sizing: border-box;
  position: absolute;
  width: 1000px;
  height: 367px;
  left: 240px;
  top: 331px;
  background: #ffffff;
  border-radius: 4px;
`;

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
