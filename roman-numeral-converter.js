function convertToRoman(num) {
   function getNum(digit, l, m, n) {
       switch(true){
       case digit <= 3:
       return l.repeat(digit);
       case digit === 4:
       return l + m;
       case digit <= 8:
       return m + l.repeat(digit - 5);
       default:
       return l + n;

       }
   }
    var mod = "";

    mod += "M".repeat(Math.floor(num/1000));
    num %= 1000;

    mod += getNum(Math.floor(num/100),'C','D','M');
    num %= 100;

    mod += getNum(Math.floor(num/10),'X','L','C');
    num %= 10;

    mod += getNum(num, 'I', 'V', 'X');

 return mod;
}

console.log(convertToRoman(36));
