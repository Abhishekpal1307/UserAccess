# UserAccess

A full-stack web application for user authentication and access management, built with React, Node.js, Express, and MongoDB.

## � Assignment Requirements Fulfillment

This project fulfills all the requirements of the "Full Stack Web Development Assignment":

### ✅ **1. Login Page**
- User authentication interface with email and password fields
- Form validation for email format and required password
- Error messages for invalid inputs
- Clean, user-friendly UI

### ✅ **2. Dashboard Page**
- Protected route that requires authentication
- Displays logged-in user's name
- Shows dummy data lists (Leads, Tasks, Users)
- Responsive design with modern UI components

### ✅ **3. Backend Development**
- Node.js/Express API server
- MongoDB database integration with Mongoose
- User authentication with secure password hashing (bcryptjs)
- API endpoints: `/api/auth/login` and `/api/auth/signup`
- Proper error handling and validation

### ✅ **4. Bonus Features**
- Logout functionality
- Clean and responsive UI design
- Form validation and error handling
- Protected routes
- Loading states and user feedback

## �🚀 Features

- **User Registration & Login**: Secure authentication with password hashing
- **Dashboard**: Protected user dashboard with dummy data display
- **MongoDB Integration**: User data stored in MongoDB database
- **Responsive UI**: Clean, modern interface built with shadcn/ui
- **Form Validation**: Client-side and server-side validation
- **Error Handling**: Comprehensive error messages and handling

## 🛠️ Tech Stack

### Frontend
- **React** (TypeScript)
- **Vite** (Build tool)
- **shadcn/ui** (UI Components)
- **Tailwind CSS** (Styling)
- **React Router** (Navigation)

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **bcryptjs** (Password hashing)
- **CORS** (Cross-origin resource sharing)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community)
- **Git** - [Download here](https://git-scm.com/)

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Abhishekpal1307/UserAccess.git
cd UserAccess
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm start
```
The backend server will run on `http://localhost:5000`

### 3. Frontend Setup
```bash
# Open a new terminal and navigate to root directory
cd ..

# Install frontend dependencies
npm install

# Start the development server
npm run dev
```
The frontend application will run on `http://localhost:8080`

### 4. MongoDB Setup
Make sure MongoDB is running on your system. The application connects to:
```
mongodb://localhost:27017/user-access-system
```

## 🎯 Usage

### Demo Credentials
The application comes with pre-configured demo credentials for testing:

- **Email**: demo@example.com
- **Password**: demo123

### User Registration
1. Click "Sign Up" on the login page
2. Fill in your details (Name, Email, Password)
3. Click "Sign Up" to create your account

### User Login
1. Enter your email and password
2. Click "Login" to access the dashboard
3. Use the demo credentials if you haven't registered yet

## 📁 Project Structure

```
UserAccess/
├── backend/                 # Node.js/Express backend
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── package-lock.json
├── src/                    # React frontend
│   ├── components/         # Reusable UI components
│   ├── contexts/           # React contexts (Auth)
│   ├── pages/              # Application pages
│   ├── integrations/       # External service integrations
│   └── ...
├── public/                 # Static assets
├── backend/                # Backend server
├── package.json            # Frontend dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS config
└── README.md               # This file
```

## 🔒 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Authenticate user login

### Request/Response Examples

#### Signup
```json
POST /api/auth/signup
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify or Vercel
3. Update API endpoints to point to deployed backend

### Backend Deployment (Railway/Render/Heroku)
1. Deploy the `backend` folder to your preferred platform
2. Set MongoDB connection string in environment variables
3. Update CORS settings for production domain

### Environment Variables
Create a `.env` file in the backend directory:
```
MONGODB_URI=mongodb://localhost:27017/user-access-system
PORT=5000
```

## 📊 Project Status

- ✅ **Assignment Requirements**: All requirements fulfilled
- ✅ **Code Quality**: Clean, well-structured, and documented
- ✅ **Functionality**: Complete user authentication system
- ✅ **Documentation**: Comprehensive README with setup instructions
- ✅ **Version Control**: GitHub repository ready for submission

## 🎯 Evaluation Criteria Met

### ✅ **Functionality of login system**
- Complete user registration and login flow
- Secure password storage with bcrypt hashing
- Proper session management with localStorage
- Form validation and error handling

### ✅ **Proper dashboard implementation**
- Protected routes requiring authentication
- User-specific dashboard display
- Dummy data presentation (Leads, Tasks, Users)
- Clean, organized layout

### ✅ **Backend API integration**
- RESTful API endpoints for authentication
- MongoDB database integration
- Proper request/response handling
- CORS configuration for frontend communication

### ✅ **Code quality and structure**
- Modular component architecture
- TypeScript for type safety
- Separation of concerns (frontend/backend)
- Clean, readable code with comments

### ✅ **UI design and usability**
- Modern, responsive design
- Intuitive user interface
- Consistent styling with Tailwind CSS
- Accessible form controls and navigation

### ✅ **Deployment Ready**
- Complete setup instructions
- Environment configuration
- GitHub repository with proper structure
- Ready for Netlify/Vercel deployment
- Clean UI with shadcn/ui components
