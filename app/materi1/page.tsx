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
        {/* <div className=" px-2 lg:px-10 py-12 mx-auto  h-full">
          <div className=" h-full overflow-y-auto text-justify  min-h-[100vh]">
            <div className="header1 font-bold text-3xl items-center text-center mb-5">
              BAB I PREPOSISI <i>(die Präpositionen)</i>
            </div>
            <div className="point1 mb-5">
              <div className="text-md font-bold">
                1. Preposisi <i>(die Präpositionen)</i>
              </div>
              <div className=" pl-4">
                Preposisi <i>(die Präpositionen)</i> adalah kata yang biasanya
                terletak di depan frasa nomina dan menghubungakannya dengan kata
                lain dalam kalimat, seperti dalam bahasa Indonesia di, ke, dari.
                Dalam bahasa Jerman kata depan selalu diikuti dengan kasus, baik
                kasus akkusativ, datif, akkusativ dativ atau kasus genetif. Kata
                depan mempengaruhi perubahan bentuk kata ganti, kata sandang,
                deklinasi kata sifata dan kata keterangan.
              </div>
            </div>
            <div className="point2 mb-5">
              <div className="text-md font-bold">
                2.<i> Die Präpositionen mit dem Akkusativ</i>
              </div>
              <div className=" pl-4">
                <i>Die Präpositionen mit dem Akkusativ</i> adalah preposisi yang
                diikuti kasus akusatif (Akkusativ), yaitu :{" "}
                <i>bis, durch, entlang, für, gegen, ohne, um ,wider.</i> Contoh
                :
                <br />
                <br />
                <div className="pl-4">
                  <ul>
                    <li className=" mb-4">
                      <div>
                        a.
                        <i>
                          Bis nächsten Freitag muss die Hausaufgabe von Herrn
                          Sahat fertig sein
                        </i>{" "}
                        (Sampai hari jumat yang akan datang pekerjaan rumah dari
                        Pak Sahat harus selesai).
                      </div>
                    </li>
                    <li className=" mb-4">
                      b. <i>Ich tue alle für dich</i> (Saya lakukan semuanya
                      untukmu). Preposisi <i>für</i> mengubah bentuk kata ganti
                      du menjadi dich.
                    </li>
                    <li className=" mb-4">
                      c. <i>Wir gehen die</i> Straße Jalan Pancing entlang (Kita
                      berjalan di sepanjang jalan Pancing)
                    </li>
                    <li className=" mb-4">
                      d. <i>Ich bin gegeb den Plan</i> (Saya menentang rencana
                      itu).
                    </li>
                    <li className=" mb-4">
                      e. <i>Ohne dich gehe ich nicht</i> ( Tanpa engkau saya
                      tidak pergi)
                    </li>
                    <li className=" mb-4">
                      f.{" "}
                      <i>In dem ersten Film geht es um die Welle der Schüler</i>{" "}
                      (Film pertama menceritakan tentang aktivitas siswa)
                    </li>
                    <li className=" mb-4">
                      g.{" "}
                      <i>Zussammenleben ohne Heirat ist wider die Religion</i>{" "}
                      (Hidup bersama tanpa pernikahan adalah bertentangan dengan
                      agama.
                    </li>
                    <li className=" mb-4">
                      h.{" "}
                      <i>Die brücke wurde durch die Überschwemmunf zerstört</i>
                      (Jembatan itu dihancurkan oleh banjir)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="point3 mb-5">
              <div className="text-md font-bold">
                3. <i> Die Präpositionen mit dem Dativ</i>
              </div>
              <div className=" pl-4">
                <i>Die Präpositionen mit dem Dativ</i> adalah preposisi yang
                diikuti kasus datif <i>(Dativ)</i>, yaitu :{" "}
                <i>
                  ab, aus, außer, bei, dank, entgegen, entsprechend, gegenüber,
                  gemaß, mit, nach, nebst ,samt, seit, von, zu, zufolge.
                </i>
                <br />
                <br />
                Contoh :
                <br />
                <br />
                <ul>
                  <li className=" mb-4">
                    a. <i>Ab kommender Woche gilt der neue Studenplan</i> (Mulai
                    minggu yang akan datang berlaku jadwal perkuliahan yang
                    baru).
                  </li>
                  <li className=" mb-4">
                    b. <i>Das Mädchen kommt aus dem Hotel</i> (Gadis itu datang
                    dari Hotel). Kata depan <i>aus</i> mengubah kata sandang{" "}
                    <i>das Hotel</i> menjadu <i>dem Hotel</i>.
                  </li>
                  <li className=" mb-4">
                    c. <i>Außer dem Vater kommt auch der Bruder</i> (Selain ayah
                    datang juga saudara laki-laki).
                  </li>
                  <li className=" mb-4">
                    d.{" "}
                    <i>
                      Mit allen Studenten und Studentinnen fahren wir nach Bukit
                      Lawang
                    </i>{" "}
                    (Dengan semua mahasiswa dan mahasiswi kita pergi ke Bukit
                    Lawang).
                  </li>
                  <li className=" mb-4">
                    e. <i>Ich treffle dich heute beim Geschäft Alfasahat</i>{" "}
                    (Saya menemuimu hari ini di dekat toko &apos;Alfasähat).
                  </li>
                  <li className=" mb-4">
                    f. <i>Die Tochter läuft seinem Vater entgegen</i> (Anak
                    perempuan itu berlari menyongsong ayahnya).
                  </li>
                  <li className=" mb-4">
                    g.{" "}
                    <i>Die Firma bezahlt ihn seinen Leistungen entsprechend</i>
                    (Perusahaan membayarnya sesuai dengan prestasi kerjanya).
                  </li>
                  <li className=" mb-4">
                    h.{" "}
                    <i>
                      Der staatlichen Universität Medan (UNIMED) gegenüber
                      werden viele kleine Kantinen gebaut
                    </i>{" "}
                    (Di depan UNIMED di bangun banyak kantin-kantin kecil).
                  </li>
                  <li className=" mb-4">
                    i.{" "}
                    <i>
                      Die Präsidentin wird gemäß der meisten der Stimmen gewählt
                    </i>
                    (Ibu Presiden dipilih menurut suara terbanyak).
                  </li>
                  <li className=" mb-4">
                    j. <i>Nach dem Mittagessen gehen wir ins</i> Kino (Setelah
                    makan siang kita pergi ke bioskop).
                  </li>
                  <li className=" mb-4">
                    k. <i>Er leiht das Hemd nebst der Krawatte</i> (Dia meminjam
                    kemeja beserta dasi).
                  </li>
                  <li className=" mb-4">
                    l. <i>Frau Bartels hat die Krankheit seit einem Jahr</i>{" "}
                    (Sejak setahun ini Frau Bartels menderita sakit).
                  </li>
                  <li className=" mb-4">
                    m.{" "}
                    <i>
                      Der Polizist verhaftet den Dieb samt dem Beweismaterial
                    </i>
                    (Polisi menangkap pencuri bersama dengan barang bukti).
                  </li>
                  <li className=" mb-4">
                    n. <i>Er welß nichts von seinen Töchtern</i> (la tidak tahu
                    apa-apa tentang putri-putrinya).
                  </li>
                  <li className=" mb-4">
                    o.{" "}
                    <i>
                      Morgen komme ich zu dir nach Hause (Besok saya datang ke
                      rumahmu).
                    </i>
                  </li>
                  <li className=" mb-4">
                    p.{" "}
                    <i>
                      Den Nachrichten zufolge wurden wegen der heftigen
                      Regenfälle einige Keller überflutet (Menurut berita akibat
                      hujan deras air di beberapa ruang bawah tanah meluap).
                    </i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="point4 mb-5">
              <div className="text-md font-bold">
                4. <i>Die Präpositionen mit Akkusativ oder Dativ</i>
              </div>
              <div className=" pl-4">
                <i>Die Präpositionen mit Akkusativ oder Dativ</i> adalah
                preposisi yang dapat diikuti kasus akusatif atau kasus dativ
                (Akkusativ oder Dativ), yaitu:{" "}
                <i> an, auf, hinter, in, neben, über, unter, vor, zwischen.</i>
                <br />
                <br />
                <i>Contoh : </i>
                <br />
                <br />
                <i>
                  an Akk: Ich hänge das Bild an die Wand (Saya menggantungkan
                  gambar ke dinding).
                  <br />
                  Dat: Das Bild hängt an der Wand (Gambar itu tergantung di
                  dinding). Keterangan: Akk (Akkusativ), Dat (Dativ)
                  <br />
                  <br />
                  hinter
                  <br />
                  <br />
                  Akk: Stellst du dein Motorrad hinter die Garage? (Apakah
                  engkau menaruh sepeda motormu ke belakang garasi?) <br /> Dat:
                  Das Mottorad steht hinter der Garage (Sepeda motor berada di
                  belakang garasi).
                  <br />
                  <br />
                  In <br /> Akk: Er kommt in die Klasse (Dia masuk ke kelas).{" "}
                  <br /> Dat: Er ist jetzt in der Klasse (Dia sekarang berada di
                  dalam kelas).
                  <br />
                  <br />
                  Neben <br />
                  Akk: Eine Studentin setzt sich neben einen Studenten (Seorang
                  mahasiswi duduk ke samping seorang mahasiswa). <br /> Dat:
                  Eine Moschee liegt neben einer Kirche (Sebuah Masjid berada di
                  samping sebuah Gereja).
                  <br />
                  <br />
                  Unter
                  <br />
                  Akk: Meine Mutter legt ihr ein Kissen unter ihren Kopf (Ibuku
                  meletakkan sebuah bantal ke bawah kepalanya).
                  <br />
                  Dat: Mein Sohn liegt unter dem Baum (Putraku berbaring di
                  bawah pohon).
                  <br />
                  <br />
                  Vor
                  <br />
                  Akk: Das Mädchen stellt die Blumen vor das Haus (Gadis itu
                  meletakkan bunga ke depan rumah).
                  <br />
                  Dat: Das Fahrradtaxi hält vor meinem Haus (Becak berhenti d
                  depan rumahku).
                  <br />
                  <br />
                  Zwischen
                  <br />
                  <br />
                  Akk: Ein Schüler legt den Füller zwischen das Lehrbuch und
                  dasdicke Wörterbuch (Seorang siswa meletakkan pulpen ke antara
                  buku ajar dan kamus tebal).
                  <br />
                  Dat: Der Zug Lancang Kuning verkehrt täglich zwischen der
                  Stadt Medan und der Stadt Tanjung Balai (Kereta api Lancang
                  Kuning hilir mudik setiap hari antara kota Medan dan kota
                  Tanjung Balai).
                </i>
              </div>
            </div>
            <div className="point5 mb-5">
              <div className="text-md font-bold">
                <i> 5. Die Präpositionen mit dem Genitiv</i>
              </div>
              <div className=" pl-4">
                <div>
                  Die Präpositionen mit dem Genitiv ialah preposisi yang diikuti
                  kasus genitif (Genitiv), yakni: anläßlich, außerhalb, binnen,
                  dank, innerhalb, während, zeit, abseits, beiderseit, disseits,
                  inmitten, jenseits, längs, oberhalb, seitens/ von seiten,
                  unterhalb, unweit, angesichts, aufgrund, halber, infolge,
                  kraft, laut, mangels, zugunsten, wegen, trotz, statt/anstatt,
                  anstelle, anhand, mithilfe, mittels, vermöge, um willen,
                  zwecks.
                </div>
                <br />
                <br />
                Contoh:
                <br />
                <br />
                <div>
                  <ul>
                    <li className=" mb-4">
                      a. Der nette Mekkapilger lädt seine islamischen Nachbarn
                      anlä ßlich des 7. Todestages seiner schönen Frau ein, um
                      zusammen aus dem Koran zu lesen (Pak Haji yang baik hati
                      itu mengundang tetangganya yang beragama Islam untuk
                      membaca Alqur&apos;an bersama di rumahnya sehubungan
                      dengan tujuh hari kematian istrinya yang cantik).
                    </li>
                    <li className=" mb-4">
                      b. Jetzt wohnt Herr Sahat außerhalb der grossen Stadt
                      Medan (Sekarang Pak Sahat tinggal di luar kota besar
                      Medan).
                    </li>
                    <li className=" mb-4">
                      c. Innerhalb eines Jahres musst du Deutsch sprechen können
                      <br />
                      <br />
                      (Dalam waktu satu tahun engkau harus dapat berbicara
                      bahasa Jerman).
                    </li>
                    <li className=" mb-4">
                      d. Binnen eines Monats muss der Mieter umziehen (Dalam
                      waktu satu bulan penyewa itu harus pindah).
                    </li>
                    <li className=" mb-4">
                      e. Dank deiner Hilfe kann ich mein Wörterbuch wieder
                      finden (Berkat bantuanmu saya dapat menemukan kamus saya
                      kembali).
                    </li>
                    <li className=" mb-4">
                      f. Während der Vorlesung ist er immer schläfrig (Selama
                      perkuliahan ia selalu mengantuk).
                    </li>
                    <li className=" mb-4">
                      g. Er hat zeit seines Studiums viele Bücher gelesen
                      (Selama kuliah dia telah banyak membaca buku).
                    </li>
                    <li className=" mb-4">
                      h. Mein Haus ist abseits der anderen Häuser von der
                      Bevölkerung (Rurnahku terpisah dari rumah-rumah penduduk
                      lainya).
                    </li>
                    <li className=" mb-4">
                      i. Beiderseits der Straße sind viele einfache Häuser (Di
                      kedua sisi jalan berdiri banyak rumah-rumah sederhana).
                    </li>
                    <li className=" mb-4">
                      j. Das friedliche Dorf liegt diesseits des Flusses (Desa
                      yang damai ini letaknya di sebelah sungai).
                    </li>
                    <li className=" mb-4">
                      k. Er versteckt sich inmitten des Waldes (Ia bersembunyi
                      di tengah hutan).
                    </li>
                    <li className=" mb-4">
                      l. Jenseits der Brücke steht eine Moschee (Di seberang
                      jembatan itu berdiri sebuah Masjid).
                    </li>
                    <li className=" mb-4">
                      m. Längs des Zauns werden viele Poster angeklebt (Di
                      sepanjang pagar ditempeli banyak poster).
                    </li>
                    <li className=" mb-4">
                      n. Viele Bauern wohnen oberhalb jenes Dorfes (Banyak
                      petani tinggal di dataran tinggi).
                    </li>
                    <li className=" mb-4">
                      o. Seitens unserer Gruppe sind alle mit dem Plan
                      einverstanden (Dari pihak kelompok kami semuanya setuju
                      dengan rencana tersebut).
                    </li>
                    <li className=" mb-4">
                      p. Unterhalb unseres Hauses ist ein kleiner See (Ke arah
                      hilir dari rumah kami terdapat sebuah danau kecil).
                    </li>
                    <li className=" mb-4">
                      q. Unweit des Medans HauptbahnhofsStasiun Kereta Api Medah
                      ist ein großes Hotel (Tidak jauh dari&apos;Stasiun Kereta
                      Api Medari adalah sebuah hotel besar).
                    </li>
                    <li className=" mb-4">
                      r. Angesichts seiner Arroganz habe ich keine Lust mehr,
                      mit ihm zu sprechen (Mengingat kesombongannya saya tidak
                      punya keinginan lagi untuk berbicara dengannya).
                    </li>
                    <li className=" mb-4">
                      s. Aufgrund des Ergebnisses der Prüfung und der Semester
                      aufgabe bekommt er die Note &apos;E&apos; (Berdasarkan
                      hasil ujian dan tugas semester dia mendapat nilai E).
                    </li>
                    <li className=" mb-4">
                      t. Der Gesundheit halber hört der Parkwächter auf zu
                      rauchen (Demi kesehatan penjaga parkir berhenti merokok).
                      u. Infolge seiner Faulheit bleibt mein jungerer Bruder
                      sitzen
                      <br />
                      <br />
                      <div>
                        (Karena kemalasannya adik saya tinggal kelas). v. Wir
                        kommen kraft Ihrer Einladung hierher (Kami datang keman
                        berdasarkan undangan Anda).
                      </div>
                    </li>
                    <li className=" mb-4">
                      w. Laut Paragraph 1 der Eröffnung des Grundegesetzs der
                      Republik Indonesien 1945 ist Freiheit das Recht aller
                      Nationen (Menurut alinea pertama pembukaan UUD RI 1945
                      kemerdekaan adalah hak segala bangsa).
                    </li>
                    <li className=" mb-4">
                      x. Er hat Beri-Beri-Schmerzen mangels Vitamin B (Dia
                      menderita penyakit beri-beri karena kurang vitamin B).
                    </li>
                    <li className=" mb-4">
                      y. Der Vater arbeitet Tag und Nacht zugunsten seiner
                      Kinder (Ayah bekerja siang dan malam demi anak-anaknya).
                    </li>
                    <li className=" mb-4">
                      z. Wegen der schweren Krankheit bleibt er zu Hause (Karena
                      sakit dia tinggal di rumah).
                    </li>
                    <li className=" mb-4">
                      aa. Trotz seiner Ehrlichkeit glaubt ihm niemand (Meskipun
                      dia jujur tak seorangpun percaya kepadanya).
                    </li>
                    <li className=" mb-4">
                      bb. Statt seiner jungeren Schwester ist seine Tante
                      gekommen (Tantenya datang menggantikan adiknya).
                    </li>
                    <li className=" mb-4">
                      cc. Anstelle der Dozentin des Fachs Struktuen II komme ich
                      in die Klasse, um die Vorlesung zu halten (Sebagai ganti
                      Ibu Dosen Mata Kuliah Strukturen II saya masuk ke kelas
                      memberikan perkuliahan).
                    </li>
                    <li className=" mb-4">
                      dd. Anhand der Daten kaufen die Studentinnen lieber den
                      Lippenstift als das Wörterbuch (Berdasarkan data-data,
                      mahasiswi lebih suka membeli lipstik dari pada kamus).
                    </li>
                    <li className=" mb-4">
                      ee. Der kaputte Computer kann nur mit Hilfe eines
                      Computerfachmann repariert werden (Komputer yang rusak ini
                      hanya dapat diperbaiki dengan bantuan ahli komputer).
                    </li>
                    <li className=" mb-4">
                      ff. Mittels eines Hammers kann sie die Glastür öffnen
                      (Dengan bantuan sebuah martil dia dapat membuka pintu kaca
                      itu).
                    </li>
                    <li className=" mb-4">
                      gg. Vermöge seiner starken Kraft kann ein Läufer 50 km zu
                      Fuß gehen (Karena tenaganya yang kuat seorang pelari mampu
                      berjalan kaki sejauh 50 Km).
                    </li>
                    <li className=" mb-4">
                      hh. Um der engen Freundschaft willen kommt er auch endlich
                      nach Bukit Lawang mit (Demi persahabatan yang erat
                      akhirnya ia ikut juga ke Bukit Lawang).
                    </li>
                    <li className=" mb-4">
                      ii. Zwecks besserer Noten lernt er viel zu Hause (Demi
                      nilai yang lebih baik dia belajar keras di rumah).
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div>
                    Pengelompokan kata depan dalam bahasa Jerman seperti pada
                    gambar 4 (Bild 4).
                    <Image
                      src="/Picture1_materi1.jpg" // Route of the image file
                      alt="Your Name"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="point6 mb-5">
              <div className="text-md font-bold">
                6. <i>Das Präpositionalpronomen (Kata depan pengganti)</i>
              </div>
              <div className=" pl-4">
                Preposisi pengganti (Präpositionalpronomen) dibentuk dengan pola
                da + Präposition. Jika preposisi dimulai dengan vokal, maka
                antara da... Präposition diselipkan huruf r.
                <br />
                <br />
                Contoh:
                <br />
                <br />
                da+ auf = darauf (di atasnya)
                <br />
                <br />
                da + an = daran (pada, akan, mengenai hal itu)
                <br />
                <br />
                da + um = darum (maka, oleh sebab itu, karena itu)
                <br />
                <br />
                da + in = darin (di dalamnya)
                <br />
                <br />
                da + unter = darunter (di bawahnya, di antaranya)
                <br />
                <br />
                da + über = darüber (mengenai, tentang itu)
                <br />
                <br />
                da + für = dafür (untuk itu, karena itu)
                <br />
                <br />
                da + gegen = dagegen (melawan)
                <br />
                <br />
                da + nach = danach (menurut itu)
                <br />
                <br />
                da + von = davon (dari itu, dari padanya)
                <br />
                <br />
                da+ zu = dazu (untuk maksud itu, tentang itu)
                <br />
                <br />
                Preposisi pengganti dibentuk menurut pola wo + Präposition Jika
                preposisi dimulai dengan vokal, maka antara wo + Präposition
                diselipkan huruf r
                <br />
                <br />
                Contoh:
                <br />
                <br />
                wo+ an = woran (akan apa, yang)
                <br />
                <br />
                wo + auf = worauf (apa, mana, yang)
                <br />
                <br />
                wo+ über = worüber (mengenal, tentang apa)
                <br />
                <br />
                wo+ in = worin (di mana, yang mana)
                <br />
                <br />
                wo + unter = worunter (di antara apa, mana)
                <br />
                <br />
                wo + aus= woraus (dari apa, mana)
                <br />
                <br />
                wo+ um = worum (tentang apa)
                <br />
                <br />
                wo + gegen = wogegen (melawan apa) womit womit (dengan apa,
                bagaimana)
                <br />
                <br />
                wo + nach = wonach (tentang apa, kepada apa)
                <br />
                <br />
                wo + durch = wodurch (karena apa)
                <br />
                <br />
                wo + bel = wobel (pada mana, dalam hal bagaimana)
                <br />
                <br />
                wo + für = wofür (untuk apa, untuk hal yang mana)
                <br />
                <br />
                wo + von = wovon (tentang apa, dari apa)
                <br />
                <br />
                wo + vor = wovor (terhadap/akan siapa)
                <br />
                <br />
                wo+ zu = wozu (untuk apa, termasuk yang mana)
                <br />
                <br />
                Frase da + Präposition dan wo + Präposition hanya digunakan pada
                benda dan keadaan, bukan kepada orang. Kepada orang digunakan
                Phrase:
                <br />
                <br />
                Präposition + Fragewort:
                <br />
                für wen? (untuk siapa?)
                <br />
                mit wem? (dengan siapa?)
                <br />
                auf wen? (pada siapa?)
                <br />
                über wen? (tentang siapa?)
                <br />
                <br />
                Präposition + Personalpronomen:
                <br />
                für ihn (untuknya)
                <br />
                mit ihm (dengannya)
                <br />
                auf ihn (padanya)
                <br />
                über ihn (tentang dia)
                <br />
                <br />
                bel Sachen: wo(r) + Präposition; da(r) + Präpositionen
                <br />
                <br />
                a. Sahat: Worüber ärgerst du dich? (Terhadap apa engkau merasa
                jengkel?)
                <br />
                <br />
                Ariani: Ich ärgere mich über den Film (Saya merasa Jengkey
                terhadap film itu),
                <br />
                <br />
                <div className="flex items-center">
                  <div>atau</div>
                  <Image
                    src="/Picture2_materi1.png" // Route of the image file
                    alt="Your Name"
                    width={50}
                    height={50}
                  />
                </div>
                <br />
                <br />
                Ariani: Ich ärgere mich darüber (Saya merasa jengkel terhadap
                film itu).
                <br />
                <br />
                <br />
                <Image
                  src="/Picture3_materi1.png" // Route of the image file
                  alt="Your Name"
                  width={50}
                  height={50}
                />
                daruber menggantikan über den Film
                <br />
                <br />
                b. Sahat: Wofür interessierst du dich am meisten im Fernsehen?
                (Tertarik pada apakah engkau biasanya pada siaran televisi?)
                <br />
                <br />
                Ariani: Ich interessiere mich für Sport (Saya tertarik pada olah
                raga), atau
                <br />
                <br />
                Ariani: Dafür interessiere ich mich nicht. Das finde ich
                langweilig (Saya tidak tertarik pada olah raga. Menurut saya itu
                membosankan).
                <br />
                <br />
                c. Ara: Womit bist du nicht einverstanden? (Dengan apa engkau (
                tidak setuju?)
                <br />
                <br />
                Ari: Mit deinem Plan (Dengan rencanamu).
                <br />
                <br />
                Ara Damit sind alle einverstanden, nur du nicht (Dengan rencana
                itu semua setuju, hanya engkau yang tidak setuju).
                <br />
                <br />
                bei Personen: Präpositionen + Fragewort; Präposition +
                Personalpronomen
                <br />
                <br />
                Contoh:
                <br />
                <br />
                a. Ara: Über wen ärgerst du dich? (Pada siapa engkau kesal?)
                <br />
                <br />
                Ari: Ich ärgere mich über den Moderator (Saya merasa kesal pada
                moderator)
                <br />
                <br />
                <br />
                <Image
                  src="/Picture4_materi1.png" // Route of the image file
                  alt="Your Name"
                  width={50}
                  height={50}
                />
                Amy: Ich ärgere mich auch über ihn.
                <br />
                <br />
                Keterangan: ihn menggantikan den Moderator.
              </div>
            </div>
          </div>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <Link
              href="/latihan1"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Übung
            </Link>
          </div>
        </div> */}
        <div className=" px-2 lg:px-10 py-12 mx-auto  h-full ">
          <div className=" h-full overflow-y-auto text-justify  min-h-[90vh] text-2xl">
            <div className="header1 font-bold text-6xl  items-center text-center mb-5">
              Die Präpositionen
            </div>
            <div className="mb-5 text-5xl">
              Präpositionen sind Wörter, die in der Regel vor einer
              Substantivphrase stehen und diese mit anderen Wörtern im Satz
              verbinden, wie z. B. im Indonesischen di, ke, dari. Im Deutschen
              folgt auf Präpositionen immer ein Kasus, entweder der Akkusativ,
              Dativ, Akkusativ-Dativ oder Genitiv. Präpositionen verändern die
              Form von Pronomen, Artikeln, Deklinationen und Adverbien.
            </div>
          </div>
          <div className=" h-full overflow-y-auto text-left min-h-[90vh] text-2xl">

            <div className="header1 font-bold text-5xl mb-5">
              <span className="font-bold">1.Die Präpositionen bis</span>
            </div>
            <div className="mb-5 text-3xl">
              <p>
                {formatText("Bis", "font-bold")} steht nur bei Orts- und Zeitangaben, die ohne Artikel verwendet werden. Mit Artikel steht {formatText("bis", "font-bold")} zusammen mit anderen Präpositionen, die dann den Fall bestimmen
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
                1. Das kind zählt {formatText("bis", "font-bold underline")} elf.<br />
                2. Von 12 {formatText("bis", "font-bold underline")} 13 Uhr geschlossen!<br />
                3. Für das alte Fahrrad zahle ich {formatText("bis", "font-bold underline")} zu 20 Euro, nicht mehr.<br />
                <br />
                c. Die Präposition {formatText("bis", "font-bold")} beschreibt eine adverbiale Beschreibung.<br />
                Beispiele :<br />
                1. {formatText("Bis", "font-bold underline")} dahin ist es noch ein weiter Weg.<br />
                2. Auf wiedersehen, {formatText("bis", "font-bold underline")} bald!<br />

              </p>

            </div>
            <div className="header1 font-bold text-5xl mb-5">
              <span className="font-bold">2. Die Präpositionen durch</span>
            </div>
            <div className="mb-5 text-3xl">
              <p>
                {formatText("Durch", "font-bold")} wird nur zur Beschreibung von Ort, Zeit und Ursache und Wirkung in Passivsätzen verwendet. Mit dem Artikel {formatText("durch", "font-bold")} kann auch gezeigt werden, wie ein Vorgang abläuft
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
            <div className="header1 font-bold text-5xl mb-5">
              <span className="font-bold">3. Die Präpositionen {formatText("bis", "font-bold underline")}</span>
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
            <div className="header1 font-bold text-5xl mb-5">
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
            <div className="header1 font-bold text-5xl mb-5">
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
            <div className="header1 font-bold text-5xl mb-5">
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
            <div className="header1 font-bold text-5xl mb-5">
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
