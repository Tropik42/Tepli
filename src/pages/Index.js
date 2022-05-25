import React from "react"

const Index = () => {
    return (
        <div>



<div className="wrapper">
  <div className="container">

    <div className="col-lg-3">



      <div className="news hidden-md hidden-sm hidden-xs">
        <a href="#"><h3>НОВОСТИ</h3></a>
        <hr/>

          <a href="#"><h4>Заголовок новости</h4></a>
          <p>23.02.2019</p>
          <p className="text-justify">Новости про свет, интерьеры и так далее</p>
          <hr/>
            <a href="#"><h4>Ещё заголовок новости</h4></a>
            <p>23.02.2019</p>
            <p className="text-justify">В интерьере, в его дизайне мелочей не бывает. Здесь взаимосвязано практически всё.</p>
            <hr/>
              <a href="#"><h4>Крутейший заголовок</h4></a>
              <p>23.02.2019</p>
              <p className="text-justify">В интерьере, в его дизайне мелочей не бывает. Здесь взаимосвязано практически всё.</p>
              <hr/>
                <a href="#"><h4>Ещё крутейший заголовок</h4></a>
                <p>23.02.2019</p>
                <p className="text-justify">В интерьере, в его дизайне мелочей не бывает. Здесь взаимосвязано практически всё.</p>
                <hr/>
                </div>

              </div>

              <div className="col-lg-9">

                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="10000" >

                  <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                  </ol>


                  <div className="carousel-inner">
                    <div className="item active">
                      <img src="img/car1.jpg" alt="..."/>
                        <div className="carousel-caption">
                          <h2>Шикарные светильники</h2>
                        </div>
                    </div>
                    <div className="item">
                      <img src="img/car2.jpg" alt="..."/>
                        <div className="carousel-caption">
                          <h2>А эти ещё лучше</h2>
                        </div>
                    </div>
                    <div className="item">
                      <img src="img/car3.jpg" alt="..."/>
                        <div className="carousel-caption">
                          <h2>Эта лампа - просто бомба</h2>
                        </div>
                    </div>
                    ...
                  </div>



                  <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                  </a>
                  <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                  </a>
                </div>

                <h2 className="h2_header">О КОМПАНИИ</h2>
                <hr/>
                  <div className="about-company">
                    <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                  <div className="about-company hidden-xs">
                    <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus </p>
                  </div>
                  <div className="learn_more">
                    <p className="text-right"><a href="about.html">Узнать о компании больше</a></p>
                  </div>


                  <div className="margin-5"></div>

                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-xs-6 col-sm-4">
                      <div id="carousel_1" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div className="carousel-inner">
                          <div className="item active">
                            <img className="ut" src="img/lumb1.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb4.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb6.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xs-6 col-sm-4">
                      <div id="carousel_1" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div className="carousel-inner">
                          <div className="item active">
                            <img className="ut" src="img/lumb5.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb4.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb3.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 hidden-xs">
                      <div id="carousel_1" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div className="carousel-inner">
                          <div className="item active">
                            <img src="img/lumb2.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb3.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb4.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 hidden-xs hidden-sm">
                      <div id="carousel_1" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div className="carousel-inner">
                          <div className="item active">
                            <img src="img/lumb6.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb4.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb5.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="margin-5"></div>

                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div id="carousel_1" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div className="carousel-inner">
                          <div className="item active">
                            <img src="img/lumb3.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb2.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb1.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div id="carousel_1" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div className="carousel-inner">
                          <div className="item active">
                            <img src="img/lumb2.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb5.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb3.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 hidden-xs">
                      <div id="carousel_1" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div className="carousel-inner">
                          <div className="item active">
                            <img src="img/lumb3.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb5.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb4.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 hidden-xs hidden-sm">
                      <div id="carousel_1" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div className="carousel-inner">
                          <div className="item active">
                            <img src="img/lumb4.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb5.jpg" alt="..."/>
                          </div>
                          <div className="item">
                            <img src="img/lumb6.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="margin-5"></div>

              </div>
            </div>
          </div>
          
          </div>
    )
}
export { Index }