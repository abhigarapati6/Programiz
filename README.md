# 🚀 Programiz Learning Platform

A modern, interactive web application built with React that provides a comprehensive learning platform for multiple programming languages. This project offers an engaging user experience with beautiful animations, responsive design, and user authentication.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🎯 Core Functionality
- **Multi-Language Learning Platform**: Support for JavaScript, Python, Java, SQL, and MongoDB
- **User Authentication**: Complete signup and login system with API integration
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Interactive Navigation**: Smooth routing between different programming languages
- **Animated Components**: Engaging user experience with Framer Motion animations

### 🎨 UI/UX Features
- **Modern Design**: Clean, professional interface with gradient backgrounds
- **Smooth Animations**: Framer Motion powered animations for better user experience
- **Icon Integration**: React Icons for consistent visual language
- **Glassmorphism Effects**: Modern backdrop blur effects and translucent elements
- **Responsive Layout**: Mobile-first design approach

### 🔧 Technical Features
- **React Router**: Client-side routing for seamless navigation
- **State Management**: React hooks for efficient state handling
- **API Integration**: MockAPI for user authentication
- **Component Architecture**: Modular, reusable React components
- **Modern CSS**: Advanced styling with gradients, shadows, and transitions

## 🛠 Technologies Used

### Frontend
- **React 19.1.0** - Modern React with latest features
- **React Router DOM 7.7.1** - Client-side routing
- **Framer Motion 12.23.12** - Animation library
- **React Icons 5.5.0** - Icon components
- **Lucide React 0.539.0** - Additional icon library
- **Lottie React 2.4.1** - Animation support

### Development Tools
- **Vite 7.0.4** - Fast build tool and development server
- **ESLint 9.30.1** - Code linting and formatting
- **TypeScript Support** - Type definitions for React

### Styling
- **CSS3** - Modern CSS with gradients, animations, and responsive design
- **Inline Styles** - Component-based styling approach
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
programiz-project/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx                 # Main application component with routing
│   ├── App.css                 # Global application styles
│   ├── Home.jsx                # Landing page component
│   ├── Home.css                # Landing page styles
│   ├── Login.jsx               # User login component
│   ├── SignUp.jsx              # User registration component
│   ├── Python.jsx              # Python learning page
│   ├── Python.css              # Python page styles
│   ├── Java.jsx                # Java learning page
│   ├── Js.jsx                  # JavaScript learning page
│   ├── Sql.jsx                 # SQL learning page
│   ├── Mongo.jsx               # MongoDB learning page
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # Project documentation
```

## 🚀 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd programiz-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📖 Usage

### Getting Started
1. **Landing Page**: The application starts with a beautiful landing page featuring programming language options
2. **Language Selection**: Click on any programming language button to explore that language's learning content
3. **User Registration**: Use the signup functionality to create a new account
4. **User Login**: Existing users can log in using their credentials

### Navigation
- **Home** (`/`) - Landing page with language selection
- **Sign Up** (`/Signup`) - User registration page
- **Login** (`/Login`) - User authentication page
- **JavaScript** (`/Js`) - JavaScript learning content
- **Python** (`/Python`) - Python learning content
- **Java** (`/Java`) - Java learning content
- **SQL** (`/Sql`) - SQL learning content
- **MongoDB** (`/Mongo`) - MongoDB learning content

### User Authentication
The application integrates with MockAPI for user authentication:
- **Sign Up**: Create new user accounts with name, email, password, and date of birth
- **Login**: Authenticate existing users with email and password
- **API Endpoint**: `https://6884661a745306380a382c50.mockapi.io/Users`

## 🛠 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Production
npm run build        # Create optimized production build
```

## 🔌 API Integration

### User Authentication API
- **Base URL**: `https://6884661a745306380a382c50.mockapi.io/Users`
- **Methods**: 
  - `GET` - Fetch user data for login validation
  - `POST` - Create new user account

### API Data Structure
```javascript
// User object structure
{
  "MyName": "string",
  "MyEmail": "string", 
  "MyPassword": "string",
  "MyDOB": "string"
}
```

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds**: Beautiful color transitions throughout the app
- **Glassmorphism**: Modern translucent design elements
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Icons**: React Icons for consistent visual language
- **Card-based Layout**: Clean, organized content presentation

### Color Schemes
- **Home Page**: Dark gradient with glassmorphism effects
- **Python**: Blue gradient theme
- **Java**: Purple gradient theme  
- **JavaScript**: Orange gradient theme
- **SQL**: Blue gradient theme
- **MongoDB**: Green gradient theme

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the deployment prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

### Development Guidelines
- Follow React best practices
- Use meaningful component and variable names
- Add comments for complex logic
- Ensure responsive design
- Test on multiple devices

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Add more programming languages
- [ ] Implement user progress tracking
- [ ] Add interactive coding exercises
- [ ] Include video tutorials
- [ ] Add user profiles and settings
- [ ] Implement dark/light theme toggle
- [ ] Add search functionality
- [ ] Include user reviews and ratings

## 📞 Support

For support, email your-email@example.com or create an issue in the repository.

---

**Happy Learning! 🎓✨**
"# Programiz" 
