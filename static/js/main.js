// =========================
// Initialisation générale
// =========================
document.addEventListener("DOMContentLoaded", () => {
    // ===== Année footer =====
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ===== Theme =====
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');

    if (themeSwitch) {
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-theme');
            themeSwitch.checked = true;
            sun?.classList.add('d-none');
            moon?.classList.remove('d-none');
        }

        themeSwitch.addEventListener('change', () => {
            body.classList.toggle('dark-theme');

            if (body.classList.contains('dark-theme')) {
                sun?.classList.add('d-none');
                moon?.classList.remove('d-none');
                localStorage.setItem('theme', 'dark');
            } else {
                sun?.classList.remove('d-none');
                moon?.classList.add('d-none');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // =========================
    // Challenge 4
    // =========================
    const challenge4 = document.getElementById("challenge4");
    if (challenge4) {
        const flag = challenge4.dataset.flag;
        if (flag) {
            const flagB64 = btoa(flag);
            document.cookie = "challenge_flag=" + flagB64 + "; path=/;";
        }
    }

    // =========================
    // Challenge 5
    // =========================
    const challenge5 = document.getElementById("challenge5");
    if (challenge5) {
        const secretFlag = "FLAG-hb5v3m";
        console.log("🕵️‍♂️ Pour ce challenge, tape getFlag() dans la console !");
        window.getFlag = () => secretFlag;
    }

    // =========================
    // Dashboard : modal succès
    // =========================
    const successMsgEl = document.getElementById("successModalMessage");
    if (successMsgEl) {
        const message = successMsgEl.dataset.success;
        if (message) {
            const modal = new bootstrap.Modal(document.getElementById('successModal'));
            successMsgEl.textContent = message;
            modal.show();
        }
    }
});
