import  CustButton  from "../../components/button/CustButton"
import TextField from "../../components/textField/TextField"
import { useNavigate } from "react-router-dom";
import "./Login.css"
const Login = () => {
    let navigate = useNavigate()
    return(
    <div className="loginBg">
        <section className="loginForm">
            <TextField placeHolder="abc@xyz.com" label="Email" type="email"/>
            <TextField placeHolder="Your password" label="Password" type="password"/>
            <div className="buttonsContainer">
            <CustButton onClick = {()=>{}} text = "Login" isPrimary = {true} />
            <CustButton onClick = {()=>{navigate("/register")}} text = "Register" isPrimary = {false} />
            </div>
            
        </section>
    </div>
    )
}
export default Login