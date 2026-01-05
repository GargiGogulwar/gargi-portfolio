function openCert(imagePath) {
    const modal = document.getElementById("certModal");
    const image = document.getElementById("certImage");

    image.src = imagePath;
    modal.style.display = "flex";
}

function closeCert() {
    document.getElementById("certModal").style.display = "none";
}
