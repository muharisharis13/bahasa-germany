"use client";
import Dropdowns from "../components/Dropdowns";
import LoadingPage from "../components/LoadingPage";
import { useStore } from "../zustand";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import bgMateri from "@/public/background_materi.jpg";

const Latihan1 = () => {
  const router = useRouter();
  const [points, setPoints] = useState(0);
  const [options_acak, setOptionsCak] = useState([])


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

  // Start

  // End
  const [isDragging, setIsDragging] = useState(false)
  const options1 = ["Bis", "Durch", "Entlang", "Für", "Gegen", "Ohne", "Um"];
  const options6 = ["bis", "durch", "ohne"];
  const options7 = ["gegen", "für", "entlang"];
  const options8 = ["um", "ohne", "entlang"];
  const options9 = ["für", "entlang", "gegen"];
  const options10 = ["gegen", "für", "ohne"];

  const options11 = ["gegen", "durch", "ohne"];
  const options12 = ["entlang", "für", "gegen"];
  const options13 = ["um", "für", "ohne"];
  const options14 = ["bis", "für", "um"];
  const options15 = ["gegen", "um", "ohne"];
  const options16 = ["gegen", "um", "ohne"];
  const options17 = ["um", "für", "ohne"];
  const options18 = ["gegen", "um", "ohne"];
  const options19 = ["um", "für", "ohne"];
  const options20 = ["gegen", "um", "ohne"];
  const options21 = ["gegen", "entlang", "ohne"];
  const options22 = ["um", "bis", "ohne"];
  const options23 = ["entlang", "für", "ohne"];
  const options24 = ["gegen", "für", "ohne"];
  const options25 = ["gegen", "um", "entlang"];
  // const options6 = [
  //   "Der Jager geht durch den Wald",
  //   "Das Madchen wartet bis zu dem letzten Tag",
  //   "Mittels des Mikroskopes sieht man alles groB",
  //   "AuBer diesem Jungen hat er keine Freunde",
  //   "Stat der Milch trinkt man Tee",
  // ];

  useEffect(() => {
    setOptionsCak(acakArray(options1))
  }, [])

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
        setPoints((prevPoints) => prevPoints + 20);
      }
    });
    await Object.keys(selectedJawaban.tiga).forEach((item) => {
      if (selectedJawaban.tiga[item] === jawabanBenar.tiga[item]) {
        setPoints((prevPoints) => prevPoints + 20);
      }
    });
    await Object.keys(selectedJawaban.empat).forEach((item) => {
      if (selectedJawaban.empat[item] === jawabanBenar.empat[item]) {
        setPoints((prevPoints) => prevPoints + 20);
      }
    });
    await Object.keys(selectedJawaban.lima).forEach((item) => {
      if (selectedJawaban.lima[item] === jawabanBenar.lima[item]) {
        setPoints((prevPoints) => prevPoints + 20);
      }
    });
    await Object.keys(selectedJawaban.enam).forEach((item) => {
      if (selectedJawaban.enam[item] === jawabanBenar.enam[item]) {
        setPoints((prevPoints) => prevPoints + 20);
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

  // Start Function for Drag & Drop

  function allowDrop(ev: any) {
    ev.preventDefault();
  }

  function drag(ev: any) {
    ev.dataTransfer.setData("text/html", ev.target.id);
  }

  function drop(ev: any, option: String) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    // ev.target.appendChild(document.getElementById(data));
    var tes = ev.target
    var tes1 = document.getElementById(data)

    var jawaban = tes1?.textContent
    tes.textContent = tes1?.textContent
    updateJawabanSatuOption(option, jawaban)
    // document.getElementById(data)?.remove();
  }

  // End Function Drag & Drop


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

        <h4 className=" font-bold text-4xl m-3 p-5">Ubungen</h4>
        <h2 className=" font-bold  text-4xl m-3 p-5">Vervollständigen Sie die folgenden Sätze mit Präpositionen, gefolgt vom Akkusativfall!</h2>
        <div className="flex flex-row p-5">
          {
            options_acak?.map((item: any, idx: number) => (
              <span className="bg-white p-1 rounded-2x2 flex-1 m-2 text-center border-2 border-dashed cursor-pointer border-gray-500 w-1/5" key={idx} id={"jawab" + idx} draggable="true" onDragStart={e => drag(e)}>
                <h2 className="font-bold mb-2 text-xl text-gray-800">{item}</h2>
              </span>
            ))
          }
        </div>
        <div className=" flex flex-col items-start px-2 lg:px-10 py-12 mx-auto text-left h-full">
          <div className=" min-h-[100vh] text-left text-4xl">
            <div className="latihan1 mb-10 mt-5">
              {/* <span className=" mb-2">
                1 Ergänzt durch eine Präposition, gefolgt von einem Akkusativ!
              </span> */}
              <div className=" container-list-jawaban mt-2 pl-8">
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.a, jawabanBenarSatu.a)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.a,
                      jawabanBenarSatu.a
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>1.</p>
                  <span className="">

                    {/* <Dropdowns
                      options={acakArray(options1)}
                      value={selectedJawabanSatu.a}
                      onChange={(value: any) => {
                        updateJawabanSatuOption("a", value);
                      }}
                    /> */}
                  </span>
                  <p>
                    <i>Mein Vater arbeitet  von 08.00 Uhr <span className="bg-transparent px-11 rounded-2x2 flex-1 text-center cursor-pointer border-b-2 border-dashed border-gray-500 w-full" id="soal1" onDrop={e => drop(e, "a")} onDragOver={e => allowDrop(e)}></span>&nbsp;15.00 Uhr</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.a}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.b, jawabanBenarSatu.b)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.b,
                      jawabanBenarSatu.b
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>2.</p>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center border-b-2 border-dashed border-gray-500 w-full" id="soal2" onDrop={e => drop(e, "b")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <span className="">
                    {/* <Dropdowns
                      options={acakArray(options1)}
                      value={selectedJawabanSatu.b}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("b", value)
                      }
                    /> */}
                  </span>
                  <p>
                    <i> nächsten Montag muss die Arbeit fertig sein </i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.b}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.c, jawabanBenarSatu.c)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.c,
                      jawabanBenarSatu.c
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>3.</p>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center border-b-2 border-dashed border-gray-500 w-full" id="soal3" onDrop={e => drop(e, "c")} onDragOver={e => allowDrop(e)}></span>&nbsp;</i>
                  </p>

                  <p>
                    <i>den Füller kann ich nicht schreiben</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.c}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.d, jawabanBenarSatu.d)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.d,
                      jawabanBenarSatu.d
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>4.</p>
                  <p>
                    <i>Diese Blumen sind</i>
                  </p>
                  <span className="">

                    {/* <Dropdowns
                      options={acakArray(options1)}
                      value={selectedJawabanSatu.d}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("d", value)
                      }
                    /> */}
                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center border-b-2 border-dashed border-gray-500 w-full" id="soal4" onDrop={e => drop(e, "d")} onDragOver={e => allowDrop(e)}></span>&nbsp;dich</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.d}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.e, jawabanBenarSatu.e)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.e,
                      jawabanBenarSatu.e
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>5.</p>
                  <p>
                    <i>Ich habe einen  Termin</i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500 w-full" id="soal5" onDrop={e => drop(e, "e")} onDragOver={e => allowDrop(e)}></span>&nbsp;09.00 Uhr</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.e}
                  </div>
                )}

                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.f, jawabanBenarSatu.f)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.f,
                      jawabanBenarSatu.f
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>6.
                    <span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal6" onDrop={e => drop(e, "f")} onDragOver={e => allowDrop(e)}></span>
                  </p>
                  <p>
                    <i>Hamburg sind noch etwa 250 Kilometer</i>
                  </p>
                  <span className="">

                  </span>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.f}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.g, jawabanBenarSatu.g)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.g,
                      jawabanBenarSatu.g
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>7.</p>
                  <p>
                    <i>Er hatte</i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal7" onDrop={e => drop(e, "g")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>einen Unfall seinen rechten Arm verloren</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.g}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.h, jawabanBenarSatu.h)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.h,
                      jawabanBenarSatu.h
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>8.</p>
                  <p>
                    <i>Ihr geht die Straße Jalan Gatot Subroto</i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal8" onDrop={e => drop(e, "h")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.h}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.i, jawabanBenarSatu.i)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.i,
                      jawabanBenarSatu.i
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>9.
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal9" onDrop={e => drop(e, "i")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>eine Mutter ist Kochen eine leichte Aufgabe</i>
                  </p>
                  <span className="">

                  </span>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.i}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.j, jawabanBenarSatu.j)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.j,
                      jawabanBenarSatu.j
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>10.</p>
                  <p>
                    <i>Die Ärzte sind</i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal10" onDrop={e => drop(e, "j")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>eine Mutter ist Kochen eine leichte Aufgabe</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.j}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.k, jawabanBenarSatu.k)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.k,
                      jawabanBenarSatu.k
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>11.</p>
                  <p>
                    <i>Der Bus fährt nur</i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal11" onDrop={e => drop(e, "k")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>Bahnhof</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.k}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.l, jawabanBenarSatu.l)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.l,
                      jawabanBenarSatu.l
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>12.</p>
                  <p>
                    <i>Die Kinder dürfen </i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal12" onDrop={e => drop(e, "l")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>18 Uhr spielen</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.l}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.m, jawabanBenarSatu.m)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.m,
                      jawabanBenarSatu.m
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>13.</p>
                  <p>
                    <i>Ich laufe  </i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal13" onDrop={e => drop(e, "m")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>das Stadtzentrum</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.m}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.n, jawabanBenarSatu.n)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.n,
                      jawabanBenarSatu.n
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>14.
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal14" onDrop={e => drop(e, "n")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>Sport wird man gesund bleiben</i>
                  </p>
                  <span className="">

                  </span>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.n}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.o, jawabanBenarSatu.o)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.o,
                      jawabanBenarSatu.o
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>15.</p>
                  <p>
                    <i>Die ganze Straße   </i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal15" onDrop={e => drop(e, "o")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>stehen die Demonstranten</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.o}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.p, jawabanBenarSatu.p)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.p,
                      jawabanBenarSatu.p
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>16.</p>
                  <p>
                    <i>Er malt </i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal16" onDrop={e => drop(e, "p")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>den Flur</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.p}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.q, jawabanBenarSatu.q)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.q,
                      jawabanBenarSatu.q
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>17.</p>
                  <p>
                    <i>Der Mann ist  </i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal17" onDrop={e => drop(e, "q")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>eine Woche nach Frankfurt gefahren</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.q}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.r, jawabanBenarSatu.r)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.r,
                      jawabanBenarSatu.r
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>18.</p>
                  <p>
                    <i>Ich habe die Tasche  </i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal18" onDrop={e => drop(e, "r")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>1000 Euro gekauft</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.r}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.s, jawabanBenarSatu.s)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.s,
                      jawabanBenarSatu.s
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>19.</p>
                  <p>
                    <i>Mein Mann hat immer etwas  </i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal19" onDrop={e => drop(e, "s")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>mich mitgebracht</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.s}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.t, jawabanBenarSatu.t)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.t,
                      jawabanBenarSatu.t
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>20.</p>
                  <p>
                    <i>Mein Flug landet  </i>
                  </p>
                  <span className="">

                  </span>
                  <p>
                    <i><span className="bg-transparent px-11 rounded-2x2 flex-1 text-center  border-b-2 border-dashed border-gray-500" id="soal20" onDrop={e => drop(e, "t")} onDragOver={e => allowDrop(e)}></span></i>
                  </p>
                  <p>
                    <i>7 Uhr morgens</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.t}
                  </div>
                )}
              </div>
            </div>

            {/* Start Pilgan */}
            <h2 className=" font-bold  text-4xl">Vervollständigen Sie die folgenden Sätze, indem Sie die beste passende Antwort auswählen!</h2>
            <div className="latihan1 mb-10 mt-5">
              {/* <span className=" mb-2">
                1 Ergänzt durch eine Präposition, gefolgt von einem Akkusativ!
              </span> */}
              <div className=" container-list-jawaban mt-2 pl-8">
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.u, jawabanBenarSatu.u)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.u,
                      jawabanBenarSatu.u
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>21.</p>
                  <p>
                    <i>Sie laufen </i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options6)}
                      value={selectedJawabanSatu.u}
                      onChange={(value: any) => {
                        updateJawabanSatuOption("u", value);
                      }}
                    />
                  </span>
                  <p>
                    <i>den Wald</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.u}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.v, jawabanBenarSatu.v)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.v,
                      jawabanBenarSatu.v
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>22.</p>
                  <p>
                    <i>Mein Vater kommt </i>
                  </p>
                  <span className="">
                    <Dropdowns
                      options={acakArray(options7)}
                      value={selectedJawabanSatu.v}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("v", value)
                      }
                    />
                  </span>
                  <p>
                    <i> 17.00 Uhr </i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.v}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.w, jawabanBenarSatu.w)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.w,
                      jawabanBenarSatu.w
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>23.</p>
                  <p>
                    <i>Er geht den Strand </i>
                  </p>
                  <span className="">
                    <Dropdowns
                      options={acakArray(options8)}
                      value={selectedJawabanSatu.w}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("w", value)
                      }
                    />
                  </span>
                  <p>
                    <i>spazieren</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.w}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.x, jawabanBenarSatu.x)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.x,
                      jawabanBenarSatu.x
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>24.</p>
                  <p>
                    <i>Ihr geht die Straße Jalan Willem Iskandar</i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options9)}
                      value={selectedJawabanSatu.x}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("x", value)
                      }
                    />
                  </span>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.x}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.y, jawabanBenarSatu.y)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.y,
                      jawabanBenarSatu.y
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>25.</p>
                  <p>
                    <i>Das Auto fuhr </i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options10)}
                      value={selectedJawabanSatu.y}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("y", value)
                      }
                    />
                  </span>
                  <p>
                    <i>den Baum</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.y}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.z, jawabanBenarSatu.z)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.z,
                      jawabanBenarSatu.z
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>26.</p>
                  <p>
                    <i>Er gingen </i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options11)}
                      value={selectedJawabanSatu.z}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("z", value)
                      }
                    />
                  </span>
                  <p>
                    <i>den Wald</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.z}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.aa, jawabanBenarSatu.aa)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.aa,
                      jawabanBenarSatu.aa
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>27.</p>
                  <p>
                    <i>Ich komme nur </i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options12)}
                      value={selectedJawabanSatu.aa}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("aa", value)
                      }
                    />
                  </span>
                  <p>
                    <i>zwei Tage</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.aa}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.ab, jawabanBenarSatu.ab)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.ab,
                      jawabanBenarSatu.ab
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>28.</p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options13)}
                      value={selectedJawabanSatu.ab}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("ab", value)
                      }
                    />
                  </span>
                  <p>
                    <i>20 Uhr beginnt die Tagesschau</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.ab}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.ac, jawabanBenarSatu.ac)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.ac,
                      jawabanBenarSatu.ac
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>29.</p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options14)}
                      value={selectedJawabanSatu.ac}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("ac", value)
                      }
                    />
                  </span>
                  <p>
                    <i>dahin ist noch ein weter Weg</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.ac}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.ad, jawabanBenarSatu.ad)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.ad,
                      jawabanBenarSatu.ad
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>30.</p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options15)}
                      value={selectedJawabanSatu.ad}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("ad", value)
                      }
                    />
                  </span>
                  <p>
                    <i>ihn bin ein Anfänger</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.ad}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.ae, jawabanBenarSatu.ae)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.ae,
                      jawabanBenarSatu.ae
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>31.</p>
                  <p>
                    <i>Das Haus ist  </i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options16)}
                      value={selectedJawabanSatu.ae}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("ae", value)
                      }
                    />
                  </span>
                  <p>
                    <i>1.200.000 Euro zu verkaufen</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.ae}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.af, jawabanBenarSatu.af)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.af,
                      jawabanBenarSatu.af
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>32.</p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options17)}
                      value={selectedJawabanSatu.af}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("af", value)
                      }
                    />
                  </span>
                  <p>
                    <i>seine Frau möchte er nicht gehen</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.af}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.ag, jawabanBenarSatu.ag)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.ag,
                      jawabanBenarSatu.ag
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>33.</p>
                  <p>
                    <i>Ayla trinkt gerne einen Glas Kaffee  </i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options18)}
                      value={selectedJawabanSatu.ag}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("ag", value)
                      }
                    />
                  </span>
                  <p>
                    <i>Kaffein</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.ag}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.ah, jawabanBenarSatu.ah)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.ah,
                      jawabanBenarSatu.ah
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>34.</p>
                  <p>
                    <i>Der Film beginnt  </i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options19)}
                      value={selectedJawabanSatu.ah}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("ah", value)
                      }
                    />
                  </span>
                  <p>
                    <i>9 Uhr</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.ah}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.ai, jawabanBenarSatu.ai)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.ai,
                      jawabanBenarSatu.ai
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>35.</p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options20)}
                      value={selectedJawabanSatu.ai}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("ai", value)
                      }
                    />
                  </span>
                  <p>
                    <i>die Uhrzeit kriegst du nicht mehr frisches Obst</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.ai}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.aj, jawabanBenarSatu.aj)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.aj,
                      jawabanBenarSatu.aj
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>36.</p>
                  <p>
                    <i>Wir kommen </i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options21)}
                      value={selectedJawabanSatu.aj}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("aj", value)
                      }
                    />
                  </span>
                  <p>
                    <i>19 Uhr zurück</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.aj}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.ak, jawabanBenarSatu.ak)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.ak,
                      jawabanBenarSatu.ak
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>37.</p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options22)}
                      value={selectedJawabanSatu.ak}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("ak", value)
                      }
                    />
                  </span>
                  <p>
                    <i>die Weihnachtszeit sind die Schaufenster hübsch dekoriert</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.ak}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.al, jawabanBenarSatu.al)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.al,
                      jawabanBenarSatu.al
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>38.</p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options23)}
                      value={selectedJawabanSatu.al}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("al", value)
                      }
                    />
                  </span>
                  <p>
                    <i>ihn bin ich ein Anfänger</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.al}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.am, jawabanBenarSatu.am)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.am,
                      jawabanBenarSatu.am
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>39.</p>
                  <p>
                    <i>Wie viel hast du  </i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options24)}
                      value={selectedJawabanSatu.am}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("am", value)
                      }
                    />
                  </span>
                  <p>
                    <i>das Haus bezahlt?</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.am}
                  </div>
                )}
                <div
                  className={`flex items-center mb-2 space-x-2 ${answerIsCorrect(selectedJawabanSatu.an, jawabanBenarSatu.an)
                    ? " text-green-500"
                    : answerIsCorrect(
                      selectedJawabanSatu.an,
                      jawabanBenarSatu.an
                    ) === false
                      ? "  text-red-500"
                      : " text-black"
                    }`}
                >
                  <p>40.</p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options25)}
                      value={selectedJawabanSatu.an}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("an", value)
                      }
                    />
                  </span>
                  <p>
                    <i>des Weges standen Tausende von Menschen</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.an}
                  </div>
                )}
              </div>
            </div>

            {/* End Pilgan */}

          </div>

          {!isCheckingMateri1 ? (
            <div className="inline-flex w-full mt-6 sm:w-auto">
              <button
                className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                onClick={handlePeriksaJawaban}
              >
                überprüfen !
              </button>
            </div>
          ) : (
            <div className="inline-flex w-full mt-6 sm:w-auto">
              <button
                onClick={handleLatihanSelanjut}
                className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                Ergebnisse anzeigen
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Latihan1;
