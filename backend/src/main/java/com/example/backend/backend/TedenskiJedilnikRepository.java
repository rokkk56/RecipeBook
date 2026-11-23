package com.example.backend.backend;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TedenskiJedilnikRepository extends JpaRepository<TedenskiJedilnik, Integer> {

    // vsi obroki med dvema datumoma (od ponedeljka do nedelje)
    List<TedenskiJedilnik> findByDatumBetween(LocalDate od, LocalDate doDatuma);
}