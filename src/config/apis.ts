import axios from 'axios';

const convert = require('xml-js');

// Query Key
export const getHospitalListQueryKey = 'getHospitalList';
export const getHospitalInfoQueryKey = 'getHospitalInfo';
export const getReserveListQueryKey = 'getReserveList';
export const getReserveInfoQueryKey = 'getReserveInfo';
export const searchHospitalQueryKey = 'searchHospital';

// API
export const apiAxios = axios.create({
  baseURL: 'http://localhost:9000',
});

export const getHospitalListApi = async () => {
  const resp = await apiAxios.get(`/hospital`);
  return resp.data;
};

export const searchHospitalApi = async (keyword: string | string[] | undefined) => {
  const resp = await apiAxios.get(`/hospital?name_like=${keyword}`);
  return resp.data;
};

export const getHospitalInfoApi = async (id: number) => {
  // const resp = await apiAxios.get(`/Animalhosptl?KEY=${process.env.NEXT_PUBLIC_OPEN_API_KEY}`)
  // const data = JSON.parse(convert.xml2json(resp.data, { compact: true }));
  // return data;
  const resp = await apiAxios.get(`/hospital/${id}`);
  return resp.data;
};

export const getReserveListApi = async () => {
  const resp = await apiAxios.get(`/reserve?_sort=date&_order=desc`);
  return resp.data;
};

export const getReserveInfoApi = async (id: string | string[] | undefined) => {
  const resp = await apiAxios.get(`/reserve/${id}`);
  return resp.data;
};
