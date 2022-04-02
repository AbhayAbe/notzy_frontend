import "./TextField.css"
 const TextField = ({placeHolder, label, onChange, type}) => {
    
    return (
        <div className="textFieldContainer"> <label for={"textfield"+label.toLowerCase}>{label}</label>
        <div className="textField">
            {type != null ?  <input placeholder={placeHolder} onChange = {(event)=>{onChange(event)}} type={type}/> : <input placeholder={placeHolder} onChange = {(event)=>{onChange(event)}}/>}
        </div>
        </div>
    )
}
export default TextField