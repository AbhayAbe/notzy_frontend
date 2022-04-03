import "./CustButton.css"
 const CustButton = ({isPrimary, text, onClick, type, isDisabled}) => {
    
    return (
        isPrimary === true ?
        <div className={isDisabled ? "primaryBttnDisabledBg" :"primaryBttnBg custButton"} onClick = {isDisabled ? ()=>{} : onClick} >
           {text}
        </div>
        :
        <div className={isDisabled ? "secondaryBttnDisabledBg" :"secondaryBttnBg custButton"} onClick = {isDisabled ? ()=>{} : onClick}>
           {text}
        </div>
    )
}
export default CustButton