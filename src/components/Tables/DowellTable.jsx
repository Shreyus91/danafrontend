import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  GetDowellData,
  getSearch,
  SingleDowellData,
} from "../../services/DowellService";
import DowellModal from "../Modals/DowellModal";
import Pagination from "@mui/material/Pagination";

const DowellTable = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [modal, setModal] = useState(false);
  const [ids, setIds] = useState();
  const [search, setSearch] = useState("");
  const [showDeleteModal, setShowdeleteModal] = useState(false);
  const [updateState, setUpdateState] = useState(false);
  const dispatch = useDispatch();
  const { loading, data, skipCount } = useSelector(
    (state) => state.DowellReducer
  );
  useEffect(() => {
    dispatch(GetDowellData(page));
  }, [page]);

  const AddDataHandler = () => {
    setUpdateState(false);
    setModal(true);
  };

  const deleteHandler = (id) => {
    setModal(true);
    setShowdeleteModal(true);
    setIds(id);
  };

  const updatehandler = (id) => {
    dispatch(SingleDowellData(id));
    setUpdateState(true);
    setModal(true);
  };
  const handleSearch = () => {
    dispatch(getSearch(search));
  };

  if (loading) {
    return <div>Loading..</div>;
  }
  if (data) {
    console.log(page);
    return (
      <div>
        <Pagination page={page} onChange={handleChange} count={3} />

        <button onClick={() => AddDataHandler()}>Add Data</button>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
        ></input>
        <button onClick={() => handleSearch()}>Search</button>
        <table>
          <tr>
            <th>Dowell</th>
            <th>DowelPN</th>
            <th>FTOff</th>
            <th>Spacing</th>
          </tr>
          {data[0].data.map((res) => (
            <React.Fragment key={res._id}>
              <tr>
                <td>{res.Dowel}</td>
                <td>{res.DowelPN}</td>
                <td>{res.FTOff}</td>
                <td>{res.Spacing}</td>

                <button
                  onClick={() => updatehandler(res._id)}
                  style={{ cursor: "pointer" }}
                >
                  update
                </button>
                <button
                  onClick={(e) => deleteHandler(res._id)}
                  style={{ cursor: "pointer" }}
                >
                  delete
                </button>
              </tr>
            </React.Fragment>
          ))}
          {modal ? (
            <DowellModal
              id={ids}
              setModal={setModal}
              showDeleteModal={showDeleteModal}
              setShowdeleteModal={setShowdeleteModal}
              updateState={updateState}
              setUpdateState={setUpdateState}
            ></DowellModal>
          ) : (
            <div></div>
          )}
        </table>
      </div>
    );
  }
};

export default DowellTable;
