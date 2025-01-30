const dxRating = 12895;

window.addEventListener("load",function() {
    let ratingPlate = document.getElementById("maimai-rating-plate");
    let ratingNumber = document.getElementById("maimai-rating-number");
    let ratingColour = document.getElementById("maimai-rating-colour");

    ratingNumber.innerText = dxRating.toString();

    if (dxRating >= 15000){
        ratingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_rainbow.png\")"
        ratingColour.innerText = "Rainbow";
    } else if (dxRating >= 14500) {
        ratingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_platinum.png\")"
        ratingColour.innerText = "Platinum";
    } else if (dxRating >= 14000) {
        ratingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_gold.png\")"
        ratingColour.innerText = "Gold";
    } else if (dxRating >= 13000) {
        ratingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_silver.png\")"
        ratingColour.innerText = "Silver";
    } else if (dxRating >= 12000) {
        ratingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_bronze.png\")";
        ratingColour.innerText = "Bronze";
    } else if (dxRating >= 10000) {
        ratingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_purple.png\")"
        ratingColour.innerText = "Purple";
    } else if (dxRating >= 7000) {
        ratingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_red.png\")"
        ratingColour.innerText = "Red";
    } else {
        ratingPlate.style.backgroundImage = "url(\"images/maimai/rating_base_blue.png\")"
    }
}, false);