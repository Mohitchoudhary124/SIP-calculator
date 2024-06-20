// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// function Calc() {
//   const [monthlyInvestment, setMonthlyInvestment] = useState(500);
//   const [investmentDuration, setInvestmentDuration] = useState(1);
//   const [annualReturn, setAnnualReturn] = useState(1);
//   const [chartData, setChartData] = useState([]);
//   const [totalInvested, setTotalInvested] = useState(0);
//   const [gains, setGains] = useState(0);

//   useEffect(() => {
//     const calculateChartData = () => {
//       const data = [];
//       let totalInvestedValue = 0;
//       const totalMonths = investmentDuration * 12; 
    
//       for (let i = 0; i <= investmentDuration; i++) {
//         const years = i;
//         const r = (annualReturn / 100) / 12;
//         const n = years * 12;
//         const P = monthlyInvestment;
//         const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
//         data.push({ years, futureValue: parseFloat(futureValue.toFixed(2)) });
//       }
    
//       totalInvestedValue = monthlyInvestment * totalMonths;
//       setTotalInvested(parseFloat(totalInvestedValue.toFixed(2)));
//       setGains(parseFloat((data[data.length - 1]?.futureValue || 0) - totalInvestedValue).toFixed(2));
    
//       return data;
//     };

//     const newData = calculateChartData();
//     setChartData(newData);
//   }, [monthlyInvestment, investmentDuration, annualReturn]);

//   const investmentChange = (e) => {
//     setMonthlyInvestment(parseInt(e.target.value) || 0);
//   };

//   const yearsChange = (e) => {
//     setInvestmentDuration(parseInt(e.target.value) || 1);
//   };

//   const growthrateChange = (e) => {
//     setAnnualReturn(parseInt(e.target.value) || 0);
//   };

//   return (
//     <section>
//       <div className="sip">
//         <h2>SIP Calculator</h2>
//         <h3>This SIP calculator allows you to calculate the amount you will accumulate on your monthly investment.</h3>
//         <div className="sip-inner">
//           <h3>Calculate the future value of your SIP investment</h3>
//           <div className="input-value">
//             <div className="monthly">
//               <p>I want to invest monthly ₹ {monthlyInvestment}</p>
//               <input
//                 type="range"
//                 min="500"
//                 step="100"
//                 max="100000"
//                 value={monthlyInvestment}
//                 onChange={investmentChange}
//                 className="slider"
//               />
//             </div>
//             <div className="period">
//               <p>For a period of {investmentDuration} Years</p>
//               <input
//                 type="range"
//                 min="1"
//                 max="50"
//                 value={investmentDuration}
//                 onChange={yearsChange}
//                 className="slider"
//               />    
//             </div>
//             <div className="growth">
//               <p>Growth Rate {annualReturn} %</p>
//               <input
//                 type="range"
//                 min="1"
//                 max="25"
//                 value={annualReturn}
//                 onChange={growthrateChange}
//                 className="slider"
//               />
//             </div>
//           </div>
//           {/* <button onClick={() => alert(`Future Value: ${chartData[chartData.length - 1]?.futureValue || 0}`)}>
//             Future Value
//           </button> */}
//            <div className='barchart'>
//             <div className='barchart-inner'>
//           <ResponsiveContainer width={600} height={400} >
//             <BarChart data={chartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="years" />
//               <YAxis/>
//               <Tooltip />
//               <Bar dataKey="futureValue" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//           </div>
//           <div className='totalamount'>
//             <h4>Future Value   <span className='green'>₹  {chartData[chartData.length - 1]?.futureValue || 0}</span></h4>
//             <h4>Total invested   <span className='black'>₹ {totalInvested}</span></h4>
//             <h4>Gains   <span className='black1'>₹ {gains}</span></h4>
//           </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Calc;


import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function formatAmount(value) {
  if (value >= 10000000) {
    return `${(value / 10000000).toFixed(2)} Cr`;
  } else if (value >= 100000) {
    return `${(value / 100000).toFixed(2)} L`;
  } else {
    return `${value}`;
  }
}

function Calc() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  const [investmentDuration, setInvestmentDuration] = useState(1);
  const [annualReturn, setAnnualReturn] = useState(1);
  const [chartData, setChartData] = useState([]);
  const [totalInvested, setTotalInvested] = useState(0);
  const [gains, setGains] = useState(0);

  useEffect(() => {
    const calculateChartData = () => {
      const data = [];
      let totalInvestedValue = 0;
      const totalMonths = investmentDuration * 12;

      for (let i = 0; i <= investmentDuration; i++) {
        const years = i;
        const r = (annualReturn / 100) / 12;
        const n = years * 12;
        const P = monthlyInvestment;
        const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        data.push({ years, futureValue: parseFloat(futureValue.toFixed(2)) });
      }

      totalInvestedValue = monthlyInvestment * totalMonths;
      setTotalInvested(parseFloat(totalInvestedValue.toFixed(2)));
      setGains(parseFloat((data[data.length - 1]?.futureValue || 0) - totalInvestedValue).toFixed(2));

      return data;
    };

    const newData = calculateChartData();
    setChartData(newData);
  }, [monthlyInvestment, investmentDuration, annualReturn]);

  const investmentChange = (e) => {
    setMonthlyInvestment(parseInt(e.target.value) || 0);
  };

  const yearsChange = (e) => {
    setInvestmentDuration(parseInt(e.target.value) || 1);
  };

  const growthrateChange = (e) => {
    setAnnualReturn(parseInt(e.target.value) || 0);
  };

  return (
    <section>
      <div className="sip">
        <h2>SIP Calculator</h2>
        <h3>This SIP calculator allows you to calculate the amount you will accumulate on your monthly investment.</h3>
        <div className="sip-inner">
          <h3>Calculate the future value of your SIP investment</h3>
          <div className="input-value">
            <div className="monthly">
              <p>I want to invest monthly ₹ {monthlyInvestment}</p>
              <input
                type="range"
                min="500"
                step="100"
                max="100000"
                value={monthlyInvestment}
                onChange={investmentChange}
                className="slider"
              />
            </div>
            <div className="period">
              <p>For a period of {investmentDuration} Years</p>
              <input
                type="range"
                min="1"
                max="50"
                value={investmentDuration}
                onChange={yearsChange}
                className="slider"
              />    
            </div>
            <div className="growth">
              <p>Growth Rate {annualReturn} %</p>
              <input
                type="range"
                min="1"
                max="25"
                value={annualReturn}
                onChange={growthrateChange}
                className="slider"
              />
            </div>
          </div>
          <button onClick={() => alert(`Future Value: ${chartData[chartData.length - 1]?.futureValue || 0}`)}>
            Future Value
          </button>
           <div className='barchart'>
            <div className='barchart-inner'>
          <ResponsiveContainer width={600} height={400} >
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="years" />
              <YAxis tickFormatter={formatAmount} />
              <Tooltip formatter={(value) => `₹${value}`} />
              <Bar dataKey="futureValue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          </div>
          <div className='totalamount'>
            <h4>Future Value   <span className='green'>₹  {chartData[chartData.length - 1]?.futureValue || 0}</span></h4>
            <h4>Total invested   <span className='black'>₹ {formatAmount(totalInvested)}</span></h4>
            <h4>Gains   <span className='black1'>₹ {formatAmount(gains)}</span></h4>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calc;
