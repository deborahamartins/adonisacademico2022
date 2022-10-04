import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class extends BaseSeeder {
  public async run () {
      await Semestre.createMany([
        {nome: '2019/1', dataInicio: new Date(2019, 3, 2), dataFim: new Date(2019, 7, 11)}, 
        {nome: '2019/2', dataInicio: new Date(2019, 8, 3), dataFim: new Date(2019, 11, 10)}, 
        {nome: '2020/1', dataInicio: new Date(2020, 4, 2), dataFim: new Date(2020, 7, 3)}, 
        {nome: '2020/2', dataInicio: new Date(2020, 8, 25), dataFim: new Date(2020, 10, 27)}, 
        {nome: '2021/1', dataInicio: new Date(2021, 3, 22), dataFim: new Date(2021, 7, 12)}, 
        {nome: '2021/2', dataInicio: new Date(2021, 8, 26), dataFim: new Date(2021, 11, 2)}, 
        {nome: '2022/1', dataInicio: new Date(2022, 3, 15), dataFim: new Date(2022, 8, 11)}, 
        {nome: '2022/2', dataInicio: new Date(2022, 9, 2), dataFim: new Date(2022, 11, 11)}, 
      ])
    }  
}
