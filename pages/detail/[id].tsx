import styled from '@emotion/styled';
import { NextPage } from 'next';
import Bookmark from '../../public/images/Bookmark.svg';
import Share from '../../public/images/Share.svg';
import Star from '../../public/images/Star.svg';
import Call from '../../public/images/Call.svg';
import Copy from '../../public/images/Copy.svg';
import { HospitalDetailProps } from 'config/types';
import { COLORS } from 'config/styles';
import { CenterAlign, Gap } from '../../styles/global';
import { useRouter } from 'next/router';
import Map from 'components/Map';

const HospitalDetailPage: NextPage<HospitalDetailProps> = () => {
  const hospitalName = '서울 아산 병원';
  const grade = '3.1';
  const notice = '12/30 (금) 오늘은 휴진입니다.';
  const address = '서울특별시 송파구 올림픽로 43길 88 서울아산병원';
  const treatDay = '수요일';
  const startTime = '9:00';
  const endTime = '17:00';
  const treatTime = `${startTime} ~ ${endTime}`;
  const introduce =
    '서울아산병원은 존경받는 병원 으로서의 사회적 책임을 다하겠습니다. 연혁/의료성과 앞선 의술, 더 큰 사랑을 실천하고 있습니다.';
  const tags = ['야간 진료', '응급 진료'];
  const lunchStart = '12:00';
  const lunchEnd = '1:30';
  const lunchTime = `${lunchStart} ~ ${lunchEnd}`;
  const imgUrl = 'https://www.amc.seoul.kr/asan/images/hospitalinfo/img_introRolling01.jpg';

  const router = useRouter();
  // const id = router?.query.id;
  // const hospitalInfo = useQuery([getHospitalInfoQueryKey, id], () => getHospitalInfoApi(id!));
  // const { grade } = hospitalInfo.data;
  // console.log(hospitalInfo);

  const paintStar = (count: number) => {
    const getStars = [];
    for (let i = 0; i < count; i++) {
      getStars.push(
        <Star
          stroke={`${COLORS.PRIMARY}`}
          fill={`${COLORS.PRIMARY}`}
          width={15}
          height={15}
          key={i}
        />
      );
    }
    const stars = [...getStars];
    for (let j = 0; j < 5 - getStars.length; j++) {
      stars.push(
        <Star
          stroke={`${COLORS.GRAY400}`}
          fill={`${COLORS.GRAY400}`}
          width={15}
          height={15}
          key={getStars.length + j}
        />
      );
    }

    return stars;
  };

  return (
    <Container>
      <TopImgContainer>
        <Buttons>
          <button>
            <Bookmark stroke="#fff" fill="rgba(78, 78, 78, 0.24)" />
          </button>
          <button>
            <Share stroke="#fff" />
          </button>
        </Buttons>
        <HospitalImg src={imgUrl} />
      </TopImgContainer>

      <HospitalInfo className="borderN">
        <InfoHead>
          <h1>{hospitalName}</h1>
          <span className="treatStatus">진료중</span>
        </InfoHead>
        {paintStar(parseInt(grade))}
        <span>
          {`\n`}
          {grade}
        </span>
        <Notice>{notice}</Notice>
        <Gap>
          <span>{address}</span>
          <span>
            <b>
              {treatDay} {treatTime}
            </b>
          </span>
          <Tags>
            {tags.map((tag, index: number) => (
              <TagChip key={index}>{tag}</TagChip>
            ))}
          </Tags>
        </Gap>
      </HospitalInfo>

      <Tab>
        <a>병원정보</a>
        <a>진료정보</a>
        <a>리뷰</a>
      </Tab>

      <HospitalInfo className="borderN">
        <h2>병원 정보</h2>
        <Introduce>{introduce}</Introduce>
        <Tags>
          {tags.map((tag, index) => (
            <TagChip key={index}>{tag}</TagChip>
          ))}
        </Tags>
      </HospitalInfo>

      <HospitalInfo>
        <h2>위치</h2>
        <InfoHead>
          <Gap>
            <span className="addressTitle">상세주소</span>
            <span>{address}</span>
          </Gap>
          <button>
            <Copy stroke={`${COLORS.GRAY500}`} />
          </button>
        </InfoHead>
        <MapContainer>
          <Map latitude={37.402052} longitude={127.108212} />
        </MapContainer>
      </HospitalInfo>

      <HospitalInfo className="borderN lastInfo">
        <h2>진료 정보</h2>
        <Notice>
          <b>점심시간</b> {lunchTime}
        </Notice>
        <Notice>
          <ul>
            <li></li>
          </ul>
        </Notice>
      </HospitalInfo>

      <Contact>
        <button className="call">
          <Call fill="#333" stroke="#333" />
        </button>
        <button className="reserve" onClick={() => router.push('/reserve')}>
          예약하기
        </button>
      </Contact>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 150px;
`;
const TopImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;
const Buttons = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 15px 15px 0 0;
  box-sizing: border-box;
  gap: 15px;
  z-index: 1;
`;
const HospitalImg = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
const HospitalInfo = styled.div`
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 3px solid ${COLORS.GRAY200};

  .treatStatus {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 0 10px;
    height: 30px;
    font-size: 14px;
    background-color: ${COLORS.PRIMARY};
    color: white;
  }

  &.borderN {
    border: none;
  }
  &.lastInfo {
    padding-bottom: 80px;
  }
`;
const InfoHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  h1 {
    color: ${COLORS.DARK};
  }
  div {
    span {
      display: block;
    }
  }
  .addressTitle {
    color: ${COLORS.GRAY500};
  }
`;
const Notice = styled.div`
  display: block;
  width: 90%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #eee;
  font-size: 15px;
  text-align: center;
`;
const Introduce = styled(Notice)`
  border: none;
  background-color: ${COLORS.GRAY200};
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
const TagChip = styled.div`
  background-color: ${COLORS.PRIMARY100};
  width: fit-content;
  padding: 5px 8px;
  border-radius: 5px;
  font-size: 13px;
  color: #333;
`;
const Tab = styled(CenterAlign)`
  position: sticky;
  top: 0;
  justify-content: space-around;

  border-top: 1px solid ${COLORS.GRAY300};
  border-bottom: 1px solid ${COLORS.GRAY300};
  background-color: #fff;
  height: 70px;
  a {
    display: block;
    color: ${COLORS.DARK};
  }
`;
const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${COLORS.GRAY200};
`;
const Review = styled.div``;
const Contact = styled(CenterAlign)`
  z-index: 1;
  position: fixed;
  bottom: 60px;
  right: calc((100vw- (512px + 420px)) / 2);

  width: 420px;
  padding: 20px;
  box-sizing: border-box;

  button {
    height: 50px;
    border-radius: 10px;
  }

  .call {
    background-color: #fff;
    border: 1px solid #eee;
    width: 20%;
    margin-right: 10px;
    &:hover {
      border: 1px solid ${COLORS.PRIMARY};
    }
  }
  .reserve {
    background-color: ${COLORS.PRIMARY};
    width: 80%;
    font-weight: bold;
    color: #fff;
    &:hover {
      background-color: ${COLORS.PRIMARY200};
    }
  }
`;
export default HospitalDetailPage;
