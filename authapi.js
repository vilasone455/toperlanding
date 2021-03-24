import { auth } from "./utils/db";

export async function loginWithEmail(user) {

    try {
        let rs = await auth.signInWithEmailAndPassword(user.userEmail, user.userPassword)
        return {id : rs.user.uid , userEmail : rs.user.email , userName : rs.user.displayName }
    } catch (error) {
        alert("error")

        return error
    } 
}