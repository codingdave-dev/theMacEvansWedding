import {GET_GUEST_RSVP} from "../../constants/rsvpConstants/rsvpConstants";
import {createReducer} from "../../../common/util/reducerUtil";

const initialState = {
    guestDetails: []
};

const getGuestDetails = (state, payload) => {
    return {
        ...state,
        guestDetails: payload.guestDetails,
    };
};


export default createReducer(initialState, {
    [GET_GUEST_RSVP]: getGuestDetails,
})
