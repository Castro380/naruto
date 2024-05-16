import PersonagemJutso from '#models/personagem_jutso'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await PersonagemJutso.createMany([
      { personagemId: 1, jutsuId: 1 },
      { personagemId: 1, jutsuId: 2 },
    ])

  }
}
