import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import  CustButton  from "../../components/button/CustButton"
import TextField from "../../components/textField/TextField"
import { RegisterUser } from "../../controllers/auth.controller"
import { SetUser } from "../../redux/actions/user.action"
import "./Register.css"
const Register = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const setData = (data) => {
        console.log("UserData: ",userData)
        setUserData({...userData, ...data})
    }
    const register = async () => {
        try{
            let res = await RegisterUser(userData)
            console.log("res: ", res)
            console.log({
                firstName: res.firstName,
                lastName: res.lastName,
                email: res.email,
              })
        dispatch(
            SetUser({
              firstName: res.firstName,
              lastName: res.lastName,
              email: res.email,
            })
          );
        navigate("/")
        } catch (err){
            console.log(err)
            alert(err.error)
        }
        
    }
    return(
        <div className="registerBg">
        <section className="registerForm">
            <TextField placeHolder="Your first name" label="First name" onChange={(event)=>{setData({"firstName":event.target.value})}}/>
            <TextField placeHolder="Your last name" label="Last name" onChange={(event)=>{setData({"lastName":event.target.value})}}/>
            <TextField placeHolder="abc@xyz.com" label="Email" type="email" onChange={(event)=>{setData({"email":event.target.value})}}/>
            <TextField placeHolder="Your password" label="Password" type="password" onChange={(event)=>{setData({"password":event.target.value})}}/>
            <div className="buttonsContainer">
            <CustButton onClick = {register} text = "register" isPrimary = {true} />
            <CustButton onClick = {()=>{navigate("/login")}} text = "Login" isPrimary = {false} />
            </div>
            
        </section>
    </div>
    )
}
export default Register