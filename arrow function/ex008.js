/* Oitava variação: O this usado com arrow function é previsível, léxibo. Respeita o escopo de onde é criado.
 */

(() => {
    function Person () {
        this.year = 0;

        setInterval(() => {
            this.year = this.year +1;
            console.log ('Qual this?', this)
            console.log ('Qual é a idade?', this.year)
        }, 1000);
    }
    const p1 = new Person()
})()
