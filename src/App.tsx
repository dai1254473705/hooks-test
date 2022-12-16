/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 14:48:17
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 14:30:42
 * @FilePath: /hooks/src/App.tsx
 * @Description: hooks学习入口文件
 */
import React, { useState } from "react";
import type { FC } from "react";
import Entry from "./Component/Entry";
import { Layout } from "antd";
import { Menu } from "antd";
import MenuList from "./Config/Menu";
import "./App.css";
const { Sider, Content } = Layout;

const App: FC = () => {
  const [activeMenu, setActiveMenu] = useState("useState");

  const onMenuClick = (menu: any) => {
    setActiveMenu(menu.key);
  };
  return (
    <Layout>
      <Sider>
        <Menu selectedKeys={[activeMenu]} items={MenuList} onClick={onMenuClick} />;
      </Sider>
      <Content>
        <Entry activeMenu={activeMenu}/>
      </Content>
    </Layout>
  );
};

export default App;
