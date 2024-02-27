
import { useEffect } from "react"
import "../css/Tecnologia.css"

export default function MainTecnologia() {

    useEffect(() => {
        window.scrollTo(0, 0); // Questo farà scorrere la pagina in cima quando viene caricata
      }, []); // Questo hook viene eseguito solo dopo il rendering iniziale della pagina

    return (
        <main className="container--tecnologia">
            <img src="tecnologia/riparazione.png" className="tech--img"/>
            <p>Presso la nostra azienda, la tecnologia è al centro di tutto ciò che facciamo. Investiamo costantemente nelle più recenti innovazioni per garantire ai nostri clienti servizi impeccabili e rapidi. Un esempio tangibile di ciò è la nostra <strong>zona dedicata alla riparazione in giornata</strong>, dove i nostri esperti utilizzano il più avanzato <strong>spettrofotometro Glasurit</strong> di ultima generazione. Questo strumento, insieme alla nostra efficienza operativa, ci consente di offrire risultati precisi e di alta qualità in tempi rapidi, garantendo la piena soddisfazione dei nostri clienti.
            </p>
            <p>
            Inoltre, siamo orgogliosi di presentare la nostra ultima soluzione tecnologica: la <strong>diagnosi e calibrazione TEXA</strong> per la messa a punto di radar, lidar, telecamere e sensori. Grazie alla digitalizzazione e al nostro impegno verso l'innovazione, il <strong>sistema RCCS3</strong> con monitor offre un livello di precisione e affidabilità senza pari. Questa tecnologia all'avanguardia ci consente di affrontare le sfide più complesse con determinazione e competenza, assicurando risultati ottimali in ogni situazione.
            </p>
            <p>
            Oltre all'attenzione per l'eccellenza tecnologica, siamo profondamente impegnati nella promozione della sostenibilità ambientale. Offriamo <strong>colonnine di ricarica elettrica</strong> per veicoli, contribuendo così a ridurre l'impatto ambientale delle nostre attività. Inoltre, utilizziamo esclusivamente vernici Glasurit di massima qualità, garantendo non solo risultati estetici impeccabili, ma anche un approccio responsabile nei confronti dell'ambiente.
            </p>
            <p>
            Siamo convinti che la combinazione di tecnologia all'avanguardia e impegno per la sostenibilità ci permetta di offrire un servizio eccellente, rispettando allo stesso tempo l'ambiente in cui operiamo. Scegliere Carrozzeria Bulletti significa fare la scelta di affidarsi a professionisti che pongono al centro dei propri valori l'innovazione e il rispetto dell'ambiente
            </p>
        </main>
    )
}