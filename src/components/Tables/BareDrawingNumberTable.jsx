import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBareDrawingNumberData, GetSingleBareDrawingNumberData } from '../../services/BareDrawingNumberService'
import BareDrawingNumberMIntermediateal from '../Modals/BareDrawingNumberModal'

const BareDrawingNumberTable = () => {
    const [modal, setModal] = useState(false)
    const [ids, setIds] = useState()
    const [showDeleteModal, setShowdeleteModal] = useState(false)
    const [updateState,setUpdateState] = useState(false)
    const dispatch = useDispatch()
    const {loading,data} = useSelector((state)=> state.BareDrawingReducer)
    useEffect(() => {
        dispatch(getAllBareDrawingNumberData())
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

        dispatch(GetSingleBareDrawingNumberData(id))
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
                        <th>BareDrawingNumber</th>
                        <th>OtoO</th>
                        <th>Intermediate</th>
                        <th>RO</th>
                        <th>Bowl</th>
                        <th>Angle</th>
                        <th>VOff</th>
                        <th>VSize</th>
                      </tr>
            {
                data[0].data.map((res)=><React.Fragment key = {res._id}>
                    <tr>
                        <td>
                          {res.BareDrawingNumber}
                        </td>
                        <td>
                          {res.OtoO}
                        </td>
                        <td>
                          {res.Intermediate}
                        </td>
                        <td>
                          {res.RO}
                        </td>
                        <td>
                          {res.Bowl}
                        </td>
                        <td>
                          {res.Angle}
                        </td>
                        <td>
                          {res.VOff}
                        </td>
                        <td>
                          {res.VSize}
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
              modal?<BareDrawingNumberMIntermediateal id={ids} setModal={setModal} showDeleteModal={showDeleteModal} setShowdeleteModal={setShowdeleteModal} updateState={updateState} setUpdateState={setUpdateState} ></BareDrawingNumberMIntermediateal>:<div></div>
            }
                     
                    </table>
            
                </div>
          )
    }
}

export default BareDrawingNumberTable