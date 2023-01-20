import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { CenterAlign } from '../../../styles/global';
import Loading from '../../../public/images/Loading.gif';
import Image from 'next/image';
import { COLORS } from 'config/styles';

const LoadingOverlay = ({ visible }: any) => {
  const [display, setDisplay] = useState(visible);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (visible) {
      setDisplay(true);
    } else {
      timer = setTimeout(() => {
        setDisplay(false);
      }, 300);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [visible]);

  if (!display) {
    return null;
  }

  return (
    <Container>
      <Image src={Loading} alt="로딩중" width={70} height={70} />
    </Container>
  );
};

const Container = styled(CenterAlign)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;
  flex-direction: column;
`;

export default LoadingOverlay;
