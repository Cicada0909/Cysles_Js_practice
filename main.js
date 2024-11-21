num = 1;
sum = 0;
while (num <= 10) {
    if (num % 2 != 0) {
        sum = num + sum;
    }
    num++
}
console.log(sum);

num1 = -50;

while (num1 >= -100) {
    console.log(num1);
    num1--;
}

num2 = 1;
sum2 = 0;
while (num2 <= 50) {
    if (num2 % 5 == 0) {
        
    } else if (num2 % 2 != 0) {
        sum2 = num2 + sum2;
    }
    num2++
}
console.log(sum2);

num3 = Number(prompt("Введите число"));

while (num3 % 3 != 0) {
    num3 = Number(prompt("Введите число"));
}


