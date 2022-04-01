import { SET_USER } from "../constants"

const UserState = {
    _id : "",
    firstName : "",
    lastName : "",
    email : ""
}

const UserReducer = (state = UserState, action) => {
    switch(action.type){
      case SET_USER:
       return action.user
       default:
         return state
    }
  }
export default UserReducer