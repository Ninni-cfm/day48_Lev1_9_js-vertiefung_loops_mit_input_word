//****************************************************************************
// CodeFlow Übung lev1_9: loops_mit_input_word
let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']
function wordPrint() {
    let num = document.getElementById("numChars").value;
    document.getElementById("divResult").innerHTML = `<p>${words.filter(word => word.length == num).join(", ")}</p>`
}

function addWord() {
    let newWord = document.getElementById("txtWord").value;
    if (newWord.length > 0) {
        words.push(newWord);
        console.log(words);
        document.getElementById("txtWord").value = '';
    }
}