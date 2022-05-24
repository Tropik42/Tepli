import React from "react"

const Price = () => {
    return (
        <div>


<div class="wrapper">
    <div class="container">

        <div class="col-lg-12">

            <h2 class="h2_header">СКАЧАТЬ ПРАЙС-ЛИСТ</h2>
            <hr/>
                <p style="font-size: 130%;">Здесь вы можете скачать прайс-листы на нашу продукцию</p>

                <div class="margin-5"></div>

                <div class="col-lg-6 col-xs-12 btn">
                    <a href="files/Price_main.pdf" target="_blank" download="">
                        <button type="button" class="btn btn-primary btn-lg btn_xls">Скачать основной прайс PDF <i class="fas fa-download"></i></button>
                    </a>
                </div>

                <div class="col-lg-6 col-xs-12 btn">
                    <a href="files/Price_main.xlsx" download="">
                        <button type="button" class="btn btn-primary btn-lg btn_xls">Скачать основной прайс XLS <i class="fas fa-download"></i></button>
                    </a>
                </div>
                <div class="col-lg-6 col-xs-12 btn">
                    <a href="files/Price_essentials.pdf" target="_blank" download="">
                        <button type="button" class="btn btn-primary btn-lg btn_xls">Дополнительная серия продукции Essentials PDF <i class="fas fa-download"></i></button>
                    </a>
                </div>

                <div class="col-lg-6 col-xs-12 btn">
                    <a href="files/Price_essentials.xlsx" download="">
                        <button type="button" class="btn btn-primary btn-lg btn_xls">Дополнительная серия продукции Essentials XLS <i class="fas fa-download"></i></button>
                    </a>
                </div>




        </div>

    </div>
</div>


</div>
    )
}
export { Price }
