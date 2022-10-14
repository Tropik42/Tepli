import React, {useEffect, useState} from "react"
import {NewsList} from "../components/NewsList";

const axios = require('axios')
const News = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const postNews = {title, body}
            const result = await axios.post('http://localhost:5000/api/v1/news', postNews)
            console.log(result)
        } catch (e) {
            console.log(e.message())
        }
    }

    return (
        <React.Fragment>

            <form className={"d-flex mt-2"} onSubmit={onSubmitForm}>
                <div className={"mb-3 d-flex"}>
                    <label className={"text-danger"}>Заголовок</label>
                    <input type={"text"}
                           className={"form-control"}
                           value={title}
                           onChange={e => setTitle(e.target.value)}
                           id="exampleFormControlInput1"/>
                </div>
                <div className={"mb-3"}>
                    <label className={"text-danger"}>Новость</label>
                    <textarea className={"form-control"}
                              id="exampleFormControlTextarea1"
                              value={body}
                              onChange={e => setBody(e.target.value)}
                              rows="3">
                    </textarea>
                </div>

                <div className={"mb-3"}>
                    <label className={"text-danger"}>Изображение</label>
                    <input className={"form-control"} type={"file"} id={"formFile"}/>
                </div>
                <hr className={"invisible"}/>
                <button className="btn btn-success float">Add</button>
            </form>

            <NewsList/>

        </React.Fragment>
    )
}
export {News}

