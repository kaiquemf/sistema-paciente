package br.com.apipacientes.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Timestamp;

@Entity
@Table(name = "pacientes")
public class Paciente {

    @Column(name = "NOME", nullable = false)
    private String nome;

    @Column(name = "IDADE", nullable = false)
    private int idade;

    @Id
    @Column(name = "CPF", unique = true)
    private String cpf;

    @Column(name = "PROFISSAO")
    private String profissao;

    @Column(name = "DATA_CADASTRO")
    private Timestamp data_cadastro;

    public String getNome() {
        return nome;
    }

    public int getIdade() {
        return idade;
    }

    public String getCpf() {
        return cpf;
    }

    public String getProfissao() {
        return profissao;
    }
    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }

    public Timestamp getData_cadastro() {
        return data_cadastro;
    }
}
