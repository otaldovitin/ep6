function ola_usuario(){
    var nome_usu = prompt("Escreva seu nome:");
    if(nome_usu){
        document.getElementById("nome_usuario").innerHTML = nome_usu;
    }
    else{
        alert("escreva seu nome");
        ola_usuario();
    }
}



// Função para revelar a resposta da pergunta 1
document.getElementById('showAnswer1').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="answer1"]:checked');
    const answer1 = document.getElementById('answer1');

    if (selectedOption && selectedOption.value === 'b') {
        answer1.innerHTML = 'Resposta Correta! Trata-se de um processo endotérmico. ';
        answer1.classList.add('correta');
    } else {
        answer1.innerHTML = 'Resposta Incorreta. Tente novamente.';
        answer1.classList.add('incorreta');
    }
    answer1.style.display = 'block';
});

// Função para revelar a resposta da pergunta 2
document.getElementById('showAnswer2').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="answer2"]:checked');
    const answer2 = document.getElementById('answer2');

    if (selectedOption && selectedOption.value === 'd') {
        answer2.innerHTML = 'Resposta Correta: Quando saímos do banho a água que fica no corpo passa pelo fenômeno de evaporação, ou seja, suas gotículas passam para o estado gasoso. Esse processo ocorre ao absorver calor da pele, um processo endotérmico, gerando a sensação de frio.';
        answer2.classList.add('correta');
    } else {
        answer2.innerHTML = 'Resposta Incorreta. Tente novamente.';
        answer2.classList.add('incorreta');
    }
    answer2.style.display = 'block';
});

// Função para revelar a resposta da pergunta 3
document.getElementById('showAnswer3').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="answer3"]:checked');
    const answer3 = document.getElementById('answer3');

    if (selectedOption && selectedOption.value === 'a') {
        answer3.innerHTML = 'Resposta Correta: De acordo com o ciclo de Carnot, na segunda lei da termodinâmica, nenhuma máquina térmica consegue transformar 100% do calor recebido da sua fonte em trabalho.';
        answer3.classList.add('correta');
    } else {
        answer3.innerHTML = 'Resposta Incorreta. Tente novamente.';
        answer3.classList.add('incorreta');
    }
    answer3.style.display = 'block';
});

// Função para revelar a resposta da pergunta 4
document.getElementById('showAnswer4').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="answer4"]:checked');
    const answer4 = document.getElementById('answer4');

    if (selectedOption && selectedOption.value === 'd') {
        answer4.innerHTML = 'Resposta Correta! ';
        answer4.classList.add('correta');
    } else {
        answer4.innerHTML = 'Resposta Incorreta. Tente novamente.';
        answer4.classList.add('incorreta');
    }
    answer4.style.display = 'block';
});

// Função para revelar a resposta da pergunta 5
document.getElementById('showAnswer5').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="answer5"]:checked');
    const answer5 = document.getElementById('answer5');

    if (selectedOption && selectedOption.value === 'c') {
        answer5.innerHTML = 'Resposta Correta!';
        answer5.classList.add('correta');
    } else {
        answer5.innerHTML = 'Resposta Incorreta. Tente novamente.';
        answer5.classList.add('incorreta');
    }
    answer5.style.display = 'block';
});

// Função para revelar a resposta da pergunta 6
document.getElementById('showAnswer6').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="answer6"]:checked');
    const answer6 = document.getElementById('answer6');

    if (selectedOption && selectedOption.value === 'c') {
        answer6.innerHTML = 'Resposta Correta! ';
        answer6.classList.add('correta');
    } else {
        answer6.innerHTML = 'Resposta Incorreta. Tente novamente.';
        answer6.classList.add('incorreta');
    }
    answer6.style.display = 'block';
});

// Função para revelar a resposta da pergunta 7
document.getElementById('showAnswer7').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="answer7"]:checked');
    const answer7 = document.getElementById('answer7');

    if (selectedOption && selectedOption.value === 'a') {
        answer7.innerHTML = 'Resposta Correta! ';
        answer7.classList.add('correta');
    } else {
        answer7.innerHTML = 'Resposta Incorreta. Tente novamente.';
        answer7.classList.add('incorreta');
    }
    answer5.style.display = 'block';
});

// Função para revelar a resposta da pergunta 8
document.getElementById('showAnswer8').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="answer8"]:checked');
    const answer8 = document.getElementById('answer8');

    if (selectedOption && selectedOption.value === 'b') {
        answer8.innerHTML = 'Resposta Correta: Nas transformações termodinâmicas isotérmicas, a variação da energia interna de um gás é nula. ';
        answer8.classList.add('correta');
    } else {
        answer8.innerHTML = 'Resposta Incorreta. Tente novamente.';
        answer8.classList.add('incorreta');
    }
    answer8.style.display = 'block';
});

// Função para revelar a resposta da pergunta 9
document.getElementById('showAnswer9').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="answer9"]:checked');
    const answer9 = document.getElementById('answer9');

    if (selectedOption && selectedOption.value === 'b') {
        answer9.innerHTML = 'Resposta Correta: O objeto de estudo da terceira lei da termodinâmica é o zero absoluto e sua relação com a grandeza física entropia.';
        answer9.classList.add('correta');
    } else {
        answer9.innerHTML = 'Resposta Incorreta. Tente novamente.';
        answer9.classList.add('incorreta');
    }
    answer9.style.display = 'block';
});

// Função para revelar a resposta da pergunta 10
document.getElementById('showAnswer10').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="answer10"]:checked');
    const answer10 = document.getElementById('answer10');

    if (selectedOption && selectedOption.value === 'd') {
        answer10.innerHTML = 'Resposta Correta!';
        answer10.classList.add('correta');
    } else {
        answer10.innerHTML = 'Resposta Incorreta. Tente novamente.';
        answer10.classList.add('incorreta');
    }
    answer10.style.display = 'block';
});