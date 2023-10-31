// Funções de calculo para cada pergunta
function calculateWork(questionNumber) { // Calculadora
    const force = parseFloat(document.getElementById(`force${questionNumber}`).value);
    const distance = parseFloat(document.getElementById(`distance${questionNumber}`).value);
    const work = force * distance;

    //Resultado das questões
    const resultDiv = document.getElementById
        (`calcWorkResult${questionNumber}`);
    if (work === 500) { // Resposta correta
        resultDiv.innerHTML = `Resposta ${questionNumber} (Calculada): ${work} J - Correta!`;
        resultDiv.style.color = "green";
    } else { // Reposta errada
        resultDiv.innerHTML = `Resposta ${questionNumber} (Calculada): ${work} J - Incorreta! A resposta correta de acordo com a fórmula Trabalho = Força x Distância é 500.`;
        resultDiv.style.color = "red";
    }
}

function calculateEfficiency(questionNumber) { //Calculadora
    const workUtil = parseFloat(document.getElementById(`workUtil${questionNumber}`).value);
    const heatIn = parseFloat(document.getElementById(`heatIn${questionNumber}`).value);
    const efficiency = (workUtil / heatIn) * 100;

    const resultDiv = document.getElementById(`calcEfficiencyResult${questionNumber}`);
    if (efficiency.toFixed(2) === "50.00") { //Resposta correta
        resultDiv.innerHTML = `Resposta ${questionNumber} (Calculada): ${efficiency.toFixed(2)}% - Correta!`;
        resultDiv.style.color = "green";
    } else { // Reposta errada
        resultDiv.innerHTML = `Resposta ${questionNumber} (Calculada): ${efficiency.toFixed(2)}% - Incorreta! A resposta correta com a formula expressa na dica é 50%.`;
        resultDiv.style.color = "red";
    }
}

function calculatePressure(questionNumber) {
    const initialVolume = parseFloat(document.getElementById(`initialVolume${questionNumber}`).value);
    const finalVolume = parseFloat(document.getElementById(`finalVolume${questionNumber}`).value);
    const initialPressure = parseFloat(document.getElementById(`initialPressure${questionNumber}`).value);
    const finalPressure = (initialPressure * initialVolume) / finalVolume;

    const resultDiv = document.getElementById(`calcPressureResult${questionNumber}`);
    if (finalPressure === 800) { //Resposta correta
        resultDiv.innerHTML = `Resposta ${questionNumber} (Calculada): ${finalPressure} kPa - Correta!`;
        resultDiv.style.color = "green";
    } else { // Reposta errada
        resultDiv.innerHTML = `Resposta ${questionNumber} (Calculada): ${finalPressure} kPa - Incorreta! A resposta correta com o uso da a Lei de Boyle-Mariotte: P1 * V1 = P2 * V2. é 800.`;
        resultDiv.style.color = "red";
    }
}