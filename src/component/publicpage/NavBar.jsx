import { useState, useEffect } from 'react';
import style from './css/NavBar.module.css';

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 550) {
                setScrolled(true); // 헤더를 지나면 활성화
            } else {
                setScrolled(false); // 헤더 위에서는 비활성화
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${style.container} ${scrolled ? style.scrolled : ''}`}>
            <div className={style.nav}>LOGO</div>
            <div className={style.nav}>Lorem</div>
            <div className={style.nav}>Lorem</div>
            <div className={style.nav}>Lorem</div>
            <div className={style.nav}>Lorem</div>
        </div>
    );
}
