
import './App.css';
import { Router,Route,Routes } from 'react-router-dom';
import CustomerForm from './Component/CustomerForm';
import DetailPage from './Component/DeatilPage';
import UpdateCustomerForm from './Component/UpdateCustomerForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DetailPage/>} />
        <Route path="/customer" element={<CustomerForm/>} />
        <Route path="/update-customer/:id" element={<UpdateCustomerForm/>} />
      </Routes>
      
      
      
    
     
    </div>
  );
}

export default App;
