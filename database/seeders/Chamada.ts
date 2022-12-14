import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Chamada from 'App/Models/Chamada'

export default class extends BaseSeeder {
  public async run () {
    await Chamada.createMany([
      {aulaId: 1, alunoId: 2, presenca: 'P'},
      {aulaId: 2, alunoId: 3, presenca: 'F'},
      {aulaId: 3, alunoId: 1, presenca: 'P'},
      {aulaId: 3, alunoId: 2, presenca: 'F'},
      {aulaId: 1, alunoId: 2, presenca: 'F'}
    ])
  }
}
