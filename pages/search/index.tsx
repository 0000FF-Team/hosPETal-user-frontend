import styled from '@emotion/styled';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import HospitalCard from 'components/HospitalCard';
import prevBtnHeader from 'components/prevBtnHeader';
import { searchHospitalApi, searchHospitalQueryKey } from 'config/apis';
import { HospitalInfoType, SearchProps } from 'config/types';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { CenterAlign } from '../../styles/global';

const SearchPage = ({ keyword }: SearchProps) => {
  const { data } = useQuery([searchHospitalQueryKey, keyword], () => searchHospitalApi(keyword));

  return (
    <>
      {prevBtnHeader(`${keyword}`)}
      <Container>
        <Layout>
          {data.length
            ? data.map((info: any, idx: number) => <HospitalCard data={info} key={idx} />)
            : `검색 결과가 없습니다`}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const keyword = context.query.q;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([searchHospitalQueryKey, keyword], () =>
    searchHospitalApi(keyword)
  );
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      keyword,
      dehydratedState,
    },
  };
};

export default SearchPage;
