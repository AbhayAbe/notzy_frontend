import "./CustButton.css"
 const CustButton = ({isPrimary, text, onClick, type}) => {
    
    return (
        isPrimary === true ?
        <div className="primaryBttnBg custButton" onClick = {onClick}>
           {text}
        </div>
        :
        <div className="secondaryBttnBg custButton" onClick = {onClick}>
           {text}
        </div>
    )
}
export default CustButton