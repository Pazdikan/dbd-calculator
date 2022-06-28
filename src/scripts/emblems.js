const updateEmblemsEvent = new Event('updateEmblems');

let emblemValues = {
    "benevolent": 35,
    "evader": 100,
    "lightbringer": 0,
    "unbroken": 0,
}

document.addEventListener('updateEmblems', function (e) {
    let emblemPoints = 0;
    emblemValues = {
        "benevolent": 35,
        "evader": 100,
        "lightbringer": 0,
        "unbroken": 0,
    }
    document.querySelectorAll('.emblem').forEach(function(item) {
        let currentEmblem = item.id.replace('Emblem', '')
        let currentEmblemObject = document.getElementById(currentEmblem + 'Emblem');

        switch (currentEmblem) {
            case "lightbringer":
                emblemValues.lightbringer += (parseInt(document.getElementById('percentOfRepairedGenerator').value))
                emblemValues.lightbringer += (parseInt(document.getElementById('generatorsCompletedEntireMatch').value) * 5)
                emblemValues.lightbringer += (parseInt(document.getElementById('exitGatesOpened').value) * 15)
                emblemValues.lightbringer += (parseInt(document.getElementById('cleansedDullTotems').value) * 20)
                emblemValues.lightbringer += (parseInt(document.getElementById('cleansedHexTotems').value) * 50)

                if (emblemValues.lightbringer <= 29)
                    item.src = `src/images/lightbringer/0.png`;
                else if (emblemValues.lightbringer >= 30 && emblemValues.lightbringer <= 99)
                    item.src = `src/images/lightbringer/1.png`;
                else if (emblemValues.lightbringer >= 100 && emblemValues.lightbringer <= 189)
                    item.src = `src/images/lightbringer/2.png`;
                else if (emblemValues.lightbringer >= 190 && emblemValues.lightbringer <= 269)
                    item.src = `src/images/lightbringer/3.png`;
                else if (emblemValues.lightbringer >= 270)
                    item.src = `src/images/lightbringer/4.png`;
                break;
            case "unbroken":
                let unbrokenStatus = document.getElementById('unbrokenStatus').value;

                if (unbrokenStatus == "withoutDown")
                    emblemValues.unbroken = 0;
                else if (unbrokenStatus == "withDown")
                    emblemValues.unbroken = 699;
                else if (unbrokenStatus == "5minutes")
                    emblemValues.unbroken = 999;
                else if (unbrokenStatus == "59minutes")
                    emblemValues.unbroken = 899;
                else if (unbrokenStatus == "9minutes")
                    emblemValues.unbroken = 799;


                if (emblemValues.unbroken == 999)
                    item.src = `src/images/unbroken/0.png`;
                else if (emblemValues.unbroken == 899)
                    item.src = `src/images/unbroken/1.png`;
                else if (emblemValues.unbroken == 799)
                    item.src = `src/images/unbroken/2.png`;
                else if (emblemValues.unbroken == 699)
                    item.src = `src/images/unbroken/3.png`;
                else if (emblemValues.unbroken == 0)
                    item.src = `src/images/unbroken/4.png`;
                break;
            case "benevolent":
                emblemValues.benevolent += (parseInt(document.getElementById('unhookedSurvivors').value) * 20)
                emblemValues.benevolent += (parseInt(document.getElementById('healedSurvivors').value) * 10)
                emblemValues.benevolent += (parseInt(document.getElementById('protectionHitsForCarriedSurvivor').value) * 10)
                emblemValues.benevolent += (parseInt(document.getElementById('rescueForKillerGrasp').value) * 30)
                emblemValues.benevolent += (parseInt(document.getElementById('survivorsSavedFromKillerGraspByHookSabotage').value) * 10)


                if (emblemValues.benevolent <= 24)
                    item.src = `src/images/benevolent/0.png`;
                else if (emblemValues.benevolent >= 25 && emblemValues.benevolent <= 44)
                    item.src = `src/images/benevolent/1.png`;
                else if (emblemValues.benevolent >= 45 && emblemValues.benevolent <= 74)
                    item.src = `src/images/benevolent/2.png`;
                else if (emblemValues.benevolent >= 75 && emblemValues.benevolent <= 99)
                    item.src = `src/images/benevolent/3.png`;
                else if (emblemValues.benevolent >= 100)
                    item.src = `src/images/benevolent/4.png`;
                break;
            case "evader":
                emblemValues.evader += (parseInt(document.getElementById('terrorRadius5Meters').value) * 6)
                emblemValues.evader += (parseInt(document.getElementById('palletStuns').value) * 50)
                emblemValues.evader -= (parseInt(document.getElementById('hitsInChase').value) * 10)

                let chaseSeconds = parseInt(document.getElementById('inChaseSeconds').value);
        
                for (let index = 0; index < chaseSeconds; index++) {           
                    if (index <= 14)
                        emblemValues.evader += 1;
                    else if (index >= 15 && index <= 29)
                        emblemValues.evader += 25;
                    else if (index >= 30 && index <= 44)
                        emblemValues.evader += 60;
                    else if (index >= 45 && index <= 59)
                        emblemValues.evader += 125;
                    else if (index >= 60)
                        emblemValues.evader += 250;
                }

                if (emblemValues.evader <= 229)
                    item.src = `src/images/evader/0.png`;
                else if (emblemValues.evader >= 230 && emblemValues.evader <= 379)
                    item.src = `src/images/evader/1.png`;
                else if (emblemValues.evader >= 380 && emblemValues.evader <= 559)
                    item.src = `src/images/evader/2.png`;
                else if (emblemValues.evader >= 560 && emblemValues.evader <= 879)
                    item.src = `src/images/evader/3.png`;
                else if (emblemValues.evader >= 880)
                    item.src = `src/images/evader/4.png`;
                break;
            default:
                break;
        }

        emblemPoints += parseInt(item.attributes.getNamedItem('src').value.replace(`src/images/${item.id.replace("Emblem", "")}/`, '').replace('.png', ''));
    });

    let howManyPips = 0;
    switch (document.getElementById('summaryYourRank').value) {
        case "ashIVI":
            if (emblemPoints >= 0 && emblemPoints <= 8)
                howManyPips = 0;
            else if (emblemPoints >= 9 && emblemPoints <= 13)
                howManyPips = 1;
            else if (emblemPoints >= 14 && emblemPoints <= 16)
                howManyPips = 2;
            break;

        case "bronzeIV":
            if (emblemPoints >= 0 && emblemPoints <= 9)
                howManyPips = 0;
            else if (emblemPoints >= 10 && emblemPoints <= 13)
                howManyPips = 1;
            else if (emblemPoints >= 14 && emblemPoints <= 16)
                howManyPips = 2;
            break;

        case "bronzeIIII":
            if (emblemPoints >= 0 && emblemPoints <= 5)
                howManyPips = -1;
            else if (emblemPoints >= 6 && emblemPoints <= 9)
                howManyPips = 0;
            else if (emblemPoints >= 10 && emblemPoints <= 13)
                howManyPips = 1;
            else if (emblemPoints >= 14 && emblemPoints <= 16)
                howManyPips = 2;
            break;

        case "silverIVI":
            if (emblemPoints >= 0 && emblemPoints <= 6)
                howManyPips = -1;
            else if (emblemPoints >= 7 && emblemPoints <= 9)
                howManyPips = 0;
            else if (emblemPoints >= 10 && emblemPoints <= 13)
                howManyPips = 1;
            else if (emblemPoints >= 14 && emblemPoints <= 16)
                howManyPips = 2;
            break;

        case "goldIVI":
            if (emblemPoints >= 0 && emblemPoints <= 7)
                howManyPips = -1;
            else if (emblemPoints >= 8 && emblemPoints <= 10)
                howManyPips = 0;
            else if (emblemPoints >= 11 && emblemPoints <= 13)
                howManyPips = 1;
            else if (emblemPoints >= 14 && emblemPoints <= 16)
                howManyPips = 2;
            break;

        case "iridescentIVII":
           if (emblemPoints >= 0 && emblemPoints <= 8)
               howManyPips = -1;
           else if (emblemPoints >= 9 && emblemPoints <= 11)
               howManyPips = 0;
           else if (emblemPoints >= 12 && emblemPoints <= 14)
               howManyPips = 1;
           else if (emblemPoints >= 15 && emblemPoints <= 16)
               howManyPips = 2;
           break;

        case "iridescentI":
            if (emblemPoints >= 0 && emblemPoints <= 8)
                howManyPips = -1;
            else if (emblemPoints >= 9 && emblemPoints <= 16)
                howManyPips = 0;
            break;
    
        default:
            break;
    }

    let pipTitle = "";

    if (howManyPips == -1)
        pipTitle = "De-Pip";
    else if (howManyPips == 0)
        pipTitle = "Safety Pip";
    else if (howManyPips == 1)
        pipTitle = "Pip";
    else if (howManyPips == 2)
        pipTitle = "Double Pip";

    document.getElementById("summaryText").innerHTML = `you'll ${howManyPips == -1 ? "lose" : "gain"} ${howManyPips} ${howManyPips == -1 || howManyPips == 1 ? "pip" : "pips"} (${pipTitle})`;
}, false);

document.querySelectorAll("input").forEach(function(item) {
    item.addEventListener("change", function () {
        document.dispatchEvent(updateEmblemsEvent);
    });
});

document.querySelectorAll("select").forEach(function(item) {
    item.addEventListener("change", function () {
        document.dispatchEvent(updateEmblemsEvent);
    });
});
document.dispatchEvent(updateEmblemsEvent);