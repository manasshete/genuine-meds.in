// Drug Database
const drugDatabase = [
    {
        name: "Aspirin",
        category: "Pain Relief & Anti-inflammatory",
        url: "aspirin.html",
        keywords: ["aspirin", "acetylsalicylic acid", "pain relief", "anti-inflammatory", "fever"]
    },
    {
        name: "Ibuprofen",
        category: "NSAID Pain Reliever",
        url: "ibuprofen.html",
        keywords: ["ibuprofen", "advil", "motrin", "nsaid", "pain relief", "anti-inflammatory"]
    },

    {
        name: "Omeprazole",
        category: "Proton Pump Inhibitor",
        url: "omeprazole.html",
        keywords: ["omeprazole", "prilosec", "acid reducer", "heartburn", "gerd"]
    },
    {
        name: "Acelofenac",
        category: "NSAID Pain Reliever",
        url: "acelofenac.html",
        keywords: ["acelofenac", "pain relief", "anti-inflammatory"]
    },
    {
        name: "Paracetamol",
        category: "Pain & Fever Relief",
        url: "paracetamol.html",
        keywords: ["paracetamol", "acetaminophen", "tylenol", "pain relief", "fever"]
    },

    {
        name: "Diclofenac",
        category: "NSAID Pain Reliever",
        url: "diclofenac.html",
        keywords: ["diclofenac", "voltaren", "nsaid", "pain relief", "anti-inflammatory"]
    },
    {
        name: "Amoxicillin",
        category: "Antibiotic",
        url: "amoxicillin.html",
        keywords: ["amoxicillin", "antibiotic", "infection", "bacterial"]
    },
    {
        name: "Metformin",
        category: "Diabetes Medication",
        url: "metformin.html",
        keywords: ["metformin", "diabetes", "blood sugar", "type 2 diabetes"]
    },
    {
        name: "Lisinopril",
        category: "Blood Pressure Medication",
        url: "lisinopril.html",
        keywords: ["lisinopril", "ace inhibitor", "blood pressure", "hypertension"]
    },
    {
        name: "Atorvastatin",
        category: "Cholesterol Medication",
        url: "atorvastatin.html",
        keywords: ["atorvastatin", "lipitor", "statin", "cholesterol"]
    },
    {
        name: "Omeprazole",
        category: "Acid Reducer",
        url: "omeprazole.html",
        keywords: ["omeprazole", "prilosec", "acid reducer", "heartburn", "gerd"]
    }
];

// Search functionality
function searchDrug() {
    const searchTerm = document.getElementById('drugSearch').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('searchResults');
    
    if (searchTerm.length < 2) {
        resultsContainer.style.display = 'none';
        return;
    }
    
    const results = drugDatabase.filter(drug => 
        drug.name.toLowerCase().includes(searchTerm) ||
        drug.category.toLowerCase().includes(searchTerm) ||
        drug.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
    );
    
    displaySearchResults(results, resultsContainer);
}

function displaySearchResults(results, container) {
    container.innerHTML = '';
    
    if (results.length === 0) {
        container.innerHTML = '<div class="search-result-item">No drugs found matching your search.</div>';
        container.style.display = 'block';
        return;
    }
    
    results.forEach(drug => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <strong>${drug.name}</strong><br>
            <small style="color: var(--text-secondary);">${drug.category}</small>
        `;
        resultItem.onclick = () => {
            window.location.href = drug.url;
        };
        container.appendChild(resultItem);
    });
    
    container.style.display = 'block';
}

// Real-time search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('drugSearch');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput) {
        searchInput.addEventListener('input', searchDrug);
        
        // Hide search results when clicking outside
        document.addEventListener('click', function(event) {
            if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
                searchResults.style.display = 'none';
            }
        });
        
        // Handle Enter key
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const firstResult = searchResults.querySelector('.search-result-item');
                if (firstResult) {
                    firstResult.click();
                }
            }
        });
    }
    
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Utility functions
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Form validation (for contact page)
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });
    
    return isValid;
}

// Analytics and tracking (placeholder)
function trackPageView(pageName) {
    // Implement analytics tracking here
    console.log(`Page view: ${pageName}`);
}

function trackSearch(searchTerm) {
    // Implement search tracking here
    console.log(`Search: ${searchTerm}`);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Track page view
    const pageName = document.title;
    trackPageView(pageName);
    
    // Add loading states
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 300);
        });
    }
});


