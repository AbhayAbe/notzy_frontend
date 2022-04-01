import { useNavigate } from "react-router-dom"
import  CustButton  from "../../components/button/CustButton"
import TextField from "../../components/textField/TextField"
import "./Register.css"
const Register = () => {
    let navigate = useNavigate()
    return(
        <div className="registerBg">
        <section className="registerForm">
            <TextField placeHolder="Your first name" label="First name"/>
            <TextField placeHolder="Your last name" label="Last name"/>
            <TextField placeHolder="abc@xyz.com" label="Email" type="email"/>
            <TextField placeHolder="Your password" label="Password" type="password"/>
            <div className="buttonsContainer">
            <CustButton onClick = {()=>{}} text = "register" isPrimary = {true} />
            <CustButton onClick = {()=>{navigate("/login")}} text = "Login" isPrimary = {false} />
            </div>
            
        </section>
    </div>
    )
}
export default Register