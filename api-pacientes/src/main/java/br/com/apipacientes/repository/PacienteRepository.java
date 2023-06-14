package br.com.apipacientes.repository;

import br.com.apipacientes.model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, String> {
    Optional<Paciente> findByCpf(String cpf);

    @Modifying
    @Query("DELETE FROM Paciente p WHERE p.cpf=:cpf")
    void deleteByCpf(@Param("cpf") String cpf);
}
