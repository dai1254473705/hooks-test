/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 16:58:08
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 16:19:56
 * @FilePath: /hooks/src/Component/testUseState/index.ts
 * @Description: 测试useState
 */
import { useState } from "react";
import { Col, Row, Typography, Button, Card, Divider } from "antd";
const { Paragraph } = Typography;

const TestUseState: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);
  const [arr, setArr] = useState<number[]>([1]);
  const [data, setData] = useState<{data:number}>({data:1});
  console.log(count,'====');
  /**
   * 点击统计次数
   */
  const onClick = () => {
    setCount(count + 1);
  };
  /**
   * 插入数字
   */
  const onPush = ()=>{
    const num:number = Math.ceil( Math.random() *100)
    const newArr = [...arr];
    newArr.push(num);
    setArr(newArr);
  }
  /**
   * 修改json数据
   */
  const onJsonClick  =()=>{
    setData({
      data: data.data + 2
    });
  }
  return (
    <>
      <Card>
        <Paragraph>
          1. 我们不需要特殊的 API 来读取它 —— 它已经保存在函数作用域中。Hook 使用了
          JavaScript 的闭包机制,useState Hook在函数组件中存储内部 state。
          
          2.state 只在组件首次渲染的时候被创建。在下一次重新渲染时，useState 返回给我们当前的 state。

          3.useState 左侧需要通过数组解构的方式取值；
        </Paragraph>
      </Card>
      <Divider />
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <Button type="primary" onClick={onClick}>
            计数器
          </Button>
        </Col>
        <Col className="gutter-row" span={18}>
          点击 {count} 次
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <Button type="primary" onClick={onPush}>
            插入数字
          </Button>
        </Col>
        <Col className="gutter-row" span={18}>
          插入的数字{arr.join(',')}
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <Button type="primary" onClick={onJsonClick}>
            修改data.data
          </Button>
        </Col>
        <Col className="gutter-row" span={18}>
          修改数据data.data {data.data}
        </Col>
      </Row>
    </>
  );
};
export default TestUseState;
