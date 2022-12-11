let body = document.querySelector('body');
let a = 0;
//Fonction récursive
function test() {
    let result = document.createElement('div');
    result.innerHTML = "Résultat: " + a;
    body.append(result);
    if(a < 20) {
        a += 2
        test();
    }
}

test();