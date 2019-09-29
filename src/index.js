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
    var result = "";
    for (let i = 0; i < expr.length; i += 10)
    {
        var morseStr = "";
        for (let j = 0; j < 10; j += 2)
        {
            var encodeStr = expr[i + j] + expr[i + j + 1];
            if (encodeStr === "**")
            {
                result += " ";
                break;
            }
            else
            {
                if (encodeStr === "10")
                    morseStr += ".";
                else if (encodeStr === "11")
                    morseStr += "-";
            }
        }

        if (morseStr !== "")
            result += MORSE_TABLE[morseStr];
    }

    return result;
}

module.exports = {
    decode
};