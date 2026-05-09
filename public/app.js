const API = "http://localhost:3000";

function mostrar(data) {
    document.getElementById("resultado").textContent =
        JSON.stringify(data, null, 2);
}

async function registrar() {
    const datos = {
        nombre: document.getElementById("regNombre").value,
        email: document.getElementById("regEmail").value,
        password: document.getElementById("regPassword").value
    };

    const res = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    });

    const data = await res.json();
    mostrar(data);
}

async function login() {
    const datos = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
    };

    const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    });

    const data = await res.json();

    if (data.token) {
        localStorage.setItem("token", data.token);
    }

    mostrar(data);
}

async function probarPrivado() {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}/api/turnos/privado`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await res.json();
    mostrar(data);
}