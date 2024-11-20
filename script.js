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
        "19185866d640382def3c0ca6ddc7888208c800dbc5ae0585b42d17ffdd33f7ed":
        "1bc3c2b1ac96f39c0f8de4445827ad16052a8ade776637d689bacffabe2ae0d5"
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
        "2fba09617d994fd9e6b01b89e8ae4a7b358d5aad23009ba27319aafdfb5c1ed6":
        "9bc3a8dedfd52c9b76a480a24d7d820972c3eb56441e0db154477908cf0d356b"
    };

    var Carine={
        "a6148384c6cef78a12d22dba25888f3e61f5676da21cb0f6feccfa93c77c11c2":
        "7703284bb281befaeda84ddb87698c2d350861c89be1253de8c4a3cc9211219d"
    }

    var Ludovic={
        "dcad0be10fe726f2cb12b73631c40672b43a1bcf95b10ee9a1cff8f526577b3b":
        "53dca517b47057c08d07ea1e87e1543a268985979c322fa53633fcbe56932c47"
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
