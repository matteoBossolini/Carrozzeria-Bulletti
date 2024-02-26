
import { Link } from "react-router-dom"
import "../css/Hero.css"

export default function Hero() {
    return (
        <main>
            <div className="hero">
                <img src="500.png" className="hero--img"/>
                <div className="hero--body">
                    <h1 className="hero--h1">Carrozzeria e officina meccanica</h1>
                    <p className="hero--p">Da più di 10 anni offriamo ai nostri clienti le migliori soluzioni per riparare la propria auto</p>
                    <div>
                        <Link to="../contatti">
                        <button type="button" className="hero--cta">Contattaci</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}