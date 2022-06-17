
let number = parseInt(prompt("Nhập vào một số"));
isPrime(number);
function isPrime(number){
    let isPrime = false;
    let count = 0;
    if (number === 0){
        document.write(number + "Không phải số nguyên tố");
    } else {
        for(let i = 1; i<= number;i++){
            if (number % i === 0){
                count += 1;
            }
        }
    }
    if (count===2){
        isPrime = true;
    }
    if (isPrime){
        document.write(number + "là số nguyên tố");
    } else{
        document.write(number + "Không phải số nguyên tố");
    }
}