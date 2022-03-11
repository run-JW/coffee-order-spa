const API_ENDPOINT = 
  "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products";


const request = async url => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.warn(error);
  }
};

const api = {
  fetchProducts: () => {
    return request(`${API_ENDPOINT}`);
  },
  fetchProductFromId: productId => {
    return request(`${API_ENDPOINT}/${productId}`);
  }
};

export default api;