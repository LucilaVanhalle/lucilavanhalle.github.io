// MyAnimeList
let imgMal = document.getElementById("img-mal");
let nextMal = document.getElementById("next-mal");
let prevMal = document.getElementById("prev-mal");

nextMal.onclick = function () {
    imgMal.src = "photos_webp/scroll_accueil_mal.webp";
    nextMal.style.display = "none";
    prevMal.style.display = "flex";
    prevMal.focus();
};

prevMal.onclick = function () {
    imgMal.src = "photos_webp/accueil_mal.webp";
    prevMal.style.display = "none";
    nextMal.style.display = "flex";
    nextMal.focus();
};

// AniList
let imgAnilist = document.getElementById("img-anilist");
let nextAnilist = document.getElementById("next-anilist");
let prevAnilist = document.getElementById("prev-anilist");

nextAnilist.onclick = function () {
    imgAnilist.src = "photos_webp/scroll_accueil_anilist.webp";
    nextAnilist.style.display = "none";
    prevAnilist.style.display = "flex";
    prevAnilist.focus();
};

prevAnilist.onclick = function () {
    imgAnilist.src = "photos_webp/accueil_anilist.webp";
    prevAnilist.style.display = "none";
    nextAnilist.style.display = "flex";
    nextAnilist.focus();
};