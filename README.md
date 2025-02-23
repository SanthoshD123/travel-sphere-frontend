# Travel Sphere Frontend

A modern Angular-based platform for comparing and booking travel packages from multiple agencies.

## 🌟 Overview

Travel Sphere is a comprehensive travel package aggregator that connects travelers with travel agencies, enabling easy search, comparison, and booking of travel packages including tours, flights, and hotels - all in one place.

## ✨ Core Features

- **Travel Package Search & Display**
  - View detailed package information
  - Advanced filtering options
  - Comparison capabilities

- **User Management**
  - User registration and login
  - Profile management
  - Save favorite packages

- **Travel Agency Integration**
  - View agency profiles
  - Browse agency-specific packages
  - Rating and review system

## 🛠️ Technical Stack

- **Frontend Framework:** Angular 
- **State Management:** NgRx (planned)
- **UI Components:** Angular Material
- **API Integration:** REST APIs with Spring Boot backend
- **Styling:** SCSS

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (`npm install -g @angular/cli`)

## 💻 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SanthoshD123/travel-sphere-frontend.git
   cd travel-sphere-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   ng serve
   ```
   Access the application at `http://localhost:4200`

## 🔄 API Integration

The frontend connects to our Spring Boot backend at `http://localhost:8080/api/v1/` with the following main endpoints:

- `/packages` - Travel package management
- `/agencies` - Travel agency management
- `/users` - User management

## 🎯 Upcoming Features

- Advanced search with multiple filters
- Package comparison tool
- User reviews and ratings
- Interactive travel planning tools
- Booking system integration
- Real-time price alerts
- Personalized recommendations

## 🧪 Running Tests

```bash
# Unit Tests
ng test

# End-to-End Tests
ng e2e
```

## 📦 Build

Generate a production build:
```bash
ng build --configuration production
```

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Developer

- **Developer:** Santhosh D
- **GitHub:** [SanthoshD123](https://github.com/SanthoshD123)

## 📄 License

This project is licensed under the MIT License.

---
