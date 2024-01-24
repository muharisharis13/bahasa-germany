"use client";
import Dropdowns from "../components/Dropdowns";
import LoadingPage from "../components/LoadingPage";
import { useStore } from "../zustand";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import bgMateri from "@/public/background_materi.jpg";

const Latihan1 = () => {
  const router = useRouter();
  const [points, setPoints] = useState(0);
  const PercakapanA = () => {
    return (
      <div className=" mb-4">
        <div
          className={`flex items-center mb-2 space-x-2 ${
            answerIsCorrect(selectedJawaban.lima.a, jawabanBenar.lima.a)
              ? " text-green-500"
              : answerIsCorrect(selectedJawaban.lima.a, jawabanBenar.lima.a) ===
                false
              ? "  text-red-500"
              : " text-black"
          }`}
        >
          Lia:...(i)... wartest du?
        </div>
        <div
          className={`flex items-center mb-2 space-x-2 ${
            answerIsCorrect(selectedJawaban.lima.a, jawabanBenar.lima.a)
              ? " text-green-500"
              : answerIsCorrect(selectedJawaban.lima.a, jawabanBenar.lima.a) ===
                false
              ? "  text-red-500"
              : " text-black"
          }`}
        >
          Leo:...(ii)... einen Anruf.
        </div>
        <div className=" mb-2">
          Lia : Darauf kannst du noch lange warten. Das Telefon ist kaputt.
        </div>
        <div>
          <Dropdowns
            options={acakArray(options5)}
            value={selectedJawaban.lima.a}
            onChange={(value: any) => {
              updateJawabanOption("a", value, "lima");
            }}
          />
        </div>
      </div>
    );
  };
  const PercakapanB = () => {
    return (
      <div className=" mb-4">
        <div
          className={`flex items-center mb-2 space-x-2 ${
            answerIsCorrect(selectedJawaban.lima.b, jawabanBenar.lima.b)
              ? " text-green-500"
              : answerIsCorrect(selectedJawaban.lima.b, jawabanBenar.lima.b) ===
                false
              ? "  text-red-500"
              : " text-black"
          }`}
        >
          Ali: ...(i)... hast du nach Parapat gefahren?
        </div>
        <div
          className={`flex items-center mb-2 space-x-2 ${
            answerIsCorrect(selectedJawaban.lima.b, jawabanBenar.lima.b)
              ? " text-green-500"
              : answerIsCorrect(selectedJawaban.lima.b, jawabanBenar.lima.b) ===
                false
              ? "  text-red-500"
              : " text-black"
          }`}
        >
          Ani : Ich bin ... (ii)... dem Bus Palansia&quot; nach Parapat
          gefahren.
        </div>
        <div className=" mb-2">
          <Dropdowns
            options={acakArray(options5)}
            value={selectedJawaban.lima.b}
            onChange={(value: any) => {
              updateJawabanOption("b", value, "lima");
            }}
          />
        </div>
      </div>
    );
  };
  const PercakapanC = () => {
    return (
      <div className=" mb-4">
        <div
          className={`flex items-center mb-2 space-x-2 ${
            answerIsCorrect(selectedJawaban.lima.c, jawabanBenar.lima.c)
              ? " text-green-500"
              : answerIsCorrect(selectedJawaban.lima.c, jawabanBenar.lima.c) ===
                false
              ? "  text-red-500"
              : " text-black"
          }`}
        >
          Lehrer:...(i)... geht es in dem Text?
        </div>
        <div
          className={`flex items-center mb-2 space-x-2 ${
            answerIsCorrect(selectedJawaban.lima.c, jawabanBenar.lima.c)
              ? " text-green-500"
              : answerIsCorrect(selectedJawaban.lima.c, jawabanBenar.lima.c) ===
                false
              ? "  text-red-500"
              : " text-black"
          }`}
        >
          Schüler: Im Text geht es ...(ii)... die Familienplanung.
        </div>
        <div className=" mb-2">
          <Dropdowns
            options={acakArray(options5)}
            value={selectedJawaban.lima.c}
            onChange={(value: any) => {
              updateJawabanOption("c", value, "lima");
            }}
          />
        </div>
      </div>
    );
  };
  const PercakapanD = () => {
    return (
      <div className=" mb-4">
        <div
          className={`flex items-center mb-2 space-x-2 ${
            answerIsCorrect(selectedJawaban.lima.d, jawabanBenar.lima.d)
              ? " text-green-500"
              : answerIsCorrect(selectedJawaban.lima.d, jawabanBenar.lima.d) ===
                false
              ? "  text-red-500"
              : " text-black"
          }`}
        >
          {" "}
          Ari:...(i)... wem hast du telefoniert?
        </div>
        <div
          className={`flex items-center mb-2 space-x-2 ${
            answerIsCorrect(selectedJawaban.lima.d, jawabanBenar.lima.d)
              ? " text-green-500"
              : answerIsCorrect(selectedJawaban.lima.d, jawabanBenar.lima.d) ===
                false
              ? "  text-red-500"
              : " text-black"
          }`}
        >
          Amy:...(ii)... Frau Berger.
        </div>
        <div className=" mb-2">
          Ari: Warum hast du mir nicht gesagt? Ich wollte auch mit ihr sprechen.
        </div>
        <div className=" mb-2">
          <Dropdowns
            options={acakArray(options5)}
            value={selectedJawaban.lima.d}
            onChange={(value: any) => {
              updateJawabanOption("d", value, "lima");
            }}
          />
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
  const selectedJawabanDua = useStore(
    (state: any) => state.materi1.jawabanSelected.dua
  );
  const jawabanBenarDua = useStore(
    (state: any) => state.materi1.jawabanBenar.dua
  );
  // universal
  const selectedJawaban = useStore(
    (state: any) => state.materi1.jawabanSelected
  );
  const jawabanBenar = useStore((state: any) => state.materi1.jawabanBenar);

  const updateJawabanSatuOption = useStore(
    (state: any) => state.updateJawabanSatuOption
  );
  const updateJawabanOption = useStore(
    (state: any) => state.updateJawabanOption
  );
  const isCheckingMateri1 = useStore((state: any) => state.isCheckingMateri1);
  const handle = useStore((state: any) => state.handle);
  const loadingPage = useStore((state: any) => state.loadingPage);

  const options1 = ["Bis", "durch", "entlang", "Fur", "gegen"];
  const options2 = ["Ab", "aus", "AuBer", "mit", "bei"];
  const options3 = ["an", "auf", "hinter", "in", "neben"];
  const options4 = ["auberhalb", "binnen", "innerhalb", "wahrend", "Wegen"];
  const options5 = ["Worauf,Auf", "Womit,mit", "Worum,um", "Mit,Mit"];
  const options6 = [
    "Der Jager geht durch den Wald",
    "Das Madchen wartet bis zu dem letzten Tag",
    "Mittels des Mikroskopes sieht man alles groB",
    "AuBer diesem Jungen hat er keine Freunde",
    "Stat der Milch trinkt man Tee",
  ];

  const answerIsCorrect = (input: any, kunci: any) => {
    if (input === kunci && isCheckingMateri1) {
      return true;
    } else if (input !== kunci && isCheckingMateri1) {
      return false;
    } else if (input === "" && kunci) {
      return "";
    }
  };

  const calculateAnswer = async () => {
    await Object.keys(selectedJawabanSatu).forEach((item) => {
      if (selectedJawabanSatu[item] === jawabanBenarSatu[item]) {
        setPoints((prevPoints) => prevPoints + 10);
      }
    });
    await Object.keys(selectedJawabanDua).forEach((item) => {
      if (selectedJawabanDua[item] === jawabanBenarDua[item]) {
        setPoints((prevPoints) => prevPoints + 10);
      }
    });
    await Object.keys(selectedJawaban.tiga).forEach((item) => {
      if (selectedJawaban.tiga[item] === jawabanBenar.tiga[item]) {
        setPoints((prevPoints) => prevPoints + 10);
      }
    });
    await Object.keys(selectedJawaban.empat).forEach((item) => {
      if (selectedJawaban.empat[item] === jawabanBenar.empat[item]) {
        setPoints((prevPoints) => prevPoints + 10);
      }
    });
    await Object.keys(selectedJawaban.lima).forEach((item) => {
      if (selectedJawaban.lima[item] === jawabanBenar.lima[item]) {
        setPoints((prevPoints) => prevPoints + 10);
      }
    });
    await Object.keys(selectedJawaban.enam).forEach((item) => {
      if (selectedJawaban.enam[item] === jawabanBenar.enam[item]) {
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
    <div
      className="  bg-slate-200"
      style={{
        backgroundImage: `url(${bgMateri.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "50%",
        backgroundPosition: "center",
      }}
    >
      {loadingPage && <LoadingPage />}
      <section className="bg-white/95 backdrop-blur-sm shadow-lg min-h-[100vh] border-t-8 border-teal-500 max-w-full lg:max-w-6xl m-auto">
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
                      onChange={(value: any) => {
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
                      onChange={(value: any) =>
                        updateJawabanSatuOption("b", value)
                      }
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
                      onChange={(value: any) =>
                        updateJawabanSatuOption("c", value)
                      }
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
                      onChange={(value: any) =>
                        updateJawabanSatuOption("d", value)
                      }
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
                      onChange={(value: any) =>
                        updateJawabanSatuOption("e", value)
                      }
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
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawabanDua.a, jawabanBenarDua.a)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawabanDua.a,
                          jawabanBenarDua.a
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>a.</p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options2)}
                      value={selectedJawabanDua.a}
                      onChange={(value: any) => {
                        updateJawabanOption("a", value, "dua");
                      }}
                    />
                  </span>
                  <p>
                    <i>morgen werde ich ein neues Leben beginnen</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenarDua.a}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawabanDua.b, jawabanBenarDua.b)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawabanDua.b,
                          jawabanBenarDua.b
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>b.</p>
                  <p>
                    <i>Er nahm den Brief</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options2)}
                      value={selectedJawabanDua.b}
                      onChange={(value: any) => {
                        updateJawabanOption("b", value, "dua");
                      }}
                    />
                  </span>
                  <p>
                    <i>der Schublade.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenarDua.b}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawabanDua.c, jawabanBenarDua.c)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawabanDua.c,
                          jawabanBenarDua.c
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>c.</p>

                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options2)}
                      value={selectedJawabanDua.c}
                      onChange={(value: any) => {
                        updateJawabanOption("c", value, "dua");
                      }}
                    />
                  </span>
                  <p>
                    <i>Milch und Honig nahm der Kranke nichts zu sich.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenarDua.c}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawabanDua.d, jawabanBenarDua.d)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawabanDua.d,
                          jawabanBenarDua.d
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>d.</p>
                  <p>
                    <i>Er arbeitet</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options2)}
                      value={selectedJawabanDua.d}
                      onChange={(value: any) => {
                        updateJawabanOption("d", value, "dua");
                      }}
                    />
                  </span>
                  <p>
                    <i>einem groben Hammer</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenarDua.d}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawabanDua.e, jawabanBenarDua.e)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawabanDua.e,
                          jawabanBenarDua.e
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>e.</p>
                  <p>
                    <i>Ich wohne</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options2)}
                      value={selectedJawabanDua.e}
                      onChange={(value: any) => {
                        updateJawabanOption("e", value, "dua");
                      }}
                    />
                  </span>
                  <p>
                    <i>meiner Tante in Medan</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenarDua.e}
                  </div>
                )}
              </div>
            </div>
            <div className="latihan3 mb-10">
              <span className=" mb-2">
                3 Lengkapi dengan preposisi yang diikuti kasus akusatif datif!.
              </span>
              <div className=" container-list-jawaban mt-2 pl-8">
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawaban.tiga.a, jawabanBenar.tiga.a)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawaban.tiga.a,
                          jawabanBenar.tiga.a
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>a.</p>
                  <p>
                    <i>Sie schreibt das Wort</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options3)}
                      value={selectedJawaban.tiga.a}
                      onChange={(value: any) => {
                        updateJawabanOption("a", value, "tiga");
                      }}
                    />
                  </span>
                  <p>
                    <i>die Tafel.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenar.tiga.a}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawaban.tiga.b, jawabanBenar.tiga.b)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawaban.tiga.b,
                          jawabanBenar.tiga.b
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>b.</p>
                  <p>
                    <i> Das Haus muss</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options3)}
                      value={selectedJawaban.tiga.b}
                      onChange={(value: any) => {
                        updateJawabanOption("b", value, "tiga");
                      }}
                    />
                  </span>
                  <p>
                    <i> jeden Fall verkauft werden.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenar.tiga.b}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawaban.tiga.c, jawabanBenar.tiga.c)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawaban.tiga.c,
                          jawabanBenar.tiga.c
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>c.</p>
                  <p>
                    <i> Das Mottorad steht</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options3)}
                      value={selectedJawaban.tiga.c}
                      onChange={(value: any) => {
                        updateJawabanOption("c", value, "tiga");
                      }}
                    />
                  </span>
                  <p>
                    <i>der Garage.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenar.tiga.c}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawaban.tiga.d, jawabanBenar.tiga.d)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawaban.tiga.d,
                          jawabanBenar.tiga.d
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>d.</p>
                  <p>
                    <i> Die Villa steht</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options3)}
                      value={selectedJawaban.tiga.d}
                      onChange={(value: any) => {
                        updateJawabanOption("d", value, "tiga");
                      }}
                    />
                  </span>
                  <p>
                    <i>einem Park.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenar.tiga.d}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(selectedJawaban.tiga.e, jawabanBenar.tiga.e)
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawaban.tiga.e,
                          jawabanBenar.tiga.e
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>e.</p>
                  <p>
                    <i>Er setzte sich</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options3)}
                      value={selectedJawaban.tiga.e}
                      onChange={(value: any) => {
                        updateJawabanOption("e", value, "tiga");
                      }}
                    />
                  </span>
                  <p>
                    <i>mich.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenar.tiga.e}
                  </div>
                )}
              </div>
            </div>
            <div className="latihan4 mb-10">
              <span className=" mb-2">
                4 Lengkapi dengan preposisi yang diikuti kasus genitif!
              </span>
              <div className=" container-list-jawaban mt-2 pl-8">
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(
                      selectedJawaban.empat.a,
                      jawabanBenar.empat.a
                    )
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawaban.empat.a,
                          jawabanBenar.empat.a
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>a.</p>
                  <p>
                    <i>Mein Bruder wohnt jetzt</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options4)}
                      value={selectedJawaban.empat.a}
                      onChange={(value: any) => {
                        updateJawabanOption("a", value, "empat");
                      }}
                    />
                  </span>
                  <p>
                    <i>der Stadt Bandung.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenar.empat.a}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(
                      selectedJawaban.empat.b,
                      jawabanBenar.empat.b
                    )
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawaban.empat.b,
                          jawabanBenar.empat.b
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>b.</p>
                  <p>
                    <i>Wir erwarten ihre Antwort</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options4)}
                      value={selectedJawaban.empat.b}
                      onChange={(value: any) => {
                        updateJawabanOption("b", value, "empat");
                      }}
                    />
                  </span>
                  <p>
                    <i>einer Woche.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenar.empat.b}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(
                      selectedJawaban.empat.c,
                      jawabanBenar.empat.c
                    )
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawaban.empat.c,
                          jawabanBenar.empat.c
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>c.</p>
                  <p>
                    <i>Er beendet sein Studium</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options4)}
                      value={selectedJawaban.empat.c}
                      onChange={(value: any) => {
                        updateJawabanOption("c", value, "empat");
                      }}
                    />
                  </span>
                  <p>
                    <i> eines Jahres.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenar.empat.c}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(
                      selectedJawaban.empat.d,
                      jawabanBenar.empat.d
                    )
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawaban.empat.d,
                          jawabanBenar.empat.d
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>d.</p>
                  <p>
                    <i></i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options4)}
                      value={selectedJawaban.empat.d}
                      onChange={(value: any) => {
                        updateJawabanOption("d", value, "empat");
                      }}
                    />
                  </span>
                  <p>
                    <i> seines Studiums war er immer krank.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenar.empat.d}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${
                    answerIsCorrect(
                      selectedJawaban.empat.e,
                      jawabanBenar.empat.e
                    )
                      ? " text-green-500"
                      : answerIsCorrect(
                          selectedJawaban.empat.e,
                          jawabanBenar.empat.e
                        ) === false
                      ? "  text-red-500"
                      : " text-black"
                  }`}
                >
                  <p>e.</p>
                  <p>
                    <i></i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns
                      options={acakArray(options4)}
                      value={selectedJawaban.empat.e}
                      onChange={(value: any) => {
                        updateJawabanOption("e", value, "empat");
                      }}
                    />
                  </span>
                  <p>
                    <i>der Krankheit bleibt er zu Hause.</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    jawaban : {jawabanBenar.empat.e}
                  </div>
                )}
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
                      {isCheckingMateri1 && (
                        <div className="jawaban-benar text-green-500 mb-2">
                          jawaban : {jawabanBenar.lima.a}
                        </div>
                      )}
                    </li>
                    <li>
                      <div className="flex space-x-2">
                        <p>b. </p>
                        <PercakapanB />
                      </div>
                      {isCheckingMateri1 && (
                        <div className="jawaban-benar text-green-500 mb-2">
                          jawaban : {jawabanBenar.lima.b}
                        </div>
                      )}
                    </li>
                    <li>
                      <div className="flex space-x-2">
                        <p>c. </p>
                        <PercakapanC />
                      </div>
                      {isCheckingMateri1 && (
                        <div className="jawaban-benar text-green-500 mb-2">
                          jawaban : {jawabanBenar.lima.c}
                        </div>
                      )}
                    </li>
                    <li>
                      <div className="flex space-x-2">
                        <p>d. </p>
                        <PercakapanD />
                      </div>
                      {isCheckingMateri1 && (
                        <div className="jawaban-benar text-green-500 mb-2">
                          jawaban : {jawabanBenar.lima.d}
                        </div>
                      )}
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
                      <div
                        className={`flex items-center mb-2 space-x-2 ${
                          answerIsCorrect(
                            selectedJawaban.enam.a,
                            jawabanBenar.enam.a
                          )
                            ? " text-green-500"
                            : answerIsCorrect(
                                selectedJawaban.enam.a,
                                jawabanBenar.enam.a
                              ) === false
                            ? "  text-red-500"
                            : " text-black"
                        }`}
                      >
                        <p>a. </p>
                        <div>der Jäger der Wald - gehen - durch</div>
                      </div>
                      <div className=" pl-6">
                        <Dropdowns
                          options={acakArray(options6)}
                          value={selectedJawaban.enam.a}
                          onChange={(value: any) => {
                            updateJawabanOption("a", value, "enam");
                          }}
                        />
                      </div>
                      {isCheckingMateri1 && (
                        <div className="jawaban-benar text-green-500 mb-2">
                          jawaban : {jawabanBenar.enam.a}
                        </div>
                      )}
                    </li>
                    <li>
                      <div
                        className={`flex items-center mb-2 space-x-2 ${
                          answerIsCorrect(
                            selectedJawaban.enam.b,
                            jawabanBenar.enam.b
                          )
                            ? " text-green-500"
                            : answerIsCorrect(
                                selectedJawaban.enam.b,
                                jawabanBenar.enam.b
                              ) === false
                            ? "  text-red-500"
                            : " text-black"
                        }`}
                      >
                        <p>b. </p>
                        <div>das Mädchen bis - der letzte Tag - warten zu</div>
                      </div>
                      <div className=" pl-6">
                        <Dropdowns
                          options={acakArray(options6)}
                          value={selectedJawaban.enam.b}
                          onChange={(value: any) => {
                            updateJawabanOption("b", value, "enam");
                          }}
                        />
                      </div>
                      {isCheckingMateri1 && (
                        <div className="jawaban-benar text-green-500 mb-2">
                          jawaban : {jawabanBenar.enam.b}
                        </div>
                      )}
                    </li>
                    <li>
                      <div
                        className={`flex items-center mb-2 space-x-2 ${
                          answerIsCorrect(
                            selectedJawaban.enam.c,
                            jawabanBenar.enam.c
                          )
                            ? " text-green-500"
                            : answerIsCorrect(
                                selectedJawaban.enam.c,
                                jawabanBenar.enam.c
                              ) === false
                            ? "  text-red-500"
                            : " text-black"
                        }`}
                      >
                        <p>c. </p>
                        <div>
                          das Mikroskopalles - groß man - sehen - mittels
                        </div>
                      </div>
                      <div className=" pl-6">
                        <Dropdowns
                          options={acakArray(options6)}
                          value={selectedJawaban.enam.c}
                          onChange={(value: any) => {
                            updateJawabanOption("c", value, "enam");
                          }}
                        />
                      </div>
                      {isCheckingMateri1 && (
                        <div className="jawaban-benar text-green-500 mb-2">
                          jawaban : {jawabanBenar.enam.c}
                        </div>
                      )}
                    </li>
                    <li>
                      <div
                        className={`flex items-center mb-2 space-x-2 ${
                          answerIsCorrect(
                            selectedJawaban.enam.d,
                            jawabanBenar.enam.d
                          )
                            ? " text-green-500"
                            : answerIsCorrect(
                                selectedJawaban.enam.d,
                                jawabanBenar.enam.d
                              ) === false
                            ? "  text-red-500"
                            : " text-black"
                        }`}
                      >
                        <p>d. </p>
                        <div>
                          dieser Junge haben - er ausser - Freunde - keine
                        </div>
                      </div>
                      <div className=" pl-6">
                        <Dropdowns
                          options={acakArray(options6)}
                          value={selectedJawaban.enam.d}
                          onChange={(value: any) => {
                            updateJawabanOption("d", value, "enam");
                          }}
                        />
                      </div>
                      {isCheckingMateri1 && (
                        <div className="jawaban-benar text-green-500 mb-2">
                          jawaban : {jawabanBenar.enam.d}
                        </div>
                      )}
                    </li>
                    <li>
                      <div
                        className={`flex items-center mb-2 space-x-2 ${
                          answerIsCorrect(
                            selectedJawaban.enam.e,
                            jawabanBenar.enam.e
                          )
                            ? " text-green-500"
                            : answerIsCorrect(
                                selectedJawaban.enam.e,
                                jawabanBenar.enam.e
                              ) === false
                            ? "  text-red-500"
                            : " text-black"
                        }`}
                      >
                        <p>e. </p>
                        <div>die Milch statt - man - Tee - trinken</div>
                      </div>
                      <div className=" pl-6">
                        <Dropdowns
                          options={acakArray(options6)}
                          value={selectedJawaban.enam.e}
                          onChange={(value: any) => {
                            updateJawabanOption("e", value, "enam");
                          }}
                        />
                      </div>
                      {isCheckingMateri1 && (
                        <div className="jawaban-benar text-green-500 mb-2">
                          jawaban : {jawabanBenar.enam.e}
                        </div>
                      )}
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
                Lihat Hasil
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Latihan1;
