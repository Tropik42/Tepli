import React from 'react';


const Auth = () => {

    return (
        <div className="container">
         <form className="col-lg-8 col-md-10" >
            <div className="mb-3">
                <h2>Логин</h2>
                <input type="text" className="form-control input-group-text margin-3"  />

            </div>
            <div className="mt-3">
                <h2 style={{color: "white"}}>Пароль</h2>
                <input type="password" className="form-control mt-5"  />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button  className=" btn btn-primary  margin-5 btn-lg btn_justify-content-md-end ">Войти</button>
            </div>

        </form>
        </div>
    );
};

export {Auth};