import { locationType } from 'config/types';
import { useEffect, useState } from 'react';

// 사용자의 현재 위치(좌표)를 가져오는 hook
const useGeolocation = () => {
  const [location, setLocation] = useState<locationType>({
    loaded: 'loading',
    coordinates: { lat: 0, lng: 0 },
  });

  const onSuccess = (location: { coords: { latitude: number; longitude: number } }) => {
    setLocation({
      loaded: 'true',
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: 'false',
      error,
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 1,
        message: 'Geolocation not supported',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocation;
