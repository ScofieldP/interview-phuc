import React from "react";
import { data } from "../../config/source";
import { Select, Input, Button, FlexButton } from "../../style/Search.styled";
export default function Search({ className }) {
  return (
    <div className={className}>
      <div>
        <Select id="cars">
          <option value="">Tất cả các quỹ</option>
          {data.datasets?.map((data, index) => (
            <option key={index} value={data.label}>
              {data.label}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Input type="date" />
      </div>
      <div>
        <Button>Tra cứu</Button>
      </div>
    </div>
  );
}
