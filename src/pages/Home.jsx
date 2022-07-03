import React, { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import Wellcome from "../components/Wellcome";
import { Button } from "antd";

const Home = () => {
  const [visible, setVisible] = useState(false);

  const ShowBox = () => {
    if (visible === false) setVisible(true);
    else setVisible(false);
  };
  return (
    <div className="home-wrapper">
      <Helmet title="Trang chủ">
        <div>
          {visible ? (
           ""
          ) : (
            <Button
              className="btn-wellcome"
              type="primary"
              size={"large"}
              onClick={ShowBox}
            >
              Nhấn zô đây bà !
            </Button>
          )}

          {visible ? <Wellcome /> : ""}
        </div>
      </Helmet>
    </div>
  );
};

export default Home;
