import Header from "../components/Header";
import Banner from "../components/Banner";
import DatasAbout from "../datas/about.json";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="about">
            <Header />
            <Banner />
            <main className="about__main">
                {DatasAbout.map(data => (
                    <Collapse
                        key={data.id}
                        id={data.id}
                        title={data.aboutTitle}
                        content={data.aboutText}
                    />
                ))}
            </main>
            <Footer />
        </div>
    )
}