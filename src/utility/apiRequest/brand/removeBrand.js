import { async } from '@firebase/util';
import apiCaller from '../apiCaller';

const removeBrand = async (brandId) => {
    const result = (await apiCaller.delete(`brands/${brandId}`)).data;
    
    return result;
};

export default removeBrand;