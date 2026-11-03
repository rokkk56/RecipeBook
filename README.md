# RecipeBook

## 1. O projektu
RecipeBook je spletna aplikacija za shranjevanje, pregledovanje in upravljanje kuharskih receptov.

Uporabnikom omogoča:
- Dodajanje novih receptov.
- Pregledovanje shranjenih receptov.
- Urejanje obstoječih receptov.
- Brisanje receptov.
- Iskanje receptov po nazivu.
- Razvrščanje receptov po času priprave.

Namen aplikacije je omogočiti preprosto in pregledno upravljanje kuharskih receptov.


## 2. Uporabljene tehnologije

### Frontend
- React 19.3.1
- JavaScript
- HTML
- CSS
- Axios 1.20.0
- Node.js in npm

### Backend
- Java 25
- Spring Boot 4.1.1
- Spring Data JPA
- Maven
- Hibernate
- PostgreSQL
- Springdoc OpenAPI 3.1.0

### Orodja
- IntelliJ IDEA (uporabljen za razvoj backenda)
- Visual Studio Code (uporabljen za razvoj frontenda)
- Git
- GitHub
- Docker Desktop
- Swagger UI


## 3. Struktura projekta

Projekt je razdeljen na dva glavna dela: frontend in backend.

```text
RecipeBook/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/example/backend/backend/
│   │   │   │       ├── BackendApplication.java
│   │   │   │       ├── Recept.java
│   │   │   │       ├── ReceptRepository.java
│   │   │   │       └── ReceptRestEndpoint.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── receptService.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

### Opis map in datotek

**Frontend:**
- `public/` vsebuje javne datoteke in slike.
- `src/` vsebuje izvorno kodo React aplikacije.
- `services/` vsebuje datoteke za komunikacijo z backendom.
- `App.js` vsebuje glavno logiko aplikacije.
- `App.css` vsebuje oblikovanje spletne strani.
- `package.json` vsebuje odvisnosti in ukaze za zagon.

**Backend:**
- `src/main/java/` vsebuje Java izvorno kodo.
- `Recept.java` predstavlja entiteto recepta.
- `ReceptRepository.java` omogoča dostop do podatkovne baze.
- `ReceptRestEndpoint.java` vsebuje REST API operacije.
- `application.properties` vsebuje konfiguracijo aplikacije in podatkovne baze.
- `pom.xml` vsebuje odvisnosti in nastavitve Maven projekta.


## 4. Navodila za namestitev in zagon

### Predpogoji

Za zagon projekta potrebujemo:
- Java JDK 25.
- Node.js in npm.
- PostgreSQL podatkovno bazo.
- Docker Desktop za zagon PostgreSQL vsebnika.
- Git.

### 4.1 Zagon podatkovne baze

Najprej zaženemo Docker Desktop in PostgreSQL vsebnik.

Podatkovna baza mora imeti naslednje nastavitve:
- Ime baze: moja_baza
- Uporabniško ime: postgres
- Vrata: 5432

### 4.2 Zagon backenda

1. Odpremo mapo `backend` v IntelliJ IDEA.
2. Počakamo, da Maven naloži vse potrebne odvisnosti.
3. Zaženemo datoteko `BackendApplication.java`.
4. Backend je dostopen na naslovu: http://localhost:8080

Swagger dokumentacija je dostopna na:

http://localhost:8080/swagger-ui/index.html

### 4.3 Zagon frontenda

1. Odpremo mapo `frontend` v Visual Studio Code.
2. Odpremo terminal.
3. Izvedemo ukaz: npm install
4. Nato zaženemo aplikacijo: npm start
5. Frontend je dostopen na naslovu: http://localhost:3000

## 5. Navodila za razvijalce

Projekt je shranjen na GitHubu:

https://github.com/rokkk56/RecipeBook

Za delo na projektu razvijalec najprej prenese repozitorij:

    git clone https://github.com/rokkk56/RecipeBook.git

Nato odpre projekt v ustreznem razvojnem okolju.

Pri razvoju uporabljamo naslednji način dela:

1. Pred začetkom dela pridobimo najnovejšo različico kode z ukazom `git pull`.
2. Spremembe v kodi preverimo in preizkusimo.
3. Spremenjene datoteke dodamo z ukazom `git add .`.
4. Spremembe shranimo z ukazom `git commit -m "Opis spremembe"`.
5. Spremembe pošljemo na GitHub z ukazom `git push`.

## 6. Standardi kodiranja

Pri razvoju projekta upoštevamo naslednje standarde:

- Imena spremenljivk in funkcij naj bodo razumljiva.
- Koda naj bo pregledna in pravilno zamaknjena.
- Posamezne funkcije naj opravljajo jasno določeno nalogo.
- Imena datotek in map naj bodo smiselna.
- Odvečno in neuporabljeno kodo odstranimo.
- Obstoječe funkcionalnosti pred spremembami preverimo in testiramo.
