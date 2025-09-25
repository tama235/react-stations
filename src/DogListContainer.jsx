// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"

export const DogListContainer = () => {
  const [breeds,setBreeds] =useState([])
  const [selectedBreed,setSelectedBreed] = useState("")
  const [list,setList] = useState([])
  
  
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((date) =>{
      const breedName = Object.keys(date.message)
      setBreeds(breedName)
      setSelectedBreed(breedName[0])
    })
    .catch((error) => console.log(error))
  },[])

  const handleChange = (event) => { 
    setSelectedBreed(event.target.value);
  }
  const dogApiFetch = () => {

    if(!selectedBreed){
      alert("犬種を選択してください");
      return;
    }

    const num = 12;
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/${num}`)
    .then((res) => res.json())
    .then((date) =>{
      if(date.status === "success"){
        setList(date.message)
      }else{
        console.error("失敗しました");
        setList([])
      }
    } )
    .catch((error) => console.log(error))
  }

  return (
  <>
    <BreedsSelect breeds={breeds} onChange = {handleChange} selectedBreed = {selectedBreed} />
    <button onClick={dogApiFetch}>表示</button>
    {list.map((url)=>(
      <img src={url} key={url}/>
    ))
    }
  </>
  )

}

export default DogListContainer
