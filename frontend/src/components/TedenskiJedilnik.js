import React, { useEffect, useState } from "react";
import jedilnikService from "../services/jedilnikService";
import receptService from "../services/receptService";

const DNEVI = ["Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota", "Nedelja"];
const OBROKI = [
  { kljuc: "ZAJTRK", naziv: "Zajtrk" },
  { kljuc: "KOSILO", naziv: "Kosilo" },
  { kljuc: "VECERJA", naziv: "Večerja" },
];

// Vrne datum, premaknjen za določeno število dni.
const dodajDni = (datum, dni) => {
    const nov = new Date(datum);
    nov.setDate(nov.getDate() + dni);
    return nov;
};

// Vrne datum v obliki "2026-11-16" (tako ga pričakuje backend).
const vBesedilo = (datum) =>
    `${datum.getFullYear()}-${String(datum.getMonth() + 1).padStart(2, "0")}-${String(datum.getDate()).padStart(2, "0")}`;

// Ponedeljek tekočega tedna.
const danes = new Date();
danes.setHours(0, 0, 0, 0);
const TA_PONEDELJEK = dodajDni(danes, -((danes.getDay() + 6) % 7));

function TedenskiJedilnik() {
    const [ponedeljek, setPonedeljek] = useState(TA_PONEDELJEK);
    const [obroki, setObroki] = useState([]);
    const [recepti, setRecepti] = useState([]);
    const [izbira, setIzbira] = useState(null); // { datum, obrok } pri kliku na +
    const [napaka, setNapaka] = useState("");

    // Recepte naložimo enkrat.
    useEffect(() => {
        receptService
            .pridobiVseRecepte()
            .then((response) => setRecepti(response.data))
            .catch(() => setNapaka("Receptov ni mogoče naložiti."));
    }, []);

    // Obroke naložimo ob vsaki menjavi tedna.
    useEffect(() => {
        jedilnikService
            .pridobiTeden(vBesedilo(ponedeljek))
            .then((response) => setObroki(response.data))
            .catch(() => setNapaka("Receptov ni mogoče naložiti."));
    }, [ponedeljek]);

    const pretekliTeden = ponedeljek < TA_PONEDELJEK;
    const naslednjiTeden = ponedeljek > TA_PONEDELJEK;

    const imeRecepta = (datum, obrok) => {
        const vnos = obroki.find((o) => o.datum === datum && o.obrok === obrok);
        if (!vnos) return null;
        const recept = recepti.find((r) => r.id === vnos.receptId);
        return recept ? recept.naziv : "—";
    };

    const shraniRecept = (recept) => {
        jedilnikService
            .shraniObrok({ datum: izbira.datum, obrok: izbira.obrok, receptId: recept.id })
            .then((response) => {
                setObroki([...obroki, response.data]);
                setIzbira(null);
            })
            .catch(() => setNapaka("Recepta ni bilo mogoče shraniti."));
    };

    // Pri izbiri pokažemo samo recepte iz kategorije izbranega obroka (npr. samo zajtrke).
    const izbraniObrok = izbira && OBROKI.find((o) => o.kljuc === izbira.obrok);
    const ponujeniRecepti = izbira
        ? recepti.filter((r) => r.kategorija === izbraniObrok.naziv)
        : [];

    return (
        <main className="main">
            <h2>Tedenski jedilnik</h2>

            <div className="jedilnik-navigacija">
                <button type="button" onClick={() => { setPonedeljek(dodajDni(ponedeljek, -7)); setIzbira(null); }}>
                    ‹ Prejšnji teden
                </button>
                <span>
          {ponedeljek.toLocaleDateString("sl-SI")} – {dodajDni(ponedeljek, 6).toLocaleDateString("sl-SI")}
        </span>
                <button type="button" disabled={naslednjiTeden} onClick={() => { setPonedeljek(dodajDni(ponedeljek, 7)); setIzbira(null); }}>
                    Naslednji teden ›
                </button>
            </div>

            {pretekliTeden && <p>Pretekli teden si lahko samo ogledaš.</p>}

            {napaka ? (
                <p className="jedilnik-napaka">{napaka}</p>
            ) : (
                <div className="jedilnik-teden">
                    {DNEVI.map((imeDneva, i) => {
                        const datum = vBesedilo(dodajDni(ponedeljek, i));
                        return (
                            <div className="jedilnik-dan" key={datum}>
                                <h4>{imeDneva}<br /><small>{dodajDni(ponedeljek, i).toLocaleDateString("sl-SI")}</small></h4>

                                {OBROKI.map((obrok) => {
                                    const recept = imeRecepta(datum, obrok.kljuc);
                                    return (
                                        <div className="jedilnik-obrok" key={obrok.kljuc}>
                                            <span className="jedilnik-obrok-naziv">{obrok.naziv}</span>
                                            {recept && <span>{recept}</span>}
                                            {!recept && !pretekliTeden && (
                                                <button type="button" onClick={() => setIzbira({ datum, obrok: obrok.kljuc })}>+</button>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            )}

            {izbira && (
                <div className="jedilnik-izbira">
                    <h3>Izberi recept: {izbraniObrok.naziv}</h3>
                    {ponujeniRecepti.length === 0 && <p>V kategoriji {izbraniObrok.naziv} še ni receptov.</p>}
                    {ponujeniRecepti.map((recept) => (
                        <button type="button" key={recept.id} onClick={() => shraniRecept(recept)}>
                            {recept.naziv}
                        </button>
                    ))}
                    <button type="button" onClick={() => setIzbira(null)}>Prekliči</button>
                </div>
            )}
        </main>
    );
}

export default TedenskiJedilnik;
