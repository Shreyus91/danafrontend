import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetBrkFlgOptionData, SingleBrkFlgOption } from '../../services/BrkFlgOptionService'
import BrkFlgOptionModal from '../Modals/BrkFlgOptionModal'

const BrkFlgOptionTable = () => {
    const [modal, setModal] = useState(false)
    const [ids, setIds] = useState()
    const [showDeleteModal, setShowdeleteModal] = useState(false)
    const [updateState,setUpdateState] = useState(false)
    const dispatch = useDispatch()
    const {loading,data} = useSelector((state)=> state.BrkFlgReducer)
    useEffect(() => {
        dispatch(GetBrkFlgOptionData())
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

        dispatch(SingleBrkFlgOption(id))
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
                        <th>BrkFlgOption</th>
                        <th>FLOff</th>
                        <th>OD</th>
                        <th>Pilot</th>
                        <th>InOD</th>
                        <th>BCDiam</th>
                        <th>Index</th>
                        <th>Size</th>
                        <th>Num</th>
                      </tr>
            {
                data[0].data.map((res)=><React.Fragment key = {res._id}>
                    <tr>
                        <td>
                          {res.BrkFlgOption}
                        </td>
                        <td>
                          {res.FLOff}
                        </td>
                        <td>
                          {res.OD}
                        </td>
                        <td>
                          {res.Pilot}
                        </td>
                        <td>
                          {res.InOD}
                        </td>
                        <td>
                          {res.BCDiam}
                        </td>
                        <td>
                          {res.Index}
                        </td>
                        <td>
                          {res.Size}
                        </td>
                        <td>
                          {res.Num}
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
              modal?<BrkFlgOptionModal id={ids} setModal={setModal} showDeleteModal={showDeleteModal} setShowdeleteModal={setShowdeleteModal} updateState={updateState} setUpdateState={setUpdateState} ></BrkFlgOptionModal>:<div></div>
            }
                     
                    </table>
            
                </div>
          )
    }
}

export default BrkFlgOptionTable