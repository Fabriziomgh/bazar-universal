export const getProductBySearch = (search) => {
   return fetch(`http://localhost:3000/api/products?search=${search}`);
};

export const getProductById = (id) => {
   return fetch(`http://localhost:3000/api/products/${id}`);
};
