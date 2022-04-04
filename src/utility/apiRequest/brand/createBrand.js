import apiCaller from '../apiCaller';

const createBrand = async (brandBody) => {
    const result = (await apiCaller.post("brands/", brandBody)).data;

    return result;
};

export default createBrand;