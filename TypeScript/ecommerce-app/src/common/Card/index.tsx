export type CardData={
    name:string
}

 type CardProps=CardData & {
    diasble:boolean
}

export const Card = ({diasble,name}:CardProps) => {
  return (
    <button disabled={diasble}>{name}</button>
  )
}

