import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      {nome: 'ADS-2323', professorId: 2, semestreId: 2, disciplinaId: 3, salaId: 3, turno: 'M'},
      {nome: 'MED-4321', professorId: 1, semestreId: 5, disciplinaId: 2, salaId: 1, turno: 'N'},
      {nome: 'DIR-9087', professorId: 3, semestreId: 4, disciplinaId: 4, salaId: 4, turno: 'V'},
      {nome: 'ADS-2726', professorId: 4, semestreId: 5, disciplinaId: 1, salaId: 2, turno: 'M'},
    ])
  }
}
