import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBuildSheetData, postBuildSheetData, UpdateBuildSheetData } from "../../services/BuildSheetService";

const BuildSheetModal = ({
  id,
  setModal,
  updateState,
  showDeleteModal,
  setShowdeleteModal,
}) => {
  const dispatch = useDispatch();
  const [AxleHousingPartNo, setAxleHousingPartNo] = useState("");
  const [ServiceHousing, setServiceHousing] = useState("");
  const [Model, setModel] = useState("");
  const [OriginalWorkOrder, setOriginalWorkOrder] = useState("");
  const [BareHousingDrawingNumber, setBareHousingDrawingNumber] = useState("");
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
  const { loading, data, success, singleData } = useSelector(
    (state) => state.BuilSheetReducer
  );

  const BareDrawingNumberSingledata = { ...singleData };
  const [datatarget, setDataTarget] = useState({
    ...BareDrawingNumberSingledata.data,
  });
  // handle clicks
  const handleUpdateChange = () => {
    console.log(datatarget);
    const {
      _id,
      AxleHousingPartNo,
      ServiceHousing,
      Model,
      OriginalWorkOrder,
      BareHousingDrawingNumber,
      HousingHalfOption,
      BrakeFlangeOption,
      TrackWidth,
      AbsOption,
      DiffLockOption,
      InductionHardeningOption,
      DowellPinOption,
      VentHoleOption,
      BracketDrawingNumber,
      BracketOption,
      Comments,
      RevWO,
      Rev,
      Description,
      RevBy,
      ChkBy,
      RevDate
    } = datatarget;
    dispatch(
        UpdateBuildSheetData({
        id: _id,
        AxleHousingPartNo,
        ServiceHousing,
        Model,
        OriginalWorkOrder,
        BareHousingDrawingNumber,
        HousingHalfOption,
        BrakeFlangeOption,
        TrackWidth,
        AbsOption,
      DiffLockOption,
      InductionHardeningOption,
      DowellPinOption,
      VentHoleOption,
      BracketDrawingNumber,
      BracketOption,
      Comments,
      RevWO,
      Rev,
      Description,
      RevBy,
      ChkBy,
      RevDate
      })
    );
  };
  const handleAddState = (e) => {
    dispatch(
      postBuildSheetData({
        AxleHousingPartNo,
        ServiceHousing,
        Model,
        OriginalWorkOrder,
        BareHousingDrawingNumber,
        HousingHalfOption,
        BrakeFlangeOption,
        TrackWidth,AbsOption,
        DiffLockOption,
        InductionHardeningOption,
        DowellPinOption,
        VentHoleOption,
        BracketDrawingNumber,
        BracketOption,
        Comments,
        RevWO,
        Rev,
        Description,
        RevBy,
        ChkBy,
        RevDate
      })
    );
  };

  const deleteHandler = (e, id) => {
    dispatch(DeleteBuildSheetData(id));
    window.location.reload(false);
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            setModal(false), setShowdeleteModal(false);
          }}
        >
          &times;
        </span>
        {showDeleteModal ? (
          <div>
            <div>Do You Really Want To delete?</div>
            <button onClick={(e) => deleteHandler(e, id)}>Yes</button>
            <button
              onClick={() => {
                setModal(false), setShowdeleteModal(false);
              }}
            >
              No
            </button>
          </div>
        ) : (
          <form>
            {/* Dowel */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="AxleHousingPartNo"
                  defaultValue={
                    BareDrawingNumberSingledata.data.AxleHousingPartNo
                  }
                  onChange={(e) =>
                    setDataTarget({
                      ...datatarget,
                      AxleHousingPartNo: e.target.value,
                    })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="AxleHousingPartNo"
                  value={AxleHousingPartNo}
                  onChange={(e) => setAxleHousingPartNo(e.target.value)}
                ></input>
              )}
            </div>

            {/* ServiceHousing */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="ServiceHousing"
                  defaultValue={BareDrawingNumberSingledata.data.ServiceHousing}
                  onChange={(e) =>
                    setDataTarget({
                      ...datatarget,
                      ServiceHousing: e.target.value,
                    })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="ServiceHousing"
                  value={ServiceHousing}
                  onChange={(e) => setServiceHousing(e.target.value)}
                ></input>
              )}
            </div>

            {/* Model */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Model"
                  defaultValue={BareDrawingNumberSingledata.data.Model}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Model: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Model"
                  value={Model}
                  onChange={(e) => setModel(e.target.value)}
                ></input>
              )}
            </div>

           

            {/* BareHousingDrawingNumber */}

            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="BareHousingDrawingNumber"
                  defaultValue={
                    BareDrawingNumberSingledata.data.BareHousingDrawingNumber
                  }
                  onChange={(e) =>
                    setDataTarget({
                      ...datatarget,
                      BareHousingDrawingNumber: e.target.value,
                    })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="BareHousingDrawingNumber"
                  value={BareHousingDrawingNumber}
                  onChange={(e) => setBareHousingDrawingNumber(e.target.value)}
                ></input>
              )}
            </div>
            {/* HousingHalfOption */}

            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="HousingHalfOption"
                  defaultValue={
                    BareDrawingNumberSingledata.data.HousingHalfOption
                  }
                  onChange={(e) =>
                    setDataTarget({
                      ...datatarget,
                      HousingHalfOption: e.target.value,
                    })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="HousingHalfOption"
                  value={HousingHalfOption}
                  onChange={(e) => setHousingHalfOption(e.target.value)}
                ></input>
              )}
            </div>

            {/* BrakeFlangeOption */}

            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="BrakeFlangeOption"
                  defaultValue={
                    BareDrawingNumberSingledata.data.BrakeFlangeOption
                  }
                  onChange={(e) =>
                    setDataTarget({
                      ...datatarget,
                      BrakeFlangeOption: e.target.value,
                    })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="BrakeFlangeOption"
                  value={BrakeFlangeOption}
                  onChange={(e) => setBrakeFlangeOption(e.target.value)}
                ></input>
              )}
            </div>

            {/* TrackWidth */}

            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="TrackWidth"
                  defaultValue={BareDrawingNumberSingledata.data.TrackWidth}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, TrackWidth: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="TrackWidth"
                  value={TrackWidth}
                  onChange={(e) => setTrackWidth(e.target.value)}
                ></input>
              )}
            </div>

            {/* Dowel */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="AbsOption"
                  defaultValue={BareDrawingNumberSingledata.data.AbsOption}
                  onChange={(e) =>
                    setDataTarget({
                      ...datatarget,
                      AbsOption: e.target.value,
                    })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="AbsOption"
                  value={AbsOption}
                  onChange={(e) => setAbsOption(e.target.value)}
                ></input>
              )}
            </div>

            {/* DiffLockOption */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="DiffLockOption"
                  defaultValue={BareDrawingNumberSingledata.data.DiffLockOption}
                  onChange={(e) =>
                    setDataTarget({
                      ...datatarget,
                      DiffLockOption: e.target.value,
                    })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="DiffLockOption"
                  value={DiffLockOption}
                  onChange={(e) => setDiffLockOption(e.target.value)}
                ></input>
              )}
            </div>

            {/* InductionHardeningOption: */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="InductionHardeningOption"
                  defaultValue={
                    BareDrawingNumberSingledata.data.InductionHardeningOption
                  }
                  onChange={(e) =>
                    setDataTarget({
                      ...datatarget,
                      InductionHardeningOption: e.target.value,
                    })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="InductionHardeningOption"
                  value={InductionHardeningOption}
                  onChange={(e) => setInductionHardeningOption(e.target.value)}
                ></input>
              )}
            </div>

            {/* DowellPinOption */}

            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="DowellPinOption"
                  defaultValue={BareDrawingNumberSingledata.data.DowellPinOption}
                  onChange={(e) =>
                    setDataTarget({
                      ...datatarget,
                      DowellPinOption: e.target.value,
                    })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="DowellPinOption"
                  value={DowellPinOption}
                  onChange={(e) => setDowellPinOption(e.target.value)}
                ></input>
              )}
            </div>
            {/* VentHoleOption */}

            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="VentHoleOption"
                  defaultValue={BareDrawingNumberSingledata.data.VentHoleOption}
                  onChange={(e) =>
                    setDataTarget({
                      ...datatarget,
                      VentHoleOption: e.target.value,
                    })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="VentHoleOption"
                  value={VentHoleOption}
                  onChange={(e) => setVentHoleOption(e.target.value)}
                ></input>
              )}
            </div>

              
              {/* BracketDrawing Number */}

              <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="BracketDrawingNumber"
                  defaultValue={BareDrawingNumberSingledata.data.BracketDrawingNumber}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, BracketDrawingNumber: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="BracketDrawingNumber"
                  value={BracketDrawingNumber}
                  onChange={(e) => setBracketDrawingNumber(e.target.value)}
                ></input>
              )}
                          </div>


            {/* BracketOption */}

            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="BracketOption"
                  defaultValue={BareDrawingNumberSingledata.data.BracketOption}
                  onChange={(e) =>
                    setDataTarget({
                      ...datatarget,
                      BracketOption: e.target.value,
                    })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="BracketOption"
                  value={BracketOption}
                  onChange={(e) => setBracketOption(e.target.value)}
                ></input>
              )}
            </div>

            {/* Comments */}

            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Comments"
                  defaultValue={BareDrawingNumberSingledata.data.Comments}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Comments: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Comments"
                  value={Comments}
                  onChange={(e) => setComments(e.target.value)}
                ></input>
              )}
            </div>

                                    
                          {/* RevWO: */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="RevWO"
                  defaultValue={BareDrawingNumberSingledata.data.RevWO}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, RevWO: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="RevWO"
                  value={RevWO}
                  onChange={(e) => setRevWO(e.target.value)}
                ></input>
              )}
                          </div>  

                          {/* Rev */}

                          <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Rev"
                  defaultValue={BareDrawingNumberSingledata.data.Rev}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Rev: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Rev"
                  value={Rev}
                  onChange={(e) => setRev(e.target.value)}
                ></input>
              )}
                          </div>  
    {/* Description */}

    <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Description"
                  defaultValue={BareDrawingNumberSingledata.data.Description}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Description: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Description"
                  value={Description}
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              )}
                          </div> 

                          {/* RevBy */}

                          
                          <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="RevBy"
                  defaultValue={BareDrawingNumberSingledata.data.RevBy}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, RevBy: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="RevBy"
                  value={RevBy}
                  onChange={(e) => setRevBy(e.target.value)}
                ></input>
              )}
                          </div> 
  
 {/* Dowel */}
 <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="ChkBy"
                  defaultValue={BareDrawingNumberSingledata.data.ChkBy}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, ChkBy: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="ChkBy"
                  value={ChkBy}
                  onChange={(e) => setChkBy(e.target.value)}
                ></input>
              )}
                          </div>
                          
                          {/* RevDate */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="RevDate"
                  defaultValue={BareDrawingNumberSingledata.data.RevDate}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, RevDate: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="RevDate"
                  value={RevDate}
                  onChange={(e) => setRevDate(e.target.value)}
                ></input>
              )}
                          </div>
                          


            <button
              type="submit"
              onClick={(e) =>
                updateState ? handleUpdateChange(id) : handleAddState(e)
              }
            >
              {" "}
              {updateState ? "Update" : "Add"}{" "}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BuildSheetModal;
