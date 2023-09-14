function CheckMail(){
    if(document.getElementById('Address').value.includes("@")){
        document.getElementById('ContactMessage').innerHTML = "Mail erfolgreich gesendet"
    }
    else{
        document.getElementById('ContactMessage').innerHTML = "ungültige E-Mail Adresse"
    }
}
