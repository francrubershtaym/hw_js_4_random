




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
do {
    ran = +prompt("Введите количество рандомных примеров")
} while (isNaN(ran) || ran < 1);







function rand(ran) {
    let i = 0;
    for (; i < ran; i++) {
        let sum1 = Math.floor(Math.random() * 10 + 1);
        let sum2 = Math.floor(Math.random() * 10 + 1);
        let operator = ['+', '-', '*', '/'];
        let op = operator[Math.floor(Math.random() * operator.length)];
        let answer = prompt("Решите " + sum1 + " " + op + " " + sum2);
        if (op == '+') {
            let sum = sum1 + sum2;
            (sum == answer) ? console.log("Правильно!") : console.log("Не правильно " + answer + " правильный ответ " + sum);



        } else
            if (op == '-') {
                let sum = sum1 - sum2;
                (sum == answer) ? console.log("Правильно!") : console.log("Не правильно " + answer + " правильный ответ " + sum);


            } else
                if (op == '*') {
                    let sum = sum1 * sum2;
                    (sum == answer) ? console.log("Правильно!") : console.log("Не правильно " + answer + " правильный ответ " + sum);


                } else
                    if (op == '/') {
                        let sum = sum1 / sum2;
                        (sum == answer) ? console.log("Правильно!") : console.log("Не правильно " + answer + " правильный ответ " + sum);


                    }



    }
}

    rand(ran);



