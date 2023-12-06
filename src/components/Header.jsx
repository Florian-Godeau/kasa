import Logo from "../assets/logo-kasa-header.png";
import Nav from "./Nav";

export default function Header() {
    return (
        <header className="header">
            <h1>
                <img className="header__logo" src={Logo} alt="Logo Kasa" />
            </h1>
            <Nav />
        </header>
    )
}