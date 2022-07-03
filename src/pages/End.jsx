/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
function End(props) {
  return (
    <div className="end-wrapper">
      <br />
      <br />
      <br />
      <div class="card-end">
        <div class="back"></div>
        <div class="front">
          <div class="imgset">
            <img
              width="100%"
              src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
            />
          </div>
        </div>
        <div class="text-container">
          <p id="head">Happy Birthday!</p>
          <h5><a href="https://www.facebook.com/profile.php?id=100008885376582" target={"blank"}>Thuý Nga</a></h5>
          <p>
            I hope your special day will bring you lots of happiness, love, and
            fun. You deserve them a lot. Enjoy!
          </p>
        
          <p>Hope your day goes great!</p>  
          <p style={{color:'blue',fontWeight:'bold'}}>
            <Link to="/">
              <ArrowRightOutlined />
              Hết rồi đấy
              <ArrowLeftOutlined />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

End.propTypes = {};

export default End;
