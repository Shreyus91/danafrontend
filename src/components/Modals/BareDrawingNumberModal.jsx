



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBareDrawingNumberData, postBareDrawingNumberData, UpdateBareDrawingNumberData } from "../../services/BareDrawingNumberService";


const BareDrawingNumberMIntermediateal = ({
  id,
  setModal,
  updateState,
  showDeleteModal,
  setShowdeleteModal,
}) => {
  const dispatch = useDispatch();
  const [BareDrawingNumber, setBareDrawingNumber] = useState("");
  const [OtoO, setOtoO] = useState("");
  const [Intermediate, setIntermediate] = useState("");
  const [RO, setRO] = useState("");
  const [Bowl, setBowl] = useState("");
  const [Angle, setAngle] = useState("");
  const [VOff, setVOff] = useState("");
  const [VSize, setVSize] = useState("");
  const {  singleData } = useSelector(
    (state) => state.BareDrawingReducer
  );

  const BareDrawingNumberSingledata = { ...singleData };
  const [datatarget, setDataTarget] = useState({ ...BareDrawingNumberSingledata.data });
  // handle clicks
    const handleUpdateChange = () => {
      console.log(datatarget)
    const { _id, BareDrawingNumber, OtoO, Intermediate, RO,Bowl,Angle,VOff,VSize,Num } = datatarget;
    dispatch(UpdateBareDrawingNumberData({ id:_id, BareDrawingNumber, OtoO, Intermediate, RO,Bowl,Angle,VOff,VSize,Num }));
  };
  const handleAddState = (e) => {
    dispatch(postBareDrawingNumberData({ BareDrawingNumber, OtoO, Intermediate, RO,Bowl,Angle,VOff,VSize }));
  };

  const deleteHandler = (e, id) => {
    dispatch(DeleteBareDrawingNumberData(id));
    window.location.reload(false);
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            setModal(false); setShowdeleteModal(false);
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
                setModal(false); setShowdeleteModal(false);
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
                  placeholder="BareDrawingNumber"
                  defaultValue={BareDrawingNumberSingledata.data.BareDrawingNumber}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, BareDrawingNumber: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="BareDrawingNumber"
                  value={BareDrawingNumber}
                  onChange={(e) => setBareDrawingNumber(e.target.value)}
                ></input>
              )}
                          </div>
                          
                          {/* OtoO */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="OtoO"
                  defaultValue={BareDrawingNumberSingledata.data.OtoO}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, OtoO: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="OtoO"
                  value={OtoO}
                  onChange={(e) => setOtoO(e.target.value)}
                ></input>
              )}
                          </div>
                          
                          {/* Intermediate */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Intermediate"
                  defaultValue={BareDrawingNumberSingledata.data.Intermediate}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Intermediate: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Intermediate"
                  value={Intermediate}
                  onChange={(e) => setIntermediate(e.target.value)}
                ></input>
              )}
                          </div>
                                 
                          {/* RO: */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="RO"
                  defaultValue={BareDrawingNumberSingledata.data.RO}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, RO: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="RO"
                  value={RO}
                  onChange={(e) => setRO(e.target.value)}
                ></input>
              )}
                          </div>  

                          {/* Bowl */}

                          <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Bowl"
                  defaultValue={BareDrawingNumberSingledata.data.Bowl}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Bowl: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Bowl"
                  value={Bowl}
                  onChange={(e) => setBowl(e.target.value)}
                ></input>
              )}
                          </div>  
    {/* Angle */}

    <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Angle"
                  defaultValue={BareDrawingNumberSingledata.data.Angle}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Angle: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Angle"
                  value={Angle}
                  onChange={(e) => setAngle(e.target.value)}
                ></input>
              )}
                          </div> 

                          {/* VOff */}

                          
                          <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="VOff"
                  defaultValue={BareDrawingNumberSingledata.data.VOff}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, VOff: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="VOff"
                  value={VOff}
                  onChange={(e) => setVOff(e.target.value)}
                ></input>
              )}
                          </div> 

                          {/* VSize */}

                          <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="VSize"
                  defaultValue={BareDrawingNumberSingledata.data.VSize}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, VSize: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="VSize"
                  value={VSize}
                  onChange={(e) => setVSize(e.target.value)}
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

export default BareDrawingNumberMIntermediateal;
