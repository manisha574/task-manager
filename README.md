Task Manager Web Application
This is a full-stack Task Manager Web Application that consists of a Node.js/Express backend and a React (Vite) frontend styled with Tailwind CSS. Users can register, log in, and manage their tasks. Each user sees only their own tasks, which are stored in a MongoDB database.


--Backend Setup
Navigate to the backend directory:


cd task-manager/task-manager-backend
--Install dependencies:


Create a .env file in the backend directory with the following content:

env
Copy
Edit
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Replace your_mongo_connection_string with your MongoDB URI and your_jwt_secret with a secret key.

--Start the backend server:


npm start
The server should connect to MongoDB and run on port 5000.

---Frontend Setup
Navigate to the frontend directory:


cd task-manager/task-manager-frontend
Install dependencies:


npm install
Create a .env file in the frontend directory with the following content:

env
Copy
Edit
VITE_API_URL=http://localhost:5000/api
Configure Tailwind CSS:


--Start the frontend server:


npm run dev
Vite will start and typically serve the app on http://localhost:5173.

---Usage
Registration & Login:
Use the frontend to register a new user.
Log in using valid credentials. A JWT token will be generated and stored in localStorage.
Task Management:
After logging in, navigate to the Dashboard.
Add, update, toggle, and delete tasks. Tasks are stored in MongoDB and are filtered by the logged-in user.
Each user will see only their own tasks.
Troubleshooting
500 Internal Server Error:

Check the backend console for detailed error messages.
Ensure all required fields (like description) are provided or marked as optional.
CORS Issues:

The backend uses CORS middleware. If issues occur, verify your backend configuration.
JWT Authentication Issues:

Ensure tokens are generated with { userId: user._id }.
Verify that your auth middleware attaches the token payload correctly.