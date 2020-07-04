import firebase from "../../../config/firebase";
import cuid from "cuid";

import { GET_GUEST_RSVP } from "../../constants/rsvpConstants/rsvpConstants";

import Router from "next/router";

import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "../asyncActions/asyncActions";


// GET RSVP DETAILS
export const getRSVPDetails = (values) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    const guestID = values.guestID;
    const accessCode = values.accessCode;

    const guestQuery = firestore
      .collection("guest_details")
      .where("guestID", "==", `${guestID}`)
      .where("accessCode", "==", `${accessCode}`);

    try {
      dispatch(asyncActionStart());
      let query = await guestQuery.get();

      let guestDetails = [];

      if (!query.empty) {
        for (let i = 0; i < query.docs.length; i++) {
          let guest = {
            id: query.docs[i].id,
            ...query.docs[i].data(),
          };
          guestDetails.push(guest);
        }

        dispatch({ type: GET_GUEST_RSVP, payload: { guestDetails } });
        await Router.push({
          pathname: "/rsvp_update",
          query: { id: query.docs[0].id },
        });
      }

      if (query.empty) {
        console.log('NOT FOUND')
      }

      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
};
