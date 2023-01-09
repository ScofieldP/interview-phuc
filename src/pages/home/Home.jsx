import React from "react";
import {
  Container,
  Title,
  SubTitle,
  ChartContainer,
  ChartSection,
} from "../../style/Chart.styled";
import { SearchSection } from "../../style/Search.styled";
export default function Home() {
  return (
    <Container>
      <Title>TRA CỨU GIÁ ĐƠN VỊ</Title>
      <SubTitle>
        Nhằm cung cấp cho bạn đầy đủ thông tin về giá trị quỹ trong cả hiện tại
        và quá khứ, bạn có thể tùy chọn thời điểm tra cứu theo khung thời gian
        bạn muốn
      </SubTitle>
      <ChartContainer />
      <SearchSection />
      <ChartSection />
    </Container>
  );
}
