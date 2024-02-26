
import "../css/Catalogo.css"

import { useEffect } from "react"

export default function MainAltriServizi() {

    useEffect(() => {
        window.scrollTo(0, 0); // Questo farà scorrere la pagina in cima quando viene caricata
      }, []); // Questo hook viene eseguito solo dopo il rendering iniziale della pagina

    return (
        <main>
            <div className="hero-servizi">
                <div className="catalogo--categoria">
                    <h2 className="catalogo--categoria--h2">Altri Servizi</h2>
                </div>
            </div>
            <div className="servizi--catalogo">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Gestione sinistri
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Quante volte vi è capitato che il vero stress non fosse l’auto danneggiata ma le numerose pratiche burocratiche da sbrigare in caso di sinistro?
                                <br />
                                Carrozzeria Bulletti Mirco offre un servizio tempestivo e puntuale di aiuto al cliente!
                                <br />
                                Il nostro staff è preparato per gestire la pratica con le assicurazioni, avvocati, periti e per consigliarvi nella scelta di soluzioni personalizzate al fine di offrire la miglior risoluzione del sinistro.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Auto di cortesia
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Dal momento che l’auto in riparazione può rappresentare un problema per molte famiglie che utilizzano quotidianamente la propria auto, la carrozzeria Bulletti mette e disposizione dei propri clienti un servizio di auto sostitutiva da utilizzare durante i giorni della riparazione</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Sanificazione auto
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>L’igienizzazione interni auto avviene attraverso l’azione di saturazione dell’abitacolo e dell’impianto di climatizzazione per mezzo di un’emissione controllata di ozono.
                                Si ottiene così la sterilizzazione totale dell’ambiente e, nel contempo, tutti gli odori vengono eliminati senza produrre alcun residuo tossico o nocivo, come invece succede utilizzando i normali prodotti di pulizia.
                                <br />
                                Il suo altissimo potere ossidante lo rende un igienizzante e deodorante efficace, più forte perfino dei detergenti chimici tradizionali.
                                <br />
                                È 100% naturale, ecologico ed economico.
                                </p>
                                <ul>
                                    <li><strong>Neutralizza i batteri inattivi e i virus</strong>, grazie alle sue proprietà, l’ozono igienizza, ossigena e rigenera l’aria che respiriamo . Elimina oltre il 99,00% di batteri, muffe, funghi, lieviti, pollini e acari e inattiva i virus. E’ un potente alleato nella lotta contro allergie, asme e infezioni, perché abbatte la carica microbica presente nell’aria e sulle superfici.</li>
                                    <li><strong>Elimina i cattivi odori</strong>, purifica l’aria eliminando gli odori sgradevoli di fumo, cibo, traspirazione, decomposizione, muffa, urina, sangue, vernice e pelo di animali. le molecole di ozono aggrediscono e neutralizzano le particelle causa dei cattivi odori, lasciando al loro posto una gradevole sensazione di pulito e un’aria rigenerata e deodorata</li>
                                    <li><strong>Allontana gli insetti infestanti</strong>, è un eccellente repellente naturale contro mosche, zanzare, pulci, scarafaggi, formiche, cimici, tarme e piccoli roditori. ne previene la proliferazione, perché elimina i batteri causa della loro moltiplicazione</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Cerchi {/* TODO */}
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
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Trattamento nanotecnologico {/* TODO */}
                        </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
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
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Noleggio auto
                        </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Abbiamo a disposizione una flotta auto per il noleggio a breve termine</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}