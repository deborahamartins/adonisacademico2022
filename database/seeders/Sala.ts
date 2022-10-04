import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run () {
    await Sala.createMany([
      {nome: 'A12', capacidade: 25, tipo: 'A'},
      {nome: 'A02', capacidade: 20, tipo: 'B'},
      {nome: 'C18', capacidade: 48, tipo: 'C'},
      {nome: 'B10', capacidade: 30, tipo: 'B'},
      {nome: 'C02', capacidade: 40, tipo: 'A'},
      {nome: 'C22', capacidade: 15, tipo: 'D'},
    ])
  }
}
