import axios from "axios"

export const getAll = async () => {
  return axios.get<IAllResponse>(import.meta.env.VITE_URL + '/').then(res => res.data);
}

export const getOne = async (countryCode: string) => {
  return axios.get<IOneResponse>(import.meta.env.VITE_URL + '/' + countryCode).then(res => res.data);
}