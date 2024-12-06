import { put, takeEvery } from "redux-saga/effects";

import { createRecord, deleteRecord, getRecord } from "./Services";

import {
  CREATE_WISHLIST,
  CREATE_WISHLIST_RED,
  DELETE_WISHLIST,
  DELETE_WISHLIST_RED,
  GET_WISHLIST,
  GET_WISHLIST_RED,
} from "../Constants";

function* createSaga(action) {
  let response = yield createRecord("wishlist", action.payload);
  yield put({ type: CREATE_WISHLIST_RED, payload: response });
}

function* getSaga() {
  // console.log("called..");
  let response = yield getRecord("wishlist");
  yield put({ type: GET_WISHLIST_RED, payload: response });
}

function* deleteSaga(action) {
  yield deleteRecord("wishlist", action.payload);
  yield put({ type: DELETE_WISHLIST_RED, payload: action.payload });
}

export default function* wishlistSaga() {
  yield takeEvery(CREATE_WISHLIST, createSaga);
  yield takeEvery(GET_WISHLIST, getSaga);
  yield takeEvery(DELETE_WISHLIST, deleteSaga);
}
