import styled from '@emotion/styled';
import { HttpStatusCode } from 'axios';
import { MapIProps } from 'config/types';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Map = ({ latitude, longitude, data }: MapIProps) => {
  const mapLibraryServicesScript = document.createElement('script');
  mapLibraryServicesScript.async = true;
  mapLibraryServicesScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services&autoload=false`;
  document.head.appendChild(mapLibraryServicesScript);
  const router = useRouter();

  // 현재 위치로 이동
  const panTo = () => {
    const { kakao } = window;
    kakao.maps.load(() => {
      // 지도 생성
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 6,
        draggable: true,
      };
      const map = new kakao.maps.Map(container, options);

      const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
      map.panTo(moveLatLon);
    });
  };

  const onLoadKakaoMap = () => {
    const { kakao } = window;
    kakao.maps.load(() => {
      // 지도 생성
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 6,
        draggable: true,
      };
      const map = new kakao.maps.Map(container, options);

      // 커스텀 마커 이미지
      const imageSrc = '/images/marker.png';
      const imageSize = new kakao.maps.Size(64, 64);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      data.map((hospital: any) => {
        const geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체 생성
        geocoder.addressSearch(hospital.address, function (result: any, status: HttpStatusCode) {
          if (status === kakao.maps.services.Status.OK) {
            const coord = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 마커 생성
            const marker = new kakao.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: coord, // 마커를 표시할 위치
              image: markerImage, // 마커 이미지
              clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정
            });

            // 커스텀 오버레이
            const customOverlay = new kakao.maps.CustomOverlay({
              content: `<div class="customOverlay">
                          <span>${hospital.name}</span>
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

            // 마커 클릭 시 이벤트
            kakao.maps.event.addListener(marker, 'click', function () {
              router.push(`/detail/${hospital.id}`);
            });
          }
        });
      });
    });
  };

  useEffect(() => {
    mapLibraryServicesScript.addEventListener('load', onLoadKakaoMap);
    return () => mapLibraryServicesScript.removeEventListener('load', onLoadKakaoMap);
  }, [onLoadKakaoMap]);

  return <MapContainer id="map">{/* <button onClick={panTo} /> */}</MapContainer>;
};

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  button {
    background-image: url(/images/gps.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 25px;
    right: 30px;
    z-index: 10;
  }
`;

export default Map;
