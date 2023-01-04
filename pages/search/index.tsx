import styled from '@emotion/styled';
import prevBtnHeader from 'components/prevBtnHeader';
import { CenterAlign } from '../../styles/global';

const SearchPage = () => {
  const keyword = '서울';

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

export default SearchPage;
