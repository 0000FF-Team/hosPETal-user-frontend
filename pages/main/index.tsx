import styled from '@emotion/styled';
import LoadingOverlay from 'components/LoadingOverlay';
import Map from 'components/Map';
import { COLORS } from 'config/styles';
import useAddressToCoord from 'hooks/useAddressToCoord';
import useGeolocation from 'hooks/useGeolocation';
import { useRouter } from 'next/router';
import { KeyboardEvent, useEffect, useState } from 'react';
import SearchIcon from '../../public/images/SearchIcon.svg';
import { CenterAlign, SearchField } from '../../styles/global';

const MainPage = () => {
  const router = useRouter();
  const location = useGeolocation();
  const [isLoading, setIsLoading] = useState(false);
  const [coord, setCoord] = useState({
    lat: 0,
    lng: 0,
  });

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' ? router.push('/search') : null;
  };

  useEffect(() => {
    location.loaded === 'loading' ? setIsLoading(true) : setIsLoading(false);

    location.coordinates !== undefined &&
      setCoord({
        lat: location.coordinates.lat,
        lng: location.coordinates.lng,
      });
  }, [location.loaded]);

  return (
    <MapContainer>
      {location.loaded === 'true' ? (
        <Map latitude={coord.lat} longitude={coord.lng} />
      ) : (
        <div>위치 정보를 조회할 수 없습니다. 위치 권한을 허용해주세요.</div>
      )}
      <Float className="top">
        <SearchBar>
          <input type="text" placeholder="검색하기" onKeyUp={(e) => handleSubmit(e)} />
          <button type="submit">
            <SearchIcon fill="#333" className="searchIcon" />
          </button>
        </SearchBar>
      </Float>
      <Float className="bottom">
        <button className="listButton" onClick={() => router.push('/main/list')}>
          목록보기
        </button>
      </Float>
      <LoadingOverlay visible={isLoading} />
    </MapContainer>
  );
};

const MapContainer = styled(CenterAlign)`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.PRIMARY100};
`;
const Float = styled(CenterAlign)`
  position: absolute;
  /* flex-direction: column; */
  /* justify-content: space-between; */
  width: 90%;
  /* height: 90%; */
  z-index: 5;
  &.top {
    top: 90px;
  }
  &.bottom {
    bottom: 20px;
  }
  .listButton {
    background-color: #fff;
    width: 120px;
    height: 50px;
    border-radius: 8px;
  }
`;
const SearchBar = styled(SearchField)`
  width: 90%;
  flex-direction: row;
  background-color: #fff;
  border-radius: 8px;
`;

export default MainPage;
