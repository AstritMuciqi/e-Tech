import apiCaller from '../apiCaller';

const createCategory = async (categoryBody) => {
    const result = (await apiCaller.post("categories/", categoryBody)).data;

    return result;
};

export default createCategory;