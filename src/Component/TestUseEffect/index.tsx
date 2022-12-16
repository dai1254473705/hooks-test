/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 16:58:08
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 18:42:28
 * @FilePath: /hooks/src/Component/testUseState/index.ts
 * @Description: 测试useState
 */
import { useState, useEffect, useRef } from "react";
import { Col, Row, Typography, Card, Divider } from "antd";
const { Paragraph } = Typography;
function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [init, setInit] = useState(0);
  const [noDeps, setNoDeps] = useState(0);
  const [depsCount, setDepsCount] = useState(0);
  const countData: any = useRef({ timer: null, count: count });
  /**
   * 不设置第二个参数，在任何state改变时，都会触发
   */
  useEffect(() => {
    const dd = Math.ceil(Math.random() *10)
    setNoDeps(dd);
  });

  /**
   * 如果设置了第二个参数，effect只会当第二个参数中的值发生变化后触发。
   */
  useEffect(() => {
    setInit(new Date().getTime());
  }, []);

  // 定时器使用
  // 需要清除的 effect
  useEffect(() => {
    //  局部变量法
    countData.current.timer = setInterval(() => {
      const newCount = countData.current.count + 1;
      countData.current.count = newCount;
      console.log("========", newCount);
      setCount(newCount);
    }, 3000);
    // 需要清除,如果不写，离开页面后定时器不回被销毁
    return () => {
      clearInterval(countData.current.timer);
    };
  }, []);

  /**
   * 如果设置了第二个参数为空数组，就只会在组件加载后执行一次，相当于componentDidMount
   */
  useEffect(() => {
    console.log("useEffect count改变触发了");
    setDepsCount(count + 1);
  }, [count]);

  return (
    <>
      <Card>
        <Paragraph>
          1. useEffect Hook 可以看做是 componentDidMount，componentDidUpdate 和
          componentWillUnmount 这三个函数的组合。
        </Paragraph>
        <Paragraph>
          2. React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。
        </Paragraph>
        <Paragraph>3. useEffect 会在每次渲染后都执行</Paragraph>
        <Paragraph>
          4. 可以在 effect 中直接访问 useState 处理的变量（函数作用域）；
        </Paragraph>
        <Paragraph>5. useEffect 会在每次渲染后都执行</Paragraph>
        <Paragraph>
          6. useEffect return 一个清理函数，如果是定时器，需要clearInterval清理
        </Paragraph>
      </Card>
      <Divider>控制台查看输出内容</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          累加
        </Col>
        <Col className="gutter-row" span={8}>
          {count}
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          useEffect 设置了空数组，只会执行一次
        </Col>
        <Col className="gutter-row" span={8}>
          {init}
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          useEffect 没有设置deps, 每次都执行
        </Col>
        <Col className="gutter-row" span={8}>
          {noDeps}
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          useEffect count改变触发了
        </Col>
        <Col className="gutter-row" span={8}>
          {depsCount}
        </Col>
      </Row>
    </>
  );
}
export default TestUseEffect;
