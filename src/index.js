import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import {
    BrowserRouter,
    
    Route,
    Routes
    
    
  } from "react-router-dom";
import NewBuildSheetData from './components/NewBuildSheetData'
import TrackTable from './components/Tables/TrackTable'
import HousingBracketOptionTable from './components/Tables/HousingBracketOptionTable'
import HalfOptionTable from './components/Tables/HalfOptionTable'
import DowellTable from './components/Tables/DowellTable'
import BrkFlgOptionTable from './components/Tables/BrkFlgOptionTable'
import BracketOptionTable from './components/Tables/BracketOptionTable'
import BareDrawingNumberTable from './components/Tables/BareDrawingNumberTable'
import AbsTable from './components/Tables/AbsTable'
import BuildSheetTable from './components/Tables/BuildSheetTable'
import Login from './components/User/Login'
import Protected from './components/Protected'
import EditTable from './components/EditTable/EditTable'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Login/>}>
                        
                </Route>
                <Route path='app' element={<App/>}>
                        
                </Route>
                <Route   path='newbuildsheet' element={<Protected Component={NewBuildSheetData }/>}
                >
                    
                </Route>
                <Route    path='tracktable' element={ <Protected Component={TrackTable }/>}
                >
                   
                </Route>
                <Route    path='housingbracketoptiontable' element={ <Protected Component={HousingBracketOptionTable }/>}
                >
                    
                </Route>
                <Route    path='halfotiontable' element={ <Protected Component={HalfOptionTable }/>}
                
                >
                   
                </Route>
                <Route    path='/dowelltable' element={ <Protected Component={DowellTable }/>} 
                >
                   
                </Route>
                <Route exact   path='brkflgoption' element={ <Protected Component={BrkFlgOptionTable }/>}
                >
                    
                </Route>
            <Route exact   path='bracketoptiontable' element={ <Protected Component={BracketOptionTable }/>}
                >
                    
                </Route>
        <Route exact   path='baredrawingnumber' element={ <Protected Component={BareDrawingNumberTable }/>}
                >
                    
                </Route>
                <Route exact   path='abstable' element={ <Protected Component={AbsTable }/>}
                >
                   
                </Route>
                <Route    path='buildsheettable' element={ <Protected Component={BuildSheetTable }/>}
                >
                    
                </Route>
                <Route    path='edittable' element={ <Protected Component={EditTable }/>}
                >
                    
                </Route>

        </Routes>
        </BrowserRouter>
    

    </Provider>
    , document.getElementById('root'))

