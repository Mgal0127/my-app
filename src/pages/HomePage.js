import React from 'react';

var test = 0;


const HomePage = () => ( 
    <>
        <h1> Welcome to my Home Page </h1>
        <br></br>
        <input></input>
        <br></br>
<button id="testing_btn" className="btn btn-default" onClick={getCountry}>Click to search for Country {this.test}</button>
    </>
);

function getCountry(){
    test ++;
}

export default HomePage;