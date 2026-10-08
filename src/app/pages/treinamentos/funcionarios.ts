import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Funcionario } from './funcionario.model';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-funcionarios',
standalone: true,
imports: [RouterOutlet, FormsModule],
templateUrl: './funcionarios.html',
styleUrl: './funcionarios.scss',
})
export class Funcionarios implements OnInit {
formularioAberto = false;
funcionarioEditando: Funcionario | null = null;
funcionarioVisualizado: Funcionario | null = null;

funcionarios: Funcionario[] = [];

novoFuncionario: Funcionario = {
id: 0,
nome: '',
cpf: '',
cargo: '',
setor: '',
matricula: '',
dataAdmissao: '',
status: 'Ativo',
};

ngOnInit() {
this.loadLocalStorage();
}

abrirFormulario() {
this.limparFormulario();
this.funcionarioEditando = null;
this.formularioAberto = true;
}

fecharFormulario() {
this.formularioAberto = false;
this.funcionarioEditando = null;
}

salvarFuncionario() {
if (this.funcionarioEditando) {
this.atualizarFuncionario();
} else {
this.criarFuncionario();
}
}

criarFuncionario() {
const novoId =
this.funcionarios.length > 0
? Math.max(...this.funcionarios.map((funcionario) => funcionario.id)) + 1
: 1;

const funcionario: Funcionario = {
  ...this.novoFuncionario,
  id: novoId,
};

this.funcionarios.push(funcionario);

this.saveLocalStorage();
this.limparFormulario();
this.fecharFormulario();

}

atualizarFuncionario() {
const indice = this.funcionarios.findIndex(
(funcionario) => funcionario.id === this.funcionarioEditando!.id,
);

if (indice !== -1) {
  this.funcionarios[indice] = {
    ...this.novoFuncionario,
    id: this.funcionarioEditando!.id,
  };
}

this.saveLocalStorage();
this.limparFormulario();
this.fecharFormulario();

}

editarFuncionario(funcionario: Funcionario) {
this.funcionarioEditando = funcionario;

this.novoFuncionario = {
  ...funcionario,
};

this.formularioAberto = true;

}

verFuncionario(funcionario: Funcionario) {
this.funcionarioVisualizado = funcionario;
}

fecharVisualizacao() {
this.funcionarioVisualizado = null;
}

limparFormulario() {
this.novoFuncionario = {
id: 0,
nome: '',
cpf: '',
cargo: '',
setor: '',
matricula: '',
dataAdmissao: '',
status: 'Ativo',
};
}

saveLocalStorage() {
localStorage.setItem(
'funcionarios',
JSON.stringify(this.funcionarios),
);
}

loadLocalStorage() {
const dados = localStorage.getItem('funcionarios');

if (dados) {
  this.funcionarios = JSON.parse(dados);
}

}
}
