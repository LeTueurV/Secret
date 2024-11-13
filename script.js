function Vérif()
{
    var vI={"Admin" : "MDP"};
    var identifiant = document.getElementById('i').value; 
    var motDePasse = document.getElementById('mdp').value;
    if (vI[identifiant] === motDePasse) {
        window.location.href = "autorisé.html"; 
    } else {
        alert("Identifiant ou Mot de passe incorrect");
    }
}