vlrMedia = 0

function mediaVetores(vetVetor) {
    for (var i = 0; i < vetVetor.length; i++) {
        vlrMedia += vetVetor[i];
        
    }
    vlrMedia = vlrMedia/vetVetor.length;
    return vlrMedia;
}

var vetorTeste = [6,7,8,9]

var vlrMedia = mediaVetores(vetorTeste);

console.log(vlrMedia);