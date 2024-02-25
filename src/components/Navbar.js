
import "../css/Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {

    function call() {
        window.location.href = "tel:05756294364";
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
                <a className="navbar-brand" href="#">
                    <img src="logo_carrozzeria.png" height="80" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Servizi
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="../carrozzeria" className="dropdown-item">Carrozzeria</Link>
                        <Link to="../officina" className="dropdown-item">Officina meccanica</Link>
                        <Link to="../altri_servizi" className="dropdown-item">Altri servizi</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="../contatti" className="nav-link">Contatti</Link>
                    </li>
                    </ul>
                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" id="nav--cta" onClick={call}>
                        <section className="cta--icon">
                            <i className="fa-solid fa-phone" id="phone" />
                        </section>
                        <section className="cta--text">
                            <p>0575 381414</p>
                            <p>Chiama Ora</p>
                        </section>
                    </button>
                </div>
                </nav>
        </header>
    )
}