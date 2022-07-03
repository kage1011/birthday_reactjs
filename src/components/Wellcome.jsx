import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { FacebookOutlined } from '@ant-design/icons';

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
          <h1 style={{color:'white'}}>Happy Birthday!</h1>
          <p>Cái đống lộn xộn này</p>
          <div class="credit">
            Được làm <span style={{ color: "tomato" }}>❤</span> bởi Hội chị em
            bạn dì
            <br />
            <a href="https://www.learningrobo.com/" target={"blank"}><FacebookOutlined /> Hay càm ràm </a>
            <br />
            <a href="https://www.learningrobo.com/" target={"blank"}><FacebookOutlined /> Thích ăn chửi </a>
          </div>
          Nếu muốn biết bọn tui nói xấu gì về bà thì
          <br/>
          <Button className="btn-wellcome" type="primary" size={"large"}>
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
