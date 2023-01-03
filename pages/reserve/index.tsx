import styled from '@emotion/styled';
import { CenterAlign } from '../../styles/global';
import Accordion from 'components/Accordion';
import Header from 'components/Header';
import { COLORS } from 'config/styles';
import ContactField from 'components/Forms/ContactField';
import SymptomField from 'components/Forms/SymptomField';
import TreatmentCategory from 'components/Forms/TreatmentCategory';
import DateField from 'components/Forms/DateField';
import ReceptionField from 'components/Forms/ReceptionField';

// https://www.mypetplus.co.kr/Product/ProductList/List?ctg1=26&ctg2=30&ctg3=44&lastCategory=&selMedical=&areaZone=&area=&pettype=&gender=&petsize=&petage=&foodsalt=&foodchemical=&foodspecial=&page=1&sText=

const data = [
  {
    title: '반려동물 정보',
    contents: <ReceptionField />,
  },
  {
    title: '보호자 정보',
    contents: <ContactField />,
  },
  {
    title: '날짜/시간 선택',
    contents: <DateField />,
  },
  {
    title: '진료 항목',
    contents: <TreatmentCategory />,
  },
  {
    title: '증상',
    contents: <SymptomField />,
  },
];

const reservePage = () => {
  return (
    <>
      <Container>
        {Header('예약 정보 입력')}
        <Layout>
          {data.map((data, index) => (
            <Accordion title={data.title} contents={data.contents} key={index} />
          ))}
          <button>예약하기</button>
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
  width: 90%;
  height: 95%;
  button {
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
    border-radius: 10px;
    background-color: ${COLORS.PRIMARY};
    color: #fff;
    font-weight: bold;
    &:hover {
      background-color: ${COLORS.PRIMARY200};
    }
  }
`;

export default reservePage;
