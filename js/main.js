const hotelsData = [
    { id: 1, name: "Lumina Paris", city: "Paris", price: 450, owner: "Jean-Pierre", email: "paris@lumina.com", lat: 48.8566, lng: 2.3522, guests: "1-2", stay: "3-14 nights" },
    { id: 2, name: "Lumina Dubai", city: "Dubai", price: 650, owner: "Ahmed Al-Farsi", email: "dubai@lumina.com", lat: 25.2048, lng: 55.2708, guests: "1-4", stay: "1-30 nights" },
    { id: 3, name: "Lumina Tokyo", city: "Tokyo", price: 550, owner: "Yuki Tanaka", email: "tokyo@lumina.com", lat: 35.6762, lng: 139.6503, guests: "1-2", stay: "2-10 nights" },
    { id: 4, name: "Lumina New York", city: "New York", price: 750, owner: "Sarah Jenkins", email: "ny@lumina.com", lat: 40.7128, lng: -74.0060, guests: "1-4", stay: "1-7 nights" },
    { id: 5, name: "Lumina London", city: "London", price: 480, owner: "William Rose", email: "london@lumina.com", lat: 51.5074, lng: -0.1278, guests: "1-2", stay: "1-14 nights" },
    { id: 6, name: "Lumina Rome", city: "Rome", price: 420, owner: "Marco Rossi", email: "rome@lumina.com", lat: 41.9028, lng: 12.4964, guests: "1-3", stay: "2-14 nights" },
    { id: 7, name: "Lumina Santorini", city: "Santorini", price: 800, owner: "Eleni Papadakis", email: "greece@lumina.com", lat: 36.3932, lng: 25.4615, guests: "1-2", stay: "3-7 nights" },
    { id: 8, name: "Lumina Maldives", city: "Maldives", price: 1200, owner: "Ibrahim Naseer", email: "maldives@lumina.com", lat: 3.2028, lng: 73.2207, guests: "1-4", stay: "4-14 nights" },
    { id: 9, name: "Lumina Singapore", city: "Singapore", price: 500, owner: "Lee Wei", email: "sg@lumina.com", lat: 1.3521, lng: 103.8198, guests: "1-2", stay: "1-10 nights" },
    { id: 10, name: "Lumina Bali", city: "Bali", price: 350, owner: "Wayan Putra", email: "bali@lumina.com", lat: -8.3405, lng: 115.0920, guests: "1-6", stay: "3-30 nights" },
    { id: 11, name: "Lumina Swiss", city: "Zermatt", price: 900, owner: "Hans Weber", email: "swiss@lumina.com", lat: 46.0207, lng: 7.7491, guests: "1-4", stay: "5-14 nights" },
    { id: 12, name: "Lumina Sydney", city: "Sydney", price: 460, owner: "Jack Thompson", email: "sydney@lumina.com", lat: -33.8688, lng: 151.2093, guests: "1-2", stay: "2-14 nights" },
    { id: 13, name: "Lumina Barcelona", city: "Barcelona", price: 380, owner: "Elena Gomez", email: "spain@lumina.com", lat: 41.3851, lng: 2.1734, guests: "1-2", stay: "2-7 nights" },
    { id: 14, name: "Lumina Cape Town", city: "Cape Town", price: 320, owner: "David Mbeki", email: "sa@lumina.com", lat: -33.9249, lng: 18.4241, guests: "1-4", stay: "3-14 nights" },
    { id: 15, name: "Lumina Kyoto", city: "Kyoto", price: 600, owner: "Kenji Sato", email: "kyoto@lumina.com", lat: 35.0116, lng: 135.7681, guests: "1-2", stay: "2-10 nights" },
    { id: 16, name: "Lumina Vegas", city: "Las Vegas", price: 550, owner: "Robert King", email: "vegas@lumina.com", lat: 36.1699, lng: -115.1398, guests: "1-4", stay: "1-5 nights" },
    { id: 17, name: "Lumina Berlin", city: "Berlin", price: 290, owner: "Stefan Muller", email: "berlin@lumina.com", lat: 52.5200, lng: 13.4050, guests: "1-2", stay: "1-7 nights" },
    { id: 18, name: "Lumina Mumbai", city: "Mumbai", price: 310, owner: "Rajesh Sharma", email: "mumbai@lumina.com", lat: 19.0760, lng: 72.8777, guests: "1-4", stay: "1-14 nights" },
    { id: 19, name: "Lumina Rio", city: "Rio de Janeiro", price: 400, owner: "Thiago Silva", email: "rio@lumina.com", lat: -22.9068, lng: -43.1729, guests: "1-4", stay: "3-14 nights" },
    { id: 20, name: "Lumina Moscow", city: "Moscow", price: 410, owner: "Ivan Petrov", email: "moscow@lumina.com", lat: 55.7558, lng: 37.6173, guests: "1-2", stay: "1-14 nights" }
];

const toursData = [
    {
        id: 1,
        city: "Paris",
        package: "The Romantic Capital",
        price: 250,
        driver: "Marc Dupont",
        rating: 4.8,
        viewpoints: [
            { name: "Eiffel Tower", type: "Landmark" },
            { name: "Louvre Museum", type: "Culture" },
            { name: "Seine River", type: "Waterfront" }
        ],
        lat: 48.8584,
        lng: 2.2945
    },
    {
        id: 2,
        city: "Dubai",
        package: "Desert & Skyscrapers",
        price: 400,
        driver: "Zaid Khan",
        rating: 4.9,
        viewpoints: [
            { name: "Burj Khalifa", type: "Skyscraper" },
            { name: "Palm Jumeirah", type: "Beach" },
            { name: "Jumeirah Mosque", type: "Religious" }
        ],
        lat: 25.1972,
        lng: 55.2744
    },
    {
        id: 3,
        city: "Tokyo",
        package: "Zen & Neon",
        price: 350,
        driver: "Hiroshi Imai",
        rating: 5.0,
        viewpoints: [
            { name: "Mount Fuji", type: "Mountain" },
            { name: "Senso-ji Temple", type: "Temple" },
            { name: "Shibuya Crossing", type: "Cityscape" }
        ],
        lat: 35.6895,
        lng: 139.6917
    },
    {
        id: 4,
        city: "New York",
        package: "The Concrete Jungle",
        price: 450,
        driver: "John Smith",
        rating: 4.7,
        viewpoints: [
            { name: "Central Park", type: "Park" },
            { name: "Empire State Building", type: "Landmark" },
            { name: "Liberty Island", type: "Island" }
        ],
        lat: 40.7128,
        lng: -74.0060
    }
];

// Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.padding = '0.8rem 5%';
            nav.style.background = 'white';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            nav.style.padding = '1.5rem 5%';
            nav.style.background = 'rgba(255, 255, 255, 0.9)';
            nav.style.boxShadow = 'none';
        }
    }
});

// Render Hotels
function renderHotels(filter = '') {
    const container = document.getElementById('hotels-grid');
    if (!container) return;

    container.innerHTML = '';
    const filteredHotels = hotelsData.filter(h =>
        h.city.toLowerCase().includes(filter.toLowerCase()) ||
        h.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredHotels.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="assets/hotels_grid.png" alt="${hotel.name}">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                <h3 style="font-size: 1.1rem; color: var(--secondary);">${hotel.name}</h3>
                <span style="color: var(--secondary); font-weight: 700;">$${hotel.price}</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted);"><i class="fas fa-map-marker-alt"></i> ${hotel.city}</p>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin: 0.5rem 0; display:flex; gap:1rem;">
                <span><i class="fas fa-users"></i> ${hotel.guests} Guests</span>
                <span><i class="fas fa-clock"></i> ${hotel.stay} Stay</span>
            </div>
            <button class="btn-primary" onclick="showHotelDetails(${hotel.id})" style="margin-top: 1rem; width:100%;">View Details</button>
        `;
        container.appendChild(card);
    });
}

// Render Tours
function renderTours(filter = '') {
    const container = document.getElementById('tours-grid');
    if (!container) return;

    container.innerHTML = '';
    const filteredTours = toursData.filter(t =>
        t.city.toLowerCase().includes(filter.toLowerCase()) ||
        t.package.toLowerCase().includes(filter.toLowerCase())
    );

    filteredTours.forEach(tour => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="assets/tour.png" alt="${tour.city}">
            <h3 style="color: var(--secondary);">${tour.city} Experience</h3>
            <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><i class="fas fa-suitcase"></i> ${tour.package}</p>
            <p style="color: var(--secondary); font-weight: 700; margin-bottom: 1rem;">$${tour.price} / All-Inclusive</p>
            <button class="btn-primary" onclick="showTourDetails(${tour.id})" style="width:100%;">View Details</button>
        `;
        container.appendChild(card);
    });
}

// Show Hotel Details
window.showHotelDetails = function (id) {
    const hotel = hotelsData.find(h => h.id === id);
    const modal = document.getElementById('hotel-modal');
    const modalBody = document.getElementById('modal-body');
    const googleMapsUrl = `https://www.google.com/maps/@${hotel.lat},${hotel.lng},15z`;

    modalBody.innerHTML = `
        <div style="padding: 2rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <div>
                     <img src="assets/hotels_grid.png" style="width: 100%; border-radius: 12px; margin-bottom: 1rem;">
                     <div style="background: var(--accent); padding: 1.5rem; border-radius: 15px;">
                        <h4>Contact Owner</h4>
                        <p><i class="fas fa-user"></i> ${hotel.owner}</p>
                        <p><i class="fas fa-envelope"></i> ${hotel.email}</p>
                     </div>
                </div>
                <div>
                    <h2 style="color: var(--secondary);">${hotel.name}</h2>
                    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Located in the beautiful city of ${hotel.city}. Discover luxury redefined.</p>
                    
                    <div style="margin-bottom: 1.5rem; display:flex; gap:2rem;">
                        <span><strong>Capacity:</strong> ${hotel.guests} Guests</span>
                        <span><strong>Duration:</strong> ${hotel.stay}</span>
                    </div>

                    <h3>Location</h3>
                    <p style="font-size: 0.9rem; margin-bottom: 1rem;">Coordinates: ${hotel.lat}, ${hotel.lng}</p>
                    <div style="height: 200px; background-size: cover; border-radius: 12px; display:flex; align-items:center; justify-content:center; color: var(--secondary); border: 2px dashed var(--secondary);">
                         <a href="${googleMapsUrl}" target="_blank" style="text-decoration:none; color:inherit; text-align:center;">
                            <i class="fas fa-map-marked-alt" style="font-size: 3rem;"></i>
                            <p style="margin-top:0.5rem;">Open Google Maps</p>
                         </a>
                    </div>
                    <button class="btn-primary" style="margin-top: 2rem; width:100%;">Book Nightly @ $${hotel.price}</button>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Show Tour Details
window.showTourDetails = function (id) {
    const tour = toursData.find(t => t.id === id);
    const modal = document.getElementById('tour-modal');
    const modalBody = document.getElementById('tour-modal-body');
    const mapUrl = `https://www.google.com/maps/@${tour.lat},${tour.lng},13z`;

    modalBody.innerHTML = `
        <div class="modal-body">
            <h2 style="color: var(--secondary); margin-bottom: 0.5rem;">${tour.city} Full Day Tour</h2>
            <p style="color: var(--text-muted);">${tour.package} Package</p>
            
            <div class="tour-details-grid" style="margin-top: 2rem;">
                <div>
                    <h3>Nearest Points of Interest</h3>
                    <div class="viewpoint-list">
                        ${tour.viewpoints.map(vp => `
                            <div class="viewpoint-item">
                                <i class="fas ${vp.type === 'Mountain' ? 'fa-mountain' : vp.type === 'Beach' ? 'fa-umbrella-beach' : vp.type === 'Temple' ? 'fa-place-of-worship' : 'fa-landmark'}" style="color: var(--secondary);"></i>
                                <span>${vp.name} (${vp.type})</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div>
                    <h3>Luxury Transport</h3>
                    <div class="car-badge">
                        <img src="assets/car.png" class="car-img">
                        <div>
                            <h4 style="margin:0;">Chauffeur Detail</h4>
                            <p style="margin:0; font-size: 0.9rem;">Driver: ${tour.driver}</p>
                            <div style="color: #ecc94b;">
                                <i class="fas fa-star"></i> ${tour.rating} Rating
                            </div>
                        </div>
                    </div>
                    
                    <h3>Route Map</h3>
                    <div style="height: 150px; background: var(--accent); border-radius: 12px; margin-top: 1rem; display:flex; align-items:center; justify-content:center; border: 2px dashed var(--secondary);">
                         <a href="${mapUrl}" target="_blank" style="text-decoration:none; color:var(--secondary); text-align:center;">
                            <i class="fas fa-route" style="font-size: 2rem;"></i>
                            <p>View Route on Maps</p>
                         </a>
                    </div>
                </div>
            </div>
            
            <button class="btn-primary" style="margin-top: 2.5rem; width: 100%; font-size: 1.1rem;">Confirm Package - $${tour.price}</button>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

window.closeModal = function () {
    document.getElementById('hotel-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.closeTourModal = function () {
    document.getElementById('tour-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// User Greeting Logic
function checkGreeting() {
    const user = localStorage.getItem('lumina_user');
    const greetingDiv = document.getElementById('user-greeting');
    if (user && greetingDiv) {
        greetingDiv.innerHTML = `<h2 style="color: var(--secondary); margin-bottom: 0.5rem;">Hello, ${user}!</h2>`;
    }
}

// Service Booking
window.bookService = function (serviceName) {
    alert(`Your ${serviceName} service has been requested. Our concierge will contact you shortly to confirm timings.`);
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    checkGreeting();
    if (document.getElementById('hotels-grid')) renderHotels();
    if (document.getElementById('tours-grid')) renderTours();

    // Login Form logic
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm.querySelector('input[type="email"]').value;
            const username = email.split('@')[0];
            localStorage.setItem('lumina_user', username);
            window.location.href = 'booking.html';
        });
    }

    const searchHotel = document.getElementById('city-search');
    const searchTour = document.getElementById('tour-search');

    if (searchHotel) searchHotel.addEventListener('input', (e) => renderHotels(e.target.value));
    if (searchTour) searchTour.addEventListener('input', (e) => renderTours(e.target.value));
});
