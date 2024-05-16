import PersonagemMissoe from '#models/personagem_missoe'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemMissoe.createMany([
      { personagemId: 1, missaoId: 1 },
      { personagemId: 1, missaoId: 2 },
    ])

  }
}
