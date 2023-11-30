let conteneurFilms = document.getElementById("liste-films");
let templateCard = document.getElementById("modele-card");
const vitesseCaroussel = 1000;


async function afficherFilms() {
    const reponse = await fetch("./data/moovies.json");
    const films = await reponse.json();
    let i = 0;
    films.forEach(filmObject => {
        let newCard =  templateCard.cloneNode(true);
        newCard.id = "card-"+i;

        newCard.style.backgroundImage = `url('${filmObject.Poster}')`;

        newCard.querySelector(".film-titre").innerHTML = filmObject.Title;
        newCard.querySelector(".film-release").innerHTML = filmObject.Released;
        newCard.querySelector(".film-duree").innerHTML = filmObject.Runtime;
        newCard.querySelector(".film-genre").innerHTML = filmObject.Genre;
        newCard.querySelector(".film-directeur").innerHTML = filmObject.Director;
        newCard.querySelector(".film-acteurs").innerHTML = filmObject.Actors;
        newCard.querySelector(".film-syno").innerHTML = filmObject.Plot;
        newCard.querySelector(".film-langue").innerHTML = filmObject.Language;
        newCard.querySelector(".film-pays").innerHTML = filmObject.Title;
        newCard.querySelector(".film-awards").innerHTML = filmObject.Awards;
        newCard.querySelector(".film-metascore").innerHTML = filmObject.Metascore;
        newCard.querySelector(".film-imdb").innerHTML = filmObject.imdbRating;
        newCard.querySelector(".film-type").innerHTML = filmObject.Type;

        let idImg = 0;
        if(filmObject.Images != undefined && filmObject.Images != ""){
            filmObject.Images.forEach(imgFilm => {
                let img = document.createElement("img");
                img.src = imgFilm;
                if(idImg===0){
                    img.classList.add("show");
                }
                else{
                    img.classList.add("hidden");
                }
                img.dataset.pos = idImg;

                newCard.querySelector(".film-apercu").appendChild(img);

                idImg++;
            });

            //ON CREE LE CAROUSEL
            let apercu = newCard.querySelector(".film-apercu");
            setTimeout(function(){ carrousel(apercu) }, vitesseCaroussel);
        }
        conteneurFilms.appendChild(newCard);
        i++;
    });
}
function carrousel(conteneurImages){
    let imgs = conteneurImages.children;
    let swtch = false;

    for(let i = 0; i < imgs.length; i++){
        let imgC = imgs[i];
        if(imgC.classList.contains("show")){
            imgC.classList.toggle("show");
            imgC.classList.toggle("hidden");
            swtch=i+1;
            //console.log("Je toggle l'image", swtch)
        }
    }
    //console.log("sortie de boucle, swtch=", swtch)
    if(swtch === imgs.length){
        imgs[0].classList.toggle("show");
        imgs[0].classList.toggle("hidden");
    }
    else{

        imgs[swtch].classList.toggle("show");
        imgs[swtch].classList.toggle("hidden");
    }
    if(swtch){
        setTimeout(function(){ carrousel(conteneurImages) }, vitesseCaroussel);
    }
}
afficherFilms();





/////////////BOOTSTRAP ELEMENTS


let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);
  
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

