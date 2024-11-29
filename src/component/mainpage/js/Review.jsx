import style from './css/Review.module.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Review() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={style.container}>
            <div className={style.blur}></div>
                <div className={style.header}>
                    <h1 className={style.title}>Lorem ipsum</h1>
                    <img src="/image/devider.png" className={style.image} alt="Divider" />
                    <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <Slider {...settings} className={style.maxbox}>
                    <div>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</h3>
                    </div>
                    <div>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</h3>
                    </div>
                    <div>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</h3>
                    </div>
                    <div>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</h3>
                    </div>
                    <div>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</h3>
                    </div>
                    <div>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</h3>
                    </div>
                </Slider>
        </div>
    );
}
