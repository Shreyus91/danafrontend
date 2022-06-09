import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBrkFlgOption, PostBrkFlangeOption, UpdateBrkFlgOption } from "../../services/BrkFlgOptionService";

const BrkFlgOptionModal = ({
  id,
  setModal,
  updateState,
  showDeleteModal,
  setShowdeleteModal,
}) => {
  const dispatch = useDispatch();
  const [BrkFlgOption, setBrkFlgOption] = useState("");
  const [FLOff, setFLOff] = useState("");
  const [OD, setOD] = useState("");
  const [Pilot, setPilot] = useState("");
  const [InOD, setInOD] = useState("");
  const [BCDiam, setBCDiam] = useState("");
  const [Index, setIndex] = useState("");
  const [Size, setSize] = useState("");
  const [Num, setNum] = useState("");
  const { loading, data, success, singleData } = useSelector(
    (state) => state.BrkFlgReducer
  );

  const BrkFlgOptionSingledata = { ...singleData };
  const [datatarget, setDataTarget] = useState({ ...BrkFlgOptionSingledata.data });
  // handle clicks
    const handleUpdateChange = () => {
      console.log(datatarget)
    const { _id, BrkFlgOption, FLOff, OD, Pilot,InOD,BCDiam,Index,Size,Num } = datatarget;
    dispatch(UpdateBrkFlgOption({ id:_id, BrkFlgOption, FLOff, OD, Pilot,InOD,BCDiam,Index,Size,Num }));
  };
  const handleAddState = (e) => {
    dispatch(PostBrkFlangeOption({ BrkFlgOption, FLOff, OD, Pilot,InOD,BCDiam,Index,Size,Num }));
  };

  const deleteHandler = (e, id) => {
    dispatch(DeleteBrkFlgOption(id));
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
                  placeholder="BrkFlgOption"
                  defaultValue={BrkFlgOptionSingledata.data.BrkFlgOption}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, BrkFlgOption: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="BrkFlgOption"
                  value={BrkFlgOption}
                  onChange={(e) => setBrkFlgOption(e.target.value)}
                ></input>
              )}
                          </div>
                          
                          {/* FLOff */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="FLOff"
                  defaultValue={BrkFlgOptionSingledata.data.FLOff}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, FLOff: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="FLOff"
                  value={FLOff}
                  onChange={(e) => setFLOff(e.target.value)}
                ></input>
              )}
                          </div>
                          
                          {/* OD */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="OD"
                  defaultValue={BrkFlgOptionSingledata.data.OD}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, OD: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="OD"
                  value={OD}
                  onChange={(e) => setOD(e.target.value)}
                ></input>
              )}
                          </div>
                                 
                          {/* Pilot: */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Pilot"
                  defaultValue={BrkFlgOptionSingledata.data.Pilot}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Pilot: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Pilot"
                  value={Pilot}
                  onChange={(e) => setPilot(e.target.value)}
                ></input>
              )}
                          </div>  

                          {/* InOD */}

                          <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="InOD"
                  defaultValue={BrkFlgOptionSingledata.data.InOD}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, InOD: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="InOD"
                  value={InOD}
                  onChange={(e) => setInOD(e.target.value)}
                ></input>
              )}
                          </div>  
    {/* BCDiam */}

    <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="BCDiam"
                  defaultValue={BrkFlgOptionSingledata.data.BCDiam}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, BCDiam: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="BCDiam"
                  value={BCDiam}
                  onChange={(e) => setBCDiam(e.target.value)}
                ></input>
              )}
                          </div> 

                          {/* Index */}

                          
                          <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Index"
                  defaultValue={BrkFlgOptionSingledata.data.Index}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Index: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Index"
                  value={Index}
                  onChange={(e) => setIndex(e.target.value)}
                ></input>
              )}
                          </div> 

                          {/* Size */}

                          <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Size"
                  defaultValue={BrkFlgOptionSingledata.data.Size}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Size: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Size"
                  value={Size}
                  onChange={(e) => setSize(e.target.value)}
                ></input>
              )}
                          </div> 
                          {/* Num */}

                          <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Num"
                  defaultValue={BrkFlgOptionSingledata.data.Num}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Num: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Num"
                  value={Num}
                  onChange={(e) => setNum(e.target.value)}
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

export default BrkFlgOptionModal;
