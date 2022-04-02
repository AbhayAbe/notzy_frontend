import  CustButton  from "../../components/button/CustButton"
import TextField from "../../components/textField/TextField"
import { useNavigate } from "react-router-dom";
import "./Login.css"
import { useState } from "react";
import { LoginUser } from "../../controllers/auth.controller";
import { useDispatch } from "react-redux";
import { SetUser } from "../../redux/actions/user.action";
const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const login = async () => {
        try{
            let res = await LoginUser(data)
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
    <div className="loginBg">
        <section className="loginForm">
            <TextField placeHolder="abc@xyz.com" label="Email" type="email" onChange={(event)=>{setData({...data, email: event.target.value})}}/>
            <TextField placeHolder="Your password" label="Password" type="password" onChange={(event)=>{setData({...data, password: event.target.value})}}/>
            <div className="buttonsContainer">
            <CustButton onClick = {login} text = "Login" isPrimary = {true} />
            <CustButton onClick = {()=>{navigate("/register")}} text = "Register" isPrimary = {false} />
            </div>
            
        </section>
    </div>
    )
}
export default Login