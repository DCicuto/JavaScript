/* Objetos em JavaScript: Objetos são coleções de pares chave/valor.
    As maiores diferença entre array e objetos:
    - No array os índices são numéricos e no objeto podem ser strings. 
    - Objetos são dinâmicos, podem ser alterados a qualquer momento.
    - Em Objetos podemos colocar funções dentro de variaveis.*/

// Exemplo simples de objeto
let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 79.8,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
        
    }}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
// Saída: Engordou


