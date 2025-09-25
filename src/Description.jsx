// @ts-check

import { useState } from "react";
import DogImage from "./DogImage";

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("");
    const fetchDogImage = () =>{
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((json) => setDogUrl(json.message))
      .catch(() => alert("error"));
    };
  return(
  <>
      <p>「犬の画像を表示をするサイトです」</p>
      <button  className='button' onClick={() => fetchDogImage() }>更新 </button>
      <DogImage imageUrl={dogUrl}/>
  </>
  );
};

export default Description
