
import "../css/PopUpCTA.css"

export default function PopUp() {
    return (
        <section className="pop-up">
            <div className="container--popup">
                <a href="https://wa.me/390575381414" target="_blank" rel="noopener noreferrer">
                    <button className="button--popup">
                        <i class="fa-brands fa-whatsapp"></i>
                        Contattaci
                    </button>
                </a>
            </div>
        </section>
    )
}