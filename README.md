# Travel Sphere Frontend

This is the Angular frontend for the **Travel Sphere** project. It provides a user interface to browse travel packages aggregated from different travel agencies.

## 🌟 Current Features

- **View Travel Packages:** Fetches and displays travel packages from the Spring Boot backend
- **Basic Navigation:** Home, Travel Packages, and About pages
- **API Integration:** Connects to the backend at `http://localhost:8080/api/v1/packages`

## 🛠️ Technical Stack

- **Frontend Framework:** Angular 
- **API Integration:** REST APIs with Spring Boot backend

## 📋 Prerequisites

- Node.js and npm installed ([Download Node.js](https://nodejs.org))
- Angular CLI installed globally:
  ```bash
  npm install -g @angular/cli
  ```

## 💻 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone git@github.com:SanthoshD123/travel-sphere-frontend.git
   cd travel-sphere-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   Make sure your Spring Boot backend is running and accessible at `http://localhost:8080`.
   Start the Angular development server:
   ```bash
   ng serve --open
   ```
   This will open the application in your default browser at `http://localhost:4200`.

## 🎯 Upcoming Features

- **Filtering:** Users will be able to filter travel packages based on destination, price, and duration
- **Comparison:** Users will be able to compare selected travel packages side-by-side

## 📦 Deployment

To create a production build:
```bash
ng build --configuration production
```
This will generate a production-ready build in the `dist/` folder.

## 👨‍💻 Contact

- For any issues, please open a ticket on GitHub Issues

## 📄 License

This project is licensed under the MIT License.
