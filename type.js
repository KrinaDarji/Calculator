var answer = document.getElementById("inptext");
var list = document.getElementById("memory-list");
var list1 = document.getElementById("history-list");
var memoryRegister = [];
var HistoryRegister = [];
var calculate = function (op) {
    if (answer.value === "") {
        if (isNaN(op)) {
            if (op == "-" || op == "(") {
                answer.value += op;
            }
        }
        else {
            answer.value += op;
        }
    }
    else {
        var ch = answer.value;
        ch = String(ch);
        ch = ch.slice(-1);
        if (isNaN(ch)) {
            if (isNaN(op)) {
                var calch = answer.value;
                calch = calch.substring(0, calch.length - 1);
                console.log("replace", calch);
                answer.value = calch;
                answer.value += op;
                console.log(calch);
            }
            else {
                answer.value += op;
            }
        }
        else {
            answer.value += op;
        }
    }
};
// equal operator
var Answer = function () {
    //condition checks the value contains ^ if yes then it will perform x^y
    if (answer.value.includes("^")) {
        var temp = answer.value;
        var x = temp.split("^")[0];
        var y = temp.substring(temp.indexOf("^") + 1);
        answer.value = Math.pow(x, y);
    }
    var ansch = answer.value;
    var numberbefore;
    console.log("ansch", ansch);
    ansch = String(ansch);
    var anschnew = ansch.slice(-1);
    console.log("anschnew", anschnew);
    if (isNaN(anschnew)) {
        ansch = ansch.substring(0, ansch.length - 1);
        numberbefore = ansch;
        console.log("numberbefore", numberbefore);
    }
    else {
        numberbefore = answer.value;
    }
    var numberafter;
    var num;
    document.getElementById('sm'); // displaying operations
    answer.value = eval(numberbefore); // for calculating basic math operations
    numberafter = answer.value;
    num = numberbefore + '=' + numberafter;
    HistoryRegister.push(num); //pushes the elements in array
    list1.innerHTML = '';
    HistoryRegister.forEach(function (element) {
        list1.innerHTML += '<li>' + element + '</li>'; //prints element history block
    });
};
//function for history button to toggle and show the history
var hist = function () {
    var div = document.getElementsByClassName('show1').item(0);
    if (div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
var Memory = function () {
    var div = document.getElementsByClassName('show').item(0);
    if (div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
//clear function
var clr = function () {
    var myContainer = document.getElementById('sm');
    myContainer.value = "";
    answer.value = "";
};
//backspace / delete function
var del = function () { return answer.value = answer.value.slice(0, -1); };
//square root function
var sqrt = function () { return answer.value = Math.sqrt(answer.value); };
//factorial function
var fact = function () {
    var n;
    var res = 1;
    if (n == 0 || n == 1) {
        answer.value = String(n);
    }
    else {
        for (var i = n; i >= 1; i--) {
            res = res * i;
        }
        answer.value = res;
    }
};
//function radian to degree
var Deg = function () {
    var rad;
    var deg = (rad * 180) / 3.14;
    answer.value = deg;
};
//function Farenhiet to celcius
var f_e = function () {
    var cel;
    var far = cel * 1.8 + 32;
    answer.value = far;
};
//function square
var square = function () { return answer.value = Math.pow(answer.value, 2); };
//function logarithm
var log = function () { return answer.value = Math.LOG10E; };
//function ln
var ln = function () { return answer.value = Math.log; };
//function 10pow x
var powx = function () { return answer.value = Math.pow(10, answer.value); };
//function exp
var exp = function () { return answer.value = Math.exp(answer.value); };
// function sin
var sin = function () { return answer.value = Math.sin(answer.value); };
// function tan
var tan = function () { return answer.value = Math.tan(answer.value); };
// function cos
var cos = function () { return answer.value = Math.cos(answer.value); };
// function asin
var asin = function () { return answer.value = Math.asin(answer.value); };
// function acos
var acos = function () { return answer.value = Math.acos(answer.value); };
// function atan
var atan = function () { return answer.value = Math.atan(answer.value); };
// function floor
var floor = function () { return answer.value = Math.floor(answer.value); };
// function ceil
var ceil = function () { return answer.value = Math.ceil(answer.value); };
//function random
var random = function () { return answer.value = Math.random(); };
//function abs=>| x |
var abs = function () { return answer.value = Math.abs(answer.value); };
//function reciprocal
var reciprocal = function () { return answer.value = 1 / answer.value; };
// function x^3
var xpow3 = function () { return answer.value = Math.pow(answer.value, 3); };
// function 2^x
var powof2x = function () { return answer.value = Math.pow(2, answer.value); };
// function of +/-
var pm = function () { return answer.value = -answer.value; };
// function memory save
var MemorySave = function () {
    var num = answer.value;
    memoryRegister.push(num); //pushes the elements in array
    list.innerHTML = '';
    memoryRegister.forEach(function (element) {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
    });
};
//function memory plus
var memoryplus = function () {
    var num = answer.value;
    var lastvalue = list.lastChild.innerHTML; // takes last element of list and stores in lastvalue
    var ans = parseInt(lastvalue) + parseInt(num); //adds the last item in memory and the number
    memoryRegister.pop(lastvalue); //pops out the lastvalue in array
    memoryRegister.push(ans); //pushes the elements in array
    list.innerHTML = '';
    memoryRegister.forEach(function (element) {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
    });
};
//function memory minus
var memoryminus = function () {
    var num = answer.value;
    var lastvalue = list.lastChild.innerHTML; // takes last element of list and stores in lastvalue
    var ans = parseInt(lastvalue) - parseInt(num); //substracts the last item in memory and the number
    memoryRegister.pop(lastvalue); //pops out the lastvalue in array
    memoryRegister.push(ans); //pushes the elements in array
    list.innerHTML = '';
    memoryRegister.forEach(function (element) {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
    });
};
//function memory recall
var memoryrecall = function () {
    answer.value = list.lastChild.innerHTML; //prints last element in list on display
};
//function memory clear
var memoryclear = function () {
    list.innerHTML = '';
    memoryRegister.forEach(function (element) {
        while (memoryRegister.length) {
            memoryRegister.pop();
        }
    });
};
//function for taking input from keyboard
var myFunction = function (event) {
    var unicode = event.which;
    console.log("event", event);
    console.log(unicode);
    if (unicode >= 48 && unicode <= 57 || unicode == 94 || unicode == 40 || unicode == 41 || unicode == 42 || unicode == 43 || unicode == 45 || unicode == 47) {
        console.log("event1", event);
        calculate(event.key);
    }
    else {
    }
    if (unicode == 13) {
        Answer();
    }
    if (unicode == 46) {
        del();
    }
};
