export class Cliente{
  
  constructor(readonly nomeCompleto: string, readonly cpf: string, readonly email: string, readonly senha: string, readonly dataNasc: Date, readonly urlImagem: string){}
}