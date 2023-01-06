import React from "react";
import Charts from "../../components/chart/Charts";
import "./home.scss";
export default function Home() {
  return (
    <div className="home">
      <div className="title">
        <h2>TRA CỨU GIÁ ĐƠN VỊ</h2>
        <p>
          Nhằm cung cấp cho bạn đầy đủ thông tin về giá trị quỹ trong cả hiện
          tại và quá khứ, bạn có thể tùy chọn thời điểm tra cứu theo khung thời
          gian bạn muốn
        </p>
      </div>
      <Charts />
    </div>
  );
}
