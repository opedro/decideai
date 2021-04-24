document.onreadystatechange = ()=>{

    const foodType = ["Comida Italiana", "Comida Mexicana", "Hamburguer", "PF", "Comida Japonesa", "Comida Árabe"];
    const complement = ["com preço alto", "com preço baixo", "caseira(o)", "de um restaurante que nunca comeu", "e vai ser um prato que nunca comeu", "e vai ser do primeiro restaurante que aparecer no app de delivery"];

    function decideai(){
        const tamanhoDaLista = complement.length
        const random = Math.floor(Math.random() * tamanhoDaLista);
        const random2 = Math.floor(Math.random() * tamanhoDaLista);
        return "Você vai comer "+ foodType[random]+ " "+ complement[random2]
    }
    
    document.getElementById('decideAi').onclick = function(){
        alert(decideai());
    }
}