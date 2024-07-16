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
  const options6 = ["bis","durch","ohne"];
  const options7 = ["gegen","für","entlang"];
  const options8 = ["um","ohne","entlang"];
  const options9 = ["für","entlang","gegen"];
  const options10 = ["gegen","für","ohne"];
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
                  <p>6.</p>
                  <p>
                    <i>Sie laufen </i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options6)}
                      value={selectedJawabanSatu.f}
                      onChange={(value: any) => {
                        updateJawabanSatuOption("f", value);
                      }}
                    />
                  </span>
                  <p>
                    <i>den Wald</i>
                  </p>
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
                    <i>Mein Vater kommt </i>
                  </p>
                  <span className="">
                    <Dropdowns
                      options={acakArray(options7)}
                      value={selectedJawabanSatu.g}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("g", value)
                      }
                    />
                  </span>
                  <p>
                    <i> 17.00 Uhr </i>
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
                    <i>Er geht den Strand </i>
                  </p>
                  <span className="">
                    <Dropdowns
                      options={acakArray(options8)}
                      value={selectedJawabanSatu.h}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("h", value)
                      }
                    />
                  </span>
                  <p>
                    <i>spazieren</i>
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
                  <p>9.</p>
                  <p>
                    <i>Ihr geht die Straße Jalan Willem Iskandar</i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options9)}
                      value={selectedJawabanSatu.i}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("i", value)
                      }
                    />
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
                    <i>Das Auto fuhr </i>
                  </p>
                  <span className="">

                    <Dropdowns
                      options={acakArray(options10)}
                      value={selectedJawabanSatu.j}
                      onChange={(value: any) =>
                        updateJawabanSatuOption("j", value)
                      }
                    />
                  </span>
                  <p>
                    <i>den Baum</i>
                  </p>
                </div>
                {isCheckingMateri1 && (
                  <div className="jawaban-benar text-green-500 mb-2">
                    Antwort : {jawabanBenarSatu.j}
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
