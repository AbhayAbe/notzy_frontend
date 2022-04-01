import { useRef } from 'react';
import { PersonCircleOutline } from 'react-ionicons';
import CustButton from '../../components/button/CustButton';
import './Home.css';
const Home = () => {
  let sidebar = useRef(null);
  let popup = useRef(null);
  return (
    <div className="HomeBg">
        <div className="popup" ref = {popup}>
            <h2>FirstName LastName</h2>
            <h3>xyz@notzy.com</h3>
            <CustButton isPrimary={false} text = "Logout"/>
        </div>
      <nav className="nav">
        <h2>Notzy</h2>
        <div className="icon" onClick = {()=>{
            if (popup.current.style.visibility === "collapse"){
                popup.current.style.visibility = "visible"
                return
            }
            popup.current.style.visibility = "collapse"
            }}>
          <PersonCircleOutline color={'#6EC8A5'} height="50px" width="50px" />
        </div>
      </nav>
      <div className="mainBody">
        <div className="sideBar" id="sideBar">
          <div className="content" ref={sidebar}></div>
          <div className="hideBg">
            <div
              className="hideBttn"
              onClick={() => {
                if (sidebar.current.style.width === '10em') {
                  sidebar.current.style.width = '0';
                } else sidebar.current.style.width = '10em';
              }}
            ></div>
          </div>
        </div>
        <div className="main">
          <div className="titleContainer">
            <input placeholder="Title" type="text" className="title" />
          </div>
          <div className="noteContainer">
            <textarea className="note" placeholder="Your note..." />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
