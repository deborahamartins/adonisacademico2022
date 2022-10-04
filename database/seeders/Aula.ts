import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'

export default class extends BaseSeeder {
  public async run () {
    await Aula.createMany([
      {data: new Date(2022, 8, 21), conteudo: 'Historiologia', turmaId: 3},
      {data: new Date(2020, 4, 15), conteudo: 'História da Matemátca', turmaId: 1},
      {data: new Date(2021, 9, 12), conteudo: 'Direito Constitucional', turmaId: 2},
      {data: new Date(2021, 5, 8), conteudo: 'Direito Penal', turmaId: 3}
    ])
  }
}
