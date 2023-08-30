document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("box");
    const Video = document.getElementById("Video");
    const Finance = document.getElementById("Finance");
    const Development = document.getElementById("Development");
    const Cybersecurity = document.getElementById("Cybersecurity");
    const AllCategories = document.getElementById("AllCategories");

    // Masquer toutes les catégories
    Video.style.display = "none";
    Finance.style.display = "none";
    Development.style.display = "none";
    Cybersecurity.style.display = "none";
    AllCategories.style.display = "none";

    // Afficher la catégorie par défaut (par exemple, "AllCategories")
    AllCategories.style.display = "block";

    // Écouter l'événement de changement de sélection
    box.addEventListener("change", function() {
        // Masquer tous les éléments de contenu
        Video.style.display = "none";
        Finance.style.display = "none";
        Development.style.display = "none";
        Cybersecurity.style.display = "none";
        AllCategories.style.display = "none";

        // Afficher l'élément de contenu approprié en fonction de l'option sélectionnée
        if (box.value === "Video") {
            Video.style.display = "block";
        } else if (box.value === "Finance") {
            Finance.style.display = "block";
        } else if (box.value === "Development") {
            Development.style.display = "block";
        } else if (box.value === "Cybersecurity") {
            Cybersecurity.style.display = "block";
        } else if (box.value === "AllCategories") {
            AllCategories.style.display = "block";
        }        
    });
});