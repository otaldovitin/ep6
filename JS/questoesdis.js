function showHint(questionNumber) { /*serve para acionar a dica*/
    const hint = document.getElementById(`hint${questionNumber}`);
    hint.style.display = 'block';
}

function checkAnswers() {
    const answer11 = parseFloat(document.getElementById('answer11').value); /*adiciona um valor identificador para acionar uma resposta*/
    const answer12 = parseFloat(document.getElementById('answer12').value); /*adiciona um valor identificador para acionar uma resposta*/
    const answer13 = parseFloat(document.getElementById('answer13').value); /*adiciona um valor identificador para acionar uma resposta*/
    const results = document.getElementById('results');

    const correctAnswers = { /*respostas corretas das questoes*/
        question1: 500, // Resposta correta para a pergunta 1
        question2: 50,  // Resposta correta para a pergunta 2
        question3: 800   // Resposta correta para a pergunta 3
    };

    results.innerHTML = "";

    if (!isNaN(answer11) && answer11 === correctAnswers.question1) { /*resultado para caso a resposta estar correta*/
        results.innerHTML += "Resposta 1: Correta!<br>";
    } else { /*resultado para caso a resposta do usuario nao estar igual a resposta da questao*/
        results.innerHTML += "Resposta 1: Incorreta. A resposta correta de acordo com a fórmula Trabalho = Força x Distância é 500.<br>";
    }

    if (!isNaN(answer12) && answer12 === correctAnswers.question2) { /*resultado para caso a resposta estar correta*/
        results.innerHTML += "Resposta 2: Correta!<br>";
    } else { /*resultado para caso a resposta do usuario nao estar igual a resposta da questao*/
        results.innerHTML += "Resposta 2: Incorreta. A resposta correta com a formula expressa na dica é 50.<br>";
    }

    if (!isNaN(answer13) && answer13 === correctAnswers.question3) { /*resultado para caso a resposta estar correta*/
        results.innerHTML += "Resposta 3: Correta!<br>";
    } else { /*resultado para caso a resposta do usuario nao estar igual a resposta da questao*/
        results.innerHTML += "Resposta 3: Incorreta. A resposta correta com o uso da a Lei de Boyle-Mariotte: P1 * V1 = P2 * V2. é 800.<br>";
    }
}