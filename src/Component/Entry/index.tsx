/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-23 14:10:41
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 14:20:08
 * @FilePath: /hooks/src/Component/Entry/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { FC, ReactElement } from "react";
import TestUseState from "../TestUseState";
import TestUseEffect from "../TestUseEffect";
import TestCustHook from "../TestCustHook";
import TestUseContext from "../TestUseContext";
import TestUseCallback from "../TestUseCallback";
import TestUseMemo from "../TestUseMemo";
import TestUseRef from "../TestUseRef";
import TestUseImperativeHandle from "../TestUseImperativeHandle";
interface IProps {
  activeMenu: string;
}

const Entry: FC<IProps> = (props): ReactElement => {
  const { activeMenu } = props;
  switch (activeMenu) {
    case "useState":
      return <TestUseState />;
    case "useEffect":
      return <TestUseEffect />;
    case "useCountDown":
      return <TestCustHook />;
    case "useContext":
      return <TestUseContext />;
    case "useCallback":
      return <TestUseCallback />;
    case "useMemo":
      return <TestUseMemo />;
    case "useRef":
      return <TestUseRef />;
    case "useImperativeHandle":
      return <TestUseImperativeHandle />;
    default:
      return <TestUseState />;
  }
};
export default Entry;
