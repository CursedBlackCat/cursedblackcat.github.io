const peakDxRating = 14644;
const currentDxRating = 14476;

window.addEventListener("load",function() {
    let peakRatingPlate = document.getElementById("maimai-peak-rating-plate");
    let peakRatingNumber = document.getElementById("maimai-peak-rating-number");
    let peakRatingColour = document.getElementById("maimai-peak-rating-colour");
    let currentRatingPlate = document.getElementById("maimai-current-rating-plate");
    let currentRatingNumber = document.getElementById("maimai-current-rating-number");
    let currentRatingColour = document.getElementById("maimai-current-rating-colour");

    peakRatingNumber.innerText = peakDxRating.toString();

    if (peakDxRating >= 15000){
        peakRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_rainbow.png\")"
        peakRatingColour.innerText = "Rainbow";
    } else if (peakDxRating >= 14500) {
        peakRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_platinum.png\")"
        peakRatingColour.innerText = "Platinum";
    } else if (peakDxRating >= 14000) {
        peakRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_gold.png\")"
        peakRatingColour.innerText = "Gold";
    } else if (peakDxRating >= 13000) {
        peakRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_silver.png\")"
        peakRatingColour.innerText = "Silver";
    } else if (peakDxRating >= 12000) {
        peakRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_bronze.png\")";
        peakRatingColour.innerText = "Bronze";
    } else if (peakDxRating >= 10000) {
        peakRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_purple.png\")"
        peakRatingColour.innerText = "Purple";
    } else if (peakDxRating >= 7000) {
        peakRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_red.png\")"
        peakRatingColour.innerText = "Red";
    } else {
        peakRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_blue.png\")"
    }

    currentRatingNumber.innerText = currentDxRating.toString();

    if (currentDxRating >= 15000){
        currentRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_rainbow.png\")"
        currentRatingColour.innerText = "Rainbow";
    } else if (currentDxRating >= 14500) {
        currentRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_platinum.png\")"
        currentRatingColour.innerText = "Platinum";
    } else if (currentDxRating >= 14000) {
        currentRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_gold.png\")"
        currentRatingColour.innerText = "Gold";
    } else if (peakDxRating >= 13000) {
        currentRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_silver.png\")"
        currentRatingColour.innerText = "Silver";
    } else if (currentDxRating >= 12000) {
        currentRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_bronze.png\")";
        currentRatingColour.innerText = "Bronze";
    } else if (currentDxRating >= 10000) {
        currentRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_purple.png\")"
        currentRatingColour.innerText = "Purple";
    } else if (currentDxRating >= 7000) {
        currentRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_red.png\")"
        currentRatingColour.innerText = "Red";
    } else {
        currentRatingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_blue.png\")"
    }

}, false);
