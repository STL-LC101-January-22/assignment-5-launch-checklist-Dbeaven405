// Write your JavaScript code here!



// const { myFetch, addDestinationInfo } = require("./scriptHelper");

// const { formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {

        let chosenPlanet = pickPlanet(listedPlanets)
        console.log(chosenPlanet);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        addDestinationInfo = addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter,chosenPlanet.star,chosenPlanet.distance,chosenPlanet.moons,chosenPlanet.image)
        console.log(destinationInfo)
    })

    let form = document.querySelector("form")
     let pilotName = document.querySelector("input[name=pilotName]");
     let copilotName = document.querySelector("input[name=copilotName]");
     let fuelLevelAmnt = document.querySelector("input[name=fuelLevel]");
     let cargoMass = document.querySelector("input[name=cargoMass]");
     let listVar = document.querySelector("#faultyItems");
     listVar.style.visibility = "hidden";
     
     form.addEventListener("submit", function(event) {
         let submission = formSubmission(window.document, listVar, pilotName.value, copilotName.value, fuelLevelAmnt.value, cargoMass.value);
         if(!submission) {
             event.preventDefault();
         }
         if(submission) {
             event.preventDefault();
         }
     })
});