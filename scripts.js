// JavaScript for MIS3011 Course Page

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Create assessment chart
    createAssessmentChart();

    // Add active class to navbar items on scroll
    window.addEventListener('scroll', updateActiveNavItem);
});

// Function to create assessment chart
function createAssessmentChart() {
    const ctx = document.getElementById('assessmentChart').getContext('2d');
    
    // Assessment data from course outline
    const assessmentData = {
        labels: ['Participation', 'Individual Assignments', 'Final Exam', 'Group Project'],
        datasets: [{
            label: 'Weight (%)',
            data: [10, 20, 40, 30],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    const assessmentChart = new Chart(ctx, {
        type: 'pie',
        data: assessmentData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'white'
                    }
                }
            }
        }
    });
}

// Function to update active navbar item based on scroll position
function updateActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const activeLink = document.querySelector('.navbar-nav .nav-item .nav-link[href*=' + sectionId + ']');
            if (activeLink) activeLink.classList.add('active');
        } else {
            const inactiveLink = document.querySelector('.navbar-nav .nav-item .nav-link[href*=' + sectionId + ']');
            if (inactiveLink) inactiveLink.classList.remove('active');
        }
    });
}

// Create PDF download link functionality
document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', function(e) {
        // In a real environment, this would download the PDF
        // For now, just log a message
        console.log('Course outline PDF would be downloaded');
    });
});
