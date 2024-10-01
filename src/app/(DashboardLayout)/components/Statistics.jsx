"use client";
import React, { useEffect, useState } from "react";
import { getAllOrders } from "@/services/getOrders";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const fetchOrders = async () => {
  try {
    const fetchedData = await getAllOrders();
    return fetchedData;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return { allOrders: [] };
  }
};

const Statistics = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchOrders();
      // Group the data by month and calculate the total sales for each month
      const groupedData = fetchedData.allOrders.reduce((acc, item) => {
        const month = item.date.slice(0, 7); // Extract the month from the date
        if (!acc[month]) {
          acc[month] = 0;
        }
        acc[month] += item.price;
        return acc;
      }, {});

      // Transform the grouped data into the format that the chart expects
      const chartData = Object.entries(groupedData).map(
        ([month, totalSales]) => ({
          name: month,
          totalSales,
        })
      );

      // Sort the data by month
      chartData.sort((a, b) => a.name.localeCompare(b.name));

      setData(chartData);
    };
    getData();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Here you can add logic to filter the chart data based on the selected date
  };

  return (
    <div className="my-[120px] flex flex-col md:flex-row items-center justify-between gap-8 p-4">
      <div className="w-full md:w-2/3" style={{ height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="totalSales"
              fill="#8884d8"
              background={{ fill: "#eee" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full md:w-1/3 flex flex-col items-center md:mb-[80px]">
        <h2 className="text-2xl font-bold mb-4">Calendar</h2>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default Statistics;