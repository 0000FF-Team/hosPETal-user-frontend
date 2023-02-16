import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

const convert = require('xml-js');

// Query Key
export const getHospitalListQueryKey = 'getHospitalList';
export const getHospitalInfoQueryKey = 'getHospitalInfo';
export const getReserveListQueryKey = 'getReserveList';
export const getReserveInfoQueryKey = 'getReserveInfo';

// API
export const apiAxios = axios.create({
  baseURL: 'https://3d610c34-7668-4cf2-9110-980174f8fa87.mock.pstmn.io',
});

export const getHospitalListApi = async () => {
  const resp = await apiAxios.get(`/info/hospital`);
  return resp.data;
};

export const getHospitalInfoApi = async (id: number) => {
  // const resp = await apiAxios.get(`/Animalhosptl?KEY=${process.env.NEXT_PUBLIC_OPEN_API_KEY}`)
  // const data = JSON.parse(convert.xml2json(resp.data, { compact: true }));
  // return data;
  const resp = await apiAxios.get(`/info/hospital?id=${id}`);
  return resp.data;
};

export const getReserveListApi = async () => {
  const resp = await apiAxios.get(`/reserve/list`);
  return resp.data;
};

export const getReserveInfoApi = async (id: number) => {
  const resp = await apiAxios.get(`/reserve/list?id=${id}`);
  return resp.data;
};
