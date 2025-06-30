const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getAllBikesApi = () => {
  return fetch(`${baseApiUrl}/bikes`).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to get all bikes");
  });
};

export const getAllBikesAdminApi = () => {
  return fetch(`${baseApiUrl}/bikes/AdminBikes`).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to get all bikes");
  });
};

export const getAllBikeTypesApi = () => {
  return fetch(`${baseApiUrl}/types`).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to get all bike types");
  });
};

export const getAllBrandsApi = () => {
  return fetch(`${baseApiUrl}/brands`).then((res) => {
    if (res.status === 200){
      try {
        return res.json();
      } catch (error) {
        return [];
      }
    } 
    else throw new Error("Failed to get all bike types");
  });
};

export const getBikesByTypeIdApi = (typeId: number) => {
  return fetch(`${baseApiUrl}/bikes?type_id=${typeId}`).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error(`Failed to get bikes by typeId ${typeId}`);
  });
};

export const getBikesByBrandIdApi = (brandId: number) => {
  return fetch(`${baseApiUrl}/bikes?brand_id=${brandId}`).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error(`Failed to get bikes by brandId ${brandId}`);
  });
};

export const getBikeByIdApi = (id: number) => {
  return fetch(`${baseApiUrl}/bikes/${id}`).then((res) => {    
    if (res.status === 200) return res.json();
    else throw new Error(`Failed to get bike with Id ${id}`);
  });
};

export const getBikeMediaItemsApi = (id: number) => {
  return fetch(`${baseApiUrl}/bikes/${id}/media_items`).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error(`Failed to get bike media items with Id ${id}`);
  });
};
