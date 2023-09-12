import "./banner.scss";
import BannerImg from "../../assets/banner-img.png";
import BannerImgAbout from "../../assets/banner-about-img.png"
import { useLocation } from "react-router-dom";

export default function Banner() {
    const location = useLocation();
    if (location.pathname === "/") {
        return (
            <div className="banner">
                <img className="banner__img" src={BannerImg} alt="paysage" />
                <div className="banner__overlay"></div>
                <p className="banner__txt">Chez vous, partout et ailleurs</p>
            </div>
        )
    } else if (location.pathname === "/about") {
        return (
            <div className="bannerAbout">
                <img className="bannerAbout__img" src={BannerImgAbout} alt="paysage" />
                <div className="bannerAbout__overlay"></div>
            </div>
        )
    }
}
    
