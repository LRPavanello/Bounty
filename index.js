let accountName = null;
let balance = 0;

const accountNameInput = document.getElementById("account-name");
const amountInput = document.getElementById("amount");
const balanceDisplay = document.getElementById("balance");
const messageDisplay = document.getElementById("message");

function deposit() {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        messageDisplay.textContent = "Valor de depósito inválido.";
    } else {
        balance += amount;
        updateBalance();
        messageDisplay.textContent = "Depósito bem-sucedido.";
    }
    clearInputs();
}

function withdraw() {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        messageDisplay.textContent = "Valor de retirada inválido.";
    } else if (amount > balance) {
        messageDisplay.textContent = "Fundos insuficientes.";
    } else {
        balance -= amount;
        updateBalance();
        messageDisplay.textContent = "Retirada bem-sucedida.";
    }
    clearInputs();
}

function checkBalance() {
    updateBalance();
    messageDisplay.textContent = "";
}

function updateBalance() {
    balanceDisplay.textContent = `Saldo: $${balance.toFixed(2)}`;
}

function clearInputs() {
    amountInput.value = "";
}
