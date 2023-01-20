import styled from '@emotion/styled';
import ArrowUp from '../../../public/images/ArrowUp.svg';
import ArrowDown from '../../../public/images/ArrowDown.svg';
import { COLORS } from 'config/styles';
import { useRef, useState } from 'react';
import { CenterAlign } from '../../../styles/global';
import { AccordionDataInfo } from 'config/types';

const Accordion = ({ title, contents }: AccordionDataInfo) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<HTMLDivElement>(null);
  const [isCollapse, setIsCollapse] = useState(true);

  const handleAccordionClick = (e: any) => {
    if (
      containerRef.current === null ||
      contentsRef.current === null ||
      containerRef.current === undefined
    ) {
      return;
    }
    if (containerRef.current?.clientHeight > 0) {
      containerRef.current.style.height = '0';
    } else {
      containerRef.current.style.height = `${contentsRef.current.clientHeight}px`;
    }
    setIsCollapse(!isCollapse);
  };

  return (
    <Container>
      <Summary onClick={(e) => handleAccordionClick(e)}>
        <span>{title}</span>
        {isCollapse ? (
          <ArrowDown fill={`${COLORS.GRAY500}`} />
        ) : (
          <ArrowUp fill={`${COLORS.GRAY500}`} />
        )}
      </Summary>
      <ContentsContainer ref={containerRef}>
        <Contents ref={contentsRef}>
          <hr />
          {contents}
        </Contents>
      </ContentsContainer>
    </Container>
  );
};

const Container = styled(CenterAlign)`
  position: relative;
  flex-direction: column;

  width: 100%;
  padding: 15px;
  margin: 20px 0;
  border: 1px solid ${COLORS.GRAY300};

  box-shadow: 0 2px 3px rgba(139, 139, 139, 0.1);
  box-sizing: border-box;
`;
const Summary = styled(CenterAlign)`
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  span {
    display: block;
    font-weight: bold;
  }
`;
const ContentsContainer = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
`;
const Contents = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  hr {
    background: ${COLORS.GRAY300};
    height: 1px;
    border: 0;
    margin-bottom: 30px;
  }
`;

export default Accordion;
