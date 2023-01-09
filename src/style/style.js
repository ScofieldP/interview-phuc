import styled from "styled-components";
import Charts from "../components/chart/Charts";
import "./style.css";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 804px;

  background: #ffffff;
`;

export const Title = styled.p`
  position: absolute;
  width: 280px;
  height: 30px;
  left: 589px;
  top: 77px;

  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: var(--orange-fs);
`;
export const SubTitle = styled.p`
  position: absolute;
  width: 819px;
  height: 48px;
  left: 311px;
  top: 125px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  text-align: center;

  /* Dark Green */

  color: #0a3b32;
`;

export const ChartContainer = styled.div`
  /* Rectangle 87 */

  box-sizing: border-box;

  position: absolute;
  width: 1080px;
  height: 530px;
  left: 180px;
  top: 203px;

  /* Grey */

  background: #dbdfe1;
  /* Grey */

  border: 1px solid #dbdfe1;
  border-radius: 4px;
`;

export const ChartDetail = styled(Charts)`
  box-sizing: border-box;

  position: absolute;
  width: 1000px;
  height: 367px;
  left: 220px;
  top: 331px;

  background-color: #ffffff;
  border-radius: 4px;
`;

export const ChartButton = styled.button`
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
  display: inline-block;import Charts from './../components/chart/Charts';

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
