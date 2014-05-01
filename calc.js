var str = ""; 						// для временного хранения введеных данных в строке
var arg1 = 0; 						// перове введеное число
var arg2 = 1; 						// второе введенное число
var res = 0; 						// результат
var num = 0; 						// для временного хранения введеных данных числах
var sign = ""; 						// арифметический знак
var inputFeild = $("#inpCalc");	//поле вывода данных
var dot = $("#dot");				//кнопка с точкой (нужна чтобы нельзя было ввести две и более точки в числе)

$(window).on("keydown", pressKeyClearField);
$(window).on("keypress.operator", pressKeyOperator);
$(window).on("keypress.result", pressKeyResult);
$(window).on("keypress.num", pressKeyNum);
$(window).on("keypress.dot", pressKeyDot);
$(window).on("keydown", pressKeyBackSpace);


function pressKeyNum(event) {	
	switch (event.which) {
	  case 49:
	    str += "1";
		break;
		
	  case 50:
	    str += "2";
		break;
		
	  case 51:
	    str += "3";
		break;
		
	  case 52:	  
	    str += "4";
		break;
		
	  case 53:	 
	    str += "5";
		break;
		
	  case 54:
	    str += "6";
		break;
			
	  case 55:
	    str += "7";
		break;
		
	  case 56:
	    str += "8";
		break;
		
	  case 57:
	    str += "9";
		break;	
		
	  case 48:
	    str += "0";
		break;				  									
	}
	
	if (event.which>=48 && event.which<=57){
		num=parseFloat(str);
		inputFeild.val(num);
	}
}

function clickNum(event) {
	switch (event.target.value) {
	  case "1":
	    str += "1";
		break;
		
	  case "2":
	    str += "2";
		break;
		
	  case "3":
	    str += "3";
		break;
		
	  case "4":	  
	    str += "4";
		break;
		
	  case "5":	 
	    str += "5";
		break;
		
	  case "6":
	    str += "6";
		break;
			
	  case "7":
	    str += "7";
		break;
		
	  case "8":
	    str += "8";
		break;
		
	  case "9":
	    str += "9";
		break;	
		
	  case "0":
	    str += "0";
		break;				  									
	}
	
	num=parseFloat(str);
	inputFeild.val(num);
}

function pressKeyOperator(event) {
	switch (event.which) {
	  case 47:
	    sign="/";
		break;
		
	  case 42:
		sign="*";
		break;
		
	  case 45:
		sign="-";
		break;
		
	  case 43:	  
		sign="+";
		break;	
	}
	
	if (event.which == 47 || event.which == 42 || event.which == 45 || event.which == 43) {
		arg1=parseFloat(str);	
		clearField();
	}
}

function pressKeyClearField(event) {
	if (event.which == 27) clearField(); //ESC
}

function pressKeyResult(event) {
	if (event.which == 13) toResult(); //Enter
}

function pressKeyDot(event) {
	if (event.which == 46) clickDot(); //dot
}

function pressKeyBackSpace(event) {
	if (event.which==8) clickBackSpace();
}


function clickBackSpace(event) {
	if (str.length>1) {
		str=str.slice(0,str.length-1);
		num=parseFloat(str);
		inputFeild.val(num);		
	}
}

function clickOperator(event) {
	arg1 = parseFloat(str);
	
	switch (event.target.value) {
	  case "/":
	    sign = "/";
		break;
		
	  case "*":
		sign = "*";
		break;
		
	  case "+":
		sign = "+";
		break;
		
	  case "-":	  
		sign = "-";
		break;
	
	  case "1/x":	  
		sign = "1/x";
		inputFeild.val(1/arg1);
		return;

	  case "√x":	  
		sign = "√x";
		inputFeild.val(Math.sqrt(arg1));
		return;						
	}
	clearField();
}

function clearField(event) {
	dot.disabled = false;
	str = "0";
	inputFeild.val(str);
	res = 0;
}

function clickDot(event) {
	str += ".";
	inputFeild.val(str);	
	dot.disabled = true;
}

function toResult(event) {
	if (sign == "/" || sign == "*" || sign == "+" || sign == "-") {
		dot.disabled = false;
		arg2 = parseFloat(str);
	}
	
	if (sign == "/") {
		res = arg1/arg2;
	}
	
	if (sign == "*") {
		res = arg1*arg2;
	}	
	
	if (sign == "+" ){
		res = arg1+arg2;
	}
	
	if (sign == "-") {
		res = arg1-arg2;
	}
	
	if (sign == "/" || sign == "*" || sign == "+" || sign == "-") {
		inputFeild.val(res);
	}
}


function ClickPressNum(event) {
	var code=0;
	if (event.keyCode!=0)
		code=event.keyCode;
	else
		code=parseInt(event.target.value)+48;
	switch (code) {
	  case 49:
	    str += "1";
		break;
		
	  case 50:
	    str += "2";
		break;
		
	  case 51:
	    str += "3";
		break;
		
	  case 52:	  
	    str += "4";
		break;
		
	  case 53:	 
	    str += "5";
		break;
		
	  case 54:
	    str += "6";
		break;
			
	  case 55:
	    str += "7";
		break;
		
	  case 56:
	    str += "8";
		break;
		
	  case 57:
	    str += "9";
		break;	
		
	  case 48:
	    str += "0";
		break;				  									
	}
	
	num=parseFloat(str);
	inputFeild.val(num);
}
