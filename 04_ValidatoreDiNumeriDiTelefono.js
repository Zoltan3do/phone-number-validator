/*
Restituisce true se la stringa passata ha il formato di un numero di telefono US valido.

L'utente può compilare il campo modulo in qualsiasi modo scelga a condizione che abbia il formato di un numero US valido. Di seguito sono riportati esempi di formati validi per i numeri degli Stati Uniti (fare riferimento ai test di seguito per altre varianti):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

Per questa sfida ti verrà presentata una stringa come 800-692-7753 o 8oo-six427676;laskdjf. Il tuo compito è quello di convalidare o rifiutare il numero di telefono degli Stati Uniti in base a qualsiasi combinazione dei formati forniti sopra. Il codice di area è obbligatorio. Se viene fornito il codice paese, è necessario confermare che il codice sia 1. Restituisci true se la stringa è un numero di telefono US valido; altrimenti restituisci false.
*/

function telephoneCheck(str) {
    let case1 = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    let case2 = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
    let case3 = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
    let case4 = /^[0-9]{3} [0-9]{3} [0-9]{4}$/;
    let case5 = /^[0-9]{3}[0-9]{3}[0-9]{4}$/;
    let case11 = /^1[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    let case22 = /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
    let case33 = /^1\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
    let case44 = /^1[0-9]{3} [0-9]{3} [0-9]{4}$/;
    let case55 = /^1[0-9]{3}[0-9]{3}[0-9]{4}$/;
    let case111 = /^1 [0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    let case222 = /^1 \([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
    let case333 = /^1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
    let case444 = /^1 [0-9]{3} [0-9]{3} [0-9]{4}$/;
    let case555 = /^1 [0-9]{3}[0-9]{3}[0-9]{4}$/;
    let casi = [];
    casi.push(case1);
    casi.push(case2);
    casi.push(case3);
    casi.push(case4);
    casi.push(case5);
    casi.push(case11);
    casi.push(case22);
    casi.push(case33);
    casi.push(case44);
    casi.push(case55);
    casi.push(case111);
    casi.push(case222);
    casi.push(case333);
    casi.push(case444);
    casi.push(case555);

    for(let caso of casi){
        if(caso.test(str)){
            return true;
        }
    }

    return false;
}

console.log(telephoneCheck("555-555-5555"));
// Validatore di numeri di telefono
