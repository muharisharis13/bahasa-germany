"use client";
import Image from "next/image";
import Link from "next/link";
import bgMateri from "@/public/background_materi.jpg";



const formatText = (text: string, style: string) => {
  return <span className={style}>{text}</span>
}
export default function Materi1() {
  return (
    <div
      className="   bg-slate-200"
      style={{
        backgroundImage: `url(${bgMateri.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "50%",
        backgroundPosition: "center",
      }}
    >
     
      <section className="bg-white/95 backdrop-blur-sm shadow-lg max-w-full lg:max-w-6xl m-auto">
       
        <div className=" px-2 lg:px-10 py-12 mx-auto  h-full ">
          <div className=" h-full overflow-y-auto text-justify  min-h-[50vh] text-2xl">
            <div className="header1 font-bold text-4xl  items-center text-center mb-5">
              Die Präpositionen
            </div>
            <div className="mb-2 text-3xl">
              Präpositionen sind Wörter, die in der Regel vor einer Substantivphrase stehen und diese mit anderen Wörtern im Satz verbinden. Im Deutschen folgen auf Präpositionen immer Kasus, sowohl Akkusativ, Dativ, Akkusativ-Dativ als auch Genitiv. Präpositionen bewirken die Änderung der Pronomenform, des Artikels, der Deklination von Adjektiven und Adverbien. Die Präpositionen mit dem Akkusativ sind Präpositionen, auf die der Akkusativfall folgt, d. h: bis, durch, entlang, für, gegen, ohne, um (Pardamean, Sari, Kudriyah 2018 : 6).
            </div>
          </div>
          <div className=" h-full overflow-y-auto text-left min-h-[90vh] text-2xl">

            <div className="header1 font-bold text-4xl mb-5">
              <span className="font-bold">1.Die Präpositionen bis</span>
            </div>
            <div className="mb-5 text-3xl">
              <p>
                {formatText("Bis", "font-bold")} steht nur bei Orts- und Zeitangaben, die ohne Artikel verwendet werden. Mit Artikel steht {formatText("bis", "font-bold")} zusammen mit anderen Präpositionen, die dann den Fall bestimmen.
              </p>
              <p>
                a. Die Präposition {formatText("bis", "font-bold")} gibt Ort und Zeit an.<br />
                Beispiele :<br />
                1. {formatText("Bis", "font-bold underline")} Berlin fahre ich mit dem Zug.<br />
                2. Der Bus fährt {formatText("bis", "font-bold underline")} München.<br />
                3. Ich lerne Deutsch {formatText("bis", "font-bold underline")} Mai.<br />
                <br />
                b. Die Präposition {formatText("bis", "font-bold")} beschreibt eine Zahl.<br />
                Beispiele :<br />
                1. Das Kind zählt {formatText("bis", "font-bold underline")} elf.<br />
                2. Von 12 {formatText("bis", "font-bold underline")} 13 Uhr geschlossen!<br />
                3. Für das alte Fahrrad zahle ich {formatText("bis", "font-bold underline")} zu 20 Euro, nicht mehr.<br />
                <br />
                c. Die Präposition {formatText("bis", "font-bold")} beschreibt eine adverbiale Beschreibung.<br />
                Beispiele :<br />
                1. {formatText("Bis", "font-bold underline")} dahin ist es noch ein weiter Weg.<br />
                2. Auf wiedersehen, {formatText("bis", "font-bold underline")} bald!<br />

              </p>

            </div>
            <br/>
            <br/>
            <div className="header1 font-bold text-4xl mb-5">
              <span className="font-bold">2. Die Präpositionen durch</span>
            </div>
            <div className="mb-5 text-3xl">
              <p>
                {formatText("Durch", "font-bold")} wird nur zur Beschreibung von Ort, Zeit und Ursache und Wirkung in Passivsätzen verwendet. Mit dem Artikel {formatText("durch", "font-bold")} kann auch gezeigt werden, wie ein Vorgang abläuft.
              </p>
              <br />
              <p>
                a. Die Präposition {formatText("durch", "font-bold")} beschreibt einen Ort.<br />
                Beispiele :<br />
                1. Der Zug fährt {formatText("durch", "font-bold underline")} den Tunnel.<br />
                2. Ich gehe jeden Tag {formatText("durch", "font-bold underline")} den Wald zu meiner Firma.<br />
                3. Wir gingen {formatText("durch", "font-bold underline")} den Wald.<br />
                <br />
                b. Die Präposition {formatText("durch", "font-bold")} beschreibt ein Adverb der Zeit.<br />
                Beispiele :<br />
                1. Den Januar {formatText("durch", "font-bold underline")} hat es nur geregnet.<br />
                2. Das ganze Jahr {formatText("durch", "font-bold underline")} hat sie nichts von sich hören lassen.<br />
                <br />
                c. Die Präposition {formatText("durch", "font-bold")} bezeichnet eine Ursache, ein Mittel oder einen Vermittler, normalerweise im Passiv.<br />
                Beispiele :<br />
                1. Er hatte {formatText("durch", "font-bold underline")} einen Glücksfall 100 Euro gewonnen.<br />
                2. Ein Safe kann {formatText("durch", "font-bold underline")} eine Zahlenkombination geöffnet werden.<br />
                3. Das habe ich {formatText("durch", "font-bold underline")} einen Bericht im Fernsehen erfahren.<br />
                <br />
                <br />

                d. Die Präposition {formatText("durch", "font-bold")} gibt an, wie ein Vorgang abläuft oder durchgeführt wird.<br />
                Beispiele :<br />
                1. {formatText("Durch", "font-bold underline")} die Benutzung eines Notausgangs koonten sie die Bewohner retten.<br />
                2. {formatText("Durch", "font-bold underline")} jahrelanges Training stärkte der Behinderte seine das Beinmusken<br />


              </p>

            </div>
            <br/>
            <br/>
            <div className="header1 font-bold text-4xl mb-5">
              <span className="font-bold">3. Die Präpositionen {formatText("entlang", "font-bold underline")}</span>
            </div>
            <div className="mb-5 text-3xl">
              <p>
                Die Präposition {formatText("entlang", "font-bold")} kann vor oder hinter dem Nomen stehen.  Wenn {formatText("entlang", "font-bold")} vor dem Nomen steht, muss den Genitiv benutzt werden und wenn {formatText("entlang", "font-bold")} erst hinter dem Nomen kommt, dann steht das Nomen im Akkusativ
              </p>
              <br />
              <p>
                a. Die Präposition {formatText("entlang", "font-bold")} beschreibt die Richtung eines bestimmten Weges und wird normalerweise nach einem Substantiv gesetzt.<br />
                Beispiele :<br />
                1. Sie geht den Fluss {formatText("entlang", "font-bold underline")}.<br />
                2. Ich laufe die Straße {formatText("entlang", "font-bold underline")}.<br />
                <br />
                b. Die Präposition {formatText("entlang", "font-bold")} wird auch als Präposition im genetischen Fall verwendet.<br />
                1. {formatText("Entlang", "font-bold underline")} der ganzen Straße standen früher große, alte Bäume.<br />
                2. {formatText("Entlang", "font-bold underline")} des Weges standen Tausende von Menschen.<br />



              </p>

            </div>
            <br/>
            <br/>
            <div className="header1 font-bold text-4xl mb-5">
              <span className="font-bold">4. Die Präpositionen für</span>
            </div>
            <div className="mb-5 text-3xl">
              <p>
                {formatText("Für", "font-bold")} wird nur verwendet, um eine Tätigkeit zu beschreiben, die für eine andere Person, anstelle einer anderen Person, für einen bestimmten Zeitraum ausgeübt wird. {formatText("Für", "font-bold")} kann auch verwendet werden, um einen Vergleich auszudrücken
              </p>
              <br />
              <p>
                a. Die Präposition {formatText("für", "font-bold")} beschreibt eine Tätigkeit, die {formatText("für", "font-bold underline")} jemanden anderen ausgeführt wird.<br />
                Beispiele :<br />
                1. {formatText("Für", "font-bold underline")} den Rest des Tages habe ich frei!<br />
                2. Ich tue alle {formatText("für", "font-bold underline")}  dich.<br />
                3. Er gab eine Spende {formatText("für", "font-bold underline")} das Rote Kreuz.<br />
                <br />
                b. Die Präposition {formatText("für", "font-bold")} wird verwendet, um die Position einer anderen Person zu ersetzen.<br />
                Beispiele:<br />
                1. Ich habe ein Geschenk {formatText("für", "font-bold underline")} den Lehrer.<br />
                2. Er hat schon {formatText("für", "font-bold underline")} alle bezahlt.<br />
                3. Bitte geh {formatText("für", "font-bold underline")} mich aufs Finanzamt.<br />
                <br />
                c. Die Präposition {formatText("für", "font-bold")} beschreibt eine bestimmte Zeitspanne.<br />
                Beispiele :<br />
                1. Ich komme nur {formatText("für", "font-bold underline")} zwei Tage.<br />
                2. Hier bleiben wir {formatText("für", "font-bold underline")} immer.<br />
                <br />
                d. Die Präposition {formatText("für", "font-bold")} drückt einen Vergleich aus.<br />
                Beispiele :<br />
                1. {formatText("Für", "font-bold underline")}  sein Alter ist er noch sehr rüstig.<br />
                2. {formatText("Für", "font-bold underline")} einen Architekten ist das eine leichte Aufgabe.<br />
                2. {formatText("Für", "font-bold underline")} seine schwere Arbeit erhielt er zu wenig Geld.<br />
                <br />
                e. Die Präposition {formatText("für", "font-bold")} beschreibt eine Zahl oder Zahlen.<br />
                Beispiele :<br />
                1. Ich komme nur {formatText("für", "font-bold underline")} zwei Tage.<br />
                2. Wie viel hast du {formatText("für", "font-bold underline")} das Haus bezahlt?<br />
                3. Ich habe es {formatText("für", "font-bold underline")} 300 Euro bekkommen.<br />
                <br />
                f. Die Präposition {formatText("für", "font-bold")} kann fortlaufend als Behauptung verwendet werden.<br />
                Beispiele :<br />
                1. Ich kaufe etwas ist {formatText("für", "font-bold underline")}   dich.<br />
                2. Der Brief ist {formatText("für", "font-bold underline")} dich.<br />
                3. Das Wasser ist {formatText("für", "font-bold underline")} mich.<br />

              </p>

            </div>
            <br/>
            <br/>
            <div className="header1 font-bold text-4xl mb-5">
              <span className="font-bold">5. Die Präpositionen gegen</span>
            </div>
            <div className="mb-5 text-3xl">
              <p>
                {formatText("Gegen", "font-bold underline")} wird nur verwendet, um eine Bewegung mit unbestimmter Richtung, Zeit und Anzahl zu beschreiben. {formatText("Gegen", "font-bold underline")} kann auch Ablehnung ausdrücken
              </p>
              <br />
              <p>
                a. Die Präposition {formatText("gegen", "font-bold")} beschreibt eine Bewegung in eine Richtung, die zu einer Berührung führt.<br />
                Beispiele :<br />
                1. Er ist {formatText("gegen", "font-bold underline")} den Baum gefahren.<br />
                2. Fahr nich {formatText("gegen", "font-bold underline")} die Mauer!<br />
                3. Der Betrunkene rannte {formatText("gegen", "font-bold underline")} eine Laterne.<br />
                <br />
                b. Die Präposition {formatText("gegen", "font-bold")} beschreibt eine unbestimmte Zeit und Anzahl.<br />
                Beispiele :<br />
                1. Wir kommen {formatText("gegen", "font-bold underline")} 19 Uhr zurück.<br />
                2. Wir kommen {formatText("gegen", "font-bold underline")} 16 Uhr oder {formatText("gegen", "font-bold underline")} Mitternacht.<br />
                <br />
                c. Die Präposition {formatText("gegen", "font-bold")} drückt eine Ablehnung oder eine feindliche Ursache aus.<br />
                Beispiele:<br />
                1. Ihr spielt heute {formatText("gegen", "font-bold underline")} die beste Mannschaft der Liga.<br />
                2. Meine Eltern sind {formatText("gegen", "font-bold underline")} uns.<br />
                <br />
                d. Die Präposition {formatText("gegen", "font-bold")} drückt einen Vergleich oder einen Austausch aus.<br />
                Beispiele :<br />
                1. Er schlug der Faust {formatText("gegen", "font-bold underline")} die Tür.<br />
                2. {formatText("Gegen", "font-bold underline")} ihn bin ich ein Anfänger.<br />


              </p>

            </div>
            <br/>
            <br/>
            <div className="header1 font-bold text-4xl mb-5">
              <span className="font-bold">6. Die Präpositionen ohne</span>
            </div>
            <div className="mb-5 text-3xl">
              <p>
                Die Präposition {formatText("ohne", "font-bold")}  wird {formatText("ohne", "font-bold")} den Artikel bennutzt, wenn es nicht auf einen unbestimmten Zweck hin bestimmt
              </p>
              <br />
              <p>
                a. Die Präposition {formatText("ohne", "font-bold")} wird meist ohne Artikel gebraucht, wenn keine genauere Bestimmug nötig ist.<br />
                Beispiele :<br />
                1. Er geht {formatText("ohne", "font-bold underline")} ihn.<br />
                2. Ich trinke immer Tee {formatText("ohne", "font-bold underline")} Zucker.<br />
                3. {formatText("ohne", "font-bold underline")} deine Hilfe hätte  ich das nicht geschafft<br />

              </p>

            </div>
            <br />
            <br />
            <div className="header1 font-bold text-4xl mb-5">
              <span className="font-bold">7. Die Präpositionen um</span>
            </div>
            <div className="mb-5 text-3xl">
              <p>
                {formatText("Um", "font-bold")} steht oft in Verbindung mit „herum“. „Um … herum“ bedeutet, dass die Handlung rund {formatText("um", "font-bold")} das Nomen ausgeführt wird oder dass es sich {formatText("um", "font-bold")} eine ungefähre Zeitangabe handelt.
              </p>
              <br />
              <p>

                a. Die Präposition {formatText("um", "font-bold")} drückt eine Beschreibung des Ortes aus.<br />
                Beispiele:<br />
                1. Er dreht sich beim Salto drei Mal {formatText("um", "font-bold underline")} die eigene Achse.<br />
                2. Wir müssen die Abfahrt {formatText("um", "font-bold underline")} einen Tak verschieben.<br />
                3. Ich gehe {formatText("um", "font-bold underline")} das Haus.<br />
                <br />
                b. Die Präposition {formatText("um", "font-bold")} drückt ein Adverb der Zeit aus.<br />
                Beispiele:<br />
                1. {formatText("Um", "font-bold underline")} 19:30 Uhr muss ich zu Hause sein.<br />
                2. Wir essen {formatText("um", "font-bold underline")} 8 Uhr.<br />
                3. {formatText("Um", "font-bold underline")}  20 Uhr beginnt die Tagesschau.<br />
                <br />
                c. Die Präposition {formatText("um", "font-bold")} beschreibt eine Veränderung einer Zahl oder einer Menge.<br />
                Beispiele :<br />
                1. Die Uhr hat {formatText("um", "font-bold underline")} die 200 Euro gekostet.<br />
                2. {formatText("Um", "font-bold underline")} die Weihnachtszeit sind die Schaufenster hübsch dekoriert.<br />
                <br />
                d. Die Präposition {formatText("um", "font-bold")} beschreibt einen Verlust oder eine Einbuße.<br />
                Beispiele:<br />
                1. Er trauert {formatText("um", "font-bold underline")} einen guten Freund.<br />
                2. Er hat ihn {formatText("um", "font-bold underline")} seinen Erfolg gratuliert<br />


              </p>

            </div>
          </div>

          <div className="inline-flex w-full  sm:w-auto">
            <Link
              href="/latihan1"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Übung
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
