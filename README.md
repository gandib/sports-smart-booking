# Sports Smart Booking

## Introduction

A Sports Smart Booking offering a wide range of venues to book in hourly basis. Book easily and securely from the comfort of your home.

## Project Description

Sports Smart Booking is your go-to platform for reserving a wide variety of sports venues on an hourly basis. Whether you're looking for a soccer field, tennis court, or any other sports facility, our user-friendly platform makes it easy and secure to book your preferred venue from the comfort of your home. Enjoy seamless booking experiences and focus on what matters most—playing your favorite sports.

## Features

- **Facility List:** Browse and search a wide range of sports venues.
- **Facility Details:** Detailed descriptions, images, and care instructions for each sports.
- **Dashboard:** See user information, All bookings and manage booking.
- **Booking Management:** Cancel bookingh.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Technology Stack

**Frontend:**

- Vite
- Redux RTK Query
- React Sonner
- TypeScript
- React Router DOM
- React Hook Form
- Ant Design

**Backend:**

- Node.js
- Express
- TypeScript
- Mongoose

## Installation Guideline

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gandib/sports-smart-booking
   cd sports-smart-booking
   git clone https://github.com/gandib/sports-facility-booking-platform
   cd sports-facility-booking-platform
   ```

2. **Install dependencies:**

   **Frontend:**

   ```bash
   cd client
   npm install
   ```

   **Backend:**

   ```bash
   cd server
   npm install
   ```

3. **Configuration:**

   Create a `.env` file in the root directory of both the frontend and backend projects and add the necessary configuration variables.

   **Frontend .env:**

   ```env
   REACT_APP_API_URL=http://localhost:5173
   ```

   **Backend .env:**

   ```env
   PORT=3000
   DB_URL=your_mongodb_connection_uri
   ```

4. **Run the project:**

   **Frontend:**

   ```bash
   cd client
   npm start
   ```

   **Backend:**

   ```bash
   cd server
   npm start
   ```

## Usage

1. **Access the website:**
   Open your web browser and navigate to Live client site `https://sports-smart-booking.vercel.app`. and live backend site `https://sports-facility-booking-platform.vercel.app`

2. **Browse Facility:**
   Explore the Facility and view detailed information.

3. **ABooking:**
   Add desired sports to your booking.

4. **Payment:**
   Proceed to Pay, enter payment informations.

5. **Dashboard:**
   View or Cancel your booking.
