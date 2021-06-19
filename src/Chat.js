import React ,{useEffect,useState}from 'react'
import './Chat.css'
import { Avatar,IconButton } from "@material-ui/core"
import MicIcon from '@material-ui/icons/Mic';
import { InsertEmoticon } from '@material-ui/icons/';
import {SearchOutlined,AttachFile,MoreVert} from '@material-ui/icons/'; 
import { useParams } from 'react-router-dom';
import db from './firebase';


function Chat() {
    const [input, setinput] = useState("");
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("")

    useEffect(()=>{
      if(roomId){
        db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot)=> setRoomName(snapshot.data().name));
      }
    },[roomId])


    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [roomId])

    const sendMessage = (e)=>{
      e.preventDefault();
      console.log("you typed",input);
      setinput('')
    }

    return ( 
        <div className="chat">

          <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`}/>

            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen at..</p>
            </div>

            <div className="chat__headerRight">
            <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
          </div>

          <div className="chat__body">
            <p className={`chat__message ${false && `chat__reciever`}`}><span className="chat__name">Sujay</span>Hey guys
            <span className="chat__timestamp">
                3:25pm 
            </span> 
            </p>
            
          </div>

          <div className="chat__footer">
            <InsertEmoticon/>
            <form>
            <input value={input} onChange={e=>setinput(e.target.value)} placeholder="Type a message" type="text"/>
            <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <MicIcon />
          </div>

        </div>
    )
}

export default Chat
