# Uporabniške zgodbe – RecipeBook

## US-01: Prikaz receptov po kategorijah

**Odgovorni član:** Rok Kokot Selinšek

**Uporabniška zgodba:**

Kot uporabnik RecipeBook želim izbrati kategorijo receptov, da lahko pregledam samo recepte iz izbrane kategorije.

**Sprejemni kriteriji:**

**AC-01:** Prikaz kategorij
- Given: Uporabnik odpre domačo stran RecipeBook.
- When: Domača stran se naloži.
- Then: Prikažejo se kategorije receptov v obliki kvadratnih kartic.

**AC-02:** Izbira kategorije
- Given: Uporabnik je na domači strani.
- When: Klikne na kategorijo »Sladice«.
- Then: Odpre se stran, na kateri so prikazani samo recepti iz kategorije »Sladice«.

**AC-03:** Vrnitev na pregled vseh receptov
- Given: Uporabnik pregleduje recepte v določeni kategoriji.
- When: Izbere možnost »Vse kategorije«.
- Then: Prikažejo se recepti iz vseh kategorij.

**AC-04:** Kategorija brez receptov
- Given: Izbrana kategorija ne vsebuje nobenega recepta.
- When: Uporabnik odpre to kategorijo.
- Then: Prikaže se sporočilo »V tej kategoriji trenutno ni receptov.«

**AC-05:** Napaka pri nalaganju receptov
- Given: Receptov ni mogoče naložiti.
- When: Uporabnik odpre izbrano kategorijo.
- Then: Prikaže se sporočilo, da receptov trenutno ni mogoče naložiti.

**Podrobnosti implementacije:**

- Na domači strani bodo prikazane kategorije receptov v obliki kvadratnih kartic.

- Vsaka kartica bo predstavljala eno kategorijo, na primer Zajtrk, Kosilo, Večerja in Sladice.

- S klikom na izbrano kategorijo se bo uporabnik preusmeril na novo stran.

- Na novi strani bodo prikazani samo recepti, ki pripadajo izbrani kategoriji.

- Uporabnik se bo lahko iz pregleda posamezne kategorije vrnil na pregled vseh receptov.

- Na strani izbrane kategorije bo jasno prikazano ime trenutno izbrane kategorije.

- Če kategorija ne vsebuje receptov, se bo prikazalo ustrezno sporočilo.

- Če pride do napake pri nalaganju receptov, se bo prikazalo obvestilo o napaki.

**GitHub Issue:** [US-01: Prikaz receptov po kategorijah](https://github.com/rokkk56/RecipeBook/issues/1)

**Podnalogi:**
- [TASK-01: Prikaz kategorij na domači strani](https://github.com/rokkk56/RecipeBook/issues/4)
- [TASK-02: Prikaz receptov iz izbrane kategorije](https://github.com/rokkk56/RecipeBook/issues/3)