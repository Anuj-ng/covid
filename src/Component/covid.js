// import React, { useEffect, useState } from "react";
// import "./covid.css";
// const Covid = () => {
    
//   const [data, setData] = useState({});
  
//   const getCovidData = async () => {
//     try {
//       const res = await fetch('https://data.covid19india.org/data.json');
//       const actualData = await res.json();
//       console.log(actualData.statewise[0]);
//       setData(actualData.statewise[0]);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     getCovidData();
//   }, []);
//   return (
//     <>
//       <section className="mainbody">
//         <h1>LIVE</h1>
//         <h2>Covid-19 Tracker</h2>
//         <ul>
//           <li className="card">
//             <div className="card_main">
//               <div className="card_inner">
//                 <p className="card_name">
//                   <span>OUR </span>COUNTRY
//                 </p>
//                 <p className="card_total card_small">INDIA</p>
//               </div>
//             </div>
//           </li>
//           <li className="card">
//             <div className="card_main">
//               <div className="card_inner">
//                 <p className="card_name">
//                   <span>TOTAL </span>RECOVERED
//                 </p>
//                 <p className="card_total card_small">{data.recovered}</p>
//               </div>
//             </div>
//           </li>
//           <li className="card">
//             <div className="card_main">
//               <div className="card_inner">
//                 <p className="card_name">
//                   <span>TOTAL </span>CONFIRMED
//                 </p>
//                 <p className="card_total card_small">{data.confirmed}</p>
//               </div>
//             </div>
//           </li>
//           <li className="card">
//             <div className="card_main">
//               <div className="card_inner">
//                 <p className="card_name">
//                   <span>TOTAL </span>DEATHS
//                 </p>
//                 <p className="card_total card_small">{data.deaths}</p>
//               </div>
//             </div>
//           </li>
//           <li className="card">
//             <div className="card_main">
//               <div className="card_inner">
//                 <p className="card_name">
//                   <span>TOTAL </span>ACTIVE
//                 </p>
//                 <p className="card_total card_small">{data.active}</p>
//               </div>
//             </div>
//           </li>
//           <li className="card">
//             <div className="card_main">
//               <div className="card_inner">
//                 <p className="card_name">
//                   <span>LAST </span>UPDATED
//                 </p>
//                 <p className="card_total card_small">{data.lastupdatedtime}</p>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </section>
//     </>
//   );
// };

// export default Covid;
import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {

const [time, setTime] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);


  const [data, setData] = useState({
    confirmed: "0",
    recovered: "0",
    deaths: "0",
    active: "0",
    lastupdatedtime: "--"
  });


  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://disease.sh/v3/covid-19/countries/india"
      );
      const actualData = await res.json();

      setData({
        confirmed: actualData.cases,
        recovered: actualData.recovered,
        deaths: actualData.deaths,
        active: actualData.active,
        lastupdatedtime: new Date(actualData.updated).toLocaleString()
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <section className="mainbody">
      <h1>LIVE</h1>
      <h2>Covid-19 Tracker</h2>
<p className="clock">
  {time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })}
</p>

      <ul>
        <li className="card">
          <p className="card_name"><span>OUR </span>COUNTRY</p>
          <p className="card_total">INDIA</p>
        </li>

        <li className="card">
          <p className="card_name"><span>TOTAL </span>RECOVERED</p>
          <p className="card_total">{data.recovered}</p>
        </li>

        <li className="card">
          <p className="card_name"><span>TOTAL </span>CONFIRMED</p>
          <p className="card_total">{data.confirmed}</p>
        </li>

        <li className="card">
          <p className="card_name"><span>TOTAL </span>DEATHS</p>
          <p className="card_total">{data.deaths}</p>
        </li>

        <li className="card">
          <p className="card_name"><span>TOTAL </span>ACTIVE</p>
          <p className="card_total">{data.active}</p>
        </li>

        <li className="card">
          <p className="card_name"><span>LAST </span>UPDATED</p>
          <p className="card_total">{data.lastupdatedtime}</p>
        </li>
      </ul>
    </section>
  );
};

export default Covid;
