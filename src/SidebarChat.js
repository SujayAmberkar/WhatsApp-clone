import React ,{useEffect,useState}from 'react'
import { Avatar } from "@material-ui/core"
import './SidebarChat.css'
import db from './firebase'

function SidebarChat({id,name,addnewChat}) {
    const [seed, setseed] = useState('')

    useEffect(() => {
        setseed(Math.floor(Math.random()*5000))
    }, [])

    const createChat = () =>{
        const roomName = prompt("Please enter Name for chat");
        if(roomName){
            db.collection("rooms").add({
                name:roomName,
            })
        }
    }

    return !addnewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`}/>
            <div className="sidebarChat__infor">
                <h2>{name}</h2>
                <p>Last message</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New chat</h2>
        </div>
    )
}

export default SidebarChat
