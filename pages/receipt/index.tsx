import styled from '@emotion/styled';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Header from 'components/Header';
import ReceiptCard from 'components/ReceiptCard';
import { getReserveListApi, getReserveListQueryKey } from 'config/apis';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { CenterAlign } from '../../styles/global';

const ReceiptPage = () => {
  const { data } = useQuery([getReserveListQueryKey], getReserveListApi);

  return (
    <>
      {Header('예약 내역')}
      <Container>
        <Layout>
          {data.map((info: Array<String>, idx: number) => (
            <ReceiptCard key={idx} data={info} />
          ))}
        </Layout>
      </Container>
    </>
  );
};

const Container = styled(CenterAlign)`
  width: 100%;
  flex-direction: column;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  width: 90%;
  height: 95%;
  padding: 20px 0;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([getReserveListQueryKey], getReserveListApi);
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      dehydratedState,
    },
  };
};

export default ReceiptPage;
