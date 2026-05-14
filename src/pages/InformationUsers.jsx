import React, { useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  Scale,
  User,
  Target,
  Flame,
  TrendingUp,
  Activity,
  Calendar,
  Dumbbell,
} from "lucide-react";

export default function InformationUsers() {
  const [goal, setGoal] = useState("Weight Loss");
  const [days, setDays] = useState(4);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const goals = [
    { title: "Weight Loss", desc: "Burn fat and get lean", icon: Flame },
    { title: "Muscle Gain", desc: "Build strength and mass", icon: TrendingUp },
    { title: "General Fitness", desc: "Improve overall health", icon: Activity },
  ];

  const handleGenerate = async () => {
    const userData = { weight, height, age, gender, goal, days };

    localStorage.setItem("userInfo", JSON.stringify(userData));

    window.location.pathname = "/plan";
  };

  return (
    <div className="min-h-screen bg-[#050907] text-white">
      <header className="border-b border-white/10 bg-[#0d1210] p-4">
        <h1 className="text-xl font-bold">FitGenie</h1>
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Information Users</h2>

        <div className="space-y-3">
          <input
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="p-2 text-black w-full"
          />

          <input
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="p-2 text-black w-full"
          />

          <input
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="p-2 text-black w-full"
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="p-2 text-black w-full"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <button
            onClick={handleGenerate}
            className="bg-lime-400 text-black p-3 w-full font-bold"
          >
            Generate Plan
          </button>
        </div>
      </main>
    </div>
  );
}