function ola_usuario() {
    var nome_usu = prompt("Escreva seu nome:"); /*gera um prompt a ser preenchido com o nome do usuario*/
    if (nome_usu) { /*apresenta o nome selecionado ao lado da pagina*/
        document.getElementById("nome_usuario").innerHTML = nome_usu;
    }
    else { /*opçao caso o usuario nao escrever nada*/
        alert("escreva seu nome");
        ola_usuario();
    }
}



// Função para revelar a resposta da pergunta 1
document.getElementById('showAnswer1').addEventListener('click', function () { /*identificador adicionado para o botao de revelar resposta, para convocar a resposta da questao*/
    const selectedOption = document.querySelector('input[name="answer1"]:checked');
    const answer1 = document.getElementById('answer1'); /*gera um nome a qual sera usado de identificador para apresentar a resposta*/

    if (selectedOption && selectedOption.value === 'b') { /*se a opçao selecionada for b entao uma mensagem sera apresentada*/
        answer1.innerHTML = 'Resposta Correta! Trata-se de um processo endotérmico. ';
        answer1.classList.add('correta');
    } else { /*se a opçao selecionada for a errada entao uma outra mensagem ira aparecer*/
        answer1.innerHTML = 'Resposta Incorreta. Apenas uma das alternativas trata-se realmente de um processo endotermico, lembre-se que um processo endotermico absorve energia.';
        answer1.classList.add('incorreta');
    }
    answer1.style.display = 'block';
});


// Função para revelar a resposta da pergunta 2
document.getElementById('showAnswer2').addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="answer2"]:checked');
    const answer2 = document.getElementById('answer2'); /*gera um nome a qual sera usado de identificador para apresentar a resposta*/

    if (selectedOption && selectedOption.value === 'd') { /*se a opçao selecionada for d entao uma mensagem sera apresentada*/
        answer2.innerHTML = 'Resposta Correta: Quando saímos do banho a água que fica no corpo passa pelo fenômeno de evaporação, ou seja, suas gotículas passam para o estado gasoso. Esse processo ocorre ao absorver calor da pele, um processo endotérmico, gerando a sensação de frio.';
        answer2.classList.add('correta');
    } else { /*se a opçao selecionada for a errada entao uma outra mensagem ira aparecer*/
        answer2.innerHTML = 'Resposta Incorreta. Lembre-se que ao sair do banho a agua em nosso corpo costuma sumir, isso é causado por que tipo de fenômeno?.';
        answer2.classList.add('incorreta');
    }
    answer2.style.display = 'block';
});

// Função para revelar a resposta da pergunta 3
document.getElementById('showAnswer3').addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="answer3"]:checked');
    const answer3 = document.getElementById('answer3'); /*gera um nome a qual sera usado de identificador para apresentar a resposta*/

    if (selectedOption && selectedOption.value === 'a') { /*se a opçao selecionada for a entao uma mensagem sera apresentada*/
        answer3.innerHTML = 'Resposta Correta: De acordo com o ciclo de Carnot, na segunda lei da termodinâmica, nenhuma máquina térmica consegue transformar 100% do calor recebido da sua fonte em trabalho.';
        answer3.classList.add('correta');
    } else { /*se a opçao selecionada for a errada entao uma outra mensagem ira aparecer*/
        answer3.innerHTML = 'Resposta Incorreta. Relembre-se da segunda lei da termodinâmica, e o que diz o ciclo de Carnot, nenhuma máquina térmica consegue transformar 100% do calor recebido da sua fonte em trabalho.';
        answer3.classList.add('incorreta');
    }
    answer3.style.display = 'block';
});


// Função para revelar a resposta da pergunta 4
document.getElementById('showAnswer4').addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="answer4"]:checked');
    const answer4 = document.getElementById('answer4'); /*gera um nome a qual sera usado de identificador para apresentar a resposta*/

    if (selectedOption && selectedOption.value === 'd') { /*se a opçao selecionada for d entao uma mensagem sera apresentada*/
        answer4.innerHTML = 'Resposta Correta! ';
        answer4.classList.add('correta');
    } else { /*se a opçao selecionada for a errada entao uma outra mensagem ira aparecer*/
        answer4.innerHTML = 'Resposta Incorreta. Tente novamente usando a fórmula de variação de temperatura em graus Celsius para Fahrenheit.';
        answer4.classList.add('incorreta');
    }
    answer4.style.display = 'block';
});

// Função para revelar a resposta da pergunta 5
document.getElementById('showAnswer5').addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="answer5"]:checked');
    const answer5 = document.getElementById('answer5'); /*gera um nome a qual sera usado de identificador para apresentar a resposta*/

    if (selectedOption && selectedOption.value === 'c') { /*se a opçao selecionada for c entao uma mensagem sera apresentada*/
        answer5.innerHTML = 'Resposta Correta!';
        answer5.classList.add('correta');
    } else { /*se a opçao selecionada for a errada entao uma outra mensagem ira aparecer*/
        answer5.innerHTML = 'Resposta Incorreta. É importante lembrar que a energia interna de um gás pode ser calculada pelo produto entre o número de mols, calor específico molar a volume constante e variação da temperatura.';
        answer5.classList.add('incorreta');
    }
    answer5.style.display = 'block';
});


// Função para revelar a resposta da pergunta 6
document.getElementById('showAnswer6').addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="answer6"]:checked');
    const answer6 = document.getElementById('answer6'); /*gera um nome a qual sera usado de identificador para apresentar a resposta*/

    if (selectedOption && selectedOption.value === 'c') { /*se a opçao selecionada for c entao uma mensagem sera apresentada*/
        answer6.innerHTML = 'Resposta Correta! O cálculo está correto! ';
        answer6.classList.add('correta');
    } else { /*se a opçao selecionada for a errada entao uma outra mensagem ira aparecer*/
        answer6.innerHTML = 'Resposta Incorreta. Para responder é necessário uma simples conta matemática, para se calcular os 18% de 1200K.';
        answer6.classList.add('incorreta');
    }
    answer6.style.display = 'block';
});

// Função para revelar a resposta da pergunta 7
document.getElementById('showAnswer7').addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="answer7"]:checked');
    const answer7 = document.getElementById('answer7'); /*gera um nome a qual sera usado de identificador para apresentar a resposta*/

    if (selectedOption && selectedOption.value === 'a') { /*se a opçao selecionada for a entao uma mensagem sera apresentada*/
        answer7.innerHTML = 'Resposta Correta! ';
        answer7.classList.add('correta');
    } else { /*se a opçao selecionada for a errada entao uma outra mensagem ira aparecer*/
        answer7.innerHTML = 'Resposta Incorreta. Basta Calcular de Celsius para Kelvin os dados presentes na questão.';
        answer7.classList.add('incorreta');
    }
    answer5.style.display = 'block';
});

// Função para revelar a resposta da pergunta 8
document.getElementById('showAnswer8').addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="answer8"]:checked');
    const answer8 = document.getElementById('answer8'); /*gera um nome a qual sera usado de identificador para apresentar a resposta*/

    if (selectedOption && selectedOption.value === 'b') { /*se a opçao selecionada for b entao uma mensagem sera apresentada*/
        answer8.innerHTML = 'Resposta Correta: Nas transformações termodinâmicas isotérmicas, a variação da energia interna de um gás é nula. ';
        answer8.classList.add('correta');
    } else { /*se a opçao selecionada for a errada entao uma outra mensagem ira aparecer*/
        answer8.innerHTML = 'Resposta Incorreta. Procure a alternativa que mais está de acordo com a lógica e o conhecimento do usuário fornecido pela página.';
        answer8.classList.add('incorreta');
    }
    answer8.style.display = 'block';
});

// Função para revelar a resposta da pergunta 9
document.getElementById('showAnswer9').addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="answer9"]:checked');
    const answer9 = document.getElementById('answer9'); /*gera um nome a qual sera usado de identificador para apresentar a resposta*/

    if (selectedOption && selectedOption.value === 'b') { /*se a opçao selecionada for b entao uma mensagem sera apresentada*/
        answer9.innerHTML = 'Resposta Correta: O objeto de estudo da terceira lei da termodinâmica é o zero absoluto e sua relação com a grandeza física entropia.';
        answer9.classList.add('correta');
    } else { /*se a opçao selecionada for a errada entao uma outra mensagem ira aparecer*/
        answer9.innerHTML = 'Resposta Incorreta. Leia novamente as informações presentes na página, pois o objeto de estudo da terceira lei está diretamente ligada com a ausência de calor.';
        answer9.classList.add('incorreta');
    }
    answer9.style.display = 'block';
});


// Função para revelar a resposta da pergunta 10
document.getElementById('showAnswer10').addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="answer10"]:checked');
    const answer10 = document.getElementById('answer10'); /*gera um nome a qual sera usado de identificador para apresentar a resposta*/

    if (selectedOption && selectedOption.value === 'd') { /*se a opçao selecionada for d entao uma mensagem sera apresentada*/
        answer10.innerHTML = 'Resposta Correta!';
        answer10.classList.add('correta');
    } else { /*se a opçao selecionada for a errada entao uma outra mensagem ira aparecer*/
        answer10.innerHTML = 'Resposta Incorreta. Basta calcular usando a formula da segunda lei da termodinâmica.';
        answer10.classList.add('incorreta');
    }
    answer10.style.display = 'block';
});