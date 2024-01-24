"use client";
import Dropdowns from "../components/Dropdowns";
import LoadingPage from "../components/LoadingPage";
import { useStore } from "../zustand";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Latihan1 = () => {
  const router = useRouter();
  const [points, setPoints] = useState(0);
  const PercakapanA = () => {
    return (
      <div className=" mb-4">
        <div className=" mb-2">Lia:...(i)... wartest du?</div>
        <div className=" mb-2">Leo:...(ii)... einen Anruf.</div>
        <div className=" mb-2">
          Lia : Darauf kannst du noch lange warten. Das Telefon ist kaputt.
        </div>
        <div>
          <Dropdowns />
        </div>
      </div>
    );
  };
  const PercakapanB = () => {
    return (
      <div className=" mb-4">
        <div className=" mb-2">
          Ali: ...(i)... hast du nach Parapat gefahren?
        </div>
        <div className=" mb-2">
          Ani : Ich bin ... (ii)... dem Bus Palansia" nach Parapat gefahren.
        </div>
        <div className=" mb-2">
          <Dropdowns />
        </div>
      </div>
    );
  };
  const PercakapanC = () => {
    return (
      <div className=" mb-4">
        <div className=" mb-2">Lehrer:...(i)... geht es in dem Text?</div>
        <div className=" mb-2">
          Schüler: Im Text geht es ...(ii)... die Familienplanung.
        </div>
        <div className=" mb-2">
          <Dropdowns />
        </div>
      </div>
    );
  };
  const PercakapanD = () => {
    return (
      <div className=" mb-4">
        <div className=" mb-2"> Ari:...(i)... wem hast du telefoniert?</div>
        <div className=" mb-2">Amy:...(ii)... Frau Berger.</div>
        <div className=" mb-2">
          Ari: Warum hast du mir nicht gesagt? Ich wollte auch mit ihr sprechen.
        </div>
        <div className=" mb-2">
          <Dropdowns />
        </div>
      </div>
    );
  };

  function acakArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const selectedJawabanSatu = useStore(
    (state: any) => state.materi1.jawabanSelected.satu
  );
  const jawabanBenarSatu = useStore(
    (state: any) => state.materi1.jawabanBenar.satu
  );
  const updateJawabanSatuOption = useStore(
    (state: any) => state.updateJawabanSatuOption
  );
  const isCheckingMateri1 = useStore((state: any) => state.isCheckingMateri1);
  const handle = useStore((state: any) => state.handle);
  let nilai = useStore((state: any) => state.nilai);
  const loadingPage = useStore((state: any) => state.loadingPage);

  const options1 = ["Bis", "durch", "entlang", "Fur", "gegen"];

  const answerIsCorrect = (input: any, kunci: any) => {
    if (input === kunci && isCheckingMateri1) {
      return true;
    } else if (input !== kunci && isCheckingMateri1) {
      return false;
    } else if (input === "" && kunci) {
      return "";
    }
  };

  const calculateAnswer = () => {
    Object.keys(selectedJawabanSatu).forEach((item) => {
      if (selectedJawabanSatu[item] === jawabanBenarSatu[item]) {
        setPoints((prevPoints) => prevPoints + 10);
      }
    });
  };

  const handlePeriksaJawaban = async () => {
    handle("loadingPage", true);
    calculateAnswer();
    const timer = setTimeout(async () => {
      await handle("isCheckingMateri1", true);
      await handle("loadingPage", false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  };

  const handleLatihanSelanjut = () => {
    handle("nilai", points);
    router.push("/result");
  };

  return (
    <div className=" max-w-full lg:max-w-6xl m-auto ">
      {loadingPage && <LoadingPage />}
      <section className="bg-white shadow-lg min-h-[100vh]">
        <div className=" flex flex-col items-start px-2 lg:px-10 py-12 mx-auto text-left h-full">
          <div className=" min-h-[100vh] text-left">
            <h4 className=" font-bold">Latihan</h4>
            <div className="latihan1 mb-10">
              <span className=" mb-2">
                1 Lengkapi dengan preposisi yang diikuti kasus akusatif!
              </span>
              <div className=" container-list-jawaban mt-2 pl-8">
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawabanSatu.a, jawabanBenarSatu.a)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawabanSatu.a,
                          jawabanBenarSatu.a
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>a.</p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options1)}
                      value={selectedJawabanSatu.a}
                      onChange={(value) => {
                        updateJawabanSatuOption("a", value);
                      }}
                    />
                  </span>
                  <p>
                    <i>Hamburg sind noch etwa 250 Kilometer.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenarSatu.a}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawabanSatu.b, jawabanBenarSatu.b)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawabanSatu.b,
                          jawabanBenarSatu.b
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>b.</p>
                  <p>
                    <i>Er hatte</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options1)}
                      value={selectedJawabanSatu.b}
                      onChange={(value) => updateJawabanSatuOption("b", value)}
                    />
                  </span>
                  <p>
                    <i>einen Unfall seinen rechten Arm verloren </i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenarSatu.b}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawabanSatu.c, jawabanBenarSatu.c)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawabanSatu.c,
                          jawabanBenarSatu.c
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>c.</p>
                  <p>
                    <i>Ihr geht die Strabe Jalan Gatot Subroto</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options1)}
                      value={selectedJawabanSatu.c}
                      onChange={(value) => updateJawabanSatuOption("c", value)}
                    />
                  </span>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenarSatu.c}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawabanSatu.d, jawabanBenarSatu.d)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawabanSatu.d,
                          jawabanBenarSatu.d
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>d.</p>

                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options1)}
                      value={selectedJawabanSatu.d}
                      onChange={(value) => updateJawabanSatuOption("d", value)}
                    />
                  </span>
                  <p>
                    <i>Eine Mutter ost Kochen eine leichte Aufgabe.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenarSatu.d}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawabanSatu.e, jawabanBenarSatu.e)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawabanSatu.e,
                          jawabanBenarSatu.e
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>e.</p>
                  <p>
                    <i>Die Arzte sind</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options1)}
                      value={selectedJawabanSatu.e}
                      onChange={(value) => updateJawabanSatuOption("e", value)}
                    />
                  </span>
                  <p>
                    <i>das Rauchen.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenarSatu.e}
                  </div>
                )}
              </div>
            </div>
            <div className="latihan2 mb-10">
              <span className=" mb-2">
                2 Lengkapi dengan preposisi yang diikuti kasus datif.
              </span>
              <div className=" container-list-jawaban mt-2 pl-8">
                <div className=" flex items-center mb-2 space-x-2">
                  <p>a.</p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>morgen werde ich ein neues Leben beginnen</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>b.</p>
                  <p>
                    <i>Er nahm den Brief</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>der Schublade.</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>c.</p>

                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>Milch und Honig nahm der Kranke nichts zu sich.</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>d.</p>
                  <p>
                    <i>Er arbeitet</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>einem groben Hammer</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>e.</p>
                  <p>
                    <i>Ich wohne</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>meiner Tante in Medan</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
              </div>
            </div>
            <div className="latihan3 mb-10">
              <span className=" mb-2">
                3 Lengkapi dengan preposisi yang diikuti kasus akusatif datif!.
              </span>
              <div className=" container-list-jawaban mt-2 pl-8">
                <div className=" flex items-center mb-2 space-x-2">
                  <p>a.</p>
                  <p>
                    <i>Sie schreibt das Wort</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>die Tafel.</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>b.</p>
                  <p>
                    <i> Das Haus muss</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i> jeden Fall verkauft werden.</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>c.</p>
                  <p>
                    <i> Das Mottorad steht</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>der Garage.</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>d.</p>
                  <p>
                    <i> Die Villa steht</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>einem Park.</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>e.</p>
                  <p>
                    <i>Er setzte sich</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>mich.</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
              </div>
            </div>
            <div className="latihan4 mb-10">
              <span className=" mb-2">
                4 Lengkapi dengan preposisi yang diikuti kasus genitif!
              </span>
              <div className=" container-list-jawaban mt-2 pl-8">
                <div className=" flex items-center mb-2 space-x-2">
                  <p>a.</p>
                  <p>
                    <i>Mein Bruder wohnt jetzt</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>der Stadt Bandung.</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>b.</p>
                  <p>
                    <i>Wir erwarten ihre Antwort</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>einer Woche.</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>c.</p>
                  <p>
                    <i>Er beendet sein Studium</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i> eines Jahres.</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>d.</p>
                  <p>
                    <i></i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i> seines Studiums war er immer krank.</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>e.</p>
                  <p>
                    <i></i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>der Krankheit bleibt er zu Hause.</i>
                  </p>
                </div>
                <div className="jawaban-benar text-green-500 mb-2">
                  jawaban : ini adalah
                </div>
              </div>
            </div>
            <div className="latihan5 mb-10">
              <span className=" mb-2">
                5 Lengkapi dengan preposisi pengganti (die Präpositional-
                pronomen)!
              </span>
              <div className=" container-list-jawaban mt-2 pl-8">
                <div className="container-percakapan">
                  <ul>
                    <li>
                      <div className="flex space-x-2">
                        <p>a. </p>
                        <PercakapanA />
                      </div>
                      <div className="jawaban-benar text-green-500 mb-2">
                        jawaban : ini adalah
                      </div>
                    </li>
                    <li>
                      <div className="flex space-x-2">
                        <p>b. </p>
                        <PercakapanB />
                      </div>
                      <div className="jawaban-benar text-green-500 mb-2">
                        jawaban : ini adalah
                      </div>
                    </li>
                    <li>
                      <div className="flex space-x-2">
                        <p>c. </p>
                        <PercakapanC />
                      </div>
                      <div className="jawaban-benar text-green-500 mb-2">
                        jawaban : ini adalah
                      </div>
                    </li>
                    <li>
                      <div className="flex space-x-2">
                        <p>d. </p>
                        <PercakapanD />
                      </div>
                      <div className="jawaban-benar text-green-500 mb-2">
                        jawaban : ini adalah
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="latihan6 mb-10">
              <span className=" mb-2">
                6 Susunlah kata-kata menjadi kalimat!
              </span>
              <div className=" container-list-jawaban mt-2 pl-8">
                <div className="container-percakapan">
                  <ul>
                    <li>
                      <div className="flex space-x-2">
                        <p>a. </p>
                        <div>der Jäger der Wald - gehen - durch</div>
                      </div>
                      <div className=" pl-6">
                        <Dropdowns />
                      </div>
                      <div className="jawaban-benar text-green-500 mb-2">
                        jawaban : ini adalah
                      </div>
                    </li>
                    <li>
                      <div className="flex space-x-2">
                        <p>b. </p>
                        <div>das Mädchen bis - der letzte Tag - warten zu</div>
                      </div>
                      <div className=" pl-6">
                        <Dropdowns />
                      </div>
                      <div className="jawaban-benar text-green-500 mb-2">
                        jawaban : ini adalah
                      </div>
                    </li>
                    <li>
                      <div className="flex space-x-2">
                        <p>c. </p>
                        <div>
                          das Mikroskopalles - groß man - sehen - mittels
                        </div>
                      </div>
                      <div className=" pl-6">
                        <Dropdowns />
                      </div>
                      <div className="jawaban-benar text-green-500 mb-2">
                        jawaban : ini adalah
                      </div>
                    </li>
                    <li>
                      <div className="flex space-x-2">
                        <p>d. </p>
                        <div>
                          dieser Junge haben - er ausser - Freunde - keine
                        </div>
                      </div>
                      <div className=" pl-6">
                        <Dropdowns />
                      </div>
                      <div className="jawaban-benar text-green-500 mb-2">
                        jawaban : ini adalah
                      </div>
                    </li>
                    <li>
                      <div className="flex space-x-2">
                        <p>e. </p>
                        <div>die Milch statt - man - Tee - trinken</div>
                      </div>
                      <div className=" pl-6">
                        <Dropdowns />
                      </div>
                      <div className="jawaban-benar text-green-500 mb-2">
                        jawaban : ini adalah
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {!isCheckingMateri1 ? (
            <div className="inline-flex w-full mt-6 sm:w-auto">
              <button
                className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                onClick={handlePeriksaJawaban}
              >
                Periksa !
              </button>
            </div>
          ) : (
            <div className="inline-flex w-full mt-6 sm:w-auto">
              <button
                onClick={handleLatihanSelanjut}
                className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                Lanjut ke materi 2
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Latihan1;
