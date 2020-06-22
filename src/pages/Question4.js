import React, {  useCallback, useEffect} from 'react';

const Question4 = () => {

    const [first_reel, setFirst] = React.useState("");
    const [second_reel, setSecond] = React.useState("");
    const [third_reel, setThird] = React.useState("");
    const [flag, setFlag] = React.useState("");

    const reel_1 = ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'];
    const reel_2 = ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon']
    const reel_3 = ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon'];

    const [user_coins, setCoins] = React.useState(20);

    useEffect(() => {
        let spinned = 0; 

        if(flag){
            const result = first_reel + '-' + second_reel + '-' + third_reel;
            switch (result){
                case 'cherry-cherry-cherry':
                    spinned = (user_coins + 50); 
                    console.log(spinned)

                    setCoins(spinned);
                    break;
                case 'apple-apple-apple':
                    spinned = (user_coins + 20); 
                    console.log(spinned)

                    setCoins(spinned);
                    break;
                case 'banana-banana-banana':
                    spinned = (user_coins + 15); 

                    console.log(spinned)

                    setCoins(spinned);
                    break;
                case 'lemon-lemon-lemon':
                    spinned = (user_coins + 3); 
                    console.log(spinned)

                    setCoins(spinned);
                    break;
                default:
                    checkOtherCombinations(result);

                }
                }
        
    }, [flag]);
    
  const spinReels = useCallback(async () => {
    let spinned = user_coins - 1; 
    setCoins(spinned);
    const min = 0;
    const max = 7;

    for (var i = 0; i <= 2; i++) {
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;

        switch(i){
            case 0:
                setFirst(reel_1[rand]);
                break;
            case 1:
                setSecond(reel_2[rand]);
                break;
            case 2:
                setThird(reel_3[rand]);
                setFlag(true);
                break;
        }
    }
  },)

  const checkOtherCombinations = (result) => {
      console.log('OTHER')
      let spinned = 0
      if(result.includes('banana-banana')){
        spinned = user_coins + 40; 
        setCoins(spinned);

      }else if(result.includes('cherry-cherry')){
        spinned = user_coins + 10; 
        setCoins(spinned);
      }else if(result.includes('apple=apple')){
        spinned = user_coins + 5; 
        setCoins(spinned);
      }
  };

  return (
    <>
      <h1>Question 4</h1>
      <p>Considering a Slot machine defined like this:</p>
      <p>- Reel1: [“cherry”, ”lemon”, “apple”, ”lemon”, “banana”, “banana”, ”lemon”, ”lemon”]</p>
      <p>- Reel2: [”lemon”, “apple”, ”lemon”, “lemon”, “cherry”, “apple”, ”banana”, ”lemon”]</p>
      <p>- Reel3: [”lemon”, “apple”, ”lemon”, “apple”, “cherry”, “lemon”, ”banana”, ”lemon”]</p>
      <p>Coins<br></br>
        The user start with 20 coins, when the user run the function the user will lose 1 coin,
        1 spin = 1 coin<br></br>
        . 3 cherries in a row: won 50 coins<br></br>
        . 2 cherries in a row: won 40 coins<br></br>
        . 3 Apples in a row: won 20 coins<br></br>
        . 2 Apples in a row: won 10 coins<br></br>
        . 3 Bananas in a row: won 15 coins<br></br>
        . 2 Bananas in a row: won 5 coins<br></br>
        . 3 lemons in a row: won 3 coins<br></br>
        Using these data, create a function that, when it’s called by the front end, gives back the
        result of a spin and show the result.
    </p>
      
      <br></br>
      <br></br>

  <button class="btn btn-info" disabled> Coin Total: {user_coins}</button>
      <br></br> <br></br>

      <button type="button" class="btn btn-primary"  onClick={spinReels}>Spin for coins !</button>


        <br>
        </br>
        <br>
        </br>

        <div class="row">
            <div class="column" >
                <h2>FIRST</h2>
                <button class="btn btn-warning" disabled>{first_reel}</button>
            </div>
            <div class="column">
                <h2>SECOND</h2>
                <button class="btn btn-danger" disabled>{second_reel}</button>
            </div>  
            <div class="column">
                <h2>THIRD</h2>
                <button class="btn btn-success" disabled>{third_reel}</button>
            </div>  
        </div>
        
    </>
    );
}

export default Question4;