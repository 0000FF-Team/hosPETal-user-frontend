import styled from '@emotion/styled';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import prevBtnHeader from 'components/prevBtnHeader';
import { getHospitalListApi, getHospitalListQueryKey } from 'config/apis';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { CenterAlign } from '../../styles/global';

const SearchPage = () => {
  const router = useRouter();
  const keyword = router.query.q;
  const { data } = useQuery([getHospitalListQueryKey], getHospitalListApi);

  return (
    <Container>
      {prevBtnHeader(`${keyword}`)}
      <Layout>지도가 그려질 부분</Layout>
    </Container>
  );
};

const Container = styled(CenterAlign)`
  width: 100%;
  height: 100%;
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
  await queryClient.prefetchQuery([getHospitalListQueryKey], getHospitalListApi);
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      dehydratedState,
    },
  };
};

export default SearchPage;
