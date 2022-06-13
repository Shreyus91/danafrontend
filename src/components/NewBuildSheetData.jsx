import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PDFViewer } from "@react-pdf/renderer";
import PdfDoc from "./PdfDoc";
import { fetchTrackWidthPost } from "../services/TracwidthService";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchHousingBracketOption } from "../services/HousingBracketOptionService";
import { GetHalfOption } from "../services/HalfOptionServices";
import { GetDowellData } from "../services/DowellService";
import { GetBrkFlgOptionData } from "../services/BrkFlgOptionService";
import { GetBracketOptionData } from "../services/BracketOptionServices";
import { getAllBareDrawingNumberData } from "../services/BareDrawingNumberService";
import { getAllabs } from "../services/AbsServices";
const NewBuildSheetData = () => {
  const dispatch = useDispatch();
  const { data: trac, loading } = useSelector(
    (state) => state.TracWidthReducer
  );
  // const { data: abs } = useSelector((state) => state.ABsReducer)
  const { data: hoption } = useSelector((state) => state.HalfOptionReducer)
  const { data: bflangeoption } = useSelector((state) => state.BrkFlgReducer)
  const { data: trckwidth } = useSelector((state) => state.TracWidthReducer)
  const { data: abso } = useSelector((state) => state.ABsReducer)
  // const { data: dloption } = useSelector((state) => state.ABsReducer)
  // const { data: inductionhardeningoption } = useSelector((state) => state.ABsReducer)
  const { data: dowellpin } = useSelector((state) => state.DowellReducer)
  // const { data: venthol } = useSelector((state) => state.DowellReducer)
  const { data: brcktoption } = useSelector((state) => state.BracketOptionReducer)

  
  const [preview, setPreview] = useState(false);

  // build sheet states
  const [AxleHousingPartNo, setAxleHousingPartNo] = useState("");
  const [ServiceHousing, setServiceHousing] = useState("");
  const [Model, setModel] = useState("");
  const [OriginalWorkOrder, setOriginalWorkOrder] = useState("");
  // const [BareHousingDrawingNumber, setBareHousingDrawingNumber] = useState("");
  const [HousingHalfOption, setHousingHalfOption] = useState("");
  const [BrakeFlangeOption, setBrakeFlangeOption] = useState("");
  const [TrackWidth, setTrackWidth] = useState("");

  const [AbsOption, setAbsOption] = useState("");
  const [DiffLockOption, setDiffLockOption] = useState("");
  const [InductionHardeningOption, setInductionHardeningOption] = useState("");
  const [DowellPinOption, setDowellPinOption] = useState("");
  const [VentHoleOption, setVentHoleOption] = useState("");
  const [BracketOption, setBracketOption] = useState("");
  const [Comments, setComments] = useState("");
  const [RevWO, setRevWO] = useState("");
  const [Rev, setRev] = useState("");
  const [Description, setDescription] = useState("");
  const [RevBy, setRevBy] = useState("");
  const [ChkBy, setChkBy] = useState("");
  const [RevDate, setRevDate] = useState("");
  const [BracketDrawingNumber, setBracketDrawingNumber] = useState("");
  //

  const submitHandler = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(fetchTrackWidthPost());
    dispatch(fetchHousingBracketOption());
    dispatch(GetHalfOption());
    dispatch(GetDowellData());
    dispatch(GetBrkFlgOptionData());
    dispatch(GetBracketOptionData());
    dispatch(getAllBareDrawingNumberData());
    dispatch(getAllabs());
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (trac) {
    return (
      <div>
        {preview ? (
          <React.Fragment>
            <button onClick={() => setPreview(false)}>back</button>

            <PDFViewer style={{ height: "100vh", width: "100%" }}>
              <PdfDoc
              
              
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
              <form onSubmit={(e) => submitHandler(e)}>
                {/* axle housing part Number */}
              <div>
                Axle housing number: <input type="text" value={AxleHousingPartNo} onChange={(e)=>setAxleHousingPartNo(e.target.value)}></input>
                </div>
                {/* Service Housing Number */}
              <div>
                Service Housing: <input type="text" value={ServiceHousing} onChange={(e)=>setServiceHousing(e.target.value)}></input>
                </div>
                {/* Model */}
              <div>
                Model: <input type="text" value={Model} onChange={(e)=>setModel(e.target.value)}></input>
                </div>
                {/* Original Work Order */}
                <div>
                Original Work Order: <input type="text" value={OriginalWorkOrder} onChange={(e)=>setOriginalWorkOrder(e.target.value)}></input>
                </div>
                
                {/* bare housing drawing Number? */}
                {/* to be done */}
                {/* housing half option  */}

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(event, value) => setHousingHalfOption(value)}
                options={
                  hoption.map((res) => {
                    return res.data.map((r) => {
                      return r.HalfOption;
                    });
                  })[0]
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="halfoption" />
                )}
              />

                {/* brake flange option */}

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(event, value) => setBrakeFlangeOption(value)}
                options={
                  bflangeoption.map((res) => {
                    return res.data.map((r) => {
                      return r.BrkFlgOption;
                    });
                  })[0]
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="BrkFlangeOption" />
                )}
              />
                
                {/* brake flange option */}

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(event, value) => setTrackWidth(value)}
                options={
                  trckwidth.map((res) => {
                    return res.data.map((r) => {
                      return r.Track;
                    });
                  })[0]
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Track Width" />
                )}
              />
                
                 {/* ABS option */}

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(event, value) => setAbsOption(value)}
                options={
                  abso.map((res) => {
                    return res.data.map((r) => {
                      return r.ABS;
                    });
                  })[0]
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Track Width" />
                )}
                />
                
                       {/* Drift lock option */}

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(event, value) => setDiffLockOption(value)}
                options={
                  abso.map((res) => {
                    return res.data.map((r) => {
                      return r.ABS;
                    });
                  })[0]
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Drift" />
                )}
                />
                
                        {/* Induction hardening */}

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(event, value) => setInductionHardeningOption(value)}
                options={
                  abso.map((res) => {
                    return res.data.map((r) => {
                      return r.ABS;
                    });
                  })[0]
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Induction hardening" />
                )}
              />
                
                       {/* Dowell pin option */}

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(event, value) => setDowellPinOption(value)}
                options={
                  dowellpin.map((res) => {
                    return res.data.map((r) => {
                      return r.DowelPN;
                    });
                  })[0]
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Dowell Pin option" />
                )}
                />
                
                        {/* Vent Hole option */}

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(event, value) => setVentHoleOption(value)}
                options={
                  abso.map((res) => {
                    return res.data.map((r) => {
                      return r.ABS;
                    });
                  })[0]
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Vent Hole" />
                )}
              />
                
                       {/* Bracket Drawing Number */}
                <div>bracket drawing number</div>
                <input type='text' value={BracketDrawingNumber} onChange={(e) => setBracketDrawingNumber(e.target.value)} placeholder='bare drawing number'></input>
                
                
                        {/* Bracket option */}

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(event, value) => setBracketOption(value)}
                options={
                  brcktoption.map((res) => {
                    return res.data.map((r) => {
                      return r.BracketOption;
                    });
                  })[0]
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Vent Hole" />
                )}
                />
                
                {/* comments input */}

                <input type='text' value={Comments} onChange={(e)=>setComments(e.target.value)} placeholder='Comments'></input>
                {/* rev w/o input */}

                <input type='text' value={RevWO} onChange={(e)=>setRevWO(e.target.value)} placeholder='revwo'></input>
                {/* rev */}

                <input type='text' value={Rev} onChange={(e)=>setRev(e.target.value)} placeholder='rev'></input>
                {/* description inpput */}

                <input type='text' value={Description} onChange={(e)=>setDescription(e.target.value)} placeholder='description'></input>
                {/* RevBy inpput */}

                <input type='text' value={RevBy} onChange={(e)=>setRevBy(e.target.value)} placeholder='revby'></input>
                {/* Rev Date */}

                <input type='text' value={ChkBy} onChange={(e)=>setChkBy(e.target.value)} placeholder='checkby'></input>
                {/* CHKBY inpput */}

                <input type='text' value={RevDate} onChange={(e)=>setRevDate(e.target.value)} placeholder='revdate'></input>

              <button onClick={() => setPreview(true)}>View PDf</button>
            </form>
          </React.Fragment>
        )}
      </div>
    );
  }
};

export default NewBuildSheetData;
