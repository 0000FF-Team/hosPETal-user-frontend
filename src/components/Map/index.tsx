import styled from '@emotion/styled';
import { MapIProps } from 'config/types';
import React, { useEffect } from 'react';

const Map = ({ latitude, longitude }: MapIProps) => {
  useEffect(() => {
    // 카카오지도 API script 생성
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      const { kakao } = window;

      kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(latitude, longitude), // 중심좌표 (필수)
          // 옵션 목록
          // level: Number : 확대 수준 (기본값: 3)
          // mapTypeId: MapTypeId : 지도 종류 (기본값: 일반 지도)
          // draggable: Boolean : 마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부
          // scrollwheel: Boolean : 마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부
          // disableDoubleClick: Boolean : 더블클릭 이벤트 및 더블클릭 확대 가능 여부
          // disableDoubleClickZoom: Boolean : 더블클릭 확대 가능 여부
          // projectionId: String : 투영법 지정 (기본값: kakao.maps.ProjectionId.WCONG)
          // tileAnimation: Boolean : 지도 타일 애니메이션 설정 여부 (기본값: true)
          // keyboardShortcuts: Boolean | Object : 키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false)
        };
        const map = new kakao.maps.Map(container, options);
        const markerPosition = new kakao.maps.LatLng(latitude, longitude);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };

    mapScript.addEventListener('load', onLoadKakaoMap); // 스크립트가 로드된 이후에 카카오맵을 표시하도록 호출

    return () => mapScript.removeEventListener('load', onLoadKakaoMap); // 클린업
  }, [latitude, longitude]);

  return <MapContainer id="map" />;
};

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Map;
