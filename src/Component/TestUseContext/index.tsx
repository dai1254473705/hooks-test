/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 16:58:08
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 13:58:39
 * @FilePath: /hooks/src/Component/testUseState/index.ts
 * @Description: 测试useState
 */
import React, { useContext } from "react";
import { Col, Row, Typography, Button, Card, Divider } from "antd";
const { Paragraph } = Typography;

const themes = {
  light: {
    foreground: "#000000",
    background: "#07c160",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Card>
        <Paragraph>const value = useContext(MyContext);</Paragraph>
      </Card>
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    </>
  );
}

function TestUseState() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Card>
        <Paragraph>const value = useContext(MyContext);</Paragraph>
      </Card>
      <div style={{ background: theme.background, color: theme.foreground }}>
        const value = useContext(MyContext);
      </div>
    </>
  );
}
export default App;
// export default TestUseState;
