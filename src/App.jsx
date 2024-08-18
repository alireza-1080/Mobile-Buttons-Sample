import './App.css';
import MobileButton from './components/MobileButton/MobileButton';
import { IoCall } from "react-icons/io5";
import { FaBluetoothB } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function App() {
  const buttonCategories = [
    {title: "call",icon: IoCall},
    {title: "bluetooth",icon: FaBluetoothB},
    {title: "wifi",icon: FaWifi},
    {title: "location",icon: FaLocationDot},
    {title: "dnd",icon: FaMoon},
    {title: "theme",icon: FaSun},
]

  return (
    <div className='body'>
      <div className="app-container">
        {
          buttonCategories.map(item => {
            return <MobileButton key={item.title} {...item}/>
          })
        }
      </div>
    </div>
  )
}

export default App