
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deleteabs, postabs, Updateabs } from "../../services/AbsServices";



const AbsModal = ({
  id,
  setModal,
  updateState,
  showDeleteModal,
  setShowdeleteModal,
}) => {

  const dispatch = useDispatch();
  const [ABS, setABS] = useState("");
  const [BareDrawingNumber, setBareDrawingNumber] = useState("");
  const [Block, setBlock] = useState("");
  const [BlIndex, setBlIndex] = useState("");
  const [SOFf, setSOFf] = useState("");
  const { loading, data, success, singleData } = useSelector(
    (state) => state.ABsReducer
  );

  const AbsSingleRouter = { ...singleData };
  const [datatarget, setDataTarget] = useState({ ...AbsSingleRouter.data });
  // handle clicks
    const handleUpdateChange = () => {
      console.log(datatarget)
    const { _id, BareDrawingNumber, ABS,Block,BlIndex,SOFf } = datatarget;
    dispatch(Updateabs({ id:_id, BareDrawingNumber, ABS,Block,BlIndex,SOFf }));
  };
  const handleAddState = (e) => {
    dispatch(postabs({ BareDrawingNumber, ABS,Block,BlIndex,SOFf }));
  };

  const deleteHandler = (e, id) => {
    dispatch(Deleteabs(id));
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
              
                                 
                          {/* ABS: */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="ABS"
                  defaultValue={AbsSingleRouter.data.ABS}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, ABS: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="ABS"
                  value={ABS}
                  onChange={(e) => setABS(e.target.value)}
                ></input>
              )}
                          </div>  

                          {/* BareDrawingNumber */}

                          <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="BareDrawingNumber"
                  defaultValue={AbsSingleRouter.data.BareDrawingNumber}
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
    {/* Block */}

    <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Block"
                  defaultValue={AbsSingleRouter.data.Block}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Block: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Block"
                  value={Block}
                  onChange={(e) => setBlock(e.target.value)}
                ></input>
              )}
                          </div> 

                          {/* BlIndex */}

                          
                          <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="BlIndex"
                  defaultValue={AbsSingleRouter.data.BlIndex}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, BlIndex: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="BlIndex"
                  value={BlIndex}
                  onChange={(e) => setBlIndex(e.target.value)}
                ></input>
              )}
                          </div> 

                          {/* SOFf */}

                          <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="SOFf"
                  defaultValue={AbsSingleRouter.data.SOFf}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, SOFf: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="SOFf"
                  value={SOFf}
                  onChange={(e) => setSOFf(e.target.value)}
                ></input>
              )}
                          </div> 
                          

            <button
              type="submit"
              onClick={(e) =>
                updateState ? handleUpdateChange(id) : handleAddState(e)
              }
            >
             
              {updateState ? "Update" : "Add"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AbsModal;
