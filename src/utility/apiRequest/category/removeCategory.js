import { async } from '@firebase/util';
import apiCaller from '../apiCaller';

const removeCategory = async (categoryId) => {
    const result = (await apiCaller.delete(`categories/${categoryId}`)).data;
    
    return result;
};

export default removeCategory;