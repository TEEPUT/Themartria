import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainPage from "./component/mainpage/MainPage";
import AboutPage from './component/about/AboutPage';
import ShopPage from './component/shop/ShopPage';

// ScrollToTop 컴포넌트
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 경로가 변경될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 렌더링하지 않는 컴포넌트
};

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop을 라우트 변경 감지에 사용 */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* <Route path="" element={< />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
