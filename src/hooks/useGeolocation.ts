import { useEffect } from 'react';

const useGeolocation = () => {
  useEffect(() => {
    if ('geolocation' in navigator) {
      /* 위치정보 사용 가능 */
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        const latitude = position.coords.latitude;
        const longtitude = position.coords.longitude;
        const data = { latitude, longtitude };
        return data;
      });
    } else {
      /* 위치정보 사용 불가능 */
    }
  });
};

export default useGeolocation;
