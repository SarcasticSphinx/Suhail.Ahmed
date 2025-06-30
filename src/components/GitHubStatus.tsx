"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitCommit } from "react-icons/fi";
import { BiGitRepoForked } from "react-icons/bi";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
}

interface CommitActivity {
  week: string;
  total: number;
}

const GitHubStatus = () => {
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);
  const [repos, setRepos] = useState(0);
  const [commitData, setCommitData] = useState<CommitActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch basic stats
        const userRes = await fetch(
          "https://api.github.com/users/SarcasticSphinx"
        );
        const userData = await userRes.json();

        const reposRes = await fetch(userData.repos_url);
        const reposData: GitHubRepo[] = await reposRes.json();

        const totalStars = reposData.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        );
        const totalForks = reposData.reduce(
          (acc, repo) => acc + repo.forks_count,
          0
        );

        setStars(totalStars);
        setForks(totalForks);
        setRepos(reposData.length);

        // Simulate commit data (GitHub's actual commit API requires auth)
        const mockCommitData = Array.from({ length: 12 }, (_, i) => ({
          week: new Date(
            Date.now() - (11 - i) * 7 * 24 * 60 * 60 * 1000
          ).toLocaleDateString("en-US", { month: "short" }),
          total: Math.floor(Math.random() * 20) + 5,
        }));

        setCommitData(mockCommitData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-400"></div>
      </div>
    );
  }

  const chartData = {
    labels: commitData.map((item) => item.week),
    datasets: [
      {
        label: "Commits",
        data: commitData.map((item) => item.total),
        backgroundColor: "#10b981",
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 5,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <FiGithub className="text-2xl" />
        <h2 className="text-xl font-semibold">GitHub Activity</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <BiGitRepoForked />
            <span className="text-sm">Repos</span>
          </div>
          <div className="text-2xl font-bold mt-1">{repos}</div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <FiStar />
            <span className="text-sm">Stars</span>
          </div>
          <div className="text-2xl font-bold mt-1">{stars}</div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <FiGitCommit />
            <span className="text-sm">Forks</span>
          </div>
          <div className="text-2xl font-bold mt-1">{forks}</div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-gray-700 dark:text-gray-300">
          <FiGitCommit />
          <h3 className="font-medium">Commit Activity</h3>
        </div>
        <div className="h-64">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </motion.section>
  );
};

export default GitHubStatus;
