import React, {  useCallback } from 'react';

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
      <h1>Question No. 1</h1>
      <p>Write a function that connects to https://restcountries.eu/ and gets a unique country from a
      specific name given using the Node back end and send it to the front end.</p>
      <br></br>

      <input onChange={handleChange}
        value={inputValue}></input>

      <br></br>
      <br></br>

      <button type="button" class="btn btn-primary" onClick={sendRequest}>Search for Country</button>
      
      <br></br>
      <br></br>

      {(flag) ?
            countryList.map((country, index) => (
                <p>{country.name} with the capital city '{country.capital}'</p>

            ))
            : ''}
    </>
    );
}

export default Homepage;