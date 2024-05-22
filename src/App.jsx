import { useEffect, useState } from "react"
import User from "./User";

export default function App() {
  const [users,setUsers]=useState([]);
  const [isLoading,setLoading]=useState(true);
  useEffect(function(){
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>setUsers(data)).finally(()=>{
      setLoading(false);
    });
  },[])
  return (
    <>
    <h1>User List</h1>
    {isLoading?<h1>Loading...</h1>:<ul>
      {users.map(user=>{
        return <User key={user.id} name={user.name}></User>
      })}
    </ul>}
    
    </>
  )
}
