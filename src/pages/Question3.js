import React, {  useEffect} from 'react';

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
        <h1>Question No. 3</h1>
      <p>Using the same API ( https://restcountries.eu/ ) in the React front end list all the countries
        and a field to filter the country by name.</p>
      
      <br></br>
      <br></br>

      <input onChange={handleChange}
        value={searchField}></input>

      <br></br>
      <br></br>

      <table>
        <thead>
            <tr>
                <th>Country Name</th>
                <th>Capital City</th>
            </tr>
        </thead>
        <tbody>
            {(flag) ?
            countryList.map((country, index) => (
                <tr>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                </tr>

            ))
            : ''}
        </tbody>
      </table>
      
    </>
    );
}

export default Question3;