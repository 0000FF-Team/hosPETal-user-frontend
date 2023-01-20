import { HttpStatusCode } from 'axios';

declare global {
  interface Window {
    kakao: any;
  }
}

export interface HospitalDetailProps {
  hospitalInfo: [];
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
  id: string;
}

export interface MapIProps {
  latitude: number;
  longitude: number;
}

export interface locationType {
  loaded: string;
  coordinates?: { lat: number; lng: number };
  error?: { code: number; message: string };
}
