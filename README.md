# Personal Blog Platform  

A full-stack blog platform where users can **sign up, log in, create posts, and view posts by other users**.  
Built using **Node.js, Express, and Next.js 14 with TypeScript**.  

---

##  Features  
- User authentication (JWT-based)  
- Secure password storage (hashed)  
- Create, view, and filter blog posts by author  
- Responsive and clean UI  
- Server-side rendering (SSR) for homepage  
- Static site generation (SSG) for blog posts (if applicable)  

---

## 🛠 Tech Stack  
### **Backend:**  
- Node.js + Express  
- SQLite / PostgreSQL (or any preferred database)  
- JWT-based authentication  

### **Frontend:**  
- Next.js 14 (TypeScript)  
- CSS Modules (or Styled Components)  

---


### Prerequisites

Make sure you have the following installed:
- Node.js (LTS version)
- npm (or Yarn)
- SQLite (for local development)


### Backend Setup
- Navigate to the backend directory:cd backend
- Install backend dependencies: npm install
- Create a .env file in the backend directory and add the following: JWT_SECRET=your_secret_key


### Database Setup
The database is SQLite-based. The schema is automatically created when the backend is run.

### Start the Backend Server
Start the backend server: npm run dev
This will start the backend server at http://localhost:5000.

### Frontend Setup
- Navigate to the frontend directory: cd frontend
- Install frontend dependencies: npm install

### Start the Frontend Server
Start the frontend server: npm run dev
This will start the frontend at http://localhost:3000.

### 📱 Usage
1️⃣ Login & Signup--
Go to the home page (http://localhost:3000).--
Click on Login or Signup to create a new account or log into an existing one.--
2️⃣ Dashboard--
Once logged in, you will be redirected to the Dashboard page where you can view your blog posts.--
You can create a new blog post by clicking the Create New Post button.--
3️⃣ Create New Post--
On the Create Post page, enter the title and content of your post, then click Submit to save it.--
4️⃣ View Posts--
The posts you create will appear in the Dashboard, allowing you to see all your existing posts.--

 ### 🧑‍💻 API Endpoints
1️⃣ Auth Routes--
- POST /api/auth/signup: Sign up a new user.
- Body: { email, password }
- POST /api/auth/login: Login a user and return a JWT token.
- Body: { email, password }
- Response: { token }--

2️⃣ Post Routes
- POST /api/posts: Create a new blog post (requires authentication).
- Body: { title, content }
- Response: { id, title, content, authorId }
- GET /api/posts: Get all blog posts.
- Response: [{ id, title, content, authorId }]

