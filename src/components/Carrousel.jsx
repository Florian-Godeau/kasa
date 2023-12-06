import arrowLeft from "../assets/ArrowLeft.png";
import arrowRight from "../assets/ArrowRight.png";
import { useState } from "react";

export default function Carrousel({ pictures, title }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        if (pictures.length > 1) {
            setCurrentIndex(currentIndex - 1);
            if (currentIndex === 0) {
                setCurrentIndex(pictures.length - 1);
            }
        }
    }

    const nextSlide = () => {
        if (pictures.length > 1) {
            setCurrentIndex(currentIndex + 1);
            if (currentIndex === pictures.length - 1) {
                setCurrentIndex(0);
            }
        }
    }

    const slideNumbering = () => {
        if (pictures.length > 1) {
            return `${currentIndex + 1}/${pictures.length}`;
        }
        return "";
    }

    return (
        <div className="carrousel">
            <img
                className="carrousel__img"
                src={pictures[currentIndex]}
                alt={title}
            />
            <img
                className={pictures.length <= 1 ? 'carrousel__icon--hidden' : 'carrousel__icon carrousel__icon__prev'}
                src={arrowLeft}
                alt="show previous"
                onClick={prevSlide}
            />
            <img
                className={pictures.length <= 1 ? 'carrousel__icon--hidden' : 'carrousel__icon carrousel__icon__next'}
                src={arrowRight}
                alt="show next"
                onClick={nextSlide}
            />
            <span
                className="carrousel__slideNumbering">
                {slideNumbering()}
            </span>
        </div>
    )
}