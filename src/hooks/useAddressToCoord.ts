import { HttpStatusCode } from 'axios';
import { useEffect, useState } from 'react';

// 파라미터로 받은 주소값을 좌표값으로 변환해주는 Hook
const useAddressToCoord = (address: string) => {
  const [coord, setCoord] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    const mapLibraryServicesScript = document.createElement('script');
    mapLibraryServicesScript.async = true;
    mapLibraryServicesScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services&autoload=false`;
    document.head.appendChild(mapLibraryServicesScript);

    const getCoord = () => {
      const { kakao } = window;

      kakao.maps.load(() => {
        // 주소-좌표 변환 객체 생성
        const geocoder = new kakao.maps.services.Geocoder();

        // 검색 결과를 받을 콜백함수
        const getResult = function (result: any, status: HttpStatusCode) {
          if (status == kakao.maps.services.Status.OK) {
            setCoord({
              ...coord,
              lat: result[0].x,
              lng: result[0].y,
            });
          } else if (status == kakao.maps.services.Status.ZERO_RESULT) {
            return Error('검색 결과가 없습니다');
          } else if (status == kakao.maps.services.Status.ERROR) {
            return Error('에러가 발생했습니다');
          }
        };

        geocoder.addressSearch(address, getResult);
      });
    };

    mapLibraryServicesScript.addEventListener('load', getCoord);

    return () => mapLibraryServicesScript.removeEventListener('load', getCoord);
  }, []);

  return coord;
};

export default useAddressToCoord;
