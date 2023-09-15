import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: 'http://localhost:3000/api/products',
   timeout: 10000,
});

export const getProductBySearch = (search) => {
   return axiosInstance.get(`/?search=${search}`);
};

export const getProductById = (id) => {
   return axiosInstance.get(`/${id}`);
};
