document.addEventListener("DOMContentLoaded", function () {
    const shareLink = document.getElementById("shareLink");

    shareLink.addEventListener("click", function (event) {
        event.preventDefault();

        const customShareUrl = "https://damien-codes.github.io/Portfolio/index.html";
        const shareTitle = document.title;

        if (navigator.share) {
            navigator.share({
                title: shareTitle,
                url: customShareUrl
            })
            .then(() => console.log("Partage réussi"))
            .catch((error) => console.error("Erreur lors du partage :", error));
        } else {
            console.log("Partage non pris en charge par ce navigateur.");
        }
    });
});
