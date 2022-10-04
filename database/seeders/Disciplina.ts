import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    await Disciplina.createMany([
      {nome: 'Introdução ao Direito', cursoId: 1},
      {nome: 'Fisiologia', cursoId: 4},
      {nome: 'Adm', cursoId: 5},
      {nome: 'Anatomia', cursoId: 2},
      {nome: 'Biologia', cursoId: 5},
    ])
  }
}
