import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetHalfOption, getmSearch, SingleHalfOptionData } from '../../services/HalfOptionServices'
import HalfOptionModal from '../Modals/HalfOptionModal'
import Pagination from '@mui/material/Pagination';

const HalfOptionTable = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value)
  };
    const [modal, setModal] = useState(false)
    const [search, setSearch] = useState('')
    const [ids, setIds] = useState()
    const [showDeleteModal, setShowdeleteModal] = useState(false)
    const [updateState,setUpdateState] = useState(false)
    const dispatch = useDispatch()
    const {loading,data} = useSelector((state)=> state.HalfOptionReducer)
    useEffect(() => {
        dispatch(GetHalfOption(page))
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

        dispatch(SingleHalfOptionData(id))
        setUpdateState(true)
        setModal(true)
    }
    const handleSearch = () => {
      dispatch(getmSearch(search))
    }
    
    if (loading) {
        return <div>Loading..</div>
    }
    if (data) {
        return (
            <div>
<Pagination page={page} onChange={handleChange} count={3}/>
            <button onClick={() => AddDataHandler()}>Add Data</button>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
<button onClick={()=>handleSearch()}>Search</button>
            <table>
                      <tr>
                        <th>HalfOption</th>
                        <th>Wall</th>
                      </tr>
            {
                data[0].data.map((res)=><React.Fragment key = {res._id}>
                    <tr>
                        <td>
                          {res.HalfOption}
                        </td>
                        <td>
                          {res.Wall}
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
              modal?<HalfOptionModal id={ids} setModal={setModal} showDeleteModal={showDeleteModal} setShowdeleteModal={setShowdeleteModal} updateState={updateState} setUpdateState={setUpdateState} ></HalfOptionModal>:<div></div>
            }
                     
                    </table>
            
                </div>
          )
    }
}

export default HalfOptionTable