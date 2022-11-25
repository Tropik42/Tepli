import React, {useEffect, useState} from "react"
import instance from "../axios/axiosController"


const Images = () => {
    const [allImages, setImages] = useState([])
    const getImages = async () => {
        try {
            const {data} = await instance.get('/')
            setImages(data.slice(-8))
        } catch (err) {
            console.error(err.message)
        }
    }
    useEffect(() => {
        getImages();
    },);
    return (
        <React.Fragment>
            {allImages.slice(0).map(image => (
                <div key={image.imageId}>
                    <div className="col-lg-3 col-md-2 text-center">
                        <img className="img-thumbnail img-responsive"
                        src= {"http://localhost:5000/" + image.img}
                        alt="Безумный Макс"
                        />
                    </div>
                </div>
            ))
            }
        </React.Fragment>
    )
}

export {Images}
