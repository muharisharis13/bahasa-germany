import React from "react";
import Link from "next/link";
import bgMateri from "@/public/background_materi.jpg";

const TujuanPembelajaran = () => {
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
          <div className=" h-full overflow-y-auto text-justify  min-h-[90vh] text-2xl">
            <div className="header1 font-bold text-3xl items-center text-center mb-5">
              Lernziel aus das Buch “BUKU AJAR PEMBELAJARAN TATA BAHASA JERMAN”
            </div>
            <div className="mb-5">
              1. Die Studenten können Sätze mit Präpositionen mit dem Dativ
              Akkusativ <br />
              2. Die Studenten können Sätze mit Präpositionen mit dem Dativ{" "}
              <br />
              3. Die Studenten können Sätze mit Präpositionen mit Akkusativ oder
              Dativ <br />
              4. Die Studenten können Sätze mit Präpositionen mit Genitiv <br />
              5. Die Studenten können Sätze mit Ersatzpräposition
              (Präpositionalpronomen)
            </div>
          </div>

          <div className="inline-flex w-full  sm:w-auto">
            <Link
              href="/materi1"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Lernmaterialien
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TujuanPembelajaran;
