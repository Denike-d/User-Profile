import {useState}  from 'react'
import ProfileDisplay from './ProfileDisplay';
import RepoTable from './RepoTable';

//const tableHeading =[{label: "Name"},{label:"Description"},{label: "Created on"}]

function ProfileForm() {
  const [userInput, setUserInput] = useState("");
  const[profileData, setProfileData] = useState({});
  const[error, setError] = useState('');
  const[repo, setRepo] = useState('');

  const handleChange = e => {
    setUserInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    getapi(api_url);
    
  }

  const api_url = "https://api.github.com/users/" + userInput
  //const repo_url = "https://api.github.com/users/" + userInput + "/repos"

  async function getapi(url) {
   const response = await fetch(url);
   if(response.ok){
     response.json().then((userPofile) => {
       setProfileData(userPofile)
       console.log(userPofile)
     })
   } else if (response.status == 404) {
      setError('Username is incorrect');
   }
   const repoResponse = await fetch("https://api.github.com/users/" + userInput + "/repos");
    // response.ok
    if(repoResponse.ok){
      repoResponse.json().then((userRepo) => {
        setRepo(userRepo)
        console.log(userRepo)
      })
    } else if (response.status == 404) {
       setError('Username is incorrect');
    }
  }
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
export default ProfileForm;