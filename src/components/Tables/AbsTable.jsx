import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllabs, GetSingleabs } from '../../services/AbsServices'
import AbsModal from '../Modals/AbsModal'

const AbsTable = () => {
    const [modal, setModal] = useState(false)
    const [ids, setIds] = useState()
    const [showDeleteModal, setShowdeleteModal] = useState(false)
    const [updateState,setUpdateState] = useState(false)
    const dispatch = useDispatch()
    const {loading,data} = useSelector((state)=> state.ABsReducer)
    useEffect(() => {
        dispatch(getAllabs())
    }, [])
    

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

    
    if (loading) {
        return <div>Loading..</div>
    }
    if (data) {
        return (
            <div>

            <button onClick={() => AddDataHandler()}>Add Data</button>
            
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