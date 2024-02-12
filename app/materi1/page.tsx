"use client";
import Image from "next/image";
import Link from "next/link";
import bgMateri from "@/public/background_materi.jpg";

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
            <div className="header1 font-bold text-3xl items-center text-center mb-5">
              Die Präpositionen
            </div>
            <div className="mb-5">
              Präpositionen sind Wörter, die in der Regel vor einer
              Substantivphrase stehen und diese mit anderen Wörtern im Satz
              verbinden, wie z. B. im Indonesischen di, ke, dari. Im Deutschen
              folgt auf Präpositionen immer ein Kasus, entweder der Akkusativ,
              Dativ, Akkusativ-Dativ oder Genitiv. Präpositionen verändern die
              Form von Pronomen, Artikeln, Deklinationen und Adverbien.
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
