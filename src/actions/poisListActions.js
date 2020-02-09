import { GET_POIS_LIST } from '../constants/types';

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
            console.log(apiReq);
            await dispatch(setPoisList(apiReq));
            return apiReq || [];
        } catch (error) {
            console.error(error);
        }
    };
}