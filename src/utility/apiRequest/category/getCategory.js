import apiCaller from '../apiCaller';

const getCategory = async (categoryId) => {
    const result = (await apiCaller.get(`categories/${categoryId}`)).data;

    return result.data;
};

export default getCategory;
