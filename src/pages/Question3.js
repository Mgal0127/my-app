import React, {  useEffect} from 'react';

const Question3 = () => {

  const [searchField, setSearchField] = React.useState("");
  const [countryList, setCountryList] = React.useState("");
  const [allCountryList, setAllCountryList] = React.useState("");
  let filtered_list = [];

  const handleChange = event => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/api/getAllCountries`);
      const body = await response.json();

      if(body.status === 404){
        setCountryList([]);
      }else{
        setAllCountryList(body);
        setCountryList(body);
      }

    }
    fetchData();
  }, []);

  useEffect(() => {
    if(allCountryList.length > 0){
      filtered_list = allCountryList.filter(function(country){
          return country.name.includes(searchField.trim());
      }).map(function({name, capital}){
            return {name, capital};
      });

      setCountryList(filtered_list);
    }
    
  }, [searchField]);

  return (
    <>
      <h1>Question No. 3</h1>
      <p>Using the same API ( https://restcountries.eu/ ) in the React front end list all the countries
        and a field to filter the country by name.</p>
      
      <br></br>
      <br></br>

      <input onChange={handleChange} value={searchField}></input>

      <br></br>
      <br></br>

      <ul className="list-group">
        {(countryList.length > 0) ? countryList.map((country, index) => (
              <li className="list-group-item list-group-item-success" key={index}>{country.name} - {country.capital}</li>
          )) : ''}
      </ul>      
    </>
    );
}

export default Question3;