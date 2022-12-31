import axios from 'axios';
// Query Key
export const getHospitalInfoQueryKey = 'getHospitalInfo';

// API
export const apiAxios = axios.create({
  baseURL: 'https://3d610c34-7668-4cf2-9110-980174f8fa87.mock.pstmn.io',
});

export const getHospitalInfoApi = async (id: string | string[]) => {
  const resp = await apiAxios.get(`/info/hospital/${id}`);
  return resp.data;
};
