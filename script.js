function BMI (weight,height) {
 let result =  weight / (height * height);
 return result;
}
    
console.log(BMI(70,1.7) );
function Status (BMI) {

   if (bmi <18.5) {
        return"لديك نقص في الوزن";
   } else if ( bmi >=18.5 && bmi<25){
        return"وزنك صحي" ;
   } else if (bmi>=25) {
      return"لديك زيادة في الوزن";
   }
}
function calculate () {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = bmi (weight,height);
   let desc = Status (bmi);
    let div = document.getElementByld("result");
    div.innerText = BMI + " == " + desc;
}
