function generatePasswords() {
    const length = document.getElementById("pwd-length").value;
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";

    if (!length) {
        return;
    }

    document.querySelectorAll(".pwd__item").forEach((e) => {
        e.classList.add("pwd__item--highlight");
    });

    for (let i = 0; i < 4; i++) {
        password = "";
        for (let j = 0; j < length; j++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        document.getElementById(`pwd__item-${i + 1}`).innerHTML = password;
    }
}

function copyPassword(id) {
    let copyText = document.getElementById(id);
    navigator.clipboard.writeText(copyText.innerHTML);
    alert(`Password ${copyText.innerHTML} was copied to clipboard`);
}

document.getElementById("pwd-length").addEventListener("input", function () {
    const btn = document.getElementById("generate-btn");
    btn.classList.remove("btn-disabled");
    if (this.value < 1) this.value = 1;
    else if (this.value > 20) this.value = 20;
});
