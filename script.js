




let name = prompt("Введите своё имя");
let bir;
let year;
do {
    bir = +prompt("Введите свой год рождения");
} while (isNaN(bir) || bir < 1);
do {
    year = +prompt("Введите текущий год");

} while (isNaN(year) || year < 1);


function userData(userName, yearNow, birth) {
    let age = yearNow - birth;
    console.log("Привет " + userName + " Вам " + age + " лет!");
}
userData(name, year, bir);








let ran;
do{
    ran = +prompt("Введите количество рандомных примеров")
}while(isNaN(ran) || ran < 1);



function random(rand){
    for(let i = 1; i <= rand; i++){
        let sum1 = Math.floor(Math.random() * 100);
        let sum2 = Math.floor(Math.random() * 100);
        const operations = {
            '+':(a,b)=>a+b,
            '-':(a,b)=>a-b,
            '*':(a,b)=>a*b,
            '/':(a,b)=>a/b,

        };
        const operator = Object.keys(operations);
        const op = operator[Math.floor(Math.random() * operator.length)]
        let exsample = prompt(sum1+" "+op+" " +sum2+" = " );
        let answer = operations[op](sum1,sum2);
        console.log(answer);
        
       (exsample == answer)?console.log("ваш ответ верный - "+exsample):console.log("Ваш ответ не верный - "+exsample+" Правильный ответ - "+answer);
       
       
    }

}
        random(ran);



