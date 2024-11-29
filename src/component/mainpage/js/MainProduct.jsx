import style from './css/MainProduct.module.css'

export default function MainProduct() {
    return(
        <div>
            <div className={style.header}>
                <h1 className={style.devider}>Lorem ipsum</h1>
                <img src="/image/devider.png" className={style.devider} alt="Divider" />
                <p className={style.devider}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        <div className={style.semijump}></div>
        <div className={style.container}>
            <img src='/image/image.png' className={style.reviewBox1}/>
            <div className={style.blurbox}></div>
            <img src='/image/image.png' className={style.reviewBox2}></img>
        </div>
        </div>
    )
}