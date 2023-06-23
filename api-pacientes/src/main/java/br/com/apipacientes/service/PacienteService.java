package br.com.apipacientes.service;

import br.com.apipacientes.model.Paciente;
import br.com.apipacientes.repository.PacienteRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@Service
public class PacienteService {
    private final PacienteRepository pacienteRepository;
    public PacienteService(PacienteRepository pacienteRepository){
        this.pacienteRepository = pacienteRepository;
    }

    public List<Paciente> listaDePacientes() {
        return pacienteRepository.findAll();
    }

    public Paciente adicionarPaciente(Paciente paciente) {
        if (pacienteRepository.findByCpf(paciente.getCpf()).isPresent()) {
            throw new IllegalArgumentException("Paciente cadastrado");
        }
        return pacienteRepository.save(paciente);
    }


    @CrossOrigin
    @PutMapping("/alterarProfissao")
    public Paciente alterarProfissao(String cpf, String novaProfissao) {
        Paciente paciente = pacienteRepository.findByCpf(cpf)
        .orElseThrow(() -> new IllegalArgumentException("Paciente não encontrado"));

        paciente.setProfissao(novaProfissao);
        return pacienteRepository.save(paciente);
    }

    public void excluirPaciente(String cpf) {
        pacienteRepository.deleteByCpf(cpf);
    }
}
