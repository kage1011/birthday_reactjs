import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Radio, Input, Space, notification, Form, Image} from "antd";
import { useHistory } from "react-router-dom";
import db from "../firebase/config";

// import { FastField, Form, Formik } from "formik";

function Pick(props) {
  const [value, setValue] = useState();
  const [text, setValueText] = useState("");
  const history = useHistory();

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => notification.close(key)}
      >
        Confirm
      </Button>
    );
    notification.open({
      message: "Chưa chọn quà kìa",
      description: "Chọn đi bà chị",
      btn,
      key,
    });
  };

  const openNotification1 = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => notification.close(key)}
      >
        Confirm
      </Button>
    );
    notification.open({
      message: "Bà nghĩ dễ ăn thế này á",
      description: "Tui đâu có anh đẹp trai nào để phát cho bà",
      btn,
      key,
    });
  };

  const openNotification2 = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => notification.close(key)}
      >
        Confirm
      </Button>
    );
    notification.open({
      message: "Nghe này",
      description: "Có làm thì mới có ăn",
      btn,
      key,
    });
  };

  const openNotificationFail = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => notification.close(key)}
      >
        Confirm
      </Button>
    );
    notification.open({
      message: "Nhập cái gì bà thích vô đi",
      description: "Biết đâu mai quà ship đến :3",
      btn,
      key,
    });
  };

  const openNotificationDone = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={history.push("/end")}
      ></Button>
    );
    notification.open({
      message: "Chọn xong rồi",
      description: "Chờ ngày quà đến đi",
      btn,
      key,
    });
  };
  const timeElapsed = Date.now();
  const Push = async (value) => {
    db.collection("gift1").add({
      option: value,
      date: new Date(timeElapsed),
    });
  };
  const onFinish = (values) => {
    if (value) {
      if (value === 1) {
        openNotification1();
      } else if (value === 2) {
        openNotification2();
      } else if (value !== 4) {
        Push(value);
        openNotificationDone();
      } else {
        if (text === "") {
          openNotificationFail();
        } else {
          Push(text);
          openNotificationDone();
        }
      }
    } else {
      openNotification();
    }
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onChangeText = (e) => {
    console.log("radio checked", e.target.value);
    setValueText(e.target.value);
  };
  return (
    <div className="ouder">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h3>
          Đăng ký nhận quà nào
          <span>thử xem bà muốn cái gì nào :3</span>
        </h3>

        <Form.Item name="radio-group">
          <Radio.Group onChange={onChange} value={value}>
            <Space
              direction="vertical"
              style={{ textAlign: "left", marginLeft: " 10px" }}
            >
              <Radio value={1}>Một anh người yêu đẹp trai !</Radio>
              <Radio value={2}>Money Money như là Bill Gate</Radio>
              <Radio value={3}>
                Đầu tư cho tương lai bằng cách cho tui với Thanh Thanh tiền :v
              </Radio>
              <Radio value={4}>
                More...
                {value === 4 ? (
                  <Form.Item>
                    <Input
                      placeholder={"something"}
                      // style={{ width: 200, marginLeft: 10 }}
                      onChange={onChangeText}
                    />{" "}
                  </Form.Item>
                ) : null}
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item className="btn-cover">
          <Button className="button" type="primary" htmlType="submit">
            Nộp đơn xác nhận quà sinh nhật
          </Button>
        </Form.Item>
      </Form>
      {/* <Formik enableReinitialize={true}>
        {(formikProps) => {
          return (
            <Form>
              <Row gutter={[0, 8]}>
                <Col span={24}>
                  <FastField
                    name="username"
                    component={InputField}
                    type="text"
                    title="Tài khoản"
                    placeholder="Nhập tài khoản"
                    maxLength={50}
                    titleCol={24}
                    inputCol={24}
                  />
                </Col>

                <Col span={24}>
                  <FastField
                    name="password"
                    component={InputField}
                    type="password"
                    title="Mật khẩu"
                    placeholder="Nhập mật khẩu"
                    maxLength={200}
                    titleCol={24}
                    inputCol={24}
                  />
                </Col>

                <Col span={24}>
                  <br />
                  <Button type="primary" htmlType="submit" block>
                    Đăng nhập
                  </Button>
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik> */}
      {/* <input type="text"  name="hoten" required /> */}
    </div>
  );
}

Pick.propTypes = {};

export default Pick;
