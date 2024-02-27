
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
                    <p>Per tutto il resto che serve alla tua auto...</p>
                </div>
            </div>
            <div className="servizi--catalogo">
                <p>Offriamo servizi specializzati su cui abbiamo investito risorse e formazione, per rendere la tua esperienza completa, come:</p>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Cerchi
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <h4>Riparazione cerchi in lega</h4>
                                <p>
                                Se il danno subito dal cerchio è circoscritto ad uno o massimo due punti (con dimensione inferiore a cinque centimetri), è possibile eseguire una riparazione cerchi in lega rapida senza smontare cerchio e gomma.
                                <br />
                                Le zone da riparare vengono preventivamente pulite e sgrassate, le smussature e gli angoli deformati vengono lisciati e la copertura trasparente viene rimossa dall’area interessata.
                                Eventuali solchi ed incisioni presenti sul corpo del cerchio vengono riempiti e livellati L’operazione di riparazione cerchi in lega è completata da una fase di verniciatura.
                                </p>

                                <h4>Cerchi in lega diamantati</h4>
                                <p>
                                La diamantatura è un tipo di lavorazione molto particolare che conferisce ai cerchi in lega un effetto lucido . Il risultato viene ottenuto impiegando un procedimento meccanico di elevata precisione: si rimuove dal cerchio un sottilissimo strato di materiale, conferendogli un look molto accattivante e una brillantezza senza precedenti, dando origine al cerchio diamantato.<br />
                                Dopo la diamantatura il cerchio viene sottoposto a un procedimento di laccatura (con essiccazione in forno ad alta temperatura) in modo tale da prevenire ogni fenomeno di corrosione. Affinché la diamantatura possa essere eseguita con successo, è necessario che il cerchio sia in ottime condizioni e perfettamente in asse. In caso contrario, la lavorazione potrebbe danneggiarlo irreparabilmente. 
                                </p>

                                <h4>Personalizzazione cerchi in lega</h4>
                                <p>
                                Senza dubbio oggi i cerchi in lega apportano un grande valore all’estetica complessiva dell’auto, grazie a design e colori innovativi. Oltre a riparare cerchi in lega, effettuiamo interventi di personalizzazione studiati sulle esigenze e sui desideri dei nostri Clienti, in base ai colori dell’auto, alle caratteristiche ed al design dei cerchi.<br />
                                È possibile ottenere colori lucidi, semi-lucidi, opachi e glitterati sia con formulazione personalizzata che a campione, in tinta carrozzeria, bi-colorazione, effetti speciali… Oltre alle caratteristiche del cerchio da trattare, l’unico limite è la fantasia.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Trattamento nanotecnologico
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Si tratta di un trattamento lucidante idrorepellente che funge da schermo contro gli agenti esterni</p>
                                <h4>Quali sono i benefici di un trattamento nanotecnologico?</h4>
                                <p>Le superfici trattate con prodotti e sistemi nanotecnologici acquisiscono:
                                    <ul>
                                        <li>Idrorepellenza</li>
                                        <li>Oleorepellenza</li>
                                        <li>Proprietà antimacchia, ad esempio quelle causate da insetti o escrementi animali</li>
                                        <li>Resistenza al degrado causato da eventi atmosferici, salsedine e raggi UV</li>
                                        <li>Maggiore resistenza ai graffi</li>
                                        <li>Elevata lucentezza</li>
                                        <li>Facilità nella pulizia</li>
                                        <li>Estrema durata nel tempo dell’effetto di protezione</li>
                                    </ul>
                                    Rispetto alle cere tradizionali, la cui durata varia tra le 3 e le 8 settimane al massimo o ai normali sigillanti che garantiscono protezione per non più di 6 mesi, Carrozzeria Bulletti Mirco srl <strong>garantisce il trattamento nanotecnologico completo fino ad un periodo di 5 anni o 80 mila chilometri.</strong>
                                </p>
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
                            Gestione sinistri
                        </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
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
                        <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Auto di cortesia
                        </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Dal momento che l’auto in riparazione può rappresentare un problema per molte famiglie che utilizzano quotidianamente la propria auto, la carrozzeria Bulletti mette e disposizione dei propri clienti un servizio di auto sostitutiva da utilizzare durante i giorni della riparazione</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Noleggio auto
                        </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
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