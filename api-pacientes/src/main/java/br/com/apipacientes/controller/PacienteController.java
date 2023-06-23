package br.com.apipacientes.controller;

import br.com.apipacientes.model.Paciente;
import br.com.apipacientes.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pacientes")
@CrossOrigin(origins = "http://localhost:4200")
public class PacienteController {

    @Autowired
    private final PacienteService pacienteService;
    public PacienteController(PacienteService pacienteService) {
        this.pacienteService = pacienteService;
    }

    @GetMapping
    public List<Paciente> listaDePacientes() {
        return pacienteService.listaDePacientes();
    }

    @PostMapping
    public Paciente adicionarPaciente(@RequestBody Paciente paciente) {
        return pacienteService.adicionarPaciente(paciente);
    }

    @CrossOrigin
    @PutMapping({"/cpf"})
    public Paciente alterarProfissao(@PathVariable("cpf") String cpf, @RequestParam String novaProfissao) {
        return  pacienteService.alterarProfissao(cpf, novaProfissao);
    }

    @DeleteMapping("/{cpf}")
    public ResponseEntity<String> excluirPaciente(@PathVariable("cpf") String cpf) {
        pacienteService.excluirPaciente(cpf);
        return new ResponseEntity<String>("Paciente deletado com sucesso!", HttpStatus.OK);
    }

}
