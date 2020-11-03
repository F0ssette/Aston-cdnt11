interface Player { // déclaration hors classe, il est aussi possible de l'externaliser
  firstname: string
  lastname?: string
  num: number
  injured: boolean
}

export { Player }