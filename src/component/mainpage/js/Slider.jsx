import style from './css/Slider.module.css'

export default function Slider() {
    
    return (
        <div className={style.container}>
            <div className={style.subcontainer1}>
                <div className={style.mainImage}>
                    <div className={style.subImageBox1}>
                        <div>Lorem ipsum dolor sit amet</div>
                        <div>Lorem ipsum dolor sit amet</div>
                    </div>
                    <img src='./image/image.png' className={style.subImageBox2} />
                </div>
                <div className={style.mainImage}>
                    <div   div className={style.subImageBox1}>
                        <div>Lorem ipsum dolor sit amet</div>
                        <div>Lorem ipsum dolor sit amet</div>
                    </div>
                    <img src='./image/image.png' className={style.subImageBox2} />
                </div>
            </div>
            <div className={style.subcontainer2}>
                <div className={style.mainImage}>
                    <img src='./image/image.png' className={style.subImageBox2} />
                    <div className={style.subImageBox1}>
                        <div>Lorem ipsum dolor sit amet</div>
                        <div>Lorem ipsum dolor sit amet</div>
                    </div>
                </div>
                <div className={style.mainImage}>
                    <img src='./image/image.png' className={style.subImageBox2} />
                    <div className={style.subImageBox1}>
                        <div>Lorem ipsum dolor sit amet</div>
                        <div>Lorem ipsum dolor sit amet</div>
                    </div>
                </div>
            </div>
        </div>
    )
}