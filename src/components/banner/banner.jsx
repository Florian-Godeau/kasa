import "./banner.scss";
import BannerImg from "../../assets/banner-img.png";

export default function Banner() {
    return (
        <div className="banner">
            <img className="banner__img" src={BannerImg} alt="paysage" />
            <div className="banner__overlay"></div>
            <p className="banner__txt">
                Chez vous,
                <span className="line"></span>
                partout et ailleurs
            </p>
        </div>
        )
} 
    
