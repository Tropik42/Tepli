import React, {useEffect, useState} from "react"
const axios = require('axios')
const News = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [allnews, setNews] = useState([])

  async function getNews() {
    const response = await axios.get('http://localhost:5000/api/v1/news')
    setNews(response.data)
    console.log(response)
  }
  useEffect(() => {
      getNews();
    }, []);

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
  console.log(allnews)

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

        <div>
          <div className="wrapper">
            <div className="container">
              <div className="col-lg-12">
                <div className="row news">
                  <h2 className="h2_header">ЗАГОЛОВОК</h2>
                  <hr/>
                  <div className="col-lg-3 col-md-2 text-center">
                    <img className="img-thumbnail img-responsive pull-left" src="img/lumb2.jpg"
                         alt="Безумный Макс"/>
                  </div>
                  <div className="col-lg-9 col-md-10">
                    <p className="text-justify">НОВОСТЬ</p>
                  </div>
                  <div className="col-lg-12">
                    <a href="" className="btn btn-lg btn-primary pull-right">Подробнее</a>
                  </div>
                </div>
                <div className="margin-5"></div>
              </div>
            </div>
          </div>

        </div>

      </React.Fragment>
  )
}
export  {News}
