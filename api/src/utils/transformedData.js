export const transformedData = (products) => {
   const productsTranformed = products.map(({ __v, _id, ...product }) => ({
      id: _id,
      ...product,
   }));
   return productsTranformed;
};
