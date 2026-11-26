// Pour ne pas afficher le bouton retour au haut de la page lorsque l'on est déjà en haut de la page
let backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
}

// Flèches de navigation des captures d'écran pour l'étude de cas

// MyAnimeList
let imgMal = document.getElementById("img-mal");
let nextMal = document.getElementById("next-mal");
let prevMal = document.getElementById("prev-mal");

if (imgMal && nextMal && prevMal) {
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
}

// AniList
let imgAnilist = document.getElementById("img-anilist");
let nextAnilist = document.getElementById("next-anilist");
let prevAnilist = document.getElementById("prev-anilist");

if (imgAnilist && nextAnilist && prevAnilist) {
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
}

// slider de la refonte (3 vues)
let imgRefonte = document.getElementById("img-refonte");
let nextRefonte = document.getElementById("next-refonte");
let prevRefonte = document.getElementById("prev-refonte");
let etapeRefonte = 1;

if (imgRefonte && nextRefonte && prevRefonte) {
    nextRefonte.onclick = function () {
        if (etapeRefonte === 1) {
            imgRefonte.src = "photos_webp/mal_refonte2.webp";
            imgRefonte.alt = "Milieu de la maquette présentant les rubriques Most Popular Anime, Fall 2026 Anime et Most Popular Manga limitées à six affiches homogènes.";
            prevRefonte.style.display = "flex";
            etapeRefonte = 2;
        } else if (etapeRefonte === 2) {
            imgRefonte.src = "photos_webp/mal_refonte3.webp";
            imgRefonte.alt = "Bas de la maquette affichant les sections Latest News et Latest Reviews transformées en cartes visuelles aérées.";
            nextRefonte.style.display = "none";
            prevRefonte.focus();
            etapeRefonte = 3;
        }
    };

    prevRefonte.onclick = function () {
        if (etapeRefonte === 3) {
            imgRefonte.src = "photos_webp/mal_refonte2.webp";
            imgRefonte.alt = "Milieu de la maquette présentant les rubriques Most Popular Anime, Fall 2026 Anime et Most Popular Manga limitées à six affiches homogènes.";
            nextRefonte.style.display = "flex";
            etapeRefonte = 2;
        } else if (etapeRefonte === 2) {
            imgRefonte.src = "photos_webp/mal_refonte1.webp";
            imgRefonte.alt = "Haut de la maquette de refonte de MyAnimeList avec la barre de recherche remontée, le menu simplifié, une bannière publicitaire unique et le bloc présentant les fonctionnalités.";
            prevRefonte.style.display = "none";
            nextRefonte.focus();
            etapeRefonte = 1;
        }
    };
}