import { GET_POIS_LIST } from '../constants/types';
import data from './test_pois.json';

export function setPoisList(poisList) {
    return {
        type: GET_POIS_LIST,
        payload: poisList,
    };
}

export function getPoisList() {
    return async (dispatch) => {
        try {
            const apiReq = await fetch('https://warply.s3.amazonaws.com/data/test_pois.json', {
            method: 'GET'
            });
            console.log('fetch: '+apiReq.json());
            await dispatch(setPoisList(data));
            return apiReq || [];
        } catch (error) {
            console.error('fetch error: '+error);
        }
    };
}