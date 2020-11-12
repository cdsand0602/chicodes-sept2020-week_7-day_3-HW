function getJson() {
    //let season = document.querySelector('#season').value;
   // let round = document.querySelector('#round').value;

    fetch(`https://ergast.com/api/f1/2018/5/driverStandings.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // Create HTML element and place givenName on page
       /* let givenName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName
        let given_name_text = document.createElement('td')
        given_name_text.innerHTML = givenName
        document.querySelector(given_name_text).append()

        // Place familyName on page
        let familyName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName
        let familyName_text = document.querySelector('#familyName')
        familyName_text.innerHTML = familyName
        document.body.append(familyName_text) */

        // Get first 3 constructors for F1 Cars
        for (let i=0; i<3; i++) {
            let constructors_name = data.MRData.StandingsTable.StandingLists[i].DriverStandings[i].Constructors[i].name
            let display_constructors = document.createElement('h1')
            display_constructors.innerHTML = constructors_name
            document.body.append(display_constructors)
        } 
        // Load table
        for (let i=0; i<8; i++) {
            let position = data.MRData.StandingsTable.StandingLists[i].DriverStandings[i].position
            let display_position = document.createElement('td')
            display_position.innerHTML = position
            document.querySelector(display_position).append.row
            let givenName = data.MRData.StandingsTable.StandingsLists[i].DriverStandings[i].Driver[i].givenName
            let given_name_text = document.createElement('td')
            given_name_text.innerHTML = givenName
            document.querySelector(given_name_text).append.row
            let familyName = data.MRData.StandingsTable.StandingsLists[i].DriverStandings[i].Driver[i].familyName
            let familyName_text = document.createElement('td')
            familyName_text.innerHTML = familyName
            document.querySelector(familyName_text).append.row
            let nationality = data.MRData.StandingsTable.StandingsLists[i].DriverStandings[i].Driver[i].nationality
            let nationality_text = document.createElement('td')
            nationality_text.innerHTML = nationality
            document.querySelector(nationality_text).append.row
            let constructors_name = data.MRData.StandingsTable.StandingLists[i].DriverStandings[i].constructors
            let display_constructors = document.createElement('td')
            display_constructors.innerHTML = constructors_name
            document.querySelector(display_constructors).append.row
            let points = data.MRData.StandingsTable.StandingLists[i].DriverStandings[i].points
            let display_points = document.createElement('td')
            display_points.innerHTML = points
            document.querySelector(display_points).append.row
        }

    })  
   getJson() 
}