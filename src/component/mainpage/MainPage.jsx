import React from 'react';
import { useInView } from 'react-intersection-observer';
import style from './css/MainPage.module.css';
import NavBar from '../publicpage/NavBar';
import Footer from '../publicpage/Footer';
import Header from './js/Header';
import Up from '../publicpage/Up';

// Lazy Load 컴포넌트
const MainProduct = React.lazy(() => import('./js/MainProduct'));
const Review = React.lazy(() => import('./js/Review'));
const SubProduct = React.lazy(() => import('./js/SubProduct'));
const Info = React.lazy(() => import('./js/Info'));
const Connect = React.lazy(() => import('./js/Connect'));

export default function MainPage() {
  // Lazy Loading 상태 관리
  const [MainProductRef, MainProductInView] = useInView({ triggerOnce: true });
  const [ReviewRef, ReviewInView] = useInView({ triggerOnce: true });
  const [SubProductRef, SubProductInView] = useInView({ triggerOnce: true });
  const [InfoRef, InfoInView] = useInView({ triggerOnce: true });
  const [ConnectRef, ConnectInView] = useInView({ triggerOnce: true });

  return (
    <div className={style.container}>
      {/* 네비게이션 */}
      <NavBar />
      {/* 헤더 */}
      <Header />
      {/* 컨텐츠 */}
      <div className={style.contentContainer}>
        <div className={style.semijump}></div>

        {/* MainProduct Lazy Loading */}
        <div ref={MainProductRef} style={{ minHeight: '200px' }}>
          {MainProductInView && (
            <React.Suspense fallback={<div></div>}>
              <MainProduct />
            </React.Suspense>
          )}
        </div>

        <div className={style.jump}></div>
        <div className={style.semijump}></div>

        {/* SubProduct Lazy Loading */}
        <div ref={SubProductRef} style={{ minHeight: '200px' }}>
          {SubProductInView && (
            <React.Suspense fallback={<div></div>}>
              <SubProduct />
            </React.Suspense>
          )}
        </div>

        <div className={style.jump}></div>

        {/* Review Lazy Loading */}
        <div ref={ReviewRef} style={{ minHeight: '200px' }}>
          {ReviewInView && (
            <React.Suspense fallback={<div></div>}>
              <Review />
            </React.Suspense>
          )}
        </div>

        <div className={style.semijump}></div>

        {/* Info Lazy Loading */}
        <div ref={InfoRef} style={{ minHeight: '200px' }}>
          {InfoInView && (
            <React.Suspense fallback={<div></div>}>
              <Info />
            </React.Suspense>
          )}
        </div>

        <div className={style.semijump}></div>

        {/* Connect Lazy Loading */}
        <div ref={ConnectRef} style={{ minHeight: '200px' }}>
          {ConnectInView && (
            <React.Suspense fallback={<div></div>}>
              <Connect />
            </React.Suspense>
          )}
        </div>

        <div className={style.jump}></div>
      </div>

      <Up />
      {/* 푸터 */}
      <Footer />
    </div>
  );
}
