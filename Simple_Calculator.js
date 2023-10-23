var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2")
var btn3 = document.querySelector(".btn3")
var btn4 = document.querySelector(".btn4")
var btn5 = document.querySelector(".btn5")
var btn6 = document.querySelector(".btn6")
var btn7 = document.querySelector(".btn7")
var btn8 = document.querySelector(".btn8")
var btn9 = document.querySelector(".btn9")
var btn0 = document.querySelector(".btn0")

var btnDiv = document.querySelector(".btndiv")
var btnAdd = document.querySelector(".btnadd")
var btnSub = document.querySelector(".btnsub")
var btnMul = document.querySelector(".btnmul")

var btnEqual = document.querySelector(".btneq")
var btnDot = document.querySelector(".btnDot")
var txt = document.querySelector(".txt")
var clr = document.querySelector(".clr")


var num1;
var result;


btn0.addEventListener("click", function () {
    if (num1 == null) {
        num1 = btn0.value;
        txt.value = num1;
    } else {
        num1 += btn0.value
        txt.value = num1;
    }
})

btn1.addEventListener("click", function () {
    if (num1 == null) {
        num1 = btn1.value;
        txt.value = num1;
    } else {
        num1 += btn1.value
        txt.value = num1;
    }

})
btn2.addEventListener("click", function () {
    if (num1 == null) {
        num1 = btn2.value;
        txt.value = num1;
    } else {
        num1 += btn2.value
        txt.value = num1;
    }



})

btn3.addEventListener("click", function () {
    if (num1 == null) {
        num1 = btn3.value;
        txt.value = num1;
    } else {
        num1 += btn3.value
        txt.value = num1;
    }

})
btn4.addEventListener("click", function () {
    if (num1 == null) {
        num1 = btn4.value;
        txt.value = num1;
    } else {
        num1 += btn4.value
        txt.value = num1;
    }

})
btn5.addEventListener("click", function () {
    if (num1 == null) {
        num1 = btn5.value;
        txt.value = num1;
    } else {
        num1 += btn5.value
        txt.value = num1;
    }
})
btn6.addEventListener("click", function () {
    if (num1 == null) {
        num1 = btn6.value;
        txt.value = num1;
    } else {
        num1 += btn6.value
        txt.value = num1;
    }
})
btn7.addEventListener("click", function () {
    if (num1 == null) {
        num1 = btn7.value;
        txt.value = num1;
    } else {
        num1 += btn7.value
        txt.value = num1;
    }
})
btn8.addEventListener("click", function () {
    if (num1 == null) {
        num1 = btn8.value;
        txt.value = num1;
    } else {
        num1 += btn8.value
        txt.value = num1;
    }

})
btn9.addEventListener("click", function () {
    if (num1 == null) {
        num1 = btn9.value;
        txt.value = num1;
    } else {
        num1 += btn9.value
        txt.value = num1;
    }
})

btnDiv.addEventListener("click", function () {

    if (num1 == null) {
        alert("enter the operands")
    } else {
        num1 += btnDiv.value
        txt.value = num1;
    }
})
btnMul.addEventListener("click", function () {

    if (num1 == null) {
        alert("enter the operands")
    } else {
        num1 += btnMul.value
        txt.value = num1;
    }
})
btnAdd.addEventListener("click", function () {
    if (num1 == null) {
        alert("enter the operands")
    } else {
        num1 += btnAdd.value
        txt.value = num1;
    }

})
btnSub.addEventListener("click", function () {

    if (num1 == null) {
        alert("enter the operands")
    } else {
        num1 += btnSub.value
        txt.value = num1;
    }
})
btnDot.addEventListener("click", function () {

    if (num1 == null) {
        alert("enter a number first")
    } else {
        num1 += btnDot.value
        txt.value = num1;
    }
})
btnEqual.addEventListener("click", function () {

    result = eval(num1)
    console.log(result)
    txt.value = result
})


clr.addEventListener("click", function () {
    txt.value = null;
    num1 = null;
})