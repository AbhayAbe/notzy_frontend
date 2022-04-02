import { useRef, useState, useEffect } from 'react';
import { PersonCircleOutline } from 'react-ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustButton from '../../components/button/CustButton';
import LoadingScreen from '../../components/loadingScreen/LoadingScreen';
import { AuthenticateUser, GetUser, LogoutUser } from '../../controllers/auth.controller';
import { GetNotes, SaveNoteData, SaveNoteTitle } from '../../controllers/notes.controller';
import { SetUser } from '../../redux/actions/user.action';
import './Home.css';
const Home = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let sidebar = useRef(null);
  let popup = useRef(null);
  const [isLoading, setIsLoading] = useState(true)
  const [iconColor, setIconColor] = useState("#6EC8A5")
  const [notes, setNotes] = useState([])
  const [currPage, setCurrPage] = useState(1)
  const [noteData, setNoteData] = useState({
    data: "",
    typing: false,
    timeout: 0
  })
  const [noteTitle, setNoteTitle] = useState({
    title: "",
    typing: false,
    timeout: 0
  })
  const user = useSelector(state => state.User)
 useEffect(() => {
      // declare the data fetching function
  const authenticateUser = async () => {
    try{
      setIsLoading(true)
      await AuthenticateUser();
      let res = await GetUser()
      dispatch(
        SetUser({
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
        })
      );
      let notes = await GetNotes(10, "updatedAt", currPage, false)
      console.log("N: ",notes)
      setIsLoading(false)
    } catch(err){
      setIsLoading(false)
      navigate("/login")
    }
  }

  // call the function
  authenticateUser()
  },[])
  
  useEffect(() => {
    console.log("Save note data")
    console.log("Notes: ", notes)
    const timeoutId = setTimeout(() => SaveNoteData(noteData.data), 2000);
    return () => clearTimeout(timeoutId);
  }, [noteData.data]);

  useEffect(() => {
    console.log("Save note title")
    const timeoutId = setTimeout(() => SaveNoteTitle(noteTitle.title), 2000);
    return () => clearTimeout(timeoutId);
  }, [noteTitle.title]);
  const logout = async () => {
    try{
      setIsLoading(true)
     let res = await LogoutUser()
      
      dispatch(
        SetUser({
          firstName: "",
          lastName: "",
          email: "",
        })
      );
      setIsLoading(false)
      navigate("/login")
    } catch(err){
      setIsLoading(false)
      console.log(err)
      alert("Couldn't log you out!")
    }
  }
  return (
    <div className="HomeBg">
      <LoadingScreen isVisible={isLoading} color="#6EC8A5" />
        <div className="popup" ref = {popup}>
            <h2>{user.firstName+" "+user.lastName}</h2>
            <h3>{user.email}</h3>
            <CustButton onClick={logout} isPrimary={false} text = "Logout"/>
        </div>
      <nav className="nav">
        <h2>Notzy</h2>
        <div className="icon" onClick = {()=>{
            if (popup.current.style.visibility === "collapse"){
                popup.current.style.visibility = "visible"
                setIconColor("#FFFFFF")
                return
            }
            setIconColor("#6EC8A5")
            popup.current.style.visibility = "collapse"
            }}>
          <PersonCircleOutline color={iconColor} height="50px" width="50px" />
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
            <input placeholder="Title" type="text" className="title" onChange={(event) => {
              setNoteTitle({title: event.target.value})
            }} />
          </div>
          <div className="noteContainer">
            <textarea className="note" placeholder="Your note..." onChange={(event) => {
              setNoteData({data: event.target.value})
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
