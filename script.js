async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convert buffer to byte array
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex; // Retourne le hachage sous forme de chaîne hexadécimale
}



async function Vérif() {
    var vI = { "Admin": "8c8c11fb1189d882425d9bb229024689a601ba4b13a1e614d4303e15a578bb2c" };
    var identifiant = document.getElementById('i').value;
    var motDePasse = document.getElementById('mdp').value;
    var hashedPassword = await hashPassword(motDePasse);
    var errorMessage = document.getElementById('error-message');

    if (vI[identifiant] === hashedPassword) {
        window.location.href = "autorisé.html"; 
    } else {
        errorMessage.textContent = "Identifiant ou Mot de passe incorrect"; // Affiche le message d'erreur
        errorMessage.style.display = "block"; // Affiche le message d'erreur
    }
}
