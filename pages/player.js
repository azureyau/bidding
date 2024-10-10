import { useEffect, useState } from "react";
import MainFrame from "@/src/Component/MainFrame";

export default function Player() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://biddingapi.onrender.com/api/listing")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  if (!data)
    return (
      <>
        <div class="spinner-border" role="status"></div> <p>loading.. wait</p>
      </>
    );
  return (
    <>
      <p>Player: {data?.player}</p>
      <MainFrame data={data} />
    </>
  );
}
