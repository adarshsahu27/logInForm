import { useEffect, useState } from "react";
import { DashboardService } from "../../services/dashboard.service";
import { Link } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await DashboardService();
      if (response.isSuccess) {
        setFormData(response.data);
      } else {
        console.log(response.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
    <h2>Dashboard</h2>
    <Link to="/">SignOut</Link>
    <ul>
  {formData.map((user) => (
    <li key={user.id} className="user-card">
      <img src={user.avatar} alt={user.first_name} className="user-avatar" />
      <div className="user-info">
        <p>Name: {user.first_name} {user.last_name}</p>
        <p>Email: {user.email}</p>
      </div>
    </li>
  ))}
</ul>

  </div>
  );
}

export default Dashboard;
