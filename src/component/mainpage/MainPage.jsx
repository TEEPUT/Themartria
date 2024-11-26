import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import style from './css/MainPage.module.css';
import NavBar from '../publicpage/NavBar';
import Footer from '../publicpage/Footer';
import Header from './js/Header';
import Review from './js/Review';
import Up from '../publicpage/Up';

// Lazy Load 컴포넌트
const Slider = lazy(() => import('./js/Slider'));

export default function MainPage() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsContentVisible(true); // 화면에 보이기 시작하면 상태 업데이트
        }
      },
      {
        threshold: 1,
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className={style.container}>
      {/* 네비게이션 */}
      <NavBar />
      {/* 헤더 */}
      <Header />
      {/* 컨텐츠 */}
      <div className={style.contentContainer}>
        <div className={style.jump}></div>

        <h1 className={style.devider}>BEST 상품</h1>
        <img src="/image/devider.png" className={style.devider}></img>
        <p className={style.devider}>Best 판매 상품으로 판매량이 가장 많은 상품</p>

        <div className={style.semijump}></div>

        {/* Lazy Loading Slider */}
        <div ref={contentRef} style={{ minHeight: '200px' }}>
          {isContentVisible ? (
            <Suspense fallback={<div></div>}>
              <Slider />
            </Suspense>
          ) : (
            <div></div>
          )}
        </div>


        <div className={style.jump}></div>
        
        <h1 className={style.devider}>고객후기</h1>
        <img src="/image/devider.png" className={style.devider}></img>
        <p className={style.devider}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        
        <div className={style.semijump}></div>


        <Review />
        <div className={style.jump}></div>
        <div className={style.jump}></div>








        <h1 className={style.devider}>뉴스레터</h1>
        <img src="/image/devider.png" className={style.devider}></img>
        <p className={style.devider}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div className={style.jump}></div>






        <h1 className={style.devider}>커뮤니티</h1>
        <img src="/image/devider.png" className={style.devider}></img>
        <p className={style.devider}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div className={style.jump}></div>







        {/* 다른 컨텐츠 */}
        <div className={style.contents}></div>
      </div>

      <Up />
      {/* 푸터 */}
      <Footer />
    </div>
  );
}
