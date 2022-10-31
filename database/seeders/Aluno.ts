import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      {nome: 'Rodrigo', cpf: '22233344455', matricula: '9008', email: 'rodrigo123@gmail.com', telefone: '23234545'},
      {nome: 'Maria', cpf: '90989878765', matricula: '2211', email: 'maria.sousa@hotmail.com', telefone: '989097867', cep: '72255432'},
      {nome: 'Anderson', cpf: '890777256345', matricula: '8812', email: 'andersonasilva@outlook.com', logradouro: 'QNA 21 CONJUNTO E',  numero: '21'},
      {nome: 'Vanessa', cpf: '22233378907', matricula: '2233', email: 'vanesadamata@yahoo.com', bairro: 'Rua 12'},
      {nome: 'Pedro', cpf: '89752411123', matricula: '6633', email: 'pedro.oliveira@gmail.com', cep: '33329034'}
    ])
  }
}
