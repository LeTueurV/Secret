async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convert buffer to byte array
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex; // Retourne le hachage sous forme de chaîne hexadécimale
}

async function Vérif() {
    var vI = { 
        "6a7777b75458adf9a824414623537e137d8442f314dc6dc5e711e5e9329aa748": 
        "8c8c11fb1189d882425d9bb229024689a601ba4b13a1e614d4303e15a578bb2c"  // Mot de passe haché
    };

    var identifiant = document.getElementById('i').value;
    var motDePasse = document.getElementById('mdp').value;
    var errorMessage = document.getElementById('error-message');

    // Hacher l'identifiant et le mot de passe entrés
    var hashedIdentifiant = await hashPassword(identifiant);
    var hashedPassword = await hashPassword(motDePasse);

    // Vérification des identifiants hachés
    if (vI[hashedIdentifiant] === hashedPassword) {
        window.location.href = "autorisé.html"; 
    } else {
        errorMessage.textContent = "Identifiant ou Mot de passe incorrect";
        errorMessage.style.display = "block";
    }
}
