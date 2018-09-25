import { SET_LOCATION_TO } from '../actions/handle-home.action'
const initialState = {
    valueTo:'',
    MSTo:''
};

export default function handleHomeState (state = initialState, action) {
    switch (action.type) {
        case SET_LOCATION_TO:
            return Object.assign({}, state, {
                valueTo: action.valueTo,
                MSTo:action.MSTo
            });
        default:
            return state;
    }
}