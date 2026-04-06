// =========================
// Fonctions Password
// =========================

// Fonction pour afficher ou cacher le mot de passe
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        input.type = input.type === "password" ? "text" : "password";
    }
}

// Fonction pour vérifier la force du mot de passe
function initPasswordStrength(inputId, helpId) {
    const passwordInput = document.getElementById(inputId);
    const help = document.getElementById(helpId);

    if (!passwordInput || !help) return;

    passwordInput.addEventListener("input", () => {
        const value = passwordInput.value;

        const checks = {
            length: value.length >= 8 && value.length <= 64,
            lowercase: /[a-z]/.test(value),
            uppercase: /[A-Z]/.test(value),
            digit: /\d/.test(value),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(value)
        };

        const messages = [];

        if (!checks.length) messages.push("❌ Entre 8 et 64 caractères");
        if (!checks.lowercase) messages.push("❌ Au moins une minuscule");
        if (!checks.uppercase) messages.push("❌ Au moins une majuscule");
        if (!checks.digit) messages.push("❌ Au moins un chiffre");
        if (!checks.special) messages.push("❌ Au moins un caractère spécial");

        if (messages.length === 0) {
            help.textContent = "Mot de passe valide ✅";
            help.style.color = "green";
        } else {
            help.innerHTML = messages.join("<br>");
            help.style.color = "red";
        }
    });
}

// =========================
// Login
// =========================
function initLogin() {
    const btn = document.getElementById("toggleLoginPassword");
    if (btn) {
        btn.addEventListener("click", () => togglePassword("loginPassword"));
    }
}

// =========================
// Register
// =========================
function initRegister() {
    initPasswordStrength("password", "passwordHelp");

    const btn = document.getElementById("togglePassword");
    if (btn) {
        btn.addEventListener("click", () => togglePassword("password"));
    }
}

// =========================
// Reset Password
// =========================
function initResetPassword() {
    initPasswordStrength("password", "passwordHelp");

    const btn = document.getElementById("togglePassword");
    if (btn) {
        btn.addEventListener("click", () => togglePassword("password"));
    }
}


    // =========================
    // Register / Password strength
    // =========================
    const registerPassword = document.getElementById("password");
    if (registerPassword) {
        initRegister();
    }

    // =========================
    // Login
    // =========================
    const loginPassword = document.getElementById("loginPassword");
    if (loginPassword) {
        initLogin();
    }

    // =========================
    // Reset password
    // =========================
    const resetPassword = document.getElementById("password"); 
    if (resetPassword && document.querySelector('form[action*="reset_password"]')) {
        initResetPassword();
    }