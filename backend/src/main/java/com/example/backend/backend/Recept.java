package com.example.backend.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Recept{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String naziv;
    private String opis;
    private String sestavine;
    private Integer casPriprave;

    public Recept() {
    }

    public Recept(Integer id, String naziv, String opis, String sestavine, Integer casPriprave) {
        this.id = id;
        this.naziv = naziv;
        this.opis = opis;
        this.sestavine = sestavine;
        this.casPriprave = casPriprave;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public String getSestavine() {
        return sestavine;
    }

    public void setSestavine(String sestavine) {
        this.sestavine = sestavine;
    }

    public Integer getCasPriprave() {
        return casPriprave;
    }

    public void setCasPriprave(Integer casPriprave) {
        this.casPriprave = casPriprave;
    }
}