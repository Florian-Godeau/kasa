import "../styles/style.css";
import BannerImg from "../assets/banner-img.png";

export default function Banner() {
    return (
        <div className="banner">
            <img className="banner__img" src={BannerImg} alt="paysage" />
            <div className="banner__overlay"></div>
            <p className="banner__txt">Chez vous, partout et ailleurs</p>
        </div>
        )
} 
    
