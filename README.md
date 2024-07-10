# Shipment Delivery Application

This application is a shipment delivery system built using React, Tailwind CSS, Firebase, and Razorpay. It allows users to create new shipments, track their shipments, and provides admin functionalities to manage users and shipments.

## Features

### For Users

    <ul>
    <li> Create New Shipment: Users can create new shipments by providing details such as sender's name and address, receiver's name and address, item type, weight, and cost.</li>
    <li> Track Shipments: Users can track the status of their shipments (picked, in transit, delivered).</li>
    </ul>

### For Admin

    <ul>
    <li> View Total Registered Users: Admin can view the total number of registered users.</li>
    <li> View Total Shipments: Admin can see the total number of shipments created.</li>
    <li> Manage Shipments: Admin can change the status of shipments (e.g., from picked to in transit, or from in transit to delivered).</li>
    </ul>

## Technologies Used

    <li>React: Front-end library for building user interfaces.</li>
    <li>Tailwind CSS: Utility-first CSS framework for designing responsive and custom UIs.</li>
    <li>Firebase: Backend services for authentication, database (Firestore), and cloud functions.</li>
    <li>Razorpay: Payment gateway integration for processing payments securely.</li>

## Getting Started

To get started with the project locally, follow these steps:

### Prerequisites

    1. Node.js installed on your local machine. <br>
    2. Firebase account and a Firebase project set up.<br>
    3. Razorpay account and API keys.<br>

### Installation

### 1. Clone the repository

Clone the repository to your local machine using the following command:

```sh
git clone https://github.com/mayankkalra03/swiftship.git
cd swiftship
```

### 2. Install dependencies

Install the necessary dependencies by running:

```sh
npm install
```

### 3. Set up Firebase configuration:

    1. Create a Firebase project and set up Firebase Authentication and Firestore. <br>
    2. Obtain your Firebase configuration (apiKey, authDomain, projectId, etc.) and replace placeholders in your project setup.<br>
    3. Ensure Firebase Authentication is set up with email/password authentication enabled.<br>

### 4. Set up Razorpay integration:

    1. Obtain your Razorpay API keys (key ID and key secret). <br>
    2. Integrate Razorpay payment processing functionality as per your application's requirements.<br>

### 5. Start the application

Launch the application with:

```sh
npm run dev
```

### 6. Visit the application

Open http://localhost:5173 to view the application in your web browser.

![Swiftship's Homepage](src/assets/homepage.png "Swiftship's Homepage")
![Swiftship's Login](src/assets/login.png "Swiftship's Login")
![Swiftship's Signup](src/assets/signup.png "Swiftship's Signup")
![Swiftship's CreateShipment](src/assets/create-shipment.png "Swiftship's CreateShipment")
![Swiftship's UserDashboard](src/assets/user-dashboard.png "Swiftship's UserDashboard")
![Swiftship's AdminDashboard](src/assets/admin-dashboard.png "Swiftship's AdminDashboard")
![Swiftship's ContactUs](src/assets/contact-us.png "Swiftship's ContactUs")
![Swiftship's AboutUs](src/assets/about-us.png "Swiftship's AboutUs")
