// @ts-check

export const BreedsSelect = ({breeds,onChange,selectedBreed}) => {
  return(
    <select onChange={onChange} value={selectedBreed}>
    {breeds.map(breed => (
      <option value={breed} key = {breed}>{breed}</option>
    ))}
    </select>
  ) 
}

export default BreedsSelect
