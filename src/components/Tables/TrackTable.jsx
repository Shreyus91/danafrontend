import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchTrackWidthPost,
  getSingleTrackWidthData,
  TrackWidthDelete,
} from "../../services/TracwidthService";
import Modal from "../Modals/Modal";
import NewBuildSheetData from "../NewBuildSheetData";

const TrackTable = () => {
  const [ids, setIds] = useState("");
  const [track, setTrack] = useState("");
  const [BareDrawingNumber, setBareDrawingNumber] = useState("");
  const [OtoO, setOtoO] = useState("");
  const [addState, setAddState] = useState("");
  const [OAII, setOAII] = useState("");

  const [showmodal, setShowModal] = useState(false);
  const [showdeletemodal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const { data, loading } = useSelector(
    (state) => state.TracWidthReducer
  );

  useEffect(() => {
    dispatch(fetchTrackWidthPost());
    
  }, []);
  const updatehandler = (id) => {
    dispatch(getSingleTrackWidthData(id));
    setShowModal(true);
    setAddState(false);

    if (!loading) {
    }

    setIds(id);
  };

  const deleteHandler = (e, id) => {
    setIds(id);
    setShowModal(true)
    setShowDeleteModal(true)
    // dispatch(TrackWidthDelete(id));
    //
  };

  const AddDataHandler = () => {
    setShowModal(true);
    setAddState(true);
  };

  if (loading) {
    return <div>Loading... </div>;
  }

  if (data) {
    return (
      <div>
        <button onClick={() => AddDataHandler()}>Add Data</button>
        <Link to='/'><button>Back</button></Link>
        <table>
          <tr>
            <th>Track</th>
            <th>BareDrawingNumber</th>
            <th>OtoO</th>
            <th>OAII</th>
          </tr>

          {data.map((res) => (
            <React.Fragment>
              {res.data.map((r) => (
                <React.Fragment key={r._id}>
                  <tr>
                    <td>{r.Track}</td>
                    <td>{r.BareDrawingNumber}</td>
                    <td>{r.OtoO}</td>
                    <td>{r.OAII}</td>
                    <button
                      onClick={() => updatehandler(r._id)}
                      style={{ cursor: "pointer" }}
                    >
                      update
                    </button>
                    <button
                      onClick={(e) => deleteHandler(e, r._id)}
                      style={{ cursor: "pointer" }}
                    >
                      delete
                    </button>
                    {/* <button onClick={() => AddsDataHandler(r._id)}>Add single</button> */}
                  </tr>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </table>

        {showmodal ? (
          <div>
            <Modal
              id={ids}
              addState={addState}
              setShowModal={setShowModal}
              setTrack={setTrack}
              setBareDrawingNumber={setBareDrawingNumber}
              setOAII={setOAII}
              setOtoO={setOtoO}
              track={track}
              BareDrawingNumber={BareDrawingNumber}
              OtoO={OtoO}
              OAII={OAII}
              showdeletemodal={showdeletemodal}
              setShowDeleteModal={setShowDeleteModal}
            />
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}

     
      
      </div>
    );
  }
};

export default TrackTable;
