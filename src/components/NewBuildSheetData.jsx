import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  PDFViewer } from "@react-pdf/renderer";
import PdfDoc from "./PdfDoc";
import { fetchTrackWidthPost } from "../services/TracwidthService";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const NewBuildSheetData = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.TracWidthReducer);
  const [x, setX] = useState();
  const [bdNumber, setBdNumber] = useState();
  const [preview, setPreview] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(fetchTrackWidthPost());
  }, []);
  
  
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (data) {
    return (
      <div>
        {preview ? (
          <React.Fragment>
            <button onClick={() => setPreview(false)}>back</button>

            <PDFViewer style={{ height: "100vh", width: "100%" }}>
              <PdfDoc
                x={x}
                setX={setX}
                bdNumber={bdNumber}
                setBdNumber={setBdNumber}
              />
            </PDFViewer>
            {/* <PDFDownloadLink document={<PdfDoc x={x} setX={setX} bdNumber={bdNumber} setBdNumber={setBdNumber} />} fileName="somename.pdf">
                        {({ blob, url, loading, error }) =>
                            
        loading ? `loading ${console.log(blob)}` : 'Generate PDF'
      }
    </PDFDownloadLink> */}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {" "}
            <div>
              Axle housing number: <input type="text"></input>
            </div>
            <form onSubmit={(e) => submitHandler(e)}>
              <div>Track</div>

             
      <Autocomplete
      disablePortal
                  id="combo-box-demo"
                  onChange={(event, value) => setBdNumber(value)} 
      options={ data.map(res => { return res.data.map(r => { return r.Track }) })[0]}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Track" />}
      />
                
      <Autocomplete
      disablePortal
                  id="combo-box-demo"
                  onChange={(event, value) => setX(value)} 
                  options={ data.map(res => { return res.data.map(r => { return r.BareDrawingNumber }) })[0]}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Track" />}
      />

             
      <button onClick={() => setPreview(true)}>View PDf</button>
      </form>
      </React.Fragment>
      )}
      </div>
    );
  }
};

export default NewBuildSheetData;
