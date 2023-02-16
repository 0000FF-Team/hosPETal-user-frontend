import styled from '@emotion/styled';
import { GetServerSideProps, NextPage } from 'next';
import Bookmark from '../../public/images/Bookmark.svg';
import Share from '../../public/images/Share.svg';
import Star from '../../public/images/Star.svg';
import Call from '../../public/images/Call.svg';
import Copy from '../../public/images/Copy.svg';
import { HospitalDetailProps } from 'config/types';
import { COLORS } from 'config/styles';
import { CenterAlign, Gap } from '../../styles/global';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getHospitalInfoApi, getHospitalInfoQueryKey } from 'config/apis';
import MiniMap from 'components/MiniMap';
import LoadingOverlay from 'components/LoadingOverlay';
import ArrowLeft from '../../public/images/ArrowLeft.svg';

const HospitalDetailPage: NextPage<HospitalDetailProps> = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const { data, isLoading } = useQuery([getHospitalInfoQueryKey, id], () => getHospitalInfoApi(id));

  const date = new Date();
  const today = date.getDay();
  const start = data?.treatTime[today].start.split(':').join('');
  const end = data?.treatTime[today].end.split(':').join('');
  const curTime = Number(
    String(date.getHours()).padStart(2, '0') + String(date.getMinutes()).padStart(2, '0')
  );

  const isInTreatment =
    data?.treatTime[today].start === '' ? false : curTime - start ? !!(end - curTime) : false;

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

  const copyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('복사 완료');
    } catch (error) {
      alert('복사 실패');
    }
  };

  return (
    <Container>
      {isLoading ? (
        <LoadingOverlay visible={isLoading} />
      ) : (
        <>
          <TopImgContainer>
            <Buttons>
              <PrevButton
                onClick={() => {
                  router.back();
                }}
              >
                <ArrowLeft fill="#fff" />
              </PrevButton>
              <div className="right">
                <button>
                  <Bookmark stroke="#fff" fill="rgba(78, 78, 78, 0.24)" />
                </button>
                <button>
                  <Share stroke="#fff" />
                </button>
              </div>
            </Buttons>
            <HospitalImg src={data.img} />
          </TopImgContainer>

          <HospitalInfo className="mainTitle">
            <InfoHead>
              <h1>{data.name}</h1>
              <span className={`treatStatus ${isInTreatment ? 'ing' : 'end'}`}>
                {isInTreatment ? '진료중' : '진료 종료'}
              </span>
            </InfoHead>
            {paintStar(parseInt(data.grade))}
            <span>
              {`\n`}
              {data.grade}
            </span>
            <Gap>
              <span>{data.address}</span>
              <Tags>
                {data.facilities.map((tag: string[], index: number) => (
                  <TagChip key={index}>{tag}</TagChip>
                ))}
              </Tags>
            </Gap>
          </HospitalInfo>

          {/* <Tab>
            <a>병원정보</a>
            <a>진료정보</a>
          </Tab> */}

          <HospitalInfo>
            <h2>병원 정보</h2>
            <Introduce>{data.introduce}</Introduce>
            <Tags>
              {data.tags.map((tag: string[], index: number) => (
                <TagChip key={index}>{tag}</TagChip>
              ))}
            </Tags>
          </HospitalInfo>

          <HospitalInfo>
            <h2>위치</h2>
            <InfoHead>
              <Gap>
                <span className="addressTitle">상세주소</span>
                <span>{data.address}</span>
              </Gap>
              <button onClick={() => copyClipBoard(data.address)}>
                <Copy stroke={`${COLORS.GRAY500}`} />
              </button>
            </InfoHead>
            <MapContainer>
              <MiniMap data={data} />
            </MapContainer>
          </HospitalInfo>

          <HospitalInfo className="lastInfo">
            <h2>진료 정보</h2>
            {data.lunchStart === '' ? null : (
              <Notice>
                <b>점심시간</b> {data.lunchStart} ~ {data.lunchEnd}
              </Notice>
            )}
            <Notice className="treatTime">
              <ul>
                {data.treatTime.map((time: any, idx: number) => (
                  <li key={idx} className={idx === today ? 'active' : ''}>
                    {time.day}
                  </li>
                ))}
              </ul>
              <ul>
                {data.treatTime.map((time: any, idx: number) =>
                  time.start === '' ? (
                    <li key={idx} className={idx === today ? 'active' : ''}>
                      휴무
                    </li>
                  ) : (
                    <li key={idx} className={idx === today ? 'active' : ''}>
                      {time.start} ~ {time.end}
                    </li>
                  )
                )}
              </ul>
            </Notice>
          </HospitalInfo>

          <Contact>
            <a className="call" href={`tel:${data.number}`}>
              <Call fill="#333" stroke="#333" />
            </a>
            <button className="reserve" onClick={() => router.push('/reserve')}>
              예약하기
            </button>
          </Contact>
        </>
      )}
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
  display: flex;
`;
const Buttons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 15px 0 15px;
  box-sizing: border-box;
  z-index: 1;
  div.right {
    display: flex;
    gap: 15px;
  }
`;
const PrevButton = styled.button``;
const HospitalImg = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
const HospitalInfo = styled.div`
  padding: 20px 15px;
  box-sizing: border-box;
  /* border-bottom: 3px solid ${COLORS.GRAY200}; */

  &.mainTitle {
    border-bottom: 5px solid ${COLORS.GRAY200};
  }
  &.lastInfo {
    /* border: none; */
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
  .ing {
  }
  .end {
    background-color: ${COLORS.GRAY500};
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

  &.treatTime {
    display: flex;
    justify-content: center;
    ul {
      width: 100%;
    }
    li {
      line-height: 1.7;
      margin: 15px 0;
      &.active {
        font-weight: bold;
        background-color: ${COLORS.PRIMARY100};
      }
    }
  }
`;
const Introduce = styled(Notice)`
  border: none;
  background-color: ${COLORS.GRAY200};
  text-align: left;
  white-space: pre-wrap;
  line-height: 1.6;
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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

  a.call {
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

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
