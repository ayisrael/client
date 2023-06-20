
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HeaderAdmin from './comps_admin/headerAdmin';
import LoginAdmin from './comps_admin/loginAdmin';
import UsersList from './comps_admin/users/usersList';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/admin/*" element={<HeaderAdmin />} />
      </Routes>
      <Routes>

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/users" element={<UsersList />} />
        {/* <Route path="/admin/categories" element={<CategoriesList />} />
        <Route path="/admin/addCategory" element={<AddCategoryForm />} />
        <Route path="/admin/editCategory/:id" element={<EditCategory />} />
        <Route path="/admin/foods" element={<FoodsList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
