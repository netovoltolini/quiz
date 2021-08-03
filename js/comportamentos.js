window.onload = function(){
    eventos();
    tocar_audio('comecar');
    
}

function eventos(){

    /**
     * Jogador clicou no botão começar/reiniciar jogo.
     */

     var nome_jogador = window.prompt("Qual é seu nome?");
    document.getElementById("playquiz").onclick = function(){
        tocar_audio('acertou');


        document.getElementById("play").style.display = " none";

        document.getElementById("pgt1").style.display = "block";
    }

/**
 * Como ver se acertou a questão
 */
var pontuacao = 0;
document.getElementById("frm_pgt1").onsubmit = function(){

    var opcao_correta = "3";
    var opcao_selecionada = this.pgt1.value;


    if(opcao_selecionada == opcao_correta) {
        tocar_audio('acertou');
        document.getElementById("pgt1").style.display = "none";
        pontuacao++;
        document.getElementById("pgt2").style.display = "block";
    } else {
        document.getElementById("pgt1").style.display = "none";
        tocar_audio('errou');
        document.getElementById("pgt2").style.display = "block";
    }

    return false;

    }



document.getElementById("frm_pgt2").onsubmit = function(){

        var opcao_correta = "3";
        var opcao_selecionada = this.pgt2.value;
    
    
        if(opcao_selecionada == opcao_correta) {
            tocar_audio('acertou');
            document.getElementById("pgt2").style.display = "none";
            pontuacao++;

            document.getElementById("pgt3").style.display = "block";
        } else {
            document.getElementById("pgt2").style.display = "none";
            tocar_audio('errou');
            document.getElementById("pgt3").style.display = "block";
        }
    
        return false;
    
        }
// Pergunta 3

        document.getElementById("frm_pgt3").onsubmit = function(){

            var opcao_correta = "2";
            var opcao_selecionada = this.pgt3.value;
        
        
            if(opcao_selecionada == opcao_correta) {
                tocar_audio('acertou');
                document.getElementById("pgt3").style.display = "none";
                pontuacao++;

                document.getElementById("pgt4").style.display = "block";
            } else {
                document.getElementById("pgt3").style.display = "none";
                tocar_audio('errou');
                document.getElementById("pgt4").style.display = "block";
            }
        
            return false;
        
            }
    

 // Pergunta 4

 document.getElementById("frm_pgt4").onsubmit = function(){

    var opcao_correta = "3";
    var opcao_selecionada = this.pgt4.value;


    if(opcao_selecionada == opcao_correta) {
        tocar_audio('acertou');
        document.getElementById("pgt4").style.display = "none";
        pontuacao++;

        document.getElementById("pgt5").style.display = "block";
    } else {
        document.getElementById("pgt4").style.display = "none";
        tocar_audio('errou');
        document.getElementById("pgt5").style.display = "block";
    }

    return false;

    }



    // Pergunta 5

    document.getElementById("frm_pgt5").onsubmit = function(){

        var opcao_correta = "2";
        var opcao_selecionada = this.pgt5.value;
    
    
        if(opcao_selecionada == opcao_correta) {
            tocar_audio('acertou');
            document.getElementById("pgt5").style.display = "none";
            pontuacao++;

            document.getElementById("pgt6").style.display = "block";
        } else {
            document.getElementById("pgt5").style.display = "none";
            tocar_audio('errou');
            document.getElementById("pgt6").style.display = "block";
        }
    
        return false;
    
        }





// Pergunta 6


document.getElementById("frm_pgt6").onsubmit = function(){

    var opcao_correta = "2";
    var opcao_selecionada = this.pgt6.value;


    if(opcao_selecionada == opcao_correta) {
        tocar_audio('acertou');
        document.getElementById("pgt6").style.display = "none";
        pontuacao++;

        document.getElementById("pgt7").style.display = "block";
    } else {
        document.getElementById("pgt6").style.display = "none";
        tocar_audio('errou');
        document.getElementById("pgt7").style.display = "block";
    }

    return false;

    }


// Pergunta 7 
document.getElementById("frm_pgt7").onsubmit = function(){

    var opcao_correta = "1";
    var opcao_selecionada = this.pgt7.value;


    if(opcao_selecionada == opcao_correta) {
        tocar_audio('acertou');
        document.getElementById("pgt7").style.display = "none";
        pontuacao++;

        document.getElementById("pgt8").style.display = "block";
    } else {
        document.getElementById("pgt7").style.display = "none";
        tocar_audio('errou');
        document.getElementById("pgt8").style.display = "block";
    }

    return false;

    }



// pergunta 8

document.getElementById("frm_pgt8").onsubmit = function(){

    var opcao_correta = "2";
    var opcao_selecionada = this.pgt8.value;


    if(opcao_selecionada == opcao_correta) {
        tocar_audio('acertou');
        document.getElementById("pgt8").style.display = "none";
        pontuacao++;

        document.getElementById("pgt9").style.display = "block";
    } else {
        document.getElementById("pgt8").style.display = "none";
        tocar_audio('errou');
        document.getElementById("pgt9").style.display = "block";
    }

    return false;

    }




    // Pergunta 9

    document.getElementById("frm_pgt9").onsubmit = function(){

        var opcao_correta = "1";
        var opcao_selecionada = this.pgt9.value;
    
    
        if(opcao_selecionada == opcao_correta) {
            tocar_audio('acertou');
            document.getElementById("pgt9").style.display = "none";
            pontuacao++;

            document.getElementById("pgt10").style.display = "block";
        } else {
            document.getElementById("pgt9").style.display = "none";
            tocar_audio('errou');
            document.getElementById("pgt10").style.display = "block";
        }
    
        return false;
    
        }



        document.getElementById("frm_pgt10").onsubmit = function(){

            var opcao_correta = "3";
            var opcao_selecionada = this.pgt10.value;
        
        
            if(opcao_selecionada == opcao_correta) {
                tocar_audio('acertou');
                document.getElementById("pgt10").style.display = "block";
                pontuacao++;
                pontuacao= pontuacao;
                
                
            } else {
                document.getElementById("pgt10").style.display = "none";
                tocar_audio('errou');
                
            }
        
            if(pontuacao<3){
                alert(nome_jogador+" Voce acertou "+pontuacao+" pontos, foi ruim, estude mais! nota I");
            }

            else if(pontuacao>5 && pontuacao<7){
                alert(nome_jogador+" Voce acertou "+pontuacao+" pontos, foi rasoável, Nota r!");
            }

            else if(pontuacao>7 && pontuacao<10){
                alert(nome_jogador+" Voce acertou "+pontuacao+" pontos, FOI BEM, Nota B!!");
                
            }

            else if(pontuacao == 10){
                alert(nome_jogador+"Voce acertou "+pontuacao+" pontos, ACERTOU TUDO, Nota MB!!");
                
            }


            return false;
        


        }

        


    function reinicia_jogo(){
        document.getElementById("play").style.display = "block";
        document.getElementById("playquiz").innerHTML = "Jogar novamente";

    }
	
	
	
	

	
	function tocar_audio(qual_tocar)  {

            var audio = document.getElementById('quiz');

            switch(qual_tocar) {
                
                

                case 'acertou':
                audio.src="audio/palmas.mp3";
                break;

                

                case 'errou':
                audio.src="audio/vaia.mp3";
                break;

               

                

            }
            audio.play();
        }

    }
