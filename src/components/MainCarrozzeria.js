
import "../css/Catalogo.css"

import { useEffect } from "react";

export default function MainCarrozzeria() {

    useEffect(() => {
        window.scrollTo(0, 0); // Questo farà scorrere la pagina in cima quando viene caricata
      }, []); // Questo hook viene eseguito solo dopo il rendering iniziale della pagina

    return (
        <main>
            <div className="hero-servizi">
                <div className="catalogo--categoria">
                    <h2 className="catalogo--categoria--h2">Carrozzeria</h2>
                    <p>Per gli esterni della tua auto...</p>
                </div>
            </div>
            <div className="servizi--catalogo">
                <p>La Carrozzeria Bulletti offre al cliente un supporto a 360°, grazie ad una gamma di servizi ausiliari alle riparazioni auto:
                    <ul>
                        <li>assistenza pratiche assicurative auto e incasso del pagamento a proprio carico</li>
                        <li>servizio auto sostitutive</li>
                        <li>assistenza  di officina meccanica, gommista ed elettrauto</li>
                        <li>rottamazione della vettura sinistrata</li>
                    </ul>
                </p>
                <p>
                Nei cicli di produzione è stata inserita una linea di intervento rapido, per le riparazioni veloci dell’auto in modo da garantirvi anche riparazioni in giornata.
                <br />Grazie ad importanti investimenti in attrezzature tra le piú innovative esistenti nel settore e alla costante formazione del personale garantiamo riparazioni complete e precise entro poche ore. L'utilizzo di speciali lampade ad infrarossi e a raggi UV oltre la creazione di un reparto appositamente allestito, consentono di accelerare le fasi di preparazione, mascheratura, verniciatura ed essiccazione della vernice garantendo risultati ottimali in tempi brevissimi
                </p>
                <p><strong>Il personale è costantemente aggiornato e qualificato per: saldature, riparazioni alluminio, uso f-gas e riparazione su veicoli ibridi ed elettrici.</strong></p>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Cristalli
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Servizio di sostituzione cristalli su tutte le autovetture, proponendo soluzioni e tariffe ad hoc per ciascun cliente.</p>
                                <p>Il nostro staff effettua:</p>
                                <ul>
                                    <li>Sostituzione cristalli di tutte le marche</li>
                                    <li>Sostituzione specchi retrovisori</li>
                                    <li>Sostituzione spazzole tergicristalli</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Ripristino fari opacizzati
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Il problema dei fari auto opacizzati riguarda tutti i modelli di automobile, infatti, l’esposizione al sole e agli agenti atmosferici, insieme all’utilizzo di prodotti aggressivi, può avere come risultato fari ingialliti o fari opacizzati.
                                <br />
                                Non bisogna dimenticare, inoltre, che i fari auto opachi non solo rovinano l’estetica dell’automobile ma compromettono anche la sicurezza alla guida.
                                Grazie ad un particolare trattamento dei fari possiamo restituire piena brillantezza al faro come se fosse nuovo con un conseguente aumento della luce prodotta.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Lucidatura
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Lucidare la tua auto significa donargli <strong>lucentezza e brillantezza</strong>.
                                <br />
                                Il nostro processo di lucidatura prevede solo prodotti di alta qualità e attrezzature di ultima generazione.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Centro grandine
                        </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Servizio levabolli per intervenire su auto danneggiate dalla grandine o deformate da urti di varia natura, senza la necessità di riverniciare o sostituire parti della carrozzeria.</p>
                                <p>Il nostro centro grandine può ripristinare:</p>
                                <ul>
                                    <li>Piccole e medie ammaccature, senza danni alla vernice</li>
                                    <li>Danni da sportellate</li>
                                    <li>Ammaccature da atti vandalici</li>
                                    <li>Bolli causati da grandine</li>
                                    <li>Ammaccature da neve</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}