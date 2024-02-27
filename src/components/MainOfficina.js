
import "../css/Catalogo.css"

import { useEffect } from "react"

export default function MainOfficina() {

    useEffect(() => {
        window.scrollTo(0, 0); // Questo farà scorrere la pagina in cima quando viene caricata
      }, []); // Questo hook viene eseguito solo dopo il rendering iniziale della pagina

    return (
        <main>
            <div className="hero-servizi">
                <div className="catalogo--categoria">
                    <h2 className="catalogo--categoria--h2">Officina</h2>
                    <p>Per le parti più nascoste...</p>
                </div>
            </div>
            <div className="servizi--catalogo">
                <p>Siamo un'officina meccanica che può assisterti in ogni tuo problema, riguardo:</p>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Manutenzione ordinaria
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Il nostro personale esegue:</p>
                                <ul>
                                    <li>Tagliandi, eseguiti secondo le linee guida di manutenzione previste dai singoli costruttori</li>
                                    <li>Test con diagnosi computerizzata</li>
                                    <li>Cambio: olio motore, filtri, liquido freni</li>
                                    <li>Livelli AdBlue</li>
                                    <li>Liquido raffreddamento</li>
                                    <li>Sostituzione cinghia distribuzione</li>
                                    <li>Ricarica aria condizionata</li>
                                    <li>Sostituzione freni</li>
                                    <li>Batteria avviamento e quanto segnalato dal costruttore per la manuteznione del veicolo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Manutenzione straordinaria
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Il nostro personale con esperienza pluriennale è a disposizione per risolvere inconvenienti, in base alle singole necessità:</p>
                                <ul>
                                    <li>Sostituzione ammortizzatori</li>
                                    <li>Sostituzione freni</li>
                                    <li>Montaggio gancio di traino</li>
                                    <li>Interventi su impianto alettrico</li>
                                </ul>
                                <p><strong>A disposizione diagnosi di ultima generazione (TEXA RCCS3)</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Gommista
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Effettuiamo:</p>
                                <ul>
                                    <li>Cambio gomme stagionale</li>
                                    <li>Montaggio pneumatici</li>
                                    <li>Equilibrature</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}