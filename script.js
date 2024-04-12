const properties = [
    {
        name: "Cozy Cottage",
        location: "Gisborne",
        price: "$200,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?cozy+cottage"
    },
    {
        name: "Modern Loft",
        location: "Bay Of Plenty",
        price: "$350,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?modern+loft"
    },
    {
        name: "Seaside Villa",
        location: "Northland",
        price: "$1,000,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://source.unsplash.com/category/house/?seaside+villa"
    },
    {
        name: "Rustic Cabin",
        location: "Marlborough",
        price: "$150,000",
        bedrooms: 1,
        bathrooms: 1,
        image: "https://source.unsplash.com/category/house/?rustic+cabin"
    },
    {
        name: "Urban Apartment",
        location: "Wellington",
        price: "$500,000",
        bedrooms: 2,
        bathrooms: 1.5,
        image: "https://source.unsplash.com/category/house/?urban+apartment"
    },
    // Add more properties with random information here...
    {
        name: "Luxury Penthouse",
        location: "Nelson",
        price: "$2,200,000",
        bedrooms: 4,
        bathrooms: 3.5,
        image: "https://source.unsplash.com/category/house/?luxury+penthouse"
    },
    {
        name: "Beachfront Villa",
        location: "Bay Of Plenty",
        price: "$1,800,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?beachfront+villa"
    },
    {
        name: "Countryside Estate",
        location: "Canterbury",
        price: "$1,600,000",
        bedrooms: 6,
        bathrooms: 5,
        image: "https://source.unsplash.com/category/house/?countryside+estate"
    },
    {
        name: "Downtown Condo",
        location: "Auckland",
        price: "$700,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?downtown+condo"
    },
    {
        name: "Mountain Chalet",
        location: "Otago",
        price: "$900,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?mountain+chalet"
    },
    {
        name: "Luxury Penthouse",
        location: "Nelson",
        price: "$2,200,000",
        bedrooms: 4,
        bathrooms: 3.5,
        image: "https://source.unsplash.com/category/house/?luxury+penthouse"
    },
    {
        name: "Beachfront Villa",
        location: "Bay Of Plenty",
        price: "$1,800,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?beachfront+villa"
    },
    {
        name: "Countryside Estate",
        location: "Canterbury",
        price: "$1,600,000",
        bedrooms: 6,
        bathrooms: 5,
        image: "https://source.unsplash.com/category/house/?countryside+estate"
    },
    {
        name: "Downtown Condo",
        location: "Auckland",
        price: "$700,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?downtown+condo"
    },
    {
        name: "Mountain Chalet",
        location: "Otago",
        price: "$900,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?mountain+chalet"
    },
    {
        name: "Sunny Bungalow",
        location: "Hawkes Bay",
        price: "$280,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?sunny+bungalow"
    },
    {
        name: "Oceanview Condo",
        location: "West Coast",
        price: "$420,000",
        bedrooms: 2,
        bathrooms: 1.5,
        image: "https://source.unsplash.com/category/house/?oceanview+condo"
    },
    {
        name: "Country Farmhouse",
        location: "Manawatu",
        price: "$550,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://source.unsplash.com/category/house/?country+farmhouse"
    },
    {
        name: "City Penthouse",
        location: "Taranaki",
        price: "$1,200,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?city+penthouse"
    },
    {
        name: "Lakeside Retreat",
        location: "Waikato",
        price: "$780,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?lakeside+retreat"
    },
    {
        name: "Riverside Mansion",
        location: "Southland",
        price: "$3,500,000",
        bedrooms: 6,
        bathrooms: 5,
        image: "https://source.unsplash.com/category/house/?riverside+mansion"
    },
    {
        name: "Country Cottage",
        location: "Nelson",
        price: "$320,000",
        bedrooms: 2,
        bathrooms: 1,
        image: "https://source.unsplash.com/category/house/?country+cottage"
    },
    {
        name: "Garden Villa",
        location: "Marlborough",
        price: "$880,000",
        bedrooms: 4,
        bathrooms: 3.5,
        image: "https://source.unsplash.com/category/house/?garden+villa"
    },
    {
        name: "Downtown Loft",
        location: "Auckland",
        price: "$670,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?downtown+loft"
    },
    {
        name: "Rural Retreat",
        location: "Canterbury",
        price: "$460,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?rural+retreat"
    },
    {
        name: "Oceanfront Retreat",
        location: "Waikato",
        price: "$780,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?oceanfront+retreat"
    },
    {
        name: "Countryside Cabin",
        location: "West Coast",
        price: "$320,000",
        bedrooms: 2,
        bathrooms: 1,
        image: "https://source.unsplash.com/category/house/?countryside+cabin"
    },
    {
        name: "Downtown Penthouse",
        location: "Auckland",
        price: "$1,200,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://source.unsplash.com/category/house/?downtown+penthouse"
    },
    {
        name: "Lakeview Cottage",
        location: "Taranaki",
        price: "$450,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?lakeview+cottage"
    },
    {
        name: "Rural Farmhouse",
        location: "Canterbury",
        price: "$580,000",
        bedrooms: 4,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?rural+farmhouse"
    },
    {
        name: "Beachside Bungalow",
        location: "Bay Of Plenty",
        price: "$650,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?beachside+bungalow"
    },
    {
        name: "Cityscape Apartment",
        location: "Wellington",
        price: "$400,000",
        bedrooms: 1,
        bathrooms: 1,
        image: "https://source.unsplash.com/category/house/?cityscape+apartment"
    },
    {
        name: "Mountain View Chalet",
        location: "Otago",
        price: "$890,000",
        bedrooms: 4,
        bathrooms: 3.5,
        image: "https://source.unsplash.com/category/house/?mountain+view+chalet"
    },
    {
        name: "Lakeside Lodge",
        location: "Nelson",
        price: "$1,100,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?lakeside+lodge"
    },
    {
        name: "Vineyard Estate",
        location: "Marlborough",
        price: "$2,800,000",
        bedrooms: 6,
        bathrooms: 5,
        image: "https://source.unsplash.com/category/house/?vineyard+estate"
    },
    {
        name: "Ski Chalet",
        location: "Canterbury",
        price: "$1,350,000",
        bedrooms: 5,
        bathrooms: 4.5,
        image: "https://source.unsplash.com/category/house/?ski+chalet"
    },
    {
        name: "Beachfront Mansion",
        location: "Bay Of Plenty",
        price: "$3,500,000",
        bedrooms: 7,
        bathrooms: 6,
        image: "https://source.unsplash.com/category/house/?beachfront+mansion"
    },
    {
        name: "Riverside Cottage",
        location: "Northland",
        price: "$280,000",
        bedrooms: 2,
        bathrooms: 1,
        image: "https://source.unsplash.com/category/house/?riverside+cottage"
    },
    {
        name: "Downtown Townhouse",
        location: "Auckland",
        price: "$850,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?downtown+townhouse"
    },
    {
        name: "Country Manor",
        location: "Taranaki",
        price: "$1,900,000",
        bedrooms: 8,
        bathrooms: 7,
        image: "https://source.unsplash.com/category/house/?country+manor"
    },
    {
        name: "City Skyline Apartment",
        location: "Wellington",
        price: "$600,000",
        bedrooms: 2,
        bathrooms: 1.5,
        image: "https://source.unsplash.com/category/house/?city+skyline+apartment"
    },
    {
        name: "Hilltop Retreat",
        location: "Nelson",
        price: "$1,650,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://source.unsplash.com/category/house/?hilltop+retreat"
    },
    {
        name: "Countryside Cottage",
        location: "Marlborough",
        price: "$380,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?countryside+cottage"
    },
    {
        name: "Lakefront Cabin",
        location: "Waikato",
        price: "$320,000",
        bedrooms: 2,
        bathrooms: 1,
        image: "https://source.unsplash.com/category/house/?lakefront+cabin"
    },
    {
        name: "Harborview Apartment",
        location: "Northland",
        price: "$550,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?harborview+apartment"
    },
    {
        name: "Riverfront Retreat",
        location: "Canterbury",
        price: "$1,200,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?riverfront+retreat"
    },
    {
        name: "Suburban Villa",
        location: "Hawkes Bay",
        price: "$750,000",
        bedrooms: 4,
        bathrooms: 3.5,
        image: "https://source.unsplash.com/category/house/?suburban+villa"
    },
    {
        name: "Cottage by the Sea",
        location: "Bay Of Plenty",
        price: "$420,000",
        bedrooms: 2,
        bathrooms: 1,
        image: "https://source.unsplash.com/category/house/?cottage+by+the+sea"
    },
    {
        name: "Highrise Condo",
        location: "Auckland",
        price: "$950,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?highrise+condo"
    },
    {
        name: "Rural Retreat",
        location: "Southland",
        price: "$500,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?rural+retreat"
    },
    {
        name: "Forest Cabin",
        location: "Taranaki",
        price: "$280,000",
        bedrooms: 1,
        bathrooms: 1,
        image: "https://source.unsplash.com/category/house/?forest+cabin"
    },
    {
        name: "Beach House",
        location: "Bay Of Plenty",
        price: "$1,100,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://source.unsplash.com/category/house/?beach+house"
    },
    {
        name: "Lakefront Lodge",
        location: "Waikato",
        price: "$850,000",
        bedrooms: 4,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?lakefront+lodge"
    },
    {
        name: "Urban Loft",
        location: "Wellington",
        price: "$670,000",
        bedrooms: 2,
        bathrooms: 1.5,
        image: "https://source.unsplash.com/category/house/?urban+loft"
    }
];

// Get input elements:
const locationFilter = document.getElementById("location");
const bedroomsFilter = document.getElementById("bedrooms");
const bathroomsFilter = document.getElementById("bathrooms");
const priceMin = document.getElementById("priceMin");
const priceMax = document.getElementById("priceMax");

// Next do an onchage event for each input:
locationFilter.addEventListener("change", function() {
    console.dir(locationFilter.value);// check you can get the value and its correct when changed
    filterAndPopulateResults();
});

bathroomsFilter.addEventListener("change", function() {
    console.dir(bathroomsFilter.value);
    filterAndPopulateResults();
});

bedroomsFilter.addEventListener("change", function() {
    console.dir(bedroomsFilter.value);
    filterAndPopulateResults();
});

priceMin.addEventListener("change", function() {
    console.dir(priceMin.value);
    filterAndPopulateResults();
});

priceMax.addEventListener("change", function() {
    console.dir(priceMax.value);
    filterAndPopulateResults();
});

// Define filterAndPopulateResults function
function filterAndPopulateResults() {
    const filteredProperties = filterProperties();
    const sortedProperties = sortPropertiesByPrice(filteredProperties); // New line to sort properties
    populateResults(sortedProperties);
}

// Create a function to sort properties by price
function sortPropertiesByPrice(properties) {
    // Sort the properties array by price from lowest to highest
    return properties.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/\$/g, '').replace(/,/g, ''));
        const priceB = parseFloat(b.price.replace(/\$/g, '').replace(/,/g, ''));
        return priceA - priceB;
    });
}

// Initial population of results
filterAndPopulateResults();

// Create the filter function:
function filterProperties() {
    const filteredProperties = properties.filter(property => {
        // Check if location matches
        const propertyLocation = property.location.toLowerCase();
        const filterValue = locationFilter.value.toLowerCase();
        if (filterValue && !propertyLocation.includes(filterValue)) {
            return false;
        }
        // Check if number of bedrooms matches
        if (bedroomsFilter.value && parseInt(property.bedrooms) <= parseInt(bedroomsFilter.value)) {
            return false;
        }
        // Check if number of bathrooms matches
        if (bathroomsFilter.value && parseFloat(property.bathrooms) <= parseFloat(bathroomsFilter.value)) {
            return false;
        }
        // Check if price falls within the specified range
        const priceValue = parseFloat(property.price.replace(/\$/g, '').replace(/,/g, '')); // remove $ or , from the price
        const minPrice = parseFloat(priceMin.value);
        const maxPrice = parseFloat(priceMax.value);
        if ((minPrice && priceValue < minPrice) || (maxPrice && priceValue > maxPrice)) {
            return false;
        }
        // If all conditions pass, include the property in the filtered list
        return true;
    });

    // Return the filtered properties array
    return filteredProperties;
}


function populateResults(filteredResults) {
    const resultsDiv = document.getElementById("results");
    // Clear previous results
    resultsDiv.innerHTML = "";

    if (filteredResults.length === 0) {
        // If filteredResults is empty, display a message
        resultsDiv.innerHTML = `<p class="no-results">No Results found</p>`;
    } else {
        // If filteredResults is not empty, populate with property cards
        filteredResults.forEach(property => {
            // Create HTML string for property card
            const propertyCardHTML = `
            <div class="property">
                <div class="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide"><img src="${property.image}" alt="" class="property-image"></div>
                    <div class="swiper-slide"><img src="${property.image}" alt="" class="property-image"></div>
                    <div class="swiper-slide"><img src="${property.image}" alt="" class="property-image"></div>
                    </div>

                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
                
                </div>
                <div class="property-details">
                    <h2>${property.name}</h2>
                    <p>${property.location}</p>
                    <div class="more-details">
                        <div class="property-amenities">
                            <p>${property.bedrooms} <i class="fa-solid fa-bed"></i></p>
                            <p>${property.bathrooms} <i class="fa-solid fa-bath"></i></p>
                        </div>
                        <h4>${property.price}</h4>
                    </div>
                </div>
            </div>
            `;
            // Append property card HTML to results div
            resultsDiv.innerHTML += propertyCardHTML;
            attachClickToImages();
        });
    }
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Enable clickable pagination bullets
    },
});


function attachClickToImages() {
    const images = document.querySelectorAll('.property-image');
    const detailsModal = document.getElementById('details-modal');

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function(e) {
            console.log("image clicked");
            detailsModal.showModal();
            closeDetailsModal()
        })
    }
}

function closeDetailsModal() {
    const close = document.getElementById('close-modal');
    const detailsModal = document.getElementById('details-modal');
    close.addEventListener('click', function() {
        detailsModal.close()
    });
}

