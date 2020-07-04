import Router from "next/router";

export const contactUs = (values) => {
    return async (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()

        const query = firestore.collection('messages')

        try {

            await query.add({...values})
            await Router.push({
                pathname: "/"
            });

        } catch (error) {
            console.log(error)
        }

    }
}