/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-22 14:48:17
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-23 14:02:03
 * @FilePath: /hooks/src/test/App.test.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
