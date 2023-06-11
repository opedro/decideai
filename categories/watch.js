class Watch{
    
    baseMessage = "Você vai assistir";
    type = ["uma série", "um filme", "um vídeo no youtube", "um documentário", "um reality"];

    complement = ["de comédia", "que você ja viu", "cringe", "e tem que ser a primeira indicação de alguma rede social", "que você nunca ouviu falar", "e vai ser o primeiro que aparecer na plataforma", "de ação", "de romance", "de terror", "de ficção científica"];

    decideai() {
        let randomTypeIndex, randomComplementIndex;
        randomTypeIndex = Math.floor(Math.random() * this.type.length);
        randomComplementIndex = Math.floor(Math.random() * this.complement.length);
        return this.baseMessage + " " + this.type[randomTypeIndex] + " " + this.complement[randomComplementIndex];
    }
}