var show = (text = undefined, tag = 'p') => {
    document.write(text != undefined ? `<${tag}>${text}</${tag}>` : '<br>');
    console.log(text != undefined ? text : '');
}
var showArray = (arr) => {
    console.log(arr);
    document.write(`<p>(${arr.length}) [ `);

    if (typeof (elt) == "Number") {
        document.write(arr.join(', '));
    }
    else {
        document.write(`"${arr.join('", "')}"`);
    }
    document.write(' ]</p>');
}


//****************************************************************************
// CodeFlow Übung lev1_1: for loop Hello World
// Schreibe eine for-Schleife. 
// Sie soll genau 10 mal in der Konsole “Hello World + Nummer” ausgeben.
show('CodeFlow Übung lev1_1: for loop Hello World', 'h2');
for (let i = 1; i <= 10; show(`Hello Word ${i++}`));
show();


//****************************************************************************
// CodeFlow Übung lev1_2: for loop Array
// Erstelle ein Array mit den Zahlen 0-10 mit Hilfe einer Schleife.
// Wenn wir mit Arrays arbeiten, müssen wir das Array initialisieren 
//    (let numArray = [];).
// Verwende den Befehl push() im Schleifenkörper.
// Gib numArray in der Konsole aus.
show('CodeFlow Übung lev1_2: for loop Array', 'h2');
let numArray = [];
for (let i = 0; i < 11; numArray.push(i++));
showArray(numArray);
show();


//****************************************************************************
// CodeFlow Übung lev1_4: for loop Namen
// Deklariere ein Array names mit den Werten: "Georg", "Anass", "Elaine", 
// "Hakan", "Sam", "Kim", "Sergio".
// Dann verwende eine for Schleife um alle Namen in der Konsole anzuzeigen.
show('CodeFlow Übung lev1_4: for loop Namen', 'h2');
let names = ["Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"];
for (let i = 0; i < names.length; show(names[i++]));
show();


//****************************************************************************
// CodeFlow Übung lev1_6: for loop Array
// Wir wollen ein Array von Bildern erstellen und die Dateinamen von image_1.jpg bis image_100.jpg sollen ausgeben werden.
// Deklariere die Variable retArray als leeres Array.
// Schreibe eine for-Schleife.
// Nutze den push() Befehl.
show('CodeFlow Übung lev1_6: for loop Array', 'h2');
let retArray = [];
for (let i = 0; i < 100; retArray.push(`image_${++i}.jpg`));
showArray(retArray);
show();


//****************************************************************************
// CodeFlow Übung lev1_7: do while
// Erstelle einen Loop mit do...while.
// Es sollen die Nummern von 1 bis 5 im Dokument ausgeben werden.
show('CodeFlow Übung lev1_7: do while', 'h2');
let count = 1;
do {
    show(`The number is ${count++}`)
} while (count <= 5)
show();


//****************************************************************************
// CodeFlow Übung lev1_8: do while
// Erstelle einen Loop mit do...while.
// Es sollen alle gerade Zahlen bis 20 im Dokument ausgeben werden.
show('CodeFlow Übung lev1_8: do while', 'h2');
show('Even nnumbers less than 20:', 'h3');
count = 1;
do {
    if (count % 2 == 0)
        show(count);
} while (++count < 20)
show();


//****************************************************************************
// CodeFlow Übung lev1_8: do while
