function changeBalance() {
    const acc = document.getElementById("acc").value;
    const cash = document.getElementById("cash").value;
    const history = document.getElementById("history");
    history.value += `\nChanged balance: acc=${acc}, cash=${cash}`;
}

function proceed() {
    const action = document.getElementById("action").value;
    let acc = Number(document.getElementById("acc").value);
    let cash = Number(document.getElementById("cash").value);
    const amount = Number(document.getElementById("amount").value);
    const history = document.getElementById("history");

    if (action === "deposit") {
        if (cash >= amount) {
            acc += amount;
            cash -= amount;
            history.value += `\nDeposited ${amount}`;
        } else {
            alert("Not enough cash!");
        }
    } else if (action === "withdraw") {
        if (acc >= amount) {
            acc -= amount;
            cash += amount;
            history.value += `\nWithdrew ${amount}`;
        } else {
            alert("Not enough account balance!");
        }
    }

    document.getElementById("acc").value = acc;
    document.getElementById("cash").value = cash;
    history.value += `\nAccount: ${acc}, Cash: ${cash}`;
}
