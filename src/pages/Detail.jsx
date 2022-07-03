import React, { useState } from "react";
import PropTypes from "prop-types";
import Confetti from "react-confetti";
import { Button } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import CardArt from "../components/CardArt";
import { Link } from "react-router-dom";
function Detail(props) {
  const [rollTop, SetRollTop] = useState(false);
  const [listen, SetListen] = useState("");

  const Roll = () => {
    if (rollTop) SetRollTop(false);
    else SetRollTop(true);
  };

  const Listen = (listener) => {
    SetListen(listen);
  };

  return (
    <div className="detail-wrapper">
      <Confetti
        drawShape={(ctx) => {
          ctx.beginPath();
          for (let i = 0; i < 22; i++) {
            const angle = 0.35 * i;
            const x = (0.2 + 1.5 * angle) * Math.cos(angle);
            const y = (0.2 + 1.5 * angle) * Math.sin(angle);
            ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.closePath();
        }}
      ></Confetti>
      <div class="main_header">
        {rollTop ? (
          <div className="circle" onClick={Roll}>
            <ArrowUpOutlined style={{ marginTop: "20px" }} />
          </div>
        ) : (
          <div></div>
        )}
        {rollTop ? (
          <div class="center_div">
            <p style={{ color: "white",fontFamily:'monaco' }}>
              Vậy giờ bà muốn nghe ai nói xấu bà trước!
              <br />
              <Button
                className="btn-in"
                style={{ background: "lightblue" }}
                onClick={() => Listen("thanhthanh")}
              >
                <Link
                  to={{
                    pathname: "/listen",
                    state: {
                      post_name: "thanhthanh",
                    },
                  }}
                >
                  🎂 Thanh Thanh🎂
                </Link>
              </Button>{" "}
              <Button
                className="btn-in"
                style={{ background: "lightblue" }}
                onClick={() => Listen("kaio")}
              >
                <Link
                  to={{
                    pathname: "/listen",
                    state: {
                      post_name: "kaio",
                    },
                  }}
                >
                  🎂 Ế và Simp🎂
                </Link>
              </Button>
            </p>
          </div>
        ) : (
          <div class="center_div">
            <div style={{ background: "white", borderRadius: "150px",marginLeft:'-200px' }}>
              
              <p style={{ fontSize: "15px",paddingTop:'15px' }}>
                {"   "}&nbsp;&nbsp; bà nhấn vô cái thiệp đê {"->"} &nbsp;&nbsp; {"   "}
              </p>
              
            </div>
            <CardArt />
          </div>
        )}

        {rollTop ? (
          <div></div>
        ) : (
          <div className="circle" onClick={Roll}>
            <ArrowDownOutlined style={{ marginTop: "20px", font: "24px" }} />
          </div>
        )}
      </div>
    </div>
  );
}

Detail.propTypes = {};

export default Detail;
