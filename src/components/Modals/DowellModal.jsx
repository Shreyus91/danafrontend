import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteDowellData, PostDowellData, UpdateDowellData } from "../../services/DowellService";

const DowellModal = ({
  id,
  setModal,
  updateState,
  showDeleteModal,
  setShowdeleteModal,
}) => {
  const dispatch = useDispatch();
  const [Dowel, setDowel] = useState("");
  const [DowelPN, setDowelPN] = useState("");
  const [FTOff, setFTOff] = useState("");
  const [Spacing, setSpacing] = useState("");
  const {  singleData } = useSelector(
    (state) => state.DowellReducer
  );

  const dowellSingledata = { ...singleData };
  const [datatarget, setDataTarget] = useState({ ...dowellSingledata.data });
  // handle clicks
    const handleUpdateChange = () => {
      console.log(datatarget)
    const { _id, Dowel, DowelPN, FTOff, Spacing } = datatarget;
    dispatch(UpdateDowellData({ id:_id, Dowel, DowelPN, FTOff, Spacing }));
  };
  const handleAddState = (e) => {
    dispatch(PostDowellData({ Dowel, DowelPN, FTOff, Spacing }));
  };

  const deleteHandler = (e, id) => {
    dispatch(DeleteDowellData(id));
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
                  placeholder="Dowel"
                  defaultValue={dowellSingledata.data.Dowel}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Dowel: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Dowel"
                  value={Dowel}
                  onChange={(e) => setDowel(e.target.value)}
                ></input>
              )}
                          </div>
                          
                          {/* DowelPN */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="DowelPN"
                  defaultValue={dowellSingledata.data.DowelPN}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, DowelPN: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="DowelPN"
                  value={DowelPN}
                  onChange={(e) => setDowelPN(e.target.value)}
                ></input>
              )}
                          </div>
                          
                          {/* FToff */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="FTOff"
                  defaultValue={dowellSingledata.data.FTOff}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, FTOff: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="FTOff"
                  value={FTOff}
                  onChange={(e) => setFTOff(e.target.value)}
                ></input>
              )}
                          </div>
                                 
                          {/* Spacing: */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="Spacing"
                  defaultValue={dowellSingledata.data.Spacing}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, Spacing: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="Spacing"
                  value={Spacing}
                  onChange={(e) => setSpacing(e.target.value)}
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

export default DowellModal;
