function calcullohOpenOptions (event) {
	window.openDialog("chrome://calculloh/content/FinalPrefs.xul", "_blank", "centerscreen,chrome,resizable=yes,dependent=yes")
}

function cdm_changeOperator(newOperator){
	document.getElementById("operatorLabel").value = newOperator;
}//end cdm_changeOperator function

function doType(e)  {          //  when something is typed
   //alert(e.which);
   var keynum;
   var keychar;
   if(e.which)  {
      keynum = e.which;
      if(keynum == 13) {      //  hit Enter
         cdm_calculate();     //  more info: http://www.quirksmode.org/js/events/keys.html
      }
   }
}

function focus2(fnumber){
		document.getElementById("number2").focus();
		document.getElementById("number1").value = fnumber;
}

function quickCalc(qnumber){
	document.getElementById("number2").value = qnumber;//output the answer to the first textbox
	cdm_calculate();
	number = "";
}

function cdm_pressAKey(whichOne){//open function

	//alert("I'm alive!");
	var number = document.getElementById(whichOne).value;//Gets number
	var numberTwo = document.getElementById('number2').value;//Gets number from second text-box
	//alert(number);
	relNum1 = /[\W]/;
	relAdd = /[\+]/;
	relSub = /[\-]/;
	relPow = /[\^]/;
	relMul = /[\*]/;
	relDiv = /[\/]/;
	relEq = /[=]/;
	//alert("got the re");

	if (relNum1.test(number)){//open if1

		//alert("do something!");

		if (relAdd.test(number)){
			number = number.replace(/\+/g, "");
			//alert("removed +");
			if (numberTwo != ""){
				quickCalc(number);	
			}else{
				focus2(number);
			}
			cdm_changeOperator('+');
		}
		if (relSub.test(number)){		
			number = number.replace(/\-/g, "");
			//alert("removed -");
			if (numberTwo != ""){
				quickCalc(number);	
			}else{
				focus2(number);
			}
			cdm_changeOperator('-');
		}
		
		if (relMul.test(number)){
			number = number.replace(/\*/g, "");
			//alert("removed *");
			if (numberTwo != ""){
				quickCalc(number);	
			}else{
				focus2(number);
			}

			cdm_changeOperator('*');
		}
		
		if (relDiv.test(number)){
			number = number.replace(/\//g, "");
			//alert("removed /");
			if (numberTwo != ""){
				quickCalc(number);	
			}else{
				focus2(number);
			}

			cdm_changeOperator('/');
		}
		
		if (relPow.test(number)){
			number = number.replace(/\^/g, "");
			//alert("removed ^");
			if (numberTwo != ""){
				quickCalc(number);	
			}else{
				focus2(number);
			}

			cdm_changeOperator('^');
		}
		
		if (relEq.test(number)){
			number = number.replace(/=/g, "");
			//alert("removed =");
			quickCalc(number);
		}
		
		//document.getElementById(whichOne).value = number;//Artifact... I don't think i need this anymore...


	}else{//close if1

		//alert("do nothing");

	}

}//close function

function cdm_calculate(){
	var number1 = document.getElementById("number1").value;//Gets number 1
	var number2 = document.getElementById("number2").value;//Gets number 2
	var operator = document.getElementById("operatorLabel").value;//gets operation to perform
	
	if (number2 == "" || number1 == ""){//test for empty textbox
		//alert("You forgot to enter a number!");
	}else{//if not empty textbox
	
		re1 = /[,]/;//checks for commas
		re2 = /[a-zA-Z]/;//checks for letters
	
		if (re1.test(number1) || re1.test(number2)){//test for commas
			alert("Please use only numbers. No commas.");
		}else if(re2.test(number1) || re2.test(number2)){//test for letters
			alert("Please use only numbers. No letters. \n\n The calculator only calculates decimal numbers, please convert to decimal before performing calculation.");
		}else{

		number1 = eval(number1);//converts to integer for calculation
		number2 = eval(number2);//converts to integer for calculation

		if (operator == "+"){//if operator is + then add them
			//var answer = number1 + number2;
			var answer = ((number1*1000 + number2*1000)/1000)//fix decimal problem
		}else if (operator == "-"){//if operator is - then subtract them
			//var answer = number1 - number2;
			var answer = ((number1*1000 - number2*1000)/1000)//fix decimal problem
		}else if (operator == "*"){//if operator is * then multiply them
			var answer = number1 * number2;
		}else if (operator == "/"){//if operator is / then divide them
			var answer = number1 / number2;
		}else if (operator == "^"){//if operator is ^ then get the power
			var answer = Math.pow(number1, number2);
		}else{
			alert("Error! Un-recognized operator. Please re-select your operator (+, -, etc...) and try again!");
		}//end operator selection

		//alert(answer);
		document.getElementById("number1").value = answer;//output the answer to the first textbox
		document.getElementById("number2").value = "";//clear the second textbox

		var newNumber = answer.toString();
		newNumber = newNumber.length;

		if (newNumber >= 6){//if 6 digits long make larger
			document.getElementById("number1").style.width = "75px";
		}else{//if less than 6 digits long, make short again
			document.getElementById("number1").style.width = "50px";
		}
		if (newNumber >= 11){//if 11 digits long make larger
			document.getElementById("number1").style.width = "110px";
		}
		if (newNumber >= 16){//if 16 digits long make larger
			document.getElementById("number1").style.width = "175px";
		}

		}//end re2 test
	}//end test for empty textbox
}//end calculate function

function cdm_hide(hideWhat){
	var hideMe = document.getElementById(hideWhat).style;

	if (hideMe.display == "none"){
		hideMe.display = "";
	}else{
		hideMe.display = "none";
	}
	
	document.getElementById('number1').focus();
}//end hide

function cdm_convert(cdm_con){
	var number1 = document.getElementById("number1").value;//Gets number 1
	var hex;
	Populate();

function MakeArray()
{
    this.length = 36;
    return this;
}

function Populate()
{
    hex = new MakeArray();
    hex[1] = "0";    
    hex[2] = "1";    
    hex[3] = "2";    
    hex[4] = "3";    
    hex[5] = "4";    
    hex[6] = "5";    
    hex[7] = "6";    
    hex[8] = "7";    
    hex[9] = "8";    
    hex[10] = "9";    
    hex[11] = "A";    
    hex[12] = "B";    
    hex[13] = "C";    
    hex[14] = "D";    
    hex[15] = "E";    
    hex[16] = "F";    
    hex[17] = "G";    
    hex[18] = "H";    
    hex[19] = "I";    
    hex[20] = "J";    
    hex[21] = "K";    
    hex[22] = "L";    
    hex[23] = "M";    
    hex[24] = "N";    
    hex[25] = "O";    
    hex[26] = "P";    
    hex[27] = "Q";    
    hex[28] = "R";    
    hex[29] = "S";    
    hex[30] = "T";    
    hex[31] = "U";    
    hex[32] = "V";    
    hex[33] = "W";    
    hex[34] = "X";    
    hex[35] = "Y";    
    hex[36] = "Z";    
}

// function DecimaltoAnother(N, radix)
// 
// return representation of a number N
// in the system based on radix 
//
function DecimaltoAnother(N, radix)
{
    s = "";

    A = N;

    while (A >= radix)
    {
        B = A % radix;
        A = Math.floor(A / radix);
        s += hex[B+1];
    }

    s += hex[A+1];

    return Transpose(s);
}

// function Transpose(s)
//
// return a string written from right to left
//
function Transpose(s)
{
 N = s.length;

    t = "";

    for (i = 0; i < N; i++)
        t = t + s.substring(N-i-1, N-i);

    s = t;
    return s;
}

	if(cdm_con == "h2d"){
		answer = parseInt(number1, 16);//hex
		answer = answer;//dec
	} else if(cdm_con == "d2h"){
		answer = parseInt(number1, 10);//dec
		answer = DecimaltoAnother(answer, 16);//hex
	} else if(cdm_con == "o2d"){
		answer = parseInt(number1, 8);//oct
		answer = answer;//dec
	} else if(cdm_con == "d2o"){
		answer = parseInt(number1, 10);//dec
		answer = DecimaltoAnother(answer, 8);//oct
	} else if(cdm_con == "b2d"){
		answer = parseInt(number1, 2);//bin
		answer = answer;//dec	
	} else if(cdm_con == "d2b"){
		answer = parseInt(number1, 10);//dec
		answer = DecimaltoAnother(answer, 2);//bin
	} else {
		alert("error!");
	}
	
		document.getElementById("number1").value = answer;//output the answer to the first textbox
		document.getElementById("number2").value = "";//clear the second textbox
		
	answerTest = document.getElementById("number1").value;
	
	if(answerTest == "NaN"){
		alert("please make your selection carefully");
		document.getElementById("number1").value = number1;//output the answer to the first textbox
	}

}