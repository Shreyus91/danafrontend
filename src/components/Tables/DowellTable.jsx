import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDowellData, SingleDowellData } from '../../services/DowellService'
import DowellModal from '../Modals/DowellModal'

const DowellTable = () => {
    const [modal, setModal] = useState(false)
    const [ids, setIds] = useState()
    const [showDeleteModal, setShowdeleteModal] = useState(false)
    const [updateState,setUpdateState] = useState(false)
    const dispatch = useDispatch()
    const {loading,data} = useSelector((state)=> state.DowellReducer)
    useEffect(() => {
        dispatch(GetDowellData())
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

        dispatch(SingleDowellData(id))
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
                        <th>Dowell</th>
                        <th>DowelPN</th>
                        <th>FTOff</th>
                        <th>Spacing</th>
                      </tr>
            {
                data[0].data.map((res)=><React.Fragment key = {res._id}>
                    <tr>
                        <td>
                          {res.Dowel}
                        </td>
                        <td>
                          {res.DowelPN}
                        </td>
                        <td>
                          {res.FTOff}
                        </td>
                        <td>
                          {res.Spacing}
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
              modal?<DowellModal id={ids} setModal={setModal} showDeleteModal={showDeleteModal} setShowdeleteModal={setShowdeleteModal} updateState={updateState} setUpdateState={setUpdateState} ></DowellModal>:<div></div>
            }
                     
                    </table>
            
                </div>
          )
    }
}

export default DowellTable