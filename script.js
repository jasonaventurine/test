function convertToWords(num) {
  const units = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  const teens = ['', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
  const tens = ['', 'sepuluh', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];
  const hundreds = ['', 'seratus', 'dua ratus', 'tiga ratus', 'empat ratus', 'lima ratus', 'enam ratus', 'tujuh ratus', 'delapan ratus', 'sembilan ratus'];
  const thousands = ['', 'seribu', 'dua ribu', 'tiga ribu', 'empat ribu', 'lima ribu', 'enam ribu', 'tujuh ribu', 'delapan ribu', 'sembilan ribu'];

  if (num < 10) {
    return units[num];
  } else if (num < 20) {
    return teens[num - 10];
  } else if (num < 100) {
    return tens[Math.floor(num / 10)] + ' ' + units[num % 10];
  } else if (num < 1000) {
    return hundreds[Math.floor(num / 100)] + ' ' + convertToWords(num % 100);
  } else if (num < 10000) {
    return thousands[Math.floor(num / 1000)] + ' ' + convertToWords(num % 1000);
  } else if (num < 100000) {
    return convertToWords(Math.floor(num / 1000)) + ' ribu ' + convertToWords(num % 1000);
  } else if (num < 1000000) {
    return convertToWords(Math.floor(num / 1000)) + ' ribu ' + convertToWords(num % 1000);
  }
}

console.log(convertToWords(12));
console.log(convertToWords(2012));
console.log(convertToWords(999999));
