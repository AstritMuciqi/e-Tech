import apiCaller from "../apiCaller";

const editBrand = async (brandId,brandBody) => {
    const result = (await apiCaller.put(`brands/${brandId}`, brandBody)).data;

    return result;
};

export default editBrand;