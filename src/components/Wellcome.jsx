import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { FacebookOutlined } from "@ant-design/icons";

function Wellcome(props) {
  return (
    <div>
      {" "}
      <div class="card">
        <img
          src="https://cdn.pixabay.com/photo/2020/10/06/21/54/cake-5633461__480.png"
          alt="birthday"
          class="birthday"
        />
        <div class="text">
          <h1 style={{ color: "white" }}>Happy Birthday!</h1>
          <p>Đống lộn xộn này được làm bởi<span style={{ color: "tomato" }}> ❤</span> </p>
          <div class="credit">
            <a
              href="https://www.facebook.com/kimthanh.tranthi.501"
              target={"blank"}
            >
              <FacebookOutlined /> Hay càm ràm{" "}
            </a>
            <br />
            <a href="https://www.facebook.com/khai.seto.58/" target={"blank"}>
              <FacebookOutlined /> Thích ăn chửi{" "}
            </a>
          </div>
          Nếu muốn biết bọn tui nói xấu gì về bà thì
          <br />
          <Button className="btn-in" type="primary" size={"large"}>
            <Link to="/detail">{" ấn vô đây!"}</Link>
          </Button>
        </div>
        <div class="space"></div>
      </div>
    </div>
  );
}

Wellcome.propTypes = {};

export default Wellcome;
