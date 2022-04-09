import { useEffect, useState} from 'react'
import ApiData from './component/ApiData';
import ProfileForm from './component/ProfileForm';
import RepoTable from './component/RepoTable';

function App() {
  return (
      <div>
        {/*<ProfileForm />*/}
        <ApiData />
      </div>
    );

  }
export default App;