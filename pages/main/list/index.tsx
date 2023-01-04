import styled from '@emotion/styled';
import HospitalCard from 'components/HospitalCard';
import prevBtnHeader from 'components/prevBtnHeader';
import { CenterAlign } from '../../../styles/global';

const MainListPage = () => {
  const keyword = '서울';

  return (
    <Container>
      {prevBtnHeader('내 주변 병원')}
      <Layout>
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
      </Layout>
    </Container>
  );
};

const Container = styled(CenterAlign)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-bottom: 150px;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  width: 90%;
  height: 95%;
  padding: 20px 0;
  box-sizing: border-box;
`;

export default MainListPage;
