import UserProfileClass from "./components/LifeCycleClassComponent"
import UserProfile from "./components/LifeCycleFunctionalComponent"
import ShowHideText from "./components/ShowHideText"
import TwoWayBinding from "./components/TwoWayBinding"
import ParentComponentUseCallback from "./components/UseCallback2"
import UserCard from "./components/Usercard"
import UserList from "./components/Userlist"

function App() {
  
  return (
    <>
      {/* <UserCard name="Amar" age = {22}/> */}
      {/* <UserList/> */}
      {/* <ShowHideText/> */}
      {/* <TwoWayBinding/> */}
      {/* <UserProfile/> */}
      {/* <UserProfileClass/> */}
      <ParentComponentUseCallback/>
    </>
  )
}

export default App
