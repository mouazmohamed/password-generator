var copyBtn = document.getElementById('copy');
function generate()
{
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()+{}/~=-_\"|'`;:,<>[]µù§?£¤°ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var pwdLength = 16;
    var pwd = "";

    // Générer le mot de passe
    for(let i=0; i<pwdLength; i++)
    {
        let randomNb = Math.random() * chars.length;
        pwd += chars.substring(randomNb, randomNb+1);

        // Afficher le mot de passe
        document.getElementById('pwd').value = pwd;
    }
}

function copy()
{
    var inputPwd = document.getElementById('pwd');

    // Vérifier la longueur du mot de passe
    if(inputPwd.value.length == 16)
    {
        // Copier le mot de passe
        inputPwd.select();
        document.execCommand('copy');

        // Afficher que le mot de passe est copié
        alert("Mot de passe copié !")            
    }
    else
    {
        // Si le mot de passe est inférieur à 16 caractères ou n'a pas été généré
        alert("Veuillez générer un mot de passe");
    }
}