
import { Link } from "react-router-dom"

import "../css/Footer.css"

export default function Footer() {
    return (
        <footer>
            <section className="footer--info">
            <div>
                <h4>Carrozzeria Bulletti di Bulletti Mirco</h4>
                <p>Carrozzeria Bulletti Mirco S.R.L. Unipersonale</p>
                <p>Loc. Pratacci, Via Louis Pasteur 9 52100 Arezzo (AR)</p>
                <p>P.IVA 02361950518</p>
            </div>
            <div>
                <h4>Contatti</h4>
                <p>email: info@bulletticarrozzeria.it</p>
                <p>Telefono: 0575 6294364</p>
                <p>Cellulare: +39 335 6294364</p>
            </div>
            <div>
                <Link to="../contatti">
                    <button class="btn btn-lg btn-outline-dark" id="cta--footer">Contattaci</button>
                </Link>
                {/*<br/>
                <a className="link" href="#">Privacy policy</a>*/}
            </div>
            </section>
            <div className="copyright">
            <p><small>© 2024 bulletticarrozzeria.it</small></p>
            </div>
        </footer>
    )
}