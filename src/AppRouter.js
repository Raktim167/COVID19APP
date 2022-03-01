import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from "./App"
import Map from "./components/Map"

const AppRouter= ()=>{
 return(
     <BrowserRouter>
     <Routes>
         <Route path='/' element={<App/>}/>     
         <Route path='/map' element={<Map/>}/>  
     </Routes>
         </BrowserRouter>
 )
}
export default AppRouter