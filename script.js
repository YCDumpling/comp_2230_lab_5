

let catFactsData = [];
let totalCatFactCount = 1// Default value selected;

// 2. Promises with Then/Catch // modded by your previous code
const getTestAsyncFunction = new Promise((resolve, reject) => {
    const condition = true;

    if (condition) {
        resolve("Promise is resolved successfully!");
    } else {
        reject("Promise is rejected!");
    }
});

getTestAsyncFunction
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


    // Fetch Cat Breeds
async function fetchCatBreeds() {
    try{
        const response = await fetch('https://catfact.ninja/breeds');

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error fetching cat data.')
        }
    } catch (error) {
        console.error(error);
    }
}




// 3. Dropdown Value Retrival
function getSelectedNumberOfFactsDropdownValue() {
    const dropdown = document.getElementById('factCount');
    totalCatFactCount = dropdown.options[dropdown.selectedIndex].value;
    //console.log(totalCatFactCount)
}


async function displayCatFacts() {
    let facts = []
    for (let i = 0; i< totalCatFactCount; i++){
        let randomIndex = Math.round(Math.random() * catFactsData.length);
        let fact = '- Breed: ' + catFactsData[randomIndex].breed 
        + ', Country: ' + catFactsData[randomIndex].country 
        + ', Origin: ' + catFactsData[randomIndex].origin 
        + ', Coat: ' + catFactsData[randomIndex].coat 
        + ', Pattern: ' + catFactsData[randomIndex].pattern;
        facts.push(fact);
    }
    
    // Concatenate the facts together - this will help display the facts together
    let displayFactsBody = facts.join('\n');
    alert('Cat Facts:' + '\n' + displayFactsBody);

}




window.onload = function() {

    // Populate cat facts/data:
    fetchCatBreeds().then((data) => {
        data.data.forEach((cat) => {
            let breed = cat.breed;
            let country = cat.country;
            let origin = cat.origin;
            let coat = cat.coat;
            let pattern = cat.pattern;
    
            catFactsData.push({ breed, country, origin, coat, pattern }); 
        })
        //console.log(catFactsData);
    });
    
    
    const dropdown = document.getElementById('factCount');
    dropdown.addEventListener('change', getSelectedNumberOfFactsDropdownValue);
}
