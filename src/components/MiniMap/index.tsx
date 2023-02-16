import styled from '@emotion/styled';
import { HttpStatusCode } from 'axios';
import React, { useEffect } from 'react';

const MiniMap = ({ data }: any) => {
  const onLoadKakaoMap = () => {
    const { kakao } = window;
    kakao.maps.load(() => {
      // 커스텀 마커 이미지
      const imageSrc = '/images/marker.png';
      const imageSize = new kakao.maps.Size(64, 64);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      const geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체 생성
      geocoder.addressSearch(data.address, function (result: any, status: HttpStatusCode) {
        const coord = new kakao.maps.LatLng(result[0].y, result[0].x);

        if (status === kakao.maps.services.Status.OK) {
          // 지도 생성
          const container = document.getElementById('map');
          const options = {
            center: new kakao.maps.LatLng(result[0].y, result[0].x),
            level: 3,
            draggable: true,
          };
          const map = new kakao.maps.Map(container, options);

          // 마커 생성
          const marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: coord, // 마커를 표시할 위치
            image: markerImage, // 마커 이미지
            clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정
          });
          // 마커 클릭 시 이벤트
          kakao.maps.event.addListener(marker, 'click', function () {});
        }
      });
    });
  };

  useEffect(() => {
    const mapLibraryServicesScript = document.createElement('script');
    mapLibraryServicesScript.async = true;
    mapLibraryServicesScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services&autoload=false`;
    document.head.appendChild(mapLibraryServicesScript);
    mapLibraryServicesScript.addEventListener('load', onLoadKakaoMap);
    return () => mapLibraryServicesScript.removeEventListener('load', onLoadKakaoMap);
  }, [onLoadKakaoMap]);

  return <MapContainer id="map" />;
};

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  /* position: relative; */
`;

export default MiniMap;
