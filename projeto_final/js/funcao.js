$(document).ready(function() {
    $("#ok").click(function() {
        $.ajax({
            dataType: 'json',
            url: 'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json',
            method: 'GET',
            success: function(resposta) {
                var produtos = resposta.potions;
                var msg = '';
                // produtos = JSON.parse(produtos);

                // for (let i = 1; i <= 3; i++) {
                //     msg += `${produtos.name}`;
                // }

                for (p in produtos) {
                    msg += `${produtos[p].name}`;
                    console.log('p', p);
                    console.log('msg p', msg[p]);
                }
                var output = document.querySelector('#output');
                output.innerHTML = msg;
                console.log('produtos', produtos);
            },
            error: function(erro) {
                console.log("Erro: " + erro)
            }
        });
    });
});