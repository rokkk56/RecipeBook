package com.example.backend.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReceptRepository extends JpaRepository<Recept, Integer> {

    List<Recept> findByKategorija(Kategorija kategorija);

}