import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const global = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;

    margin: 0;
    padding: 0;
  }
  input {
    border: none;
    :focus {
      outline: none;
    }
  }
`;

export const center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
