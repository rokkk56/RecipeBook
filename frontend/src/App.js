import React, {useEffect,useState} from 'react';
import './App.css';
import receptService from "./services/receptService"

function App() {
  const [recepti,setRecepti] = useState([]);
  const [iskanje, setIskanje] = useState("");
  const [razvrstitev, setRazvrstitev] = useState("privzeto");
  const[nalaganje,setNalaganje] = useState(true);
  const[napaka,setNapaka] = useState("");
  const[sporocilo,setSporocilo]= useState("");

  const[naziv,setNaziv] = useState("");
  const[opis,setOpis]=useState("");
  const[sestavine,setSestavine]=useState("");
  const[casPriprave,setCasPriprave] = useState("");
  const [receptZaUrejanje, setReceptZaUrejanje] = useState(null);

  const naloziRecepte = () => {
    return receptService
      .pridobiVseRecepte()
      .then((response) => {
        setRecepti(response.data);
        setNapaka("");
      })
      .catch((error) => {
        setNapaka("Receptov trenutno ni mogoče naložiti");
      })
      .finally(() => {
        setNalaganje(false)
      });
  };

  useEffect(() => {
    naloziRecepte();
  }, []);
  
  const dodajRecept = (event) => {
    event.preventDefault();
    setSporocilo("");
    setNapaka("");

    const novRecept = {
      naziv,
      opis,
      sestavine,
      casPriprave: Number(casPriprave),
    };

      const zahteva = receptZaUrejanje
      ? receptService.posodobiRecept(receptZaUrejanje.id, novRecept)
      : receptService.dodajRecept(novRecept);

      zahteva
      .then(() => {
        setNaziv("");
        setOpis("");
        setSestavine("");
        setCasPriprave("");
        setSporocilo(
        receptZaUrejanje
        ? "Recept je bil uspešno posodobljen."
        : "Recept je bil uspešno dodan."
        );
        setReceptZaUrejanje(null);
        return naloziRecepte();
      })
      .catch((error) => {
        setNapaka("Recepta ni bilo mogoče dodati.");
      });
  };

    const urediRecept = (recept) => {
    setReceptZaUrejanje(recept);
    setNaziv(recept.naziv);
    setOpis(recept.opis);
    setSestavine(recept.sestavine);
    setCasPriprave(String(recept.casPriprave));
    setSporocilo("");
    setNapaka("");
  };

  
      const izbrisiRecept = (id) => {
    setNapaka("");
    setSporocilo("");

    receptService
      .izbrisiRecept(id)
      .then(() => {
        setSporocilo("Recept je bil uspešno izbrisan.");
        return naloziRecepte();
      })
      .catch((error) => {
        setNapaka("Recepta ni bilo mogoče izbrisati.");
      });
  };
//naziv
  const filtriraniRecepti = recepti.filter((recept) =>
  recept.naziv.toLowerCase().includes(iskanje.toLowerCase())
  );
//razvrščanje
  const razvrsceniRecepti = [...filtriraniRecepti].sort((a, b) => {
  if (razvrstitev === "najhitrejsi") {
    return a.casPriprave - b.casPriprave;
  }
  if (razvrstitev === "najdaljsi") {
    return b.casPriprave - a.casPriprave;
  }
  return 0;
  });

  return (

    <div className="App">
      <header className="App-header">
        <h1>RecepieBook</h1>
        <p>Shrani in pripravi svoje najljubše jedi</p>
      </header>

      <main className='main'>
        
        <form onSubmit={dodajRecept}>
          <h3>Dodaj nov recept</h3>

          <label htmlFor="naziv">Naziv recepta</label>
          <input 
            id="naziv"
            type="text"
            value={naziv}
            onChange={(event) => setNaziv(event.target.value)}
            required
          />

          <label htmlFor="opis">Opis</label>
          <textarea 
            id="opis"
            value={opis}
            onChange={(event) => setOpis(event.target.value)}
            required
          />

          <label htmlFor="sestavine">Sestavine</label>
          <textarea 
            id="sestavine"
            value={sestavine}
            onChange={(event) => setSestavine(event.target.value)}
            required
          />

          <label htmlFor="casPriprave">Čas priprave</label>
          <input 
            id="casPriprave"
            type="number"
            min="1"
            value={casPriprave}
            onChange={(event) => setCasPriprave(event.target.value)}
            required
          />

          <button type="submit">{receptZaUrejanje ? "Shrani spremembe" : "Dodaj recept"}</button>
        </form>

        {nalaganje && <p>Nalaganje receptov...</p>}
        {napaka && <p>{napaka}</p>}
        {sporocilo && <p>{sporocilo}</p>}

        {!nalaganje && !napaka && recepti.length === 0 && (<p>Trenutno še ni shranjenih receptov</p>)}

        <input
          type="text"
          placeholder="Išči recept po nazivu..."
          value={iskanje}
          onChange={(e) => setIskanje(e.target.value)}
          className="iskanje-receptov"
        />

        <select
          value={razvrstitev}
          onChange={(e) => setRazvrstitev(e.target.value)}
        >
        <option value="privzeto">Privzeti vrstni red</option>
        <option value="najhitrejsi">Najhitrejši najprej</option>
        <option value="najdaljsi">Najdaljši najprej</option>
        </select>

        <div className='recept-list'>
          {razvrsceniRecepti.map((recept) => (
            <article className='recept-kartica' key={recept.id}>
              <div className='recept-info'>
                <h3>{recept.naziv}</h3>
                <p>{recept.opis}</p>
                <p><strong>Sestavine:</strong> {recept.sestavine}</p>
                <span>{recept.casPriprave} minut</span><br></br>
                <button type="button" onClick={() => izbrisiRecept(recept.id)}>Izbriši</button>
                <button type="button" onClick={() => urediRecept(recept)}>Uredi</button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
