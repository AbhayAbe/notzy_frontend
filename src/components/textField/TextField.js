import "./TextField.css"
 const TextField = ({placeHolder, label, type}) => {
    
    return (
        <div className="textFieldContainer"> <label for={"textfield"+label.toLowerCase}>{label}</label>
        <div className="textField">
            {type != null ?  <input placeholder={placeHolder} type={type}/> : <input placeholder={placeHolder}/>}
        </div>
        </div>
    )
}
export default TextField