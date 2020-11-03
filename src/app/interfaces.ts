interface Player { // déclaration hors classe, il est aussi possible de l'externaliser
  firstname: string
  lastname?: string
  num?: number
  injured?: boolean
}

interface Badge {
  logo: string
  price: number
}

export { Player, Badge }