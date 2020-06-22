import React, {  useCallback, useEffect} from 'react';

const Question3 = () => {

  const [searchField, setSearchField] = React.useState("");
  const [countryList, setCountryList] = React.useState("");
  const [allCountryList, setAllCountryList] = React.useState("");
  const [flag, setFlag] = React.useState("");
  let filtered_list = [];

  const handleChange = event => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/api/getAllCountries`);
      const body = await response.json();
      setAllCountryList(body);
      if(!flag){
        setCountryList(body);
      }
      setFlag(true);

    }
    fetchData();
  },);

  useEffect(() => {
    if(flag){
        filtered_list = allCountryList.filter(function(country){
            return country.name.includes(searchField);
        }).map(function({name, capital}){
             return {name, capital};
        });

        setCountryList(filtered_list);
    }
    
  }, [searchField]);

  return (
    <>
      <h1>Welcome to My New Page</h1>

      <br></br>

      <input onChange={handleChange}
        value={searchField}></input>

      <br></br>

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

export default Question3;