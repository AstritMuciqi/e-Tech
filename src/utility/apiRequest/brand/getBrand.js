import apiCaller from "../apiCaller";

const getBrand = async brandId => {
  const result = (await apiCaller.get(`brands/${brandId}`)).data;

  return result.data;
};

export default getBrand;
