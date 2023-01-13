import React from "react";
import { data } from "../../config/source";
import {
  Select,
  Input,
  Button,
  FlexIcon,
  SearchContainer,
  SelectContainer,
} from "../../style/Search.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

export default function Search({ className }) {
  return (
    <SearchContainer>
      <SelectContainer>
        <Select id="cars">
          <option value="">Tất cả các quỹ</option>
          {data.datasets?.map((data, index) => (
            <option key={index} value={data.label}>
              {data.label}
            </option>
          ))}
        </Select>
        <Input type="date" />
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
