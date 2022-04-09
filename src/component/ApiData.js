import {useState}  from 'react'
import ProfileDisplay from './ProfileDisplay';
import RepoTable from './RepoTable';

//const tableHeading =[{label: "Name"},{label:"Description"},{label: "Created on"}]

function ApiData() {
  const [userInput, setUserInput] = useState("");
  const[profileData, setProfileData] = useState({});
  const[error, setError] = useState('');
  const[repo, setRepo] = useState('');

  const handleChange = e => {
    setUserInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    callDataInOrder()
    
  }

  //const api_url = "https://api.github.com/users/" + userInput
  //const repo_url = "https://api.github.com/users/" + userInput + "/repos"

const getProfileData = async () => {
    const request = await fetch("https://api.github.com/users/" + userInput);
    const data = await request.json();
    return data;
};

  const getMoreAPIDataWithUrl = async newUrl => {
    const request = await fetch(newUrl);
    const data = await request.json();
    return data;
};

  const callDataInOrder = async () => {
    const personData = await getProfileData();
    setProfileData(personData)
    console.log(personData);

    const repoData = await getMoreAPIDataWithUrl("https://api.github.com/users/" + userInput + "/repos");
    setRepo(repoData)
    console.log(repoData);
  };

    return (
      <>
        <form>
        <input
          placeholder="Type a username"
          value={userInput}
          onChange={handleChange}
        />
        <button  onClick={handleClick}>Display Profile</button>
        
        </form>
        <ProfileDisplay profileData={profileData} />
       <RepoTable repo={repo} />
        </>
      );
    }
export default ApiData;

