CREATE DATABASE sistemapacientes;

USE sistemapacientes;
CREATE TABLE pacientes(
	NOME VARCHAR(120) NOT NULL,
    CHECK (NOME <> ''),
    IDADE INT NOT NULL,
    CHECK (IDADE <> ''),
    CPF VARCHAR(11) PRIMARY KEY,
    PROFISSAO VARCHAR(200),
    DATA_CADASTRO TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO pacientes(NOME, IDADE, CPF, PROFISSAO)
VALUES('Kaique Ferreira', 19, '49311007838', 'Desenvolvedor');

SELECT * FROM pacientes;