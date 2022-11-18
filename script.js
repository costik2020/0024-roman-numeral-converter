/*Roman numerals project*/
function convertToRoman(num) {
/*
ROMAN NUMERALS
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

/////////////////////////////////
ROMAN GROUPS OF NUMBERS

SYMBOL       VALUE
I             1
IV            4
V             5
IX            9
X             10
XL            40
L             50
XC            90
C             100
CD            400
D             500
CM            900
M             1000

*/

////////////////////////



let romanString = "";



// M             1000
	while (num-1000 >=0){
		romanString = romanString + "M";
		num = num - 1000;
	}



// CM            900
	while (num-900 >=0){
		romanString = romanString + "CM";
		num = num - 900;
	}



// D             500
	while (num-500 >=0){
		romanString = romanString + "D";
		num = num - 500;
	}



// CD            400
	while (num-400 >=0){
		romanString = romanString + "CD";
		num = num - 400;
	}



// C             100
	while (num-100 >=0){
		romanString = romanString + "C";
		num = num - 100;
	}



// XC            90
	while (num-90 >=0){
		romanString = romanString + "XC";
		num = num - 90;
	}



// L             50
	while (num-50 >=0){
		romanString = romanString + "L";
		num = num - 50;
	}



// XL            40
	while (num-40 >=0){
		romanString = romanString + "XL";
		num = num - 40;
	}



// X             10
	while (num-10 >=0){
		romanString = romanString + "X";
		num = num - 10;
	}



// IX            9
	while (num-9 >=0){
		romanString = romanString + "IX";
		num = num - 9;
	}



// V             5
	while (num-5 >=0){
		romanString = romanString + "V";
		num = num - 5;
	}



// IV            4
	while (num-4 >=0){
		romanString = romanString + "IV";
		num = num - 4;
	}



// I             1
	while (num-1 >=0){
		romanString = romanString + "I";
		num = num - 1;
	}






console.log("romanString=", romanString);
 return romanString;
}


// Testing:
//convertToRoman(1920);
//convertToRoman(36);
//convertToRoman(3542);
//convertToRoman(16) should return the string XVI.
//convertToRoman(16);
//convertToRoman(44) should return the string XLIV
convertToRoman(44);
//convertToRoman(90);
//convertToRoman(97) should return the string XCVII
//convertToRoman(97);
//convertToRoman(16) should return the string XVI.
//convertToRoman(9);
