import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux'
import { getAllBuildSheetData, geteSearch, GetSingleBuildSheetData } from '../../services/BuildSheetService'
import BuildSheetModal from '../Modals/BuildSheetModal'

const BuildSheetTable = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value)
  };
  const [search, setSearch] = useState('')
    const [modal, setModal] = useState(false)
    const [ids, setIds] = useState()
    const [showDeleteModal, setShowdeleteModal] = useState(false)
    const [updateState,setUpdateState] = useState(false)
    const dispatch = useDispatch()
    const {loading,data} = useSelector((state)=> state.BuilSheetReducer)
    useEffect(() => {
        dispatch(getAllBuildSheetData(page))
    }, [page])
    

    const AddDataHandler = () => {
        setUpdateState(false)
        setModal(true)
    }

    const deleteHandler = (id) => {
        setModal(true)
        setShowdeleteModal(true)
        setIds(id)
    }

    const updatehandler = (id) => {

        dispatch(GetSingleBuildSheetData(id))
        setUpdateState(true)
        setModal(true)
    }

    const handleSearch = () => {
      dispatch(geteSearch(search))
    }
    if (loading) {
        return <div>Loading..</div>
    }
    if (data) {
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
                        <th>AxleHousingPartNo</th>
                        <th>ServiceHousing</th>
                        <th>Model</th>
                        <th>OriginalWorkOrder</th>
                        <th>BareHousingDrawingNumber</th>
                        <th>HousingHalfOption</th>
                        <th>BrakeFlangeOption</th>
                        <th>TrackWidth</th>
                        <th>AbsOption</th>
                        <th>DiffLockOption</th>
                        <th>InductionHardeningOption</th>
                        <th>DowellPinOption</th>
                        <th>VentHoleOption</th>
                        <th>BracketDrawingNumber</th>
                        <th>BracketOption</th>
                        <th>Comments</th>
                        <th>RevWO</th>
                        <th>Rev</th>
                        <th>Description</th>
                        <th>RevBy</th>
                        <th>ChkBy</th>
                        <th>RevDate</th>
                      </tr>
            {
                data[0].data.map((res)=><React.Fragment key = {res._id}>
                    <tr>
                        <td>
                          {res.AxleHousingPartNo}
                        </td>
                        <td>
                          {res.ServiceHousing}
                        </td>
                        <td>
                          {res.Model}
                        </td>
                        <td>
                          {res.OriginalWorkOrder}
                        </td>
                        <td>
                          {res.BareHousingDrawingNumber}
                        </td>
                        <td>
                          {res.HousingHalfOption}
                        </td>
                        <td>
                          {res.BrakeFlangeOption}
                        </td>
                        <td>
                          {res.TrackWidth}
                        </td>
                        <td>
                          {res.AbsOption}
                        </td>
                        <td>
                          {res.DiffLockOption}
                        </td>
                        <td>
                          {res.InductionHardeningOption}
                        </td>
                        <td>
                          {res.DowellPinOption}
                        </td>
                        <td>
                          {res.VentHoleOption}
                        </td>
                        <td>
                          {res.BracketDrawingNumber}
                        </td>
                        <td>
                          {res.BracketOption}
                        </td>
                        <td>
                          {res.Comments}
                        </td>
                        <td>
                          {res.RevWO}
                        </td>
                        <td>
                          {res.Rev}
                        </td>
                        <td>
                          {res.Description}
                        </td>
                        <td>
                          {res.RevBy}
                        </td>
                        <td>
                          {res.ChkBy}
                        </td>
                        <td>
                          {res.RevDate}
                        </td>
                      
                       
            
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
                </React.Fragment>)
            
            }
            {
              modal?<BuildSheetModal id={ids} setModal={setModal} showDeleteModal={showDeleteModal} setShowdeleteModal={setShowdeleteModal} updateState={updateState} setUpdateState={setUpdateState} ></BuildSheetModal>:<div></div>
            }
                     
                    </table>
            
                </div>
          )
    }
}

export default BuildSheetTable