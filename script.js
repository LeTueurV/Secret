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
        "75def24ddeb1701d8b9eca88e00db2053c69d72035f739f8779a89beb79fef7a": 
        "54d4330787e25c5eae3d4acfbd6f4a47a99f5c92c379d0a8e0ed4ec717800842"  // Mot de passe haché
    };

    var identifiant = document.getElementById('i').value;
    var motDePasse = document.getElementById('mdp').value;
    var errorMessage = document.getElementById('error-message');

    // Hacher l'identifiant et le mot de passe une première fois
    var hashedIdentifiant = await hashPassword(identifiant);
    var hashedPassword = await hashPassword(motDePasse);

    // Hacher de nouveau les résultats obtenus
    var doubleHashedIdentifiant = await hashPassword(hashedIdentifiant);
    var doubleHashedPassword = await hashPassword(hashedPassword);

    // Vérification des identifiants hachés deux fois
    if (vI[doubleHashedIdentifiant] === doubleHashedPassword) {
        window.location.href = "autorisé.html"; 
    } else {
        errorMessage.textContent = "Identifiant ou Mot de passe incorrect";
        errorMessage.style.display = "block";
    }
}
