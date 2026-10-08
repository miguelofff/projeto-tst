export interface Treinamento {
  id: number;
  nome: string;
  norma: string;
  descricao: string;
  cargaHoraria: number;
  validade: number;
  participantes: number;
  status: string;
}

export interface Funcionario {
  id: number;
  nome: string;
  cpf: string;
  cargo: string;
  setor: string;
  matricula: string;
  dataAdmissao: string;
  status: string;
}