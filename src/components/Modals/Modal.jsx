import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrackWidthAddData, TrackWidthDelete, TrackWidthUpdate } from "../../services/TracwidthService";
import './Modal.css'
const Modal = ({
  id,
  setShowModal,
  setTrack,
  setBareDrawingNumber,
  setOtoO,
  setOAII,
  track,
  BareDrawingNumber,
  OtoO,
  OAII,
  addState,
  showdeletemodal,
  setShowDeleteModal,
}) => {
  const { singleData } = useSelector((state) => state.TracWidthReducer);
  const trackdata = { ...singleData };
  const [datatarget, setDataTarget] = useState({ ...trackdata });

  const dispatch = useDispatch();
  const handleUpdateChange = (e) => {
    const { Track, BareDrawingNumber, OtoO, OAII } = datatarget;
    dispatch(
      TrackWidthUpdate({ id, track: Track, BareDrawingNumber, OtoO, OAII })
    );
  };
  const handleAddState = (e) => {
    dispatch(TrackWidthAddData({ track, BareDrawingNumber, OtoO, OAII }));
  };

  const deleteHandler = (id) => {
    dispatch(TrackWidthDelete(id))
    window.location.reload(false);
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => { setShowModal(false); setShowDeleteModal(false)}}>
          &times;
        </span>
        {showdeletemodal ? <div>
          <div>Do You Really Want To delete?</div>
          <button onClick={()=> deleteHandler(id)} >Yes</button>
          <button onClick={() => { setShowModal(false); setShowDeleteModal(false)}} >No</button>
        </div>:<form>
          <div>
            {addState ? (
              <input
                type="text"
                placeholder="Track"
                value={track}
                onChange={(e) => setTrack(e.target.value)}
              ></input>
            ) : (
              <input
                type="text"
                placeholder="Track"
                defaultValue={trackdata.data.Track}
                onChange={(e) =>
                  setDataTarget({ ...datatarget, Track: e.target.value })
                }
              ></input>
            )}
          </div>
          <div>
            {addState ? (
              <input
                type="text"
                placeholder="BareDrawingNumber"
                value={BareDrawingNumber}
                onChange={(e) => setBareDrawingNumber(e.target.value)}
              ></input>
            ) : (
              <input
                type="text"
                placeholder="BareDrawingNumber"
                defaultValue={trackdata.data.BareDrawingNumber}
                onChange={(e) =>
                  setDataTarget({
                    ...datatarget,
                    BareDrawingNumber: e.target.value,
                  })
                }
              ></input>
            )}
          </div>
          <div>
            {addState ? (
              <input
                type="text"
                placeholder="OtoO"
                value={OtoO}
                onChange={(e) => setOtoO(e.target.value)}
              ></input>
            ) : (
              <input
                type="text"
                placeholder="OtoO"
                defaultValue={trackdata.data.OtoO}
                onChange={(e) =>
                  setDataTarget({ ...datatarget, OtoO: e.target.value })
                }
              ></input>
            )}
          </div>
          <div>
            {addState ? (
              <input
                type="text"
                placeholder="OAII"
                value={OAII}
                onChange={(e) => setOAII(e.target.value)}
              ></input>
            ) : (
              <input
                type="text"
                placeholder="OAII"
                defaultValue={trackdata.data.OAII}
                onChange={(e) =>
                  setDataTarget({ ...datatarget, OAII: e.target.value })
                }
              ></input>
            )}
          </div>
          <button
            type="submit"
            onClick={(e) =>
              addState ? handleAddState(e) : handleUpdateChange(e)
            }
          >
            {addState ? "Add" : "Update"}
          </button>
        </form>}
      </div>
    </div>
  );
};

export default Modal;
