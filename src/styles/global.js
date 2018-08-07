/* eslint-disable */
import { injectGlobal } from 'styled-components';
import theme from './theme';
import reset from './reset';

injectGlobal`
  ${reset}
  body {
    font-family: ${theme.fontBody};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
  }
`;
