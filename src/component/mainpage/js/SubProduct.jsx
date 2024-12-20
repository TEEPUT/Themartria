import style from './css/SubProduct.module.css'

export default function SubProduct() {
    
    return (
        <div>
            <div className={style.header}>
                <h1 className={style.devider}>Lorem ipsum</h1>
                <img src="/image/devider.png" className={style.devider} alt="Divider" />
                <p className={style.devider}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <div className={style.semijump}></div>
            
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
        </div>
    )
}