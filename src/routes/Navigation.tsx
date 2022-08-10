import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom";
import { routes } from './routes';
import logo from '../logo.svg';
import { Suspense } from "react";

const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map( ({to,name}) => (
                  <li key={to}>
                    <NavLink  to={to}
                              className={({isActive})=> isActive ? 'nav-active' : ''}>
                              {name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
          <Routes>
            {routes.map( ({path,component : Component}) => (
                <Route 
                  key={path}
                  path={path}
                  element={<Component/>}
                />
              ))
            }
            <Route path="/*" element={<Navigate to={routes[0].to}/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation;