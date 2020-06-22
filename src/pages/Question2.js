import React, {  useCallback} from 'react';

const Question2 = () => {

  const [inputValue, setInputValue] = React.useState("");
  const [countryList, setCountryList] = React.useState("");
  const [flag, setFlag] = React.useState("");

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const sendRequest = useCallback(async () => {
      const response = await fetch(`http://localhost:8000/api/getCountries/${inputValue}/false`);
      const body = await response.json();
      setCountryList(body);
      setFlag(true);
  },)


  return (
    <>
      <h1>Question No. 2</h1>
      <p>Using the same API ( https://restcountries.eu/ ), and from an array of string, write a function
      that returns a list of countries where their name matches at least a part of one of these string
      use the Node back end and send it to the front end.</p>

      <br></br>
      <br></br>

      <input onChange={handleChange}
        value={inputValue}></input>

      <br></br>
      <br></br>

      <button type="button" class="btn btn-primary" onClick={sendRequest}>Search for Countries</button>

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

export default Question2;