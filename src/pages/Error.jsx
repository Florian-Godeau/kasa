import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Error() {
    return (
        <div className="error">
            <Header />
            <div className="error__content">
                <h1 className="error__content__title">404</h1>
                <p className="error__content__txt">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="error__content__link">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}
