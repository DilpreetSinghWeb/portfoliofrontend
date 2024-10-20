import React, { useState } from 'react';
import './dashboard.css';
import bcrypt from 'bcryptjs-react';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios'; // Import axios

// Constants for messages
const FETCH_ERROR_MSG = 'Failed to fetch user data';
const ADMIN_MESSAGE = 'Only for Admin';
const API_URL = 'https://dilpreetsinghportfolio-api.onrender.com/dashboard';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const myPassword = process.env.REACT_APP_PASSWORD;
  const myUsername = process.env.REACT_APP_USERNAME;

  // Check if environment variables are set
  if (!myPassword || !myUsername) {
    console.error('Environment variables are not set properly.');
    return null; // or a fallback UI
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(myPassword, salt);

  const onSubmit = async (e) => {
    e.preventDefault();
    const enteredPasswordHash = bcrypt.hashSync(password, salt);

    if (username === myUsername && enteredPasswordHash === hashedPassword) {
      try {
        const response = await axios.get(API_URL);
        console.log(response);
        setUsers(response.data.messages);
        setIsAdmin(true);
      } catch (error) {
        toast.error(error.response?.data?.message || FETCH_ERROR_MSG);
      }
    } 
  };

  return (
    <div className='dashboard'>
      <header className="heading">
        <h1>Dashboard</h1>
      </header>
      <form className="dashboard_input" onSubmit={onSubmit}>
        <h3>Log In (Only For Admin)</h3>
        <div className="dashboard_input_name">
          <label htmlFor="username">Name:</label>
          <input
            id="username"
            value={username}
            onChange={({ target: { value } }) => setUsername(value)}
            type="text"
            placeholder='Enter name'
          />
        </div>
        <div className="dashboard_input_password">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder='Password Here'
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="dashboard_table">
        {isAdmin ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>{ADMIN_MESSAGE}</h2>
        )}
      </div>
      {/* Toaster for hot toasts */}
      <Toaster />
    </div>
  );
};

export default Dashboard;
