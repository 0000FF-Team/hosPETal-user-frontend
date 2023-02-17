import styled from '@emotion/styled';
import { COLORS } from 'config/styles';
import { HospitalInfoType } from 'config/types';
import { useRouter } from 'next/router';
import React from 'react';

const HospitalCard = (data: HospitalInfoType) => {
  const router = useRouter();
  const { name, address, tags, id } = data.data;

  return (
    <Card onClick={() => router.push(`/detail/${id}`)}>
      <h2>{name}</h2>
      <Wrap>
        <span>{address}</span>
      </Wrap>
      {tags.length ? (
        <Tags>
          {tags.map((tag, idx: number) => (
            <TagChip key={idx}>{tag}</TagChip>
          ))}
        </Tags>
      ) : null}
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 20px;
  border: 1px solid ${COLORS.GRAY300};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;

  h2 {
    font-size: 20px;
  }
`;
const Tags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 5px;
`;
const TagChip = styled.span`
  background-color: ${COLORS.PRIMARY100};
  padding: 5px 8px;
  border-radius: 5px;
  font-size: 13px;
`;
const Wrap = styled.div``;
export default HospitalCard;
