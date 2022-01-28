let sumIncome = +prompt ("Введите Ваш доход за 1 год");
const deduct = 12550;
let fdIncomeTax = 0;
let sumDeduct = sumIncome - deduct;

console.log(`Расчета налогов со стандартным вычетом  - ${sumDeduct} $`);

let arrTaxLimit = [0, 9950, 40525, 86376, 164925, 209425, 523600, "Большое число",];
let taxPercent = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37]

if(sumDeduct <= 0){
    fdIncomeTax = 0;
    console.log(`Подоходный налог (Федеральный) - ${fdIncomeTax} $`);
} else { 
    for (let i = 0; i < arrTaxLimit.length; i++){
        let startTaxLimit = arrTaxLimit[i];
        console.log(`Начало ${startTaxLimit}`);
        let endTaxLimit = arrTaxLimit[i + 1];
        console.log(`Конец ${endTaxLimit}`);
        let percent = taxPercent[i];
            if(sumDeduct > endTaxLimit){
                fdIncomeTax = fdIncomeTax + ((endTaxLimit - startTaxLimit) * percent);
                console.log(`Налог с диапозона - ${fdIncomeTax} $`)
            } else {
                fdIncomeTax = fdIncomeTax + ((sumDeduct - startTaxLimit) * percent);
                break
            }
    }
}
console.log(`Подоходный налог (Федеральный) - ${fdIncomeTax} $`);
alert(`При доходе (за 1 год) ${sumIncome} $, нужно уплатить - ${fdIncomeTax} $ подоходного налога (Федеральный)`);