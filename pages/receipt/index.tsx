import styled from '@emotion/styled';
import Header from 'components/Header';
import ReceiptCard from 'components/ReceiptCard';
import { useRouter } from 'next/router';
import { CenterAlign } from '../../styles/global';

const PENDING = 'pending';
const CANCELED = 'canceled';
const DONE = 'done';

const ReceiptPage = () => {
  const router = useRouter();

  const data = {
    id: '1',
    list: [
      {
        status: 'pending',
        name: '이마루',
        hospital: '푸른 병원',
        date: '2022. 12. 19 (월) 오후 1:30',
      },
      {
        status: 'canceled',
        name: '박강쥐',
        hospital: '푸른 병원',
        date: '2022. 12. 20 (화) 오후 3:00',
      },
      {
        status: 'done',
        name: '김애옹',
        hospital: '푸른 병원',
        date: '2022. 12. 21 (수) 오후 2:30',
      },
    ],
  };

  return (
    <Container>
      {Header('예약 내역')}
      <Layout>
        {data.list.map((info) => (
          <ReceiptCard data={info} id={data.id} />
        ))}
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
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  width: 90%;
  height: 95%;
  padding: 20px 0;
`;

export default ReceiptPage;
