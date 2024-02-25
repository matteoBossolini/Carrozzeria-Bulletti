
import "../css/Contatti.css"

export default function MainContatti() {
    return (
        <main className="contatti">
            <section className="contatti--hero">
                <img src="ufficio.png" alt="il nostro ufficio" className="contatti--img" />
            </section>
            <section className="contatti--text">
                <div>
                    <h2 className="contatti--h2">Contatti</h2>
                    <p className="contatti--info">
                        <i class="fa-solid fa-location-dot"></i>
                        Via L. Pasteur 9, Arezzo, 52100
                    </p>
                    <p className="contatti--info">
                        <i class="fa-solid fa-phone"></i>
                        tel: <a href="tel:0575381414">0575 381414</a>
                    </p>
                    <p className="contatti--info">
                        <i class="fa-solid fa-mobile"></i>
                        cel: <a href="tel:+393356294364">+39 335 6294364</a>
                    </p>
                    <p className="contatti--info">
                        <i class="fa-solid fa-envelope"></i>
                        e-mail: <a href="mailto:info@bulletticarrozzeria.it">info@bulletticarrozzeria.it</a>
                    </p>
                </div>
            </section>
        </main>
    )
}