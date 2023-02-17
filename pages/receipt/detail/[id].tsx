import styled from '@emotion/styled';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import prevBtnHeader from 'components/prevBtnHeader';
import { COLORS } from 'config/styles';
import { GetServerSideProps } from 'next';
import { CenterAlign } from '../../../styles/global';
import { getReserveInfoApi, getReserveInfoQueryKey } from 'config/apis';
import useTransformDate from 'hooks/useTransformDate';
import { ReceiptProps } from 'config/types';

const ReceiptPage = ({ id }: ReceiptProps) => {
  const { data } = useQuery([getReserveInfoQueryKey, id], () => getReserveInfoApi(id));
  const { date, hospName, protector, pet, symptom, treatment } = data;
  const reserve = useTransformDate(date);

  return (
    <>
      {prevBtnHeader('예약 상세 정보')}
      <Container>
        <Layout>
          <ul>
            <li>
              <b>반려동물 정보</b>
              <span>{pet.name}</span>
            </li>
            <li>
              <b>보호자 연락처</b>
              <span>{protector.phone}</span>
            </li>
            <li>
              <b>날짜</b>
              <span>
                {reserve.date} ({reserve.day}) {reserve.time}
              </span>
            </li>
            <li>
              <b>병원명</b>
              <span>{hospName}</span>
            </li>
            <li>
              <b>진료항목</b>
              <span>{treatment}</span>
            </li>
            <li>
              <b>증상</b>
              <span>{symptom}</span>
            </li>
          </ul>
        </Layout>
      </Container>
    </>
  );
};

const Container = styled(CenterAlign)`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
const Layout = styled.div`
  width: 85%;
  height: 95%;
  padding: 20px 0;

  ul {
    background-color: ${COLORS.PRIMARY100};
    border-radius: 10px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  li {
    display: grid;
    grid-template-columns: 1fr 1.8fr;
    span {
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([getReserveInfoQueryKey, id], () => getReserveInfoApi(id));
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      id,
      dehydratedState,
    },
  };
};

export default ReceiptPage;
