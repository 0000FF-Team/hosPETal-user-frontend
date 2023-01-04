import styled from '@emotion/styled';
import prevBtnHeader from 'components/prevBtnHeader';
import { COLORS } from 'config/styles';
import { CenterAlign } from '../../../styles/global';

const PENDING = 'pending';
const CANCELED = 'canceled';
const DONE = 'done';

const ReceiptPage = () => {
  return (
    <Container>
      {prevBtnHeader('예약 상세 정보')}
      <Layout>
        <ul>
          <li>
            <b>반려동물 정보</b>
            <span>김애옹</span>
          </li>
          <li>
            <b>보호자 연락처</b>
            <span>010-1234-0000</span>
          </li>
          <li>
            <b>날짜</b>
            <span>2022. 12. 21 (수) 오후 2:30</span>
          </li>
          <li>
            <b>병원명</b>
            <span>푸른 병원</span>
          </li>
          <li>
            <b>진료항목</b>
            <span>검사/검진</span>
          </li>
          <li>
            <b>증상</b>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, dignissimos. Molestiae
              provident, ad sequi eligendi recusandae velit vitae omnis pariatur. Sapiente molestiae
              praesentium quidem veritatis quibusdam optio odio incidunt culpa!
            </span>
          </li>
        </ul>
      </Layout>
    </Container>
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

export default ReceiptPage;
