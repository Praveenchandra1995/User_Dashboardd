import React, { useMemo } from "react";
import { Data, ProductDetailes } from "../Components/Data";
import { options } from "../Components/Data/Bardata";
import { BiSolidWalletAlt } from "react-icons/bi";
import { Columns } from "../Components/Data/Columns";
import { IoBasketSharp } from "react-icons/io5";
import { Bar } from "react-chartjs-2";
import Chart from "react-apexcharts";

import {
  AiOutlineBook,
  AiFillDollarCircle,
} from "react-icons/ai";
import { MdArrowUpward } from "react-icons/md";
import { useTable } from "react-table";
import "../Components/Table.css";
import { data } from "../Components/Data/Bardata";

import { Chart as ChartJS, Title, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Title, Tooltip, Legend);
export default function Dashboard() {
  const EarningsData = Data.map((item) => {
    return item.Earnings;
  });
  const TotalOrders = Data.map((info) => {
    return info.Orders;
  });
  //total of Orders
  const calculateTotalOrders = (OrdersArray) => {
    return OrdersArray.reduce((total, orders) => total + orders, 0);
  };
  const totalOrders = calculateTotalOrders(TotalOrders[0]);
  console.log(totalOrders);
  // Function to calculate the overall percentage increase in Orders
  const calculateOverallPercentageIncreaseInOrders = (OrdersArray) => {
    const firstOrder = OrdersArray[0];
    const lastOrder = OrdersArray[OrdersArray.length - 1];
    const overallPercentageIncreaseOrders =
      ((lastOrder - firstOrder) / firstOrder) * 100;
    return overallPercentageIncreaseOrders.toFixed(2) + "%";
  };

  const overallPercentageIncreasee = calculateOverallPercentageIncreaseInOrders(
    Data[0].Orders
  );
  console.log(overallPercentageIncreasee);

  const calculateTotalEarnings = (earningsArray) => {
    return earningsArray.reduce((total, earnings) => total + earnings, 0);
  };
  const totalEarnings = calculateTotalEarnings(EarningsData[0]);
  console.log(totalEarnings);
  // Function to calculate the overall percentage increase in earnings
  const calculateOverallPercentageIncrease = (earningsArray) => {
    const firstEarnings = earningsArray[0];
    const lastEarnings = earningsArray[earningsArray.length - 1];
    const overallPercentageIncrease =
      ((lastEarnings - firstEarnings) / firstEarnings) * 100;
    return overallPercentageIncrease.toFixed(2) + "%";
  };

  const overallPercentageIncrease = calculateOverallPercentageIncrease(
    Data[0].Earnings
  );
  console.log(overallPercentageIncrease);
  //calculate balance
  const calculateBalance = (data) => {
    const { Orders, Earnings } = data[0];
    const balance = [];

    for (let i = 0; i < Orders.length; i++) {
      balance.push(Earnings[i] - Orders[i]);
    }

    data[0].Balance = balance;
  };

  // Call the function to calculate balance for the given data
  calculateBalance(Data);

  console.log(Data[0].Balance);
  //calculate percentage increase in balnce
  const calculateOverallPercentageIncreaseInBalance = (BalanceArray) => {
    const firstBalance = BalanceArray[0];
    const lastBalance = BalanceArray[BalanceArray.length - 1];
    const overallPercentageIncreaseInBalance =
      ((lastBalance - firstBalance) / firstBalance) * 100;
    return overallPercentageIncreaseInBalance.toFixed(2) + "%";
  };

  const overallPercentageIncreaseee =
    calculateOverallPercentageIncreaseInBalance(Data[0].Balance);
  console.log(overallPercentageIncreaseee);
  //add balance values
  const calculateTotalBalance = (BalanceArray) => {
    return BalanceArray.reduce((total, balance) => total + balance, 0);
  };
  const totalBalance = calculateTotalBalance(Data[0].Balance);
  console.log(totalBalance);

  //calculation of new customers data
  const Customers = Data.map((cus) => {
    return cus.CustomersReffered;
  });
  console.log(Customers);
  //claculation of total percentage in customers
  const PercentageIncreaseInCustomers = (customersArray) => {
    const firstCustomer = customersArray[0];
    const lastCustomer = customersArray[customersArray.length - 1];
    const overallPercentageIncreaseInCustomers =
      ((lastCustomer - firstCustomer) / firstCustomer) * 100;
    return overallPercentageIncreaseInCustomers.toFixed(2) + "%";
  };
  const overallPercentageIncreaseByCustomers = PercentageIncreaseInCustomers(
    Data[0].CustomersReffered
  );
  console.log(overallPercentageIncreaseByCustomers);

  return (
    <main className="Container">
      <div className="dashboard-header">
        {Data.map((info) => {
          return (
            <>
              <h1>Hello {info.Name},</h1>
              <div className="search">
                <input type="text" placeholder="Search" />
              </div>
            </>
          );
        })}
      </div>
      <div className="Card-Container">
        <div className="Card">
          <div className="icon">
            <AiFillDollarCircle
              style={{
                fontSize: "80px",
                backgroundColor: "#B5CB99",
                borderRadius: "50%",
                height: "100px",
                width: "100px",
              }}
            />
          </div>
          <div className="Card-inner">
            <h2 style={{ color: "#2E97A7" }}>Earnings</h2>
            <span>${totalEarnings}</span>
            <div className="Inner-data">
              <MdArrowUpward style={{ color: "#618264" }} />
              {overallPercentageIncrease} <small>this Year.</small>
            </div>
          </div>
        </div>
        <div className="Card">
          <div className="icon">
            <AiOutlineBook
              style={{
                fontSize: "80px",
                backgroundColor: "#80B3FF",
                borderRadius: "50%",
                height: "100px",
                width: "100px",
              }}
            />
          </div>
          <div className="Card-inner">
            <h2 style={{ color: "#2E97A7" }}>Orders</h2>
            <span>${totalOrders}</span>
            <div className="Inner-data">
              <MdArrowUpward style={{ color: "#618264" }} />
              {overallPercentageIncreasee} <small>this Year.</small>
            </div>
          </div>
        </div>
        <div className="Card">
          <div className="icon">
            <BiSolidWalletAlt
              style={{
                fontSize: "80px",
                backgroundColor: "#98E4FF",
                borderRadius: "50%",
                height: "100px",
                width: "100px",
              }}
            />
          </div>
          <div className="Card-inner">
            <h2 style={{ color: "#2E97A7" }}>Balance</h2>
            <span>${totalBalance}</span>
            <div className="Inner-data">
              <MdArrowUpward style={{ color: "#618264" }} />
              {overallPercentageIncreaseee} <small>this Year.</small>
            </div>
          </div>
        </div>
        <div className="Card">
          <div className="icon">
            <IoBasketSharp
              style={{
                fontSize: "80px",
                backgroundColor: "#E95793",
                borderRadius: "50%",
                height: "100px",
                width: "100px",
              }}
            />
          </div>
          <div className="Card-inner">
            <h2 style={{ color: "#2E97A7" }}>Total Sales</h2>
            <span>${totalOrders}</span>
            <div className="Inner-data">
              <MdArrowUpward style={{ color: "#618264" }} />
              {overallPercentageIncreasee} <small>this Year.</small>
            </div>
          </div>
        </div>
      </div>
      <div className="Bar-container">
        <Barchart />
        <Doughnutchart />
      </div>
      <div className="table1">
        <div className="table-header">
          <h1>Product Sell</h1>
          <div>
            <input type="text" placeholder="Search" />
            <select>
              <option>1 Day back</option>
              <option>2 Days back</option>
              <option>3 Days back</option>
              <option>4 Days back</option>
              <option>5 Days back</option>
              <option>6 Days back</option>
              <option>7 Days back</option>
            </select>
          </div>
        </div>
        <BasicTable />
      </div>
    </main>
  );
}
const BasicTable = () => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => ProductDetailes, []);
  const TableInstance = useTable({
    columns: columns,
    data: data,
  });
  const { getTableProps, prepareRow, getTableBodyProps, headerGroups, rows } =
    TableInstance;
  return (
    <div className="table">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getFooterGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const Barchart = () => {
  return (
    <div className="barchart-container">
      <div className="Bar-header">
        <h1>Overview</h1>
        <select>
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>HalfYearly</option>
          <option>Yearly</option>
        </select>
      </div>
      <h3
        style={{
          fontSize: "14px",
          color: "#2E97A7",
          textAlign: "start",
          marginLeft: "210px",
        }}
      >
        Monthly Earnings
      </h3>
      <Bar options={options} data={data} className="bar-data" />
    </div>
  );
};
const Doughnutchart = () => {
  return (
    <div className="Doughnutchart-Container">
      <div>
        <h1>Customers</h1>
        <h2 style={{ color: "#2E97A7" }}>Customers that buy products</h2>
      </div>
      <Chart
        className="donut"
        type="donut"
        width={380}
        height={190}
        series={[10, 16, 24, 35, 45, 24, 43, 32, 43, 45, 32, 60]}
        options={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                    fontSize: 30,
                    color: "red",
                  },
                },
              },
            },
            dataLabels: {
              enabled: false,
            },
          },
        }}
      />
    </div>
  );
};
