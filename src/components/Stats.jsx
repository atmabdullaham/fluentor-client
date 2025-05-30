import axios from "axios";
import React, { useEffect, useState } from "react";

const Stats = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/stats`);
        setStats(res.data);
      } catch (err) {
        console.error("Failed to load stats:", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="bg-red-50  py-10 md:py-28">
      <div className="md:w-11/12 lg:w-10/12 mx-auto flex justify-center">
        <div className="stats flex flex-col md:flex-row w-1/2 shadow md:w-full bg-base-100">
          <div className="stat place-items-center">
            <div className="stat-title  text-lg font-semibold">Tutors</div>
            <div className="stat-value">{stats.totalTutors}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title  text-lg font-semibold">
              Total Review
            </div>
            <div className="stat-value text-secondary">
              {stats.totalReviews}
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title text-lg font-semibold">Languages</div>
            <div className="stat-value">{stats.uniqueLanguageCount}</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title  text-lg font-semibold">Users</div>
            <div className="stat-value">{stats.totalUsers}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
