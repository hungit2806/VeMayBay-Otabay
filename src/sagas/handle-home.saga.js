import { call, put, takeLatest, all } from "redux-saga/effects";
import { SET_LOCATION_TO } from '../actions/handle-home.action'

function* setLocation(valueTo, MSTo) {      
    yield put({ type: SET_LOCATION_TO,  valueTo: valueTo, MSTo:MSTo });
}
export default function* watchHandleHomeSagasAsync() {
    yield all([
      takeLatest(SET_LOCATION_TO, setLocation),
    ]);
  }