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
export const GetNotes = async ({limit, sortBy, page, isAscending}) => {
    let params = `?limit=${limit}&sort=${sortBy}:${isAscending?1:-1}${page?`&page=${page}`:""}`
    let url = process.env.REACT_APP_URL + "notes" + params
    console.log("URL:::: ",url)
    try{
        let token = localStorage.getItem("JWT");
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        let response = await axios.get(url, config);
        console.log("response:: ", response)
        let notes = []
        response.data.message.forEach(note => {
            let n = new Note()
            n.createNote({id: note._id, title: note.title, data: note.data, createdAt: note.createdAt, updatedAt: note.updatedAt, email: note.email})
            console.log("currN:L: ", n)
            notes.push(n)
        })
        return {notes: notes, maxDocs: response.data.additional.maxDocs}
    } catch(err){
        console.log("$$ERR: ", err)
        return err.response.data
    }
}

export const GetNoteData = async (id) => {
    let params = `?id=${id}`
    let url = process.env.REACT_APP_URL + "getNoteData" + params
    console.log("URL:::: ",url)
    try{
        let token = localStorage.getItem("JWT");
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        let response = await axios.get(url, config);
        return response.data.message
    } catch(err){
        console.log("$$ERR: ", err)
        return err.response.data
    }
}