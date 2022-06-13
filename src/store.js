import { configureStore } from "@reduxjs/toolkit";
import { absSliceReducer } from "./services/AbsServices";
import { BareDrawingNumberSliceReducer } from "./services/BareDrawingNumberService";
import { BracketOptionSliceReducer } from "./services/BracketOptionServices";
import { BrkFlgOptionReducer } from "./services/BrkFlgOptionService";
import { BuildSheetSliceReducer } from "./services/BuildSheetService";
import { DowellSliceReducer } from "./services/DowellService";
import { HalfOptionSliceReducer } from "./services/HalfOptionServices";
import {  housingbracketoptionSliceReducer } from "./services/HousingBracketOptionService";
import {  TrackWidthSliceReducer } from "./services/TracwidthService";
import { LoginSliceReducer } from "./services/userServices";
import rootreducer from './services/DowellService'
const store = configureStore({
    reducer: {
        TracWidthReducer: TrackWidthSliceReducer, HousingBracketOptionReducer: housingbracketoptionSliceReducer,
        HalfOptionReducer: HalfOptionSliceReducer,
        DowellReducer: DowellSliceReducer,
        BrkFlgReducer: BrkFlgOptionReducer,
        BracketOptionReducer: BracketOptionSliceReducer,
        BareDrawingReducer: BareDrawingNumberSliceReducer,
        ABsReducer: absSliceReducer,
        BuilSheetReducer: BuildSheetSliceReducer,
        userReducer: LoginSliceReducer,
        reducer:rootreducer
    },

})

export default store