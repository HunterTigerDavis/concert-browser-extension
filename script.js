async function fetchData() {

    // V2:
    // Fetch data from the API
    // example from the API documentation
    // const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/search?city=Austin&types=event%2Cfestival&starts_at=2025-02-06';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': '668921cda6msh339412450eebc0fp1822efjsnf18d0467ce93',
    //         'x-rapidapi-host': 'concerts-artists-events-tracker.p.rapidapi.com'
    //     }
    // };

    // V1:
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Austin&minDate=2025-02-06&maxDate=2025-08-06&page=1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '668921cda6msh339412450eebc0fp1822efjsnf18d0467ce93',
            'x-rapidapi-host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const record = await response.json();
        console.log(record);
        // TODO: read from json file instead of API

        // document.getElementById("concert").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
        // document.getElementById("date").innerHTML = record.data.map(item => `<li>${item.endDate}</li>`).join('');
        document.getElementById("concert").innerHTML = record.data.map(item => `
            <li>
                ${item.name}
                <ul>
                    <li>${item.endDate}</li>
                </ul>
            </li>
        `).join('');
    } catch (error) {
        console.error(error);
    }
}

fetchData();