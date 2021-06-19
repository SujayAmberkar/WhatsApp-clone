import React, { useEffect,useState } from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat';
import { Avatar,IconButton } from "@material-ui/core"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import db from './firebase';


function Sidebar() {

    const [rooms, setrooms] = useState([])

    useEffect(()=> {
       const unsubscribe = db.collection('rooms').onSnapshot(snapshot=>{
            setrooms(snapshot.docs.map(doc=>({
                id: doc.id,
                data: doc.data(),
            })))
        });
        return () => {
            unsubscribe();
        }
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                    

                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer ">
                    <SearchOutlined/>
                    <input placeholder="Search or Start new chat"></input>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addnewChat/>
                {rooms.map(room =>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
