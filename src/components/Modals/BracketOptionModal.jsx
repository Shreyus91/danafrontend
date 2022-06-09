

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBracketOptionData, PostBracketOptionData, UpdateBracketOptionData } from "../../services/BracketOptionServices";


const BracketOptionModal = ({
  id,
  setModal,
  updateState,
  showDeleteModal,
  setShowdeleteModal,
}) => {
  const dispatch = useDispatch();
  const [BracketOption, setBracketOption] = useState("");
  const [TRod, setTRod] = useState("");
  const [SArm, setSArm] = useState("");
  const [LArm, setLArm] = useState("");
  const { loading, data, success, singleData } = useSelector(
    (state) => state.BracketOptionReducer
  );

  const BracketOptionSingledata = { ...singleData };
  const [datatarget, setDataTarget] = useState({ ...BracketOptionSingledata.data });
  // handle clicks
    const handleUpdateChange = () => {
      console.log(datatarget)
    const { _id, BracketOption, TRod, SArm, LArm } = datatarget;
    dispatch(UpdateBracketOptionData({ id:_id, BracketOption, TRod, SArm, LArm}));
  };
  const handleAddState = (e) => {
    dispatch(PostBracketOptionData({ BracketOption, TRod, SArm, LArm }));
  };

  const deleteHandler = (e, id) => {
    dispatch(DeleteBracketOptionData(id));
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
                  placeholder="BracketOption"
                  defaultValue={BracketOptionSingledata.data.BracketOption}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, BracketOption: e.target.value })
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
                          
                          {/* DowelPN */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="TRod"
                  defaultValue={BracketOptionSingledata.data.TRod}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, TRod: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="TRod"
                  value={TRod}
                  onChange={(e) => setTRod(e.target.value)}
                ></input>
              )}
                          </div>
                          
                          {/* SArm */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="SArm"
                  defaultValue={BracketOptionSingledata.data.SArm}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, SArm: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="SArm"
                  value={SArm}
                  onChange={(e) => setSArm(e.target.value)}
                ></input>
              )}
                          </div>
                                 
                          {/* LArm: */}
            <div>
              {updateState ? (
                <input
                  type="text"
                  placeholder="LArm"
                  defaultValue={BracketOptionSingledata.data.LArm}
                  onChange={(e) =>
                    setDataTarget({ ...datatarget, LArm: e.target.value })
                  }
                ></input>
              ) : (
                <input
                  type="text"
                  placeholder="LArm"
                  value={LArm}
                  onChange={(e) => setLArm(e.target.value)}
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

export default BracketOptionModal;
