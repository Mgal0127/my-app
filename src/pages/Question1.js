import React, { useEffect } from 'react';

const Question1 = () => {

  const [inputValue, setInputValue] = React.useState("");
  const [countryList, setCountryList] = React.useState([]);

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      if(inputValue.trim() !== ""){
        const response = await fetch(`http://localhost:8000/api/getCountries/${inputValue}/true`);
        const body = await response.json();
        
        if(body.status === 404){
          setCountryList([]);
        }else{
          setCountryList(body);
        }
      }else{
        setCountryList([]);
      }
    }
    fetchData();
  }, [inputValue]);

  return (
    <>
      <h1>Question No. 1</h1>
      <p>Write a function that connects to https://restcountries.eu/ and gets a unique country from a
      specific name given using the Node back end and send it to the front end.</p>
      <br></br>

      <input onChange={handleChange}
        value={inputValue}></input>

      <br></br>
      <br></br>
      
      <table className="table custom-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Capital City</th>
          </tr>
        </thead>
        <tbody>
          {(countryList.length > 0) ?
            countryList.map((country, index) => (
              <tr key={index}><td>{country.name}</td><td>{country.capital}</td></tr>
            ))
            : <tr><td></td><td></td></tr>}
        </tbody>
      </table>
    </>
    );
}

export default Question1;