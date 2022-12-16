/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 16:58:08
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 18:42:28
 * @FilePath: /hooks/src/Component/testUseState/index.ts
 * @Description: 测试useState
 */
import { useState, useEffect, useRef } from "react";
import { Col, Row, Typography, Button, Card, Divider } from "antd";
import useCountDown from '../TestCountDown';
const { Paragraph } = Typography;
function TestUseEffect() {
  const [countdown] = useCountDown(60);
  return (
    <>
      <Card>
        <Paragraph>
         自定义组件
        </Paragraph>
      </Card>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          倒计时
        </Col>
        <Col className="gutter-row" span={8}>
          {countdown}
        </Col>
      </Row>
      
    </>
  );
}
export default TestUseEffect;
