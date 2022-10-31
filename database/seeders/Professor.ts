import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professor from 'App/Models/Professor'

export default class extends BaseSeeder {
  public async run () {
    await Professor.createMany([
      {nome: 'Ana', cpf: '999666333', matricula: '5432', salario: '3200.34', email: 'ana.silva@hotmail.com', telefone: '9998523', cep: '2881902'},
      {nome: 'Daniel', cpf: '233902921', matricula: '1222', salario: '4000.00', email: 'daniel.santos@gmail.com', cep: '72255603'},
      {nome: 'Samuel', cpf: '888290478', matricula: '8900', email: 'samuellima@hotmail.com', telefone: '4028922', cep: '987654', logradouro: 'QD 12 CONJUNTO C', numero: '22', bairro: 'Diamantina'},
      {nome: 'Tiago', cpf: '89786267', matricula: '8888', salario: '3500.50', telefone: '9840989', cep: '3333333'},
      {nome: 'Eduardo', cpf: '9876321', matricula: '9090', telefone: '9926320', cep: '21114678', logradouro: 'QD 10 CONJUNTO A', complemento: 'Condominio Asa Branca', bairro: 'Asa Norte'},
    ])
  }
}
