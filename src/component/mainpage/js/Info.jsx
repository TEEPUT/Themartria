import React, { useState, useEffect } from "react";
import style from "./css/Info.module.css";

export default function Info() {
    const [counts, setCounts] = useState([0, 0, 0, 0]); // 초기값 0

    // 목표 값 설정
    const targetCounts = [2023, 80, 2554, 100];

    useEffect(() => {
        // 숫자를 점진적으로 증가시키는 함수
        const animateCounts = () => {
            const duration = 4000; // 애니메이션 지속 시간 (ms)
            const frameRate = 60; // 초당 프레임
            const totalFrames = Math.round((duration / 1000) * frameRate); // 총 프레임 수
            const increments = targetCounts.map(target => target / totalFrames); // 프레임당 증가량

            let frame = 0;

            const interval = setInterval(() => {
                frame++;
                setCounts(prevCounts =>
                    prevCounts.map((count, i) =>
                        Math.min(count + increments[i], targetCounts[i]) // 목표값을 초과하지 않도록 설정
                    )
                );

                if (frame >= totalFrames) {
                    clearInterval(interval); // 애니메이션 종료
                }
            }, 1000 / frameRate);
        };

        animateCounts();
    }, []); // 컴포넌트가 마운트될 때 한 번 실행

    return (
        <div>
            <div className={style.header}>
                <h1 className={style.devider}>Lorem ipsum</h1>
                <img src="/image/devider.png" className={style.devider} alt="Divider" />
                <p className={style.devider}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className={style.container}>
                {targetCounts.map((target, index) => (
                    <div key={index} className={style.textBox}>
                        <div className={style.textTitle}>Lorem ipsum</div>
                        <div className={style.textContent}>
                            <div className={style.textCount}>{Math.floor(counts[index])}</div>
                            <div className={style.textUnit}>
                                {index === 0 ? "년" : index === 1 ? "명" : index === 2 ? "개" : "%"}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
