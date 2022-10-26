if (document.URL.includes("?lang=de")){
    document.getElementById("title").innerHTML="Über mich";
    document.getElementById("about_text").innerHTML="Hallo, Ich bin David Oswalt, 18 Jahre alt und komme aus Berlin. Das hier ist meine Webseite. Für weitere Fragen können Sie mir gerne eine Mail schreiben:";

document.getElementById("navHome").setAttribute("href", "index.html?lang=de");
document.getElementById("navHome").innerHTML="Startseite";


document.getElementById("navPortfolio").setAttribute("href", "portfolio.html?lang=de");


document.getElementById("navGallery").setAttribute("href", "gallery.html?lang=de");
document.getElementById("navGallery").innerHTML="Galerie";

document.getElementById("navAbout").setAttribute("href", "about.html?lang=de");
document.getElementById("navAbout").innerHTML="Über mich";
}