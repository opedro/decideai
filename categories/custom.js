class Custom {
    constructor(baseMessage, types, complements){
        this.baseMessage = baseMessage;
        this.type = types;
        this.complement = complements
    }

    decideai() {
        let randomTypeIndex, randomComplementIndex;
        randomTypeIndex = Math.floor(Math.random() * this.type.length);
        randomComplementIndex = Math.floor(Math.random() * this.complement.length);

        return this.baseMessage + " " + this.type[randomTypeIndex] + " " + this.complement[randomComplementIndex];
    }

}