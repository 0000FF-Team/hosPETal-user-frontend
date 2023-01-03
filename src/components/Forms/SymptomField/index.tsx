import styled from '@emotion/styled';
import { COLORS } from 'config/styles';
import React from 'react';

const SymptomField = () => {
  return (
    <form>
      <TextareaBox placeholder="증상을 입력해주세요" />
    </form>
  );
};
const TextareaBox = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid ${COLORS.GRAY300};
  border-radius: 10px;
  padding: 15px;
  box-sizing: border-box;
  resize: none;
`;
export default SymptomField;
