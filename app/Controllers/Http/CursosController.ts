// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";
import CursoValidator from "App/Validators/CursoValidator";

export default class CursosController {

    index({request}){
        const {nome, duracao, modalidade} = request.all()

        const cursos = Curso.query()
                            .select('id', 'nome', 'duracao', 'modalidade')
                            .preload('disciplinas')
                            
        if(nome){
            cursos.where('nome', nome)
        }
        if(modalidade) {
            cursos.where('modalidade', modalidade)
        }
                
        return cursos
    }

    async store({request}){
        const dados = await request.validate(CursoValidator)
        return Curso.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return Curso.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const curso = await Curso.findOrFail(id)
        return curso.delete()

    }

    async update({request}) {
        const id = request.param('id')
        const curso = await Curso.findOrFail(id)
        const dados = request.only(['nome', 'duracao', 'modalidade'])

        curso.merge(dados)
        return curso.save()
    }
}
