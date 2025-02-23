
```markdown
# Travel Sphere Frontend

This is the Angular frontend for the **Travel Sphere** project. It provides a user interface to browse travel packages aggregated from different travel agencies.

## Features

- **View Travel Packages:** Fetches and displays travel packages from the Spring Boot backend.
- **Basic Navigation:** Home, Travel Packages, and About pages.
- **API Integration:** Connects to the backend at `http://localhost:8080/api/v1/packages`.

## Prerequisites

- **Node.js** and **npm** installed ([Download Node.js](https://nodejs.org))
- **Angular CLI** installed globally:
  ```bash
  npm install -g @angular/cli
  ```

## Installation

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:SanthoshD123/travel-sphere-frontend.git
   cd travel-sphere-frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

## Running the Application

Make sure your Spring Boot backend is running and accessible at `http://localhost:8080`.

To start the Angular development server:
```bash
ng serve --open
```
This will open the application in your default browser at `http://localhost:4200`.

## Upcoming Features

- **Filtering:** Users will be able to filter travel packages based on destination, price, and duration.
- **Comparison:** Users will be able to compare selected travel packages side-by-side.

## Deployment

To create a production build:
```bash
ng build --configuration production
```
This will generate a production-ready build in the `dist/` folder.

## License

This project is licensed under the **MIT License**.

## Contact

For any issues, please open a ticket on [GitHub Issues](https://github.com/SanthoshD123/travel-sphere-frontend/issues).
```

---

### Steps to Add This README to Your Repo:

1. **Save this file as `README.md` in your frontend project folder.**
2. **Add and commit it to GitHub:**
   ```bash
   git add README.md
   git commit -m "Add README for frontend"
   git push origin main
   ```

Let me know if you need further modifications! 🚀
