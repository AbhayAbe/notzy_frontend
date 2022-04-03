export class Note{
    constructor(){
            this._id = ""
            this.title = ""
            this.email = ""
            this.data = ""
            this.createdAt = {}
            this.updatedAt = {}
    }
    createNote = ({id, title, email, data, createdAt, updatedAt}) => {
        console.log("Note data:N: ",id, title, email, data, createdAt, updatedAt)
            this._id = id
            this.title = title
            this.email = email
            this.data = data
            this.createdAt = createdAt
            this.updatedAt = updatedAt
            return this
    }
    toJson = () => {
        return {
            _id : this.id,
            title : this.title,
            email : this.email,
            data : this.data,
            createdAt : this.createdAt,
            updatedAt : this.updatedAt
        }
    }
}