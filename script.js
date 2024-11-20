async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convert buffer to byte array
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex; // Retourne le hachage sous forme de chaîne hexadécimale
}

async function Vérif() {
    var Nino = { 
        "092410c0ac5c60a539cd2b9929538f3ee1c859274974e5a178ecc19b61972163": 
        "54d4330787e25c5eae3d4acfbd6f4a47a99f5c92c379d0a8e0ed4ec717800842"  // Mot de passe haché
    };

    var Jonas ={
        "8baf4203aab298af9537beccebfb28a4b6be77739ec779c5fa920e38c042e480":
        "01b95bb309cc54f8692c082ace54037b963ab675a54e2e115bd40056dbd1566d"
    };

    var Liwen ={
        "0493ba8afa2a9cf8c2cd85b6efdd33c44ece18acb333733959c264963a03a646":
        "8b0ffbb8d5d57b5f215412b26674ed39e5836426b5c6389a4c08260f92354d5f"
    };

    var Satine={
        "7747465aca0e5da7c3037d74613f141898e8cda0c3efb40249e7690e7dfc9b87":
        "fccd4643957994e45d2149b6daff374f5fceb0d4adaeba50e3167a398f4c813a"
    };

    var Jade={
        "e8231cdd4493171db815ec5e147981e3628aef88c94483440bdde3ed01a86fc1":
        "a3eab7842a48d0b1afa2a0610a81c504d4212ff124e3b9f639e82c496e3b0bc1"
    };

    var Maïlys={
        "3df595b89c1108bce9af990d79afadcd6d17192e7a76374b5b3e72e1ac380554":
        "9bc3a8dedfd52c9b76a480a24d7d820972c3eb56441e0db154477908cf0d356b"
    };

    var Carine={
        "a6148384c6cef78a12d22dba25888f3e61f5676da21cb0f6feccfa93c77c11c2":
        "8f7a8fd81f31814ed2a387adeac4e60c320b03b30550e25b8fce6c674b74b7f3"
    }

    var Ludovic={
        "dcad0be10fe726f2cb12b73631c40672b43a1bcf95b10ee9a1cff8f526577b3b":
        "9a1a91c120f2162239e0f94325fb0e687eba11d482b6afc63ef994db048e49fd"
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
    if (Nino[doubleHashedIdentifiant] === doubleHashedPassword) {
        window.location.href = "autorisé.html"; 
    } else if (Jonas[doubleHashedIdentifiant] === doubleHashedPassword) {
        window.location.href = "depotJ.html"; 
    }else if (Liwen[doubleHashedIdentifiant] === doubleHashedPassword) {
        window.location.href = "depotL.html"; 
    }else if (Satine[doubleHashedIdentifiant] === doubleHashedPassword) {
        window.location.href = "depotS.html"; 
    }else if (Jade[doubleHashedIdentifiant] === doubleHashedPassword) {
        window.location.href = "depotJa.html"; 
    }else if (Maïlys[doubleHashedIdentifiant] === doubleHashedPassword) {
        window.location.href = "depotM.html"; 
    }else if (Carine[doubleHashedIdentifiant] === doubleHashedPassword) {
        window.location.href = "depotC.html"; 
    }else if (Ludovic[doubleHashedIdentifiant] === doubleHashedPassword) {
        window.location.href = "depotLu.html"; 
    }else {
        errorMessage.textContent = "Identifiant ou Mot de passe incorrect";
        errorMessage.style.display = "block";
    }
}
