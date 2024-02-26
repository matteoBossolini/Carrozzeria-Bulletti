
import { Link } from "react-router-dom"
import "../css/PopUpCTA.css"

export default function PopUp() {
    return (
        <section className="pop-up">
            <div className="container--popup">
            <Link>
                <button className="button--popup">
                    <i class="fa-brands fa-whatsapp"></i>
                    Contattaci
                </button>
            </Link>
            </div>
        </section>
    )
}