import { GET_POIS_LIST } from '../constants/types';

export function setPoisList(poisList) {
    return {
        type: GET_POIS_LIST,
        payload: poisList,
    };
}

// Fetches pois list from the api and dispatches an action to the reducer with the api response
export function getPoisList() {
    return async (dispatch) => {
        try {
            const apiReq = await fetch('https://warply.s3.amazonaws.com/data/test_pois.json', {
            method: 'GET'
            });
            const resolvedApiReq = await apiReq.json();
            await dispatch(setPoisList(resolvedApiReq));
            return apiReq || [];
        } catch (error) {
            console.error('fetch error: '+error);
        }
    };
}