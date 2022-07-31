import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import NotFound from './pages/NotFound/NotFound';
import { productInputs, userInputs } from './formSource';
import DarkModeContext from './components/context/AppContext';
import {useContext} from 'react'

function App() {

const {state, dispatch} = useContext(DarkModeContext) 

  return (
    
    <Router>
    <div className={state.dark ? "app dark" : "app"}>
      <Routes>
        {/* hoeme login register routes */}
        <Route path="/">
     <Route index element={<Home />}/>
     <Route path="login" element={<Login />}/>
     <Route path="notFound" element={<NotFound />}/>
     <Route path="*" element={<NotFound />}/>
        </Route>
     {/* users */}
     <Route path="users">
     <Route index element={<List />}/>
     <Route path="new" element={<New inputs={userInputs} title="Add new User"/>}/>
     <Route path=":userId" element={<Single />}/>
     </Route>
     {/* products */}
     <Route path="products">
     <Route index element={<List />}/>
     <Route path="new" element={<New inputs={productInputs} title="Add new Product"/>}/>
     <Route path=":productId" element={<Single />}/>
     </Route>
 
     </Routes>
    </div>
    </Router>

  );
}

export default App;
