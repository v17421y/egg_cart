var counter = 1;

var sum = 0;

var sum0 = 250;

var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;

var addit1 = "";
var addit2 = "";
var addit3 = "";
var addit4 = "";

function plusClick() {
  document.querySelector(".counter").innerHTML = (++counter); // innerHTML - меняем значение содержимого в теге
}

function minusClick() {
  document.querySelector(".counter").innerHTML = (counter > 1 ? --counter :  counter = 1);
}

function clearClick() {
  counter = 1;
  document.querySelector(".counter").innerHTML = (counter);
}

document.querySelector(".cartBtn").addEventListener("click", () => {   // addEventListener - событие
  // var addit1 = document.querySelector(".c1").value;
  if (document.querySelector(".c1").checked){
    addit1 = "+ Дополнительно: Тигровые креветки / [60 гр.] - 450 ₽";
    sum1 = 450;
    // document.querySelector(".outField").innerHTML = addit;
  }
  else {
    addit1 = "";
    sum1 = 0;
    // document.querySelector(".outField").innerHTML = "";
  }
});

document.querySelector(".cartBtn").addEventListener("click", () => {
  // var addit2 = document.querySelector(".c2").value;
  if (document.querySelector(".c2").checked){
    addit2 = document.querySelector(".c2").value;
    sum2 = 80;
    // document.querySelector(".outField2").innerHTML = addit;
  }
  else {
    addit2 = "";
    sum2 = 0;
    // document.querySelector(".outField2").innerHTML = "";
  }
});

document.querySelector(".cartBtn").addEventListener("click", () => {
  // var addit3 = document.querySelector(".c3").value;
  if (document.querySelector(".c3").checked){
    addit3 = document.querySelector(".c3").value;
    sum3 = 120;
    // document.querySelector(".outField3").innerHTML = addit;
  }
  else {
    addit3 = "";
    sum3 = 0;
    // document.querySelector(".outField3").innerHTML = "";
  }
});

document.querySelector(".cartBtn").addEventListener("click", () => {
  // var addit4 = document.querySelector(".c4").value;
  if (document.querySelector(".c4").checked){
    addit4 = document.querySelector(".c4").value;
    sum4 = 80;
    // document.querySelector(".outField4").innerHTML = addit;
  }
  else {
    addit4 = "";
    sum4 = 0;
    // document.querySelector(".outField4").innerHTML = "";
  }
});

function cartClick(){
  // document.querySelector(".outField0").innerHTML = (counter + " порции " + "/ 250 ₽ * " + counter + " п.");
  sum = (counter * sum0) + sum1 + sum2 + sum3 + sum4;
  // document.querySelector(".outPriceField").innerHTML = ("На сумму: " + sum + " ₽");
  if(confirm("Ваш заказ:" + '\r\n' + counter + " порции " + "/ 250 ₽ * " + counter + " п." + '\r\n' + '\r\n' + addit1 + '\r\n' + addit2 + '\r\n' + addit3 + '\r\n' + addit4 + '\r\n' + '\r\n' + "На сумму: " + sum + " ₽")){
    var nalBeznal = prompt("Впишите способ оплаты", "Наличными или картой?")
    alert("Вы выбрали оплату "+ "''" + nalBeznal + "''");
  }
}

// function buyClickN(){
  // alert('Вы выбрали оплату НАЛИЧНЫМИ')
// }

// function buyClickK(){
  // alert('Вы выбрали оплату КАРТОЙ')
// }