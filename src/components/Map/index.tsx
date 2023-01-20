import styled from '@emotion/styled';
import { HttpStatusCode } from 'axios';
import { MapIProps } from 'config/types';
import React, { useEffect } from 'react';

// 병원 좌표
const positions = [
  {
    id: 1,
    name: '행복한 동물병원',
    location: '경기도 안성시 영동 437-1',
  },
  {
    id: 2,
    name: '우리 동물병원',
    location: '경기도 안성시 인지동 419-2',
  },
  {
    id: 3,
    name: '안성동물의료센터',
    location: '경기 안성시 아양1로 73 안성동물의료센터',
  },
  {
    id: 4,
    name: '이성준 동물병원',
    location: '경기도 안성시 봉남동 326-2',
  },
  {
    id: 5,
    name: '제네틱스 동물병원',
    location: '경기도 안성시 계동 203-17',
  },
  {
    id: 6,
    name: '공도 동물병원',
    location: '경기도 안성시 공도읍 승두리 62-1',
  },
  {
    id: 7,
    name: '웰니스 동물병원',
    location: '경기도 안성시 서동대로 3930-39 스타필드안성 1층',
  },
];

const Map = ({ latitude, longitude }: MapIProps) => {
  useEffect(() => {
    const mapLibraryServicesScript = document.createElement('script');
    mapLibraryServicesScript.async = true;
    mapLibraryServicesScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services&autoload=false`;
    document.head.appendChild(mapLibraryServicesScript);

    const onLoadKakaoMap = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        // 지도 생성
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: 4,
          draggable: true,
        };
        const map = new kakao.maps.Map(container, options);

        // 커스텀 마커 이미지
        const imageSrc = '/images/marker.png';
        const imageSize = new kakao.maps.Size(64, 64);
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        positions.map((position) => {
          const geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체 생성
          geocoder.addressSearch(position.location, function (result: any, status: HttpStatusCode) {
            if (status === kakao.maps.services.Status.OK) {
              const coord = new kakao.maps.LatLng(result[0].y, result[0].x);
              const marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: coord, // 마커를 표시할 위치
                image: markerImage, // 마커 이미지
              });

              // 커스텀 오버레이
              const customOverlay = new kakao.maps.CustomOverlay({
                content: `<div class="customOverlay">
                            <span>${position.name}</span>
                          </div>`,
                position: coord,
              });

              // 마우스를 올렸을 때 커스텀 오버레이 표시
              kakao.maps.event.addListener(marker, 'mouseover', function () {
                customOverlay.setMap(map);
              });
              kakao.maps.event.addListener(marker, 'mouseout', function () {
                customOverlay.setMap(null);
              });
            }
          });
        });
      });
    };

    mapLibraryServicesScript.addEventListener('load', onLoadKakaoMap);
    return () => mapLibraryServicesScript.removeEventListener('load', onLoadKakaoMap);
  }, [latitude, longitude]);

  return <MapContainer id="map" />;
};

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Map;
