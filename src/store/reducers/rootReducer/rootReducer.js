import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import asyncReducer from '../asyncReducers/asyncReducers'

import dialogReducer from '../dialogReducer/dialogReducer'
import rsvpReducer from "../rsvpReducer/rsvpReducer";


const rootReducer = combineReducers({
  // ASYNC
  loading: asyncReducer,

  // FIREBASE/FIRESTORE
  firebase: firebaseReducer,
  firestore: firestoreReducer,

  // REDUX FORM REDUCER
  form: formReducer,

  // DIALOG REDUCER
  dialog: dialogReducer,

  // RSVP REDUCER
  rsvp: rsvpReducer,


});

export default rootReducer;
