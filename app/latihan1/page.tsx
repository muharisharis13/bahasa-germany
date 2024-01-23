import Dropdowns from "../components/Dropdowns";

const Latihan1 = () => {
  return (
    <div className=" max-w-full lg:max-w-6xl m-auto">
      <section className="bg-white shadow-lg min-h-[100vh]">
        <div className=" flex flex-col items-start px-4 py-12 mx-auto text-left h-full">
          <div className=" min-h-[100vh] text-left">
            <h4 className=" font-bold">1.7 Latihan</h4>
            <div>
              <span className=" mb-2">
                1.7.1 Lengkapi dengan preposisi yang diikuti kasus akusatif!
              </span>
              <div className=" container-list-jawaban mt-2">
                <div className=" flex items-center mb-2 space-x-2">
                  <p>a.</p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>Hamburg sind noch etwa 250 Kilometer.</i>
                  </p>
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>b.</p>
                  <p>
                    <i>Er hatte</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>einen Unfall seinen rechten Arm verloren </i>
                  </p>
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>c.</p>
                  <p>
                    <i>Ihr geht die Strabe Jalan Gatot Subroto</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>d.</p>

                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>Eine Mutter ost Kochen eine leichte Aufgabe.</i>
                  </p>
                </div>
                <div className=" flex items-center mb-2 space-x-2">
                  <p>e.</p>
                  <p>
                    <i>Die Arzte sind</i>
                  </p>
                  <span className=" px-2">
                    <Dropdowns />
                  </span>
                  <p>
                    <i>das Rauchen.</i>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Kerjakan Soal!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Latihan1;
