import styled from '@emotion/styled';
import { COLORS } from 'config/styles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ArrowLeft from '../../../public/images/ArrowLeft.svg';
import { CenterAlign } from '../../../styles/global';

const Header = (title: string) => {
  return (
    <Container>
      <h3>{title}</h3>
    </Container>
  );
};

const Container = styled(CenterAlign)`
  position: relative;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${COLORS.GRAY300};
  box-sizing: border-box;
`;

export default Header;
