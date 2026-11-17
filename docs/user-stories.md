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


##US-02: razporejanje receptov v tedenskem jedilniku

**odgovoren član: Neža Kamenicki**
**ID-2**

**Uporabniška zgodba**
Kot uporabnik aplikacije RecipeBook, želim spremljati kaj pojem skozi teden, da si lažje in hitreje pripravim obroke skozi dan in mi to prihrani veliko časa in razmišljanja.
**Sprejemni kriteriji:**

**AC-1** prikaz tedenskega jedilnika
Given: začetna stran z vsemi ponujenimi recepti
When: klikneš na zavihek tedenski jedilnik       
Then: se ti prikaže ‘tedenski koledarček’ kjer sestavljaš svoj jedilnik

**AC-2** izbira datuma
Given: prikazan tedenski jedilnik
When: klikneš na datum
Then: lahko se premikaš po datumih za nazaj(kjer si ogledaš stare recepte), ali pa klikneš naprej, kjer si izbereš recepte za prihodnji teden

**AC-3** dodajanje obroka
Given: dodajanje obroka
When: klikneš dodaj (zajterk, kosilo, večerja)
Then: ob kliku na željen obrok v željenem dnevu, se ti podatki odvisno od obroka sfiltrirajo torej če izbiraš zajterk se ti prikazujejo samo zajtrki.

**AC-4** shranjevanje recepta
Given: dodan recept
When: klikneš željen recept
Then: ko si izbereš željen recept se ta ob kliku dodaj shrani v redenski meni in se ti ime recepta prikaže na mestu tega obroka

**AC-5** napak pri nalaganju
Given: prazen tedenski jedilnik
When: uporabnik odpre tedenski jedilnik
Then: na mestu kjer bi morali biti njegovi shranjeni recepti je sporočilo receptov ni mogoče naložiti

**Podrobnosti implementacije**

- na domači strani bo zavihek kjer bo pisalo tedenski jedilnik.
- ob kliku na tedenski jedilnik te preusmeri na novo stran.
- na novi strani se ti v obliki tedenskega koledarja prikaže tekoči teden, vsak dan je razdeljen na 3 obroke(zajtrk, kosilo, večerja)
- lahko si ogleduješ pretekle tedne(ko se teden zaključi prejšnje recepte lahko samo gledaš in ne več spreminjaš) in pripravljaš 1 teden v naprej.
- ob kliku na želen obrok v želenem dnevu pritisneš gumbek +, kjer se ti potem že sfiltrirani recepti tega obroka prikažejo
- ko najdeš željeni recept ga klikneš in shranil se ti bo pod želeni dan

**github issue** https://github.com/rokkk56/RecipeBook/issues/5#issue-6450295583

**podnalogi**
- TASK 1: https://github.com/rokkk56/RecipeBook/issues/6
- TASK 2: https://github.com/rokkk56/RecipeBook/issues/7