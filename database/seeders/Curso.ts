import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
    await Curso.createMany([
      {nome: 'ADS', duracao: 5, modalidade: 'P'}, 
      {nome: 'Medicina', duracao: 10, modalidade: 'P'}, 
      {nome: 'EF', duracao: 8, modalidade: 'P'}, 
      {nome: 'Enfermagem', duracao: 10, modalidade: 'P'}, 
      {nome: 'Administração', duracao: 8, modalidade: 'D'}, 
      {nome: 'Pedagogia', duracao: 6, modalidade: 'P'}, 
    ])
  }
}
