import { COLORS } from './../src/config/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const global = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  * {
    font-family: -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;

    margin: 0;
    padding: 0;
  }
  input,
  textarea {
    border: none;
    background-color: transparent;
    :focus {
      outline: none;
    }
  }
  button {
    background-color: transparent;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }
  a {
    cursor: pointer;
  }
  ul,
  li {
    list-style: none;
  }
`;

export const CenterAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
`;

export const CommonInput = styled.input`
  border: 1px solid ${COLORS.GRAY300};
  border-radius: 10px;
  padding: 15px;
  box-sizing: border-box;
`;
