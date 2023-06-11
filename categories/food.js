class Food {
    baseMessage = "Você vai comer";
    
    type =  ["Comida Italiana", "Comida Mexicana", "Hamburguer", "PF", "Comida Japonesa", "Comida Árabe"];
    complement = ["com preço alto", "com preço baixo", "caseira(o)", "de um restaurante que nunca comeu", "e vai ser um prato que nunca comeu", "e vai ser do primeiro restaurante que aparecer no app de delivery"];

    decideai() {
        let randomTypeIndex, randomComplementIndex;
        randomTypeIndex = Math.floor(Math.random() * this.type.length);
        randomComplementIndex = Math.floor(Math.random() * this.complement.length);

        return this.baseMessage + " " + this.type[randomTypeIndex] + " " + this.complement[randomComplementIndex];
    }
}