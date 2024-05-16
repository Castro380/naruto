import PersonagemTitulo from '#models/personagem_titulo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemTitulo.createMany([
      { personagemId: 1, tituloId: 1, data_inicio: new Date('2023-01-01'), data_fim: new Date('2023-12-31') },
      { personagemId: 1, tituloId: 2, data_inicio: new Date('2023-01-01'), data_fim: new Date('2023-12-31') },
    ])

  }
}
