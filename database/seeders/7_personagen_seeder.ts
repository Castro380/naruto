import Personagen from '#models/personagen'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await Personagen.createMany([
      { nome: "Naruto Uzumaki", idade: "17", aldeia: "Konohagakure", rank: "Hokage", missao_atual: "Proteger a vila", status: "Ativo" },
      { nome: "Sasuke Uchiha", idade: "17", aldeia: "Konohagakure", rank: "Nukenin", missao_atual: "Buscar poder", status: "Ativo" },
    ])

  }
}
