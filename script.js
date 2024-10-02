// Função para adicionar os valores no display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Função para calcular o resultado
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = "Erro";
    }
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = "";
}

// Função para apagar o último caractere
function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}