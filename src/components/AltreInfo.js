
import "../css/AltreInfo.css"

import { Link } from "react-router-dom"

export default function AltreInfo() {
    return(
        <main>
            <section className="tecnologia">
                <div className="tecnologia--cards">

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src="tecnologia/riparazione.png" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="tecnologia/spettrofotometro.png" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="colonnina.png" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>

                </div>
                <div className="tecnologia--text">
                    <h2>Tecnologia e Sostenibilità</h2>
                    <p>Investiamo molto nella tecnologia per offrire ai nostri clienti servizi impeccabili e rapidi, come ad esempio l’allestimento di una zona per la riparazione in giornata e lo spettrofotometro Glasurit di ultima generazione.
                    La nuova soluzione TEXA per la messa a punto di radar, lidar, telecamere e sensori che sfrutta la digitalizzazione, RCCS3 con monitor.</p>
                    <Link to="tecnologia_e_sostenibilità" className="tecnologia--link">Vedi di più</Link>
                </div>
            </section>
            <section className="partner">
                <div className="partner--text">
                    <h2>Le nostre convenzioni</h2>
                    <p>
                    Abbiamo la possibilità di svolgere riparazioni in convenzione con svariate assicurazioni: Gruppo AxA, Reale Mutua, Italiana assicurazioni, Sara assicurazioni, Gruppo Generali, Gruppo Allianz , Unipol Service, Nobis.
                    <br />
                    Oltre ad aver stretto convenzioni con importanti network nel mercato quali:
                    Maestri della grandine, Icar. 
                    <br />
                    Le riparazioni nella nostra struttura vengono comunque eseguite con ricambi originali e la garanzia sulla verniciatura e nella riparazione.
                    </p>
                </div>
                <div className="partner--info">
                    <div className="partner--row">
                        <img src="loghi_partner/axa.png" className="partner--img" alt="axa" />
                        <img src="loghi_partner/sara.png" alt="sara" className="partner--img"/>
                        <img src="loghi_partner/allianz.png" alt="allianz" className="partner--img"/>
                        <img src="loghi_partner/axa_mps.png" alt="axa_mps" className="partner--img"/>
                    </div>
                    <div className="partner--row">
                        <img src="loghi_partner/cral.png" alt="cral network" className="partner--img"/>
                        <img src="loghi_partner/creditras.png" alt="credit ras" className="partner--img"/>
                        <img src="loghi_partner/generali.png" alt="generali" className="partner--img"/>
                        <img src="loghi_partner/genertel.png" alt="genertel" className="partner--img"/>
                    </div>
                    <div className="partner--row">
                        <img src="loghi_partner/genialloyd.png" alt="genialloyd" className="partner--img"/>
                        <img src="loghi_partner/icar.png" alt="icar" className="partner--img"/>
                        <img src="loghi_partner/italiana.png" alt="italiana" className="partner--img"/>
                        <img src="loghi_partner/maestri.png" alt="maestri della grandine" className="partner--img"/>
                    </div>
                    <div className="partner--row">
                        <img src="loghi_partner/reale_mutua.png" alt="reale mutua" className="partner--img"/>
                        <img src="loghi_partner/nobis.png" alt="nobis" className="partner--img"/>
                    </div>
                </div>
            </section>
        </main>
    )
}