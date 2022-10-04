import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TurmaAluno from 'App/Models/TurmaAluno'

export default class extends BaseSeeder {
  public async run () {
    await TurmaAluno.createMany([
      {turmasId: 2, alunosId: 3},
      {turmasId: 1, alunosId: 4},
      {turmasId: 3, alunosId: 3},
      {turmasId: 4, alunosId: 1},
      {turmasId: 2, alunosId: 1},
      {turmasId: 2, alunosId: 2}
    ])
  }
}
