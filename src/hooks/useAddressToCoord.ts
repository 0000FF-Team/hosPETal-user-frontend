import { HttpStatusCode } from 'axios';
import { useEffect } from 'react';

const useAddressToCoord = (address: string) => {
  useEffect(() => {
    // Script 생성
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
        const callback = function (result: any, status: HttpStatusCode) {
          if (status == kakao.maps.services.Status.OK) {
            const addressCoord: number[] = [result[0].x, result[0].y];
            return addressCoord;
          } else if (status == kakao.maps.services.Status.ZERO_RESULT) {
            return Error('검색 결과가 없습니다');
          } else if (status == kakao.maps.services.Status.ERROR) {
            console.log('에러가 발생했습니다');
          }
        };

        geocoder.addressSearch(address, callback);
      });
    };

    mapLibraryServicesScript.addEventListener('load', getCoord);

    return () => mapLibraryServicesScript.removeEventListener('load', getCoord);
  }, []);
};

export default useAddressToCoord;
