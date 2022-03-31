import {useEffect, useState}  from 'react'


function Profile() {
  const [userInput, setUserInput] = useState("");
  const[data, setData] = useState([]);
  const[error, setError] = useState('');

  const handleChange = e => {
    setUserInput(e.target.value);
  };

  //let apiData;

  const handleClick = (e) => {
    e.preventDefault();
    console.log('data')
    getapi(api_url);
  }

  const api_url = "https://api.github.com/users/" + userInput

  async function getapi(url) {
    console.log('url =' + url)
   const response = await fetch(url);

   // response.ok
   if(response.ok){
     response.json().then((userPofile) =>{
       setData(userPofile);
     });
   } else if (response.status == 404) {
      setError('Username is incorrect');
   }

    console.log('response =' + response)
    return response.json();
  }

 
  {/*useEffect(() => {
  fetch('https://api.github.com/users' + userInput)
  .then((response) => response.json())
  .then((setData) => console.log(setData))
  }, []);

  let apiData = 
  {/*async function getData(url) {
    const response = await fetch('https://api.github.com/users' + userInput);
  
    return response.json();
  }
  
const apiData = await getData(url);*/}

   {/*if(data) {
     return(
       <ul>
       {data.map(user =>(
         <li>{user.login}</li>
       ))}
       </ul>
     )
    }*/}

    return (
        <div>
        <form>
        <input
          placeholder="Type a username"
          value={userInput}
          onChange={handleChange}
    />
        <button type="submit" onClick={handleClick}>Display Profile</button>
        </form>
        </div>
      );
  
    }
    
  export default Profile;