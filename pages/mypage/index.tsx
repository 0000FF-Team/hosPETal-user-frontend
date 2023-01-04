import styled from '@emotion/styled';
import Header from 'components/Header';
import { CenterAlign } from '../../styles/global';

const MyPage = () => {
  return (
    <Container>
      {Header('마이 페이지')}
      <Layout></Layout>
    </Container>
  );
};

const Container = styled(CenterAlign)`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
const Layout = styled.div`
  width: 90%;
  height: 95%;
`;

export default MyPage;
