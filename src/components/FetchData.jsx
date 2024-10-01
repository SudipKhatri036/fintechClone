import React, { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(function () {
    async function getDataApi() {
      try {
        const resp = await fetch(
          `http://192.168.1.85:8000/frontend/companyDetails`,
        );
        if (!resp.ok) throw new Error("Error fetching data");
        const data = await resp.json();
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    getDataApi();
  }, []);
  return <div></div>;
}

export default FetchData;
