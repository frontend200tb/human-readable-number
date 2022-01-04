module.exports = function toReadable (number) {

  var res = '';
  var human = '';

  if (number == 0) {
    res = 'zero';
    return res;
  }

  function humanUnits(units) {
    switch(units){
      case 1: human = 'one'; break;
      case 2: human = 'two'; break;
      case 3: human = 'three'; break;
      case 4: human = 'four'; break;
      case 5: human = 'five'; break;
      case 6: human = 'six'; break;
      case 7: human = 'seven'; break;
      case 8: human = 'eight'; break;
      case 9: human = 'nine'; break;	
    } 
    return human;
  }

  if (number < 10) {
    res = humanUnits(number);  
    return res;
  }

  function humanTeens(teens) {
    switch(teens) {
      case 10:  human = 'ten'; break;
      case 11:  human = 'eleven'; break;
      case 12:  human = 'twelve'; break;
      case 13:  human = 'thirteen'; break;
      case 14:  human = 'fourteen'; break;
      case 15:  human = 'fifteen'; break;
      case 16:  human = 'sixteen'; break;
      case 17:  human = 'seventeen'; break;
      case 18:  human = 'eighteen'; break;
      case 19:  human = 'nineteen'; break;
    } 
    return human;
  }

  if (number < 20) {
    res = humanTeens(number);
    return res;
  }

  function humanTens(tens) {
    switch(tens){
      case 10:  human = 'ten'; break;
      case 20:  human = 'twenty'; break;
      case 30:  human = 'thirty'; break;
      case 40:  human = 'forty'; break;
      case 50:  human = 'fifty'; break;
      case 60:  human = 'sixty'; break;
      case 70:  human = 'seventy'; break;
      case 80:  human = 'eighty'; break;
      case 90:  human = 'ninety'; break;
    } 
    return human;
  }

  if (number < 100) {
    const tens = Math.floor(number / 10) * 10;
    const units = number - tens;
    if (units == 0) {
      res = humanTens(tens);
      return res;
    }
    res = humanTens(tens) + ' ' + humanUnits(units);
    return res;
  }

  function humanHundreds(hundreds) {
    switch(hundreds) {
      case 100:  human = 'one hundred'; break;
      case 200:  human = 'two hundred'; break;
      case 300:  human = 'three hundred'; break;
      case 400:  human = 'four hundred'; break;
      case 500:  human = 'five hundred'; break;
      case 600:  human = 'six hundred'; break;
      case 700:  human = 'seven hundred'; break;
      case 800:  human = 'eight hundred'; break;
      case 900:  human = 'nine hundred'; break;
    } 
    return human;
  }

  if (number < 1000) {
    const hundreds = Math.floor(number / 100) * 100;
    const tens = Math.floor((number - hundreds) / 10) * 10;
    const units = number - hundreds - tens;
    if (units == 0 && tens == 0) {
      res = humanHundreds(hundreds);
      return res;
    }
    if (units == 0) {
      res = humanHundreds(hundreds) + ' ' + humanTens(tens);
      return res;
    }
    if (((tens + units) > 10) && ((tens + units) < 20)) {
      const teens = tens + units;
      res = humanHundreds(hundreds) + ' ' + humanTeens(teens);
      return res;
    }
    if (tens == 0) {
      res = humanHundreds(hundreds) + ' ' + humanUnits(units);
      return res;
    }
    res = humanHundreds(hundreds) + ' ' + humanTens(tens) + ' ' + humanUnits(units);
    return res;
  }

}