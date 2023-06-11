document.onreadystatechange = () => {

    const food = new Food();
    const watch = new Watch();

    document.getElementById('decideAiComida').onclick = function () {
        alert(food.decideai());
    }
    document.getElementById('decideAiAssistir').onclick = function () {
        alert(watch.decideai());
    }
}