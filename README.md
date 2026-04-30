# 🎓 Student Management System (React + JSON Server)

A simple **Student Management System** built using **React.js** and **JSON Server** that performs full **CRUD operations** (Create, Read, Update, Delete).  
This project is created for learning and practicing **React, REST APIs, Routing, and State Management**.

---

## 🚀 Features

- View all students
- Add a new student
- View student details
- Edit student details
- Delete a student
- Form validation
- React Router navigation
- JSON Server as mock backend
- Clean and professional UI

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- React Router DOM
- HTML
- CSS

**Backend (Mock API)**
- JSON Server

**Tools**
- VS Code
- npm / npx
- Git & GitHub

---

## 📂 Project Structure

src/  
├── StudentTable.js  
├── CreateStudent.js  
├── EditStudent.js  
├── ViewDetails.js  
├── App.js  
├── App.css  
├── index.js  
└── index.css  

db.json

---

## ⚙️ Installation & Run Project

### 

1️⃣ Clone Repository

git clone https://github.com/your-username/student-management-system.git
cd student-management-system

2️⃣ Install Dependencies

  npm install


  3️⃣ Start JSON Server (Important ❗)

  npx json-server@0.17.4 --watch db.json --port 8000 --id id

  Backend runs at:
     
     http://localhost:8000/students

4️⃣ Start React App

   npm start 

Frontend runs at:
        
    http://localhost:3000



📌 API Endpoints

GET /students → Get all students
GET /students/:id → Get student by ID
POST /students → Add new student
PUT /students/:id → Update student
DELETE /students/:id → Delete student


What I Learned

React Hooks (useState, useEffect)
CRUD operations
REST API integration
React Router
JSON Server usage
Form handling and validation
Debugging real-world React issues

👨‍💻 Author:

Mohammad Abdul Salman
Mumbai, India
Aspiring React Full‑Stack Developer
