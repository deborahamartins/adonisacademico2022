import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfessorValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    nome: schema.string([
      rules.alpha({allow: ['space']}),
      rules.maxLength(100)
    ]),
    cpf: schema.string([
      rules.minLength(15),
      rules.maxLength(15),
      rules.unique({ table: 'professores', column: 'cpf' })
    ]),
    matricula: schema.string.optional([
      rules.maxLength(20),
      rules.unique({ table: 'professores', column: 'matricula' })
    ]),
    salario: schema.number.optional([
      rules.range(1200, 5000)
    ]),
    email: schema.string.optional([
      rules.email(),
      rules.maxLength(100)
    ]),
    telefone: schema.string.optional([
      rules.mobile({
        locale: ['pt-BR']
      }),
      rules.maxLength(15)
    ]),
    cep: schema.string.optional([
      rules.minLength(9),
      rules.maxLength(9),
    ]),
    logradouro: schema.string.optional([
      rules.maxLength(100)
    ]),
    complemento: schema.string.optional([
      rules.maxLength(100)
    ]),
    numero: schema.string.optional([
      rules.maxLength(20)
    ]),
    bairro: schema.string.optional([
      rules.maxLength(100)
    ]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
