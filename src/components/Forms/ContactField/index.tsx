import React from 'react';
import styled from '@emotion/styled';
import { CommonInput } from '../../../../styles/global';

const ContactField = () => {
  return (
    <Layout>
      <form>
        <Field>
          <b>이름</b>
          <CommonInput type="text" placeholder="보호자 성함을 입력해주세요." />
        </Field>
        <Field>
          <b>연락처</b>
          <CommonInput type="number" maxLength={11} placeholder="보호자 연락처를 입력해주세요." />
        </Field>
        <Field>
          <b>주소</b>
          <CommonInput type="text" placeholder="주소지를 입력해주세요." />
        </Field>
      </form>
    </Layout>
  );
};

const Layout = styled.div`
  form {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const Field = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 5fr;
  grid-column-gap: 20px;
  b {
    text-align: center;
    white-space: pre-line;
  }
`;

export default ContactField;
