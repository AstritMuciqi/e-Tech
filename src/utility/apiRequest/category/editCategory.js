import apiCaller from "../apiCaller";

const editCategory = async (categoryId,categoryBody) => {
    const result = (await apiCaller.put(`categories/${categoryId}`, categoryBody)).data;

    return result;
};

export default editCategory;