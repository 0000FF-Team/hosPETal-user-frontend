import styled from '@emotion/styled';
import { COLORS } from 'config/styles';
import { ReceiptCardInfo } from 'config/types';
import useTransformDate from 'hooks/useTransformDate';
import { useRouter } from 'next/router';
import React from 'react';

const ReceiptCard = ({ data }: ReceiptCardInfo) => {
  const router = useRouter();
  const { reserved, pet, hospName, date, id } = data;
  const reserve = useTransformDate(date);

  const pending = !!(reserved === 'pending');
  const canceled = !!(reserved === 'canceled');
  const done = !!(reserved === 'done');

  const handleCancelButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    confirm('예약을 취소하시겠습니까?')
      ? alert('예약을 취소했습니다!')
      : alert('아니요 취소 안할래요!');
  };

  const currentDate = new Date();
  const today =
    String(currentDate.getFullYear()) +
    '-' +
    String(currentDate.getMonth()).padStart(2, '0') +
    '-' +
    String(currentDate.getDate()).padStart(2, '0');
  const isPrev = reserve.day > today;

  return (
    <Card className={reserved} onClick={() => router.push(`/receipt/detail/${id}`)}>
      <div>
        {pending && <h2>예약 확인중</h2>}
        {canceled && <h2>예약 취소</h2>}
        {done && <h2>접수 완료</h2>}

        <span>{pet.name}</span>
        <MoreButton>상세보기</MoreButton>
      </div>

      <div>
        <h3>{hospName}</h3>
        <span>
          {reserve.date}
          {` (${reserve.day}) `}
          {reserve.time}
        </span>

        {pending && <CancelButton onClick={(e) => handleCancelButton(e)}>예약취소</CancelButton>}
      </div>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  border: 2px solid ${COLORS.GRAY400};
  background-color: #fff;
  color: ${COLORS.DARK};
  border-radius: 8px;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    border: 2px solid ${COLORS.PRIMARY300};
    background-color: ${COLORS.PRIMARY100};
    box-shadow: 0 5px 5px rgba(139, 139, 139, 0.1);
  }

  &.canceled {
    background-color: ${COLORS.GRAY200};
    color: ${COLORS.GRAY500};
    button {
      color: ${COLORS.GRAY500};
    }
  }

  span {
    line-height: 30px;
  }
`;

const MoreButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
`;
const CancelButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;

  padding: 3px 5px;
  border-radius: 4px;
  border: 1px solid ${COLORS.ERROR};
  background-color: #fff;
  color: ${COLORS.ERROR};
`;

export default ReceiptCard;
