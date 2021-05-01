document.onreadystatechange = ()=>{
    const baseMessage = {
        food: "Você vai comer",
        watch: "Você vai assistir"
    }
    const type = {
        food: ["Comida Italiana", "Comida Mexicana", "Hamburguer", "PF", "Comida Japonesa", "Comida Árabe"],
        watch: ["uma série", "um filme", "um vídeo no youtube", "um documentário", "um reality"]
    }
    const complement = {
        food: ["com preço alto", "com preço baixo", "caseira(o)", "de um restaurante que nunca comeu", "e vai ser um prato que nunca comeu", "e vai ser do primeiro restaurante que aparecer no app de delivery"],
        watch: ["de comédia", "que você ja viu", "cringe", "e tem que ser a primeira indicação de alguma rede social", "que você nunca ouviu falar", "e vai ser o primeiro que aparecer na plataforma", "de ação", "de romance", "de terror", "de ficção científica"]
    }

    function decideai(category){
        let randomType, randomComplement; 
        randomType = Math.floor(Math.random() * type[category].length);
        randomComplement = Math.floor(Math.random() * complement[category].length);
        return baseMessage[category] + " " + type[category][randomType] + " " + complement[category][randomComplement];
    }
    
    document.getElementById('decideAiComida').onclick = function(){
        alert(decideai('food'));
    }
    document.getElementById('decideAiAssistir').onclick = function(){
        alert(decideai('watch'));
    }
}