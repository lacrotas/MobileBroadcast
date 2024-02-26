import "./Slider.scss";
import { useState } from "react";

function Slider({ imgArr }) {
    const [currentSlide, setCurrentSlide] = useState(Math.round(imgArr.length / 2) - 1);
    
    // setInterval(() => {
    //     setCurrentSlide();
    // }, 3000);
    
    // function checkIndex(index){
        
    // }

    return (
        <section className="slider">
            <div className="slider_line">
                {imgArr.map((item, index) => (
                    <img className={(currentSlide === index) ? "slider_image-choosen"
                        : (currentSlide - 1 === index) ? "slider_image_second slider_image_pre"
                            : (currentSlide - 2 === index) ? "slider_image_third slider_image_pre_pre"
                                : (currentSlide + 1 === index) ? "slider_image_third slider_image_next"
                                    : (currentSlide + 2 === index) ? "slider_image_third slider_image_next_next"
                                        : "slider_image"} src={item} alt="slider image" key={index} />
                ))}
            </div>
            <div className="slider_bar">
                {imgArr.map((item, index) => (
                    <div key={index} className={(index === currentSlide) ? "slider_bar-celected" : "slider_bar-circle"}></div>
                ))}
            </div>
        </section>
    );
}

export default Slider;
