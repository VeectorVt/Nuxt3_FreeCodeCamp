export const useColor = () => useState<string>('color', () => 'pink')
export const useCounter = () => useState<number>("counter" , () => Math.round(Math.random() * 1000 ) )
