import Login from "./Login.js"
import  { useDataLayerValue } from  './DataLayer'
import Dashboard from "./Dashboard.js";

function App() {
  const  [{user,password},dispatch] = useDataLayerValue();
  return (
    <div className="App">
      {
        !user  ?(<Login  />):(<Dashboard />)
      }
     
    </div>
  );
}

export default App;
