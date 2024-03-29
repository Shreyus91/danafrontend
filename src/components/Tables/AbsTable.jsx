import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux'
import { getAllabs, getSearch, GetSingleabs } from '../../services/AbsServices'
import AbsModal from '../Modals/AbsModal'

const AbsTable = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value)
  };
  const [search,setSearch] = useState('')
    const [modal, setModal] = useState(false)
    const [ids, setIds] = useState()
    const [showDeleteModal, setShowdeleteModal] = useState(false)
    const [updateState,setUpdateState] = useState(false)
    const dispatch = useDispatch()
    const {loading,data} = useSelector((state)=> state.ABsReducer)
    useEffect(() => {
        dispatch(getAllabs(page))
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

        dispatch(GetSingleabs(id))
        setUpdateState(true)
        setModal(true)
    }

  const handleSearch = () => {
    dispatch(getSearch(search))
  }
    
    if (loading) {
        return <div>Loading..</div>
    }
    if (data) {
        return (
            <div>
               <Pagination page={page} onChange={handleChange} count={3}/>
            <button onClick={() => AddDataHandler()}>Add Data</button>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search"></input>
            <button onClick={()=>handleSearch()}>search</button>
            
            <table>
                      <tr>
                        <th>ABS</th>
                        <th>BareDrawingNumber</th>
                        <th>Block</th>
                        <th>BlIndex</th>
                        <th>SOFf</th>
                        
                      </tr>
            {
                data[0].data.map((res)=><React.Fragment key = {res._id}>
                    <tr>
                        <td>
                          {res.ABS}
                        </td>
                        <td>
                          {res.BareDrawingNumber}
                        </td>
                        <td>
                          {res.Block}
                        </td>
                        <td>
                          {res.BlIndex}
                        </td>
                        <td>
                          {res.SOFf}
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
              modal?<AbsModal id={ids} setModal={setModal} showDeleteModal={showDeleteModal} setShowdeleteModal={setShowdeleteModal} updateState={updateState} setUpdateState={setUpdateState} ></AbsModal>:<div></div>
            }
                     
                    </table>
            
                </div>
          )
    }
}

export default AbsTable