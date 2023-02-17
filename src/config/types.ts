import { QueryFunctionContext } from '@tanstack/react-query';

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

export interface HospitalInfoType {
  data: {
    id: number;
    name: string;
    address: string;
    number: string;
    grade?: number;
    facilities?: string[];
    img?: string;
    introduce?: string;
    lunchStart?: string;
    lunchEnd?: string;
    tags: string[];
    treatTime: string[];
  };
}

export interface ReceiptProps {
  id: string | string[] | undefined;
}

export interface SearchProps {
  keyword: string | string[] | undefined;
}
