import  React, {useState} from "react"
import AsyncStorage from '@react-native-community/async-storage';
import NoteContext from "./NoteContext"


const NoteState = (props)=>{
    const host = "http://192.168.1.5"
    const [notes, setNotes] = useState([])


    const login = async (email, password)=>{
        const response = await fetch(`${host}/api/auth/login-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password })
        })
        const json = await response.json()
        if(json.success===true){
            await AsyncStorage.setItem('authToken', JSON.stringify(json.authToken));
            return true;
        }
        else{
            return false;
        }
    }

    const getNotes = async ()=>{
        const authToken = await AsyncStorage.getItem('authToken');
        const response = await fetch(`${host}/api/notes/fetch-all-notes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiJ9.NjE3OGU5YTFiMGYyN2JmODU1NmU0YWEz.Gc4Wz4wJGhu1-l6W0-Ytxe-oV4t9GFhMZxcZOPycFv4"
            }
        })
        const json = await response.json()
        setNotes(json)
    }

    const addNote = async (title, description, tag)=>{
        const response = await fetch(`${host}/api/notes/add-notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiJ9.NjE3OGU5YTFiMGYyN2JmODU1NmU0YWEz.Gc4Wz4wJGhu1-l6W0-Ytxe-oV4t9GFhMZxcZOPycFv4"
            },
            body: JSON.stringify({title, description, tag})
        })
        const note = await response.json()
        setNotes(notes.concat(note))
    }

    return(
        <NoteContext.Provider value={{notes, getNotes, addNote, login}}>
            {props.children}
        </NoteContext.Provider> 
    )
}

export default NoteState