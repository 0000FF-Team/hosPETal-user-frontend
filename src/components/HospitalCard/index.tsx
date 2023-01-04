import styled from '@emotion/styled';
import { COLORS } from 'config/styles';
import React from 'react';

const HospitalCard = () => {
  return (
    <Card>
      <h2>늘푸른 병원</h2>
      <Wrap>
        <span>진료중</span>
        <span>9:00~18:00</span>
      </Wrap>

      <Wrap>
        <span>20km</span>
        <span>서울시 송파구 올림픽로 240</span>
      </Wrap>

      <Tags>
        <TagChip>야간진료</TagChip>
        <TagChip>응급진료</TagChip>
        <TagChip>주말진료</TagChip>
      </Tags>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  height: 300px;
  padding: 20px;
  border: 1px solid ${COLORS.GRAY300};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
`;
const Tags = styled.div`
  display: flex;
  gap: 10px;
`;
const TagChip = styled.span`
  background-color: ${COLORS.PRIMARY100};
  padding: 3px 5px;
  border-radius: 10px;
  font-size: 14px;
`;
const Wrap = styled.div``;
export default HospitalCard;
