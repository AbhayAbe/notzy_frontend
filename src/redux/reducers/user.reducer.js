import { SET_USER } from "../constants"

const UserState = {
    firstName : "",
    lastName : "",
    email : ""
}

const User = (state = UserState, action) => {
    switch(action.type){
      case SET_USER:
       return action.user
       default:
         return state
    }
  }
export default User