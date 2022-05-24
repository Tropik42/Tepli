import React from "react"

const Index = () => {
    return (
        <div>



<div class="wrapper">
  <div class="container">

    <div class="col-lg-3">



      <div class="news hidden-md hidden-sm hidden-xs">
        <a href="#"><h3>НОВОСТИ</h3></a>
        <hr/>

          <a href="#"><h4>Заголовок новости</h4></a>
          <p>23.02.2019</p>
          <p class="text-justify">Новости про свет, интерьеры и так далее</p>
          <hr/>
            <a href="#"><h4>Ещё заголовок новости</h4></a>
            <p>23.02.2019</p>
            <p class="text-justify">В интерьере, в его дизайне мелочей не бывает. Здесь взаимосвязано практически всё.</p>
            <hr/>
              <a href="#"><h4>Крутейший заголовок</h4></a>
              <p>23.02.2019</p>
              <p class="text-justify">В интерьере, в его дизайне мелочей не бывает. Здесь взаимосвязано практически всё.</p>
              <hr/>
                <a href="#"><h4>Ещё крутейший заголовок</h4></a>
                <p>23.02.2019</p>
                <p class="text-justify">В интерьере, в его дизайне мелочей не бывает. Здесь взаимосвязано практически всё.</p>
                <hr/>
                </div>

              </div>

              <div class="col-lg-9">

                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="10000" >

                  <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                  </ol>


                  <div class="carousel-inner">
                    <div class="item active">
                      <img src="img/car1.jpg" alt="..."/>
                        <div class="carousel-caption">
                          <h2>Шикарные светильники</h2>
                        </div>
                    </div>
                    <div class="item">
                      <img src="img/car2.jpg" alt="..."/>
                        <div class="carousel-caption">
                          <h2>А эти ещё лучше</h2>
                        </div>
                    </div>
                    <div class="item">
                      <img src="img/car3.jpg" alt="..."/>
                        <div class="carousel-caption">
                          <h2>Эта лампа - просто бомба</h2>
                        </div>
                    </div>
                    ...
                  </div>



                  <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                  </a>
                  <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                  </a>
                </div>

                <h2 class="h2_header">О КОМПАНИИ</h2>
                <hr/>
                  <div class="about-company">
                    <p class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                  <div class="about-company hidden-xs">
                    <p class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus </p>
                  </div>
                  <div class="learn_more">
                    <p class="text-right"><a href="about.html">Узнать о компании больше</a></p>
                  </div>


                  <div class="margin-5"></div>

                  <div class="row">
                    <div class="col-lg-3 col-md-3 col-xs-6 col-sm-4">
                      <div id="carousel_1" class="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div class="carousel-inner">
                          <div class="item active">
                            <img class="ut" src="img/lumb1.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb4.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb6.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-6 col-sm-4">
                      <div id="carousel_1" class="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div class="carousel-inner">
                          <div class="item active">
                            <img class="ut" src="img/lumb5.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb4.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb3.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-4 hidden-xs">
                      <div id="carousel_1" class="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div class="carousel-inner">
                          <div class="item active">
                            <img src="img/lumb2.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb3.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb4.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 hidden-xs hidden-sm">
                      <div id="carousel_1" class="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div class="carousel-inner">
                          <div class="item active">
                            <img src="img/lumb6.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb4.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb5.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div class="margin-5"></div>

                  <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div id="carousel_1" class="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div class="carousel-inner">
                          <div class="item active">
                            <img src="img/lumb3.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb2.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb1.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div id="carousel_1" class="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div class="carousel-inner">
                          <div class="item active">
                            <img src="img/lumb2.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb5.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb3.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-4 hidden-xs">
                      <div id="carousel_1" class="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div class="carousel-inner">
                          <div class="item active">
                            <img src="img/lumb3.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb5.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb4.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 hidden-xs hidden-sm">
                      <div id="carousel_1" class="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                        <div class="carousel-inner">
                          <div class="item active">
                            <img src="img/lumb4.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb5.jpg" alt="..."/>
                          </div>
                          <div class="item">
                            <img src="img/lumb6.jpg" alt="..."/>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div class="margin-5"></div>

              </div>
            </div>
          </div>
          
          </div>
    )
}
export { Index }