import { QueryFunctionContext } from '@tanstack/react-query';
import { MouseEventHandler } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export interface HospitalDetailProps {
  hospitalInfo: [];
  id: QueryFunctionContext<(string | number)[]>;
}

export interface SearchBarInfo {
  placeholder: string;
}

export interface AccordionDataInfo {
  title: string;
  contents: JSX.Element;
}

export interface ReceiptCardInfo {
  data: any;
}

export interface MapIProps {
  latitude: number;
  longitude: number;
  data?: any;
}

export interface locationType {
  loaded: string;
  coordinates?: { lat: number; lng: number };
  error?: { code: number; message: string };
}
