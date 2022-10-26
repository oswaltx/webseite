if (document.URL.includes("?lang=de")){
    document.getElementById("selection_gallery").innerHTML="Galerie";
    document.getElementById("selection_about").innerHTML="Über mich";
    document.getElementById("back_button").innerHTML="[ Zurück ]";
    document.getElementById("selection_portfolio").setAttribute("href","portfolio.html?lang=de");
    document.getElementById("selection_gallery").setAttribute("href","gallery.html?lang=de");
    document.getElementById("selection_about").setAttribute("href","about.html?lang=de");
}
else{
    console.log("Eng/Nichts")
}


