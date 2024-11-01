const jobData = [
    { title: 'Web Developer', company: 'MK', location: 'Kampala, Uganda', description: 'We are looking for an outstanding Web Developer to be responsible for the coding, innovative design and layout of our website. Web developer responsibilities include building our website from concept all the way to completion from the bottom up, fashioning everything from the home page to site layout and function.' },
    { title: 'Graphic Designer', company: 'NV designerz', location: 'Namungoona', description: 'Your graphics should capture the attention of those who see them and communicate the right message. For this, you need to have a creative flair and a strong ability to translate requirements into design. If you can communicate well and work methodically as part of a team, we would like to meet you.' },
    { title: 'Data Analyst', company: 'metropolis', location: 'Kampala', description: 'A Data Analyst gathers, verifies, and analyses data to identify patterns and provide actionable insights to help businesses make data-driven decisions. Data Analysts organise data related to sales, marketing, logistics, etc. and create reports for management that provide predictions based on analysed data.' },
    { title: 'Manager' , company: 'Kasenyi Safaris', location: 'Kasese', description: 'Managing and implementing HR & Admin policies of Kasenyi Safaris and its group companies. General Administration (Office Policies, statutory requirements, office automation & communication management, office general stationery management, office transportation management). Facilities management (Housekeeping, Safety &Security. Managing general orientation programme for new recruits. Managing staffing requirement' },
    { title: 'shop-attendant', company: 'Lovez', location: 'Ntiinda', description: 'manage shops, provide customer services, manage invetory, prevent shoplifting and theft' },
    { title: 'Marketing Executive', company: 'pharmahub', location: 'Kasese', description: 'Assist in the creation of marketing content, including blog posts, email campaigns, and marketing collateral. Assist with social media updates/posts, content scheduling, and community engagement. Help plan, organize, and execute marketing events, trade shows, and promotional activities. Work closely with the order management team, to ensure on time dispatch/delivery of marketing/influencer hampers.' },
    { title: 'Delivery Executive', company: 'Moniez', location: 'Nansana', description: 'A delivery boy delivers parcels to customers safely and on time. Delivery boys know how to use Google Maps to find a location. Talk to customers in a polite manner and accept payments if needed. Delivery Person should have a two-wheeler and a valid Driving Licence (DL). Delivery executive Candidate with 10th Pass or and above, Fresher also can apply. <b>Only Chennai candidate should applied</b>' },
    { title: 'Sales Associate', company: 'DayToDay Ltd', location: 'mbarara', description: 'travel Planning: Create detailed and well-organized travel programs, including transportation, accommodation, activities, and sightseeing options. Booking Management: Coordinate and secure bookings for flights, hotels, transportation, and other travel-related services, ensuring accuracy and timely confirmations. Customer Service: Provide excellent customer service by promptly responding to client inquiries, addressing concerns, and offering personalized travel advice and recommendations on call and email.' },
];

// Function to display job listings
function displayJobs(jobs) {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';

    jobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');
        jobItem.innerHTML = `
            <h1 class='title'>${job.title}</h1>
            <br>
            <p class='company'><strong>Company:</strong> <br>${job.company}</p>
            <p class='location'><strong>Location:</strong><br> ${job.location}</p>
            <p class='desc'><strong>Description:</strong><br> ${job.description}</p>
        `;
        jobList.appendChild(jobItem);
    });
}

// Function to search for jobs
function searchJobs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredJobs = jobData.filter(job =>
        job.title.toLowerCase().includes(searchInput) ||
        job.company.toLowerCase().includes(searchInput) ||
        job.location.toLowerCase().includes(searchInput) ||
        job.description.toLowerCase().includes(searchInput)
    );
    displayJobs(filteredJobs);
}

// Event listener for job submission form
const jobForm = document.getElementById('jobForm');
jobForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const jobLocation = document.getElementById('jobLocation').value;
    const jobDescription = document.getElementById('jobDescription').value;

    // Add the new job to the jobData array (for demo purposes)
    jobData.push({ title: jobTitle, company: companyName, location: jobLocation, description: jobDescription });

    // Clear form fields
    jobForm.reset();

    // Display updated job listings
    displayJobs(jobData);
});

// Initial job listing display
displayJobs(jobData);
