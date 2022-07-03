import React from "react";
import PropTypes from "prop-types";
import { HeartOutlined } from "@ant-design/icons";
function CafeArt(props) {
  return (
    <div class="container">
      <HeartOutlined />
      <div class="bread">
        <div class="bottom"></div>
        <div class="leg"></div>
      </div>
      <div class="jam">
        <div class="lid"></div>
        <div class="label">
          <div class="strawberry"></div>
          <div class="hand"></div>
        </div>
      </div>
      {props.pass >= 2 ? (
        <h3 style={{ background: "aqua", borderRadius: "45%",fontFamily:'monaco',paddingTop:'5px' }}>
          hong muốn nghe nữa thì ấn vô <br/> cái nút xanh xanh kia kìa
        </h3>
      ) : (
        <h3 style={{ background: "aqua", borderRadius: "45%",fontFamily:'monaco',marginLeft:'-20px',paddingTop:'10px',paddingBottom:'5px' }}>
          Nhấn vô cái sanwich cute này <br />
          nếu bà muốn nghe {props.name} nói nhé !<br />
        </h3>
      )}
    </div>
  );
}

CafeArt.propTypes = {};

export default CafeArt;
