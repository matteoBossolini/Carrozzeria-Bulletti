
import "../css/CaroselloServizi.css"
import { Link } from "react-router-dom";

export default function CaroselloServizi() {
    return (
        <div>
            <main className="desktop">
                <div class="col-xxl-8 px-4 py-5" id="servizi--container">
                <div class="card-deck">
                    <section className="servizi--text">
                        <h2>I nostri servizi</h2>
                        <p>Offriamo un <strong>servizio a 360°</strong> per la cura della tua auto.
                            <br />
                            <br />
                            Siamo nati come autocarrozzeria e successivamente ci siamo espansi per rendere l'esperienza del nostro cliente sempre più completa.
                            Oltre al tradizionale servizio di <Link to="carrozzeria" className="servizi--link">carrozzeria</Link> e di <Link to="officina" className="servizi--link">officina meccanica</Link>, abbiamo investito in macchinari e tecniche per far spledere la tua auto al 100%, come <Link to="altri_servizi" className="servizi--link">la cura per i cerchi</Link> o <Link to="altri_servizi" className="servizi--link">trattamenti nanotecnologici</Link>
                        </p>
                    </section>
                    <div class="card">
                        <Link to="carrozzeria">
                        <div className="card--body">
                        <div className="card--background">
                            <div className="overlay"></div>
                            <img src="carrozzeria.png" className="card--img"/>
                        </div>
                        <div className="card--cta">
                            <p className="card--cta--text">VEDI SERVIZI</p>
                        </div>
                        <div className="card--title">
                            <h3>Carrozzeria</h3>
                        </div>
                        </div>
                        </Link>
                    </div>
                    <div class="card">
                        <Link to="officina">
                        <div className="card--body">
                        <div className="card--background">
                            <div className="overlay"></div>
                            <img src="meccanica.png" className="card--img"/>
                        </div>
                        <div className="card--cta">
                            <p className="card--cta--text">VEDI SERVIZI</p>
                        </div>
                        <div className="card--title">
                            <h3>Officina</h3>
                        </div>
                        </div>
                        </Link>
                    </div>
                    <div class="card">
                        <Link to="altri_servizi">
                        <div className="card--body">
                        <div className="card--background">
                            <div className="overlay"></div>
                            <img src="altri_servizi.png" className="card--img"/>
                        </div>
                        <div className="card--cta">
                            <p className="card--cta--text">VEDI SERVIZI</p>
                        </div>
                        <div className="card--title">
                            <h3>Altri servizi</h3>
                        </div>
                        </div>
                        </Link>
                    </div>
                </div>
                </div>
                <img src="our_team.png" alt="la nostra squadra" className="img_team" />
            </main>

            <main className="mobile">
                <div className="mobile--text">
                    <h2>I nostri servizi</h2>
                    <p>Lorem ispum dolrem sit amet</p>
                </div>
                <div className="mobile--servizi">
                    <div className="mobile--card">
                        <Link to="carrozzeria" className="card--link">
                        <p>Carrozzeria</p>
                        <p className="arrow">&gt;</p>
                        </Link>
                    </div>
                    <div className="mobile--card">
                        <Link to="officina" className="card--link">
                        <p>Officina</p>
                        <p className="arrow">&gt;</p>
                        </Link>
                    </div>
                    <div className="mobile--card">
                        <Link to="altri_servizi" className="card--link">
                        <p>Altri servizi</p>
                        <p className="arrow">&gt;</p>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}