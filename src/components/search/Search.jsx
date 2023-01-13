import React from "react";
import { data } from "../../config/source";
import {
  Select,
  StyleForm,
  Button,
  FlexIcon,
  SearchContainer,
  SelectContainer,
  StyledDate,
} from "../../style/Search.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { ConfigProvider } from "antd";
import { Form, DatePicker } from "antd";

export default function Search() {
  return (
    <SearchContainer>
      <SelectContainer>
        <Select>
          <option value="">Tất cả các quỹ</option>
          {data.datasets?.map((data, index) => (
            <option key={index} value={data.label}>
              {data.label}
            </option>
          ))}
        </Select>
        {/* <Input1 type="date" /> */}
        <StyleForm
          style={{ display: "flex", marginBottom: "0", marginLeft: "30px" }}
        >
          <ConfigProvider
            theme={{
              components: {
                DatePicker: {
                  width: "365px",
                },
              },
            }}
          >
            <DatePicker.RangePicker
              format="DD/MM/YYYY"
              separator={"-"}
              size="large"
              style={{
                color: "orange",
                padding: "10px",

                // width: "275px",
                // height: "44px",
                marginBottom: "0px",
              }}
            />
          </ConfigProvider>
        </StyleForm>
        <Button>Tra cứu</Button>
      </SelectContainer>

      <FlexIcon>
        <FontAwesomeIcon
          icon={faChartColumn}
          style={{ color: "orange" }}
          size="2x"
        />
        <FontAwesomeIcon
          icon={faCalculator}
          style={{ marginLeft: "25px" }}
          size="2x"
        />
      </FlexIcon>
    </SearchContainer>
  );
}
