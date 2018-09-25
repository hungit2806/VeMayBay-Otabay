import { all, fork } from "redux-saga/effects";
import watchHandleHomeSagasAsync from './handle-home.saga'
export default function* sagas() {
  yield all([
    fork(watchHandleHomeSagasAsync),
  ]);
}
