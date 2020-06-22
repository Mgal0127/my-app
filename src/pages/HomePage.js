import React, {  useCallback, useState, useEffect } from 'react';

const Homepage = () => {

  const [inputValue, setInputValue] = React.useState("");
  const [countryList, setCountryList] = React.useState("");
  const [flag, setFlag] = React.useState("");

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const sendRequest = useCallback(async () => {
      const response = await fetch(`http://localhost:8000/api/getCountries/${inputValue}/true`);
      const body = await response.json();
      setCountryList(body);
      setFlag(true);
  },)


  return (
    <>
      <h1>Welcome to My New Page</h1>

      <br></br>

      <input onChange={handleChange}
        value={inputValue}></input>

      <br></br>

      <button onClick={sendRequest}>Search for Country</button>

      <div className='form-container'>
        {(flag) ?
          countryList.map((country, index) => (
            <li key={index}>{country.name} - Capital City Name: {country.capital}</li>
          ))
          : ''}
      </div>
    </>
    );
}

export default Homepage;