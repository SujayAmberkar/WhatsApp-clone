import React ,{useEffect,useState}from 'react'
import './Chat.css'
import { Avatar,IconButton } from "@material-ui/core"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticonIcon";
import {SearchOutlined,AttachFile,MoreVert} from '@material-ui/icons/'; 
function Chat() {
    const [seed, setSeed] = useState('')
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [])

    return (
        <div className="chat">

          <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`}/>

            <div className="chat__headerInfo">
                <h3>Room Name</h3>
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
            <InsertEmoticonIcon/>
            <form>
            <input type="text"/>
            <button>Send a message</button>
            </form>
            <MicIcon />
          </div>

        </div>
    )
}

export default Chat
