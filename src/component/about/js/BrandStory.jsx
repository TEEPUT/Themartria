import React from "react";
import style from "./css/BrandStory.module.css";

export default function BrandStory() {
    return (
        <div>
            <section id="1-section"></section>
            <div className={style.semiJump} />
            <h1 className={style.title}>Brand Story</h1>
            <div className={style.BSContentsContainer}>
                <img src="/image/image.png" className={style.BSImage} alt="Brand Story" />
                <div className={style.BSText}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={style.BSText}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.</p>
                </div>
                <img src="/image/image.png" className={style.BSImage} />
            </div>
            <section id="2-section"></section>
            <div className={style.semiJump}></div>
            <h2 className={style.BSTitleOuttro}>Lorem ipsum dolor</h2>
            <img src="/image/image.png" className={style.BSImageOuttro} />

        </div>
    );
}
