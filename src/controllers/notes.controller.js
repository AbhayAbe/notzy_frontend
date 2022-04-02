import axios from "axios"
import { Note } from "../models/note"

export const SaveNoteData = async (data) => {
    let url = process.env.REACT_APP_URL
    console.log("##URL: ",url)
    let response = await axios.get(url+"test")
    console.log(response)
}
export const SaveNoteTitle = async (data) => {
    let url = process.env.REACT_APP_URL
    console.log("##URL: ",url)
    let response = await axios.get(url+"test")
    console.log(response)
}
export const CreateNote = async (data) => {
    let url = process.env.REACT_APP_URL
    console.log("##URL: ",url)
    let response = await axios.get(url+"test")
    console.log(response)
}
export const GetNotes = async (limit, sortBy, page, isAscending) => {
    let params = `?limit=${limit}&sort=${sortBy}:${isAscending?1:-1}&page=${page}`
    let url = process.env.REACT_APP_URL + "notes" + params
    console.log("URL:::: ",url)
    try{
        let token = localStorage.getItem("JWT");
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        let response = await axios.get(url, config);
        let notes = []
        response.message.forEach(note => {
            let n = new Note()
            notes.push(n.createNote(note._id, note.title, note.data, note.createdAt, note.updatedAt))
        })
        return notes
    } catch(err){
        console.log("$$ERR: ", err)
        return err.response.data
    }
}