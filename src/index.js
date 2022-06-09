import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import {
    BrowserRouter,
    Switch,
    Route
    
    
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

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                        <App/>
                </Route>
                <Route exact   path='/newbuildsheet'
                >
                    <NewBuildSheetData/>
                </Route>
                <Route exact   path='/tracktable'
                >
                    <TrackTable/>
                </Route>
                <Route exact   path='/housingbracketoptiontable'
                >
                    <HousingBracketOptionTable/>
                </Route>
                <Route exact   path='/halfotiontable'
                >
                    <HalfOptionTable/>
                </Route>
                <Route exact   path='/dowelltable'
                >
                    <DowellTable/>
                </Route>
                <Route exact   path='/brkflgoption'
                >
                    <BrkFlgOptionTable/>
                </Route>
                <Route exact   path='/bracketoptiontable'
                >
                    <BracketOptionTable/>
                </Route>
                <Route exact   path='/baredrawingnumber'
                >
                    <BareDrawingNumberTable/>
                </Route>
                <Route exact   path='/abstable'
                >
                    <AbsTable/>
                </Route>
                <Route exact   path='/buildsheettable'
                >
                    <BuildSheetTable/>
                </Route>

        </Switch>
        </BrowserRouter>
    

    </Provider>
    , document.getElementById('root'))

