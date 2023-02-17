import styled from '@emotion/styled';
import LoadingOverlay from 'components/LoadingOverlay';
import Map from 'components/Map';
import { COLORS } from 'config/styles';
import useGeolocation from 'hooks/useGeolocation';
import { useRouter } from 'next/router';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { CenterAlign, SearchField } from '../../../styles/global';
import SearchIcon from '../../../public/images/SearchIcon.svg';
import { useQuery } from '@tanstack/react-query';
import { getHospitalListApi, getHospitalListQueryKey } from 'config/apis';

const Main = () => {
  const router = useRouter();
  const location = useGeolocation();
  const [isLoading, setIsLoading] = useState(false);
  const [coord, setCoord] = useState({
    lat: 0,
    lng: 0,
  });
  const searchInput = useRef<HTMLInputElement>(null);
  const { data } = useQuery([getHospitalListQueryKey], getHospitalListApi);

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter'
      ? router.push({
          pathname: '/search',
          query: { q: searchInput.current?.value },
        })
      : null;
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
        <Map latitude={coord.lat} longitude={coord.lng} data={data} />
      ) : (
        <div>위치 정보를 조회할 수 없습니다. 위치 권한을 허용해주세요.</div>
      )}
      <Float className="top">
        <SearchBar>
          <input ref={searchInput} placeholder="검색하기" onKeyUp={(e) => handleSubmit(e)} />
          <button type="submit">
            <SearchIcon fill="#333" className="searchIcon" />
          </button>
        </SearchBar>
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
  width: 90%;
  z-index: 5;
  &.top {
    top: 90px;
  }
`;
const SearchBar = styled(SearchField)`
  width: 90%;
  flex-direction: row;
  background-color: #fff;
  border-radius: 8px;
`;

export default Main;
