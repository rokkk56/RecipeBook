package com.example.backend.backend;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/recepti")
public class ReceptRestEndpoint {

    private final ReceptRepository receptRepository;

    public ReceptRestEndpoint(ReceptRepository receptRepository) {
        this.receptRepository = receptRepository;
    }

    @GetMapping
    public List<Recept> vsiRecepti() {
        return receptRepository.findAll();
    }

    @GetMapping("/{id}")
    public Recept receptPoId(@PathVariable Integer id) {
        return receptRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Recept dodajRecept(@RequestBody Recept recept) {
        recept.setId(null);
        return receptRepository.save(recept);
    }

    @PutMapping("/{id}")
    public Recept posodobiRecept(@PathVariable Integer id, @RequestBody Recept noviRecept) {
        return receptRepository.findById(id).map(recept -> {
            recept.setNaziv(noviRecept.getNaziv());
            recept.setOpis(noviRecept.getOpis());
            recept.setSestavine(noviRecept.getSestavine());
            recept.setCasPriprave(noviRecept.getCasPriprave());
            return receptRepository.save(recept);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void izbrisiRecept(@PathVariable Integer id) {
        receptRepository.deleteById(id);
    }
}
