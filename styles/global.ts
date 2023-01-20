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

  .customOverlay {
    position: absolute;
    top: 20px;
    left: 0;
    transform: translate(-50%, -50%);

    width: fit-content;
    padding: 10px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 1px 2px #888;
    color: ${COLORS.DARK};
    font-size: 14px;
    font-weight: bold;
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

export const SearchField = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 15px;
  .searchIcon {
    cursor: pointer;
  }
  input {
    font-size: 16px;
    padding: 20px 0;
    width: 90%;
  }
`;
