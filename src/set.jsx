import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

 function HomePage() {
  const [expenses] = useState([
    { name: "Food", value: 4500 },
    { name: "Rent", value: 12000 },
    { name: "Shopping", value: 3000 },
    { name: "Travel", value: 2000 },
  ]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <motion.h1
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Smart Expense Tracker
        </motion.h1>
        <Button className="rounded-2xl px-6 py-2">Login</Button>
      </header>

      {/* Dashboard Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Expense Summary Card */}
        <Card className="shadow-md rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Monthly Overview</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={expenses}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {expenses.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* AI Insights Card */}
        <Card className="shadow-md rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">AI Insights</h2>
            <ul className="space-y-2 text-gray-700">
              <li>⚡ Your Food expense increased by 15% compared to last month.</li>
              <li>💰 You can save ₹200 daily to reach ₹73,000/year savings.</li>
              <li>📊 Rent is 55% of your total monthly expense.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Add Transaction Button */}
      <div className="mt-10 flex justify-center">
        <Button className="rounded-2xl px-6 py-3 text-lg shadow-lg">+ Add Transaction</Button>
      </div>
    </div>
  );
}
export default HomePage;