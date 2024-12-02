import React, { useState, Suspense } from "react";
import style from "./css/AboutPage.module.css";
import NavBar from "../publicpage/NavBar";
import Footer from "../publicpage/Footer";
import Up from "../publicpage/Up";

// Lazy Load 컴포넌트
const BrandStory = React.lazy(() => import('./js/BrandStory'));
const History = React.lazy(() => import('./js/History'));
const PressRoom = React.lazy(() => import('./js/PressRoom'));
const FindUs = React.lazy(() => import('./js/FindUs'));

export default function AboutPage() {
    const aboutPageSections = [
        { id: "home-section", name: "Lorem ipsum" },
        { id: "1-section", name: "Lorem ipsum" },
        { id: "2-section", name: "Lorem ipsum" },
    ];

    const [activeSection, setActiveSection] = useState("Brand Story"); // 현재 활성화된 섹션

    const renderSectionContent = () => {
        switch (activeSection) {
            case "Brand Story":
                return <BrandStory />;
            case "History":
                return <History />;
            case "Press Room":
                return <PressRoom />;
            case "Find Us":
                return <FindUs />;
            default:
                return <div>Content not found.</div>;
        }
    };

    return (
        <div className={style.container}>
            {/* 네비게이션 */}
            <NavBar title="About Page" sections={aboutPageSections} />

            {/* 헤더 */}
            <section id="home-section">
                <div className={style.headerContainer}>
                    <img src="/image/bg.png" className={style.homeImg} alt="Header" />
                </div>
            </section>

            {/* 서브 네비게이션 */}
            <div className={style.subNav}>
                <div
                    className={style.navContent}
                    onClick={() => setActiveSection("Brand Story")}
                >
                    Brand Story
                </div>
                <div
                    className={style.navContent}
                    onClick={() => setActiveSection("History")}
                >
                    History
                </div>
                <div
                    className={style.navContent}
                    onClick={() => setActiveSection("Press Room")}
                >
                    Press Room
                </div>
                <div
                    className={style.navContent}
                    onClick={() => setActiveSection("Find Us")}
                >
                    Find Us
                </div>
            </div>

            {/* Lazy Loaded Section Content */}
            <div className={style.sectionContent}>
                <Suspense fallback={<div></div>}>
                    {renderSectionContent()}
                </Suspense>
            </div>

            <div className={style.jump}></div>

            {/* 상위로 이동 */}
            <Up />

            {/* 푸터 */}
            <Footer />
        </div>
    );
}
