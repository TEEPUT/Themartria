import style from './css/Review.module.css'

export default function Review() {
    return(
        <div className={style.container}>
            <img src='/image/image.png' className={style.reviewBox1}/>
            <div className={style.blurbox}></div>
            <img src='/image/image.png' className={style.reviewBox2}></img>
        </div>
    )
}