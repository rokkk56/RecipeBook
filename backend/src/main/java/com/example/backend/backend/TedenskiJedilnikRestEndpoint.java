package com.example.backend.backend;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/jedilnik")
public class TedenskiJedilnikRestEndpoint {

    private final TedenskiJedilnikRepository tedenskiJedilnikRepository;

    public TedenskiJedilnikRestEndpoint(TedenskiJedilnikRepository tedenskiJedilnikRepository) {
        this.tedenskiJedilnikRepository = tedenskiJedilnikRepository;
    }

    // GET /api/jedilnik?od=2026-11-16 -> vsi obroki od ponedeljka do nedelje
    @GetMapping
    public List<TedenskiJedilnik> obrokiVTednu(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate od) {
        return tedenskiJedilnikRepository.findByDatumBetween(od, od.plusDays(6));
    }

    // POST /api/jedilnik  { "datum": "2026-11-18", "obrok": "KOSILO", "receptId": 3 }
    @PostMapping
    public TedenskiJedilnik dodajObrok(@RequestBody TedenskiJedilnik obrok) {
        obrok.setId(null);
        return tedenskiJedilnikRepository.save(obrok);
    }
}