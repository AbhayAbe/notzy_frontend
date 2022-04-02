import "./LoadingScreen.css"
import ReactLoading from 'react-loading';
 const LoadingScreen = ({color, type, isVisible}) => {
    
    return (
        <div className="loadingScreenBg" style={isVisible?{visibility : "visible"}:{visibility : "collapse"}}>
            <ReactLoading type ={type} color={color} height={50} width={50}/>
        </div>
    )
}
export default LoadingScreen