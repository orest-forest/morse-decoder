const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let arrWords = [];
    let sliceIndex = 0;

    for (let i = 0; i < expr.length; i++) {
        arrWords.push(expr.slice(sliceIndex, sliceIndex + 10));
        sliceIndex = sliceIndex + 10
    }

    for (let i = 0; i < arrWords.length; i++) {
        if (arrWords[i] === '**********') {
            arrWords[i] = ' ';
            continue
        }
        arrWords[i] = arrWords[i].replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-')
        arrWords[i] = MORSE_TABLE[arrWords[i]]
    }
return arrWords.join('')
}

module.exports = {
    decode
}