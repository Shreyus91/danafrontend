import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHousingBracketOption, HousingBracketOptionSingleData } from '../../services/HousingBracketOptionService'
import HousingBracketOptionModal from '../Modals/HousingBracketOptionModal'

const HousingBracketOptionTable = () => {
  const[modal,setModal] = useState(false)
  const [showDeleteModal,setShowdeleteModal] = useState(false)
  const [updateState,setUpdateState] = useState(false)
  const [ids,setIds] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchHousingBracketOption())
    },[])

    const {loading,data} = useSelector((state)=> state.HousingBracketOptionReducer)

    // Add data handler function
    const AddDataHandler = () =>{
      setUpdateState(false)
      setModal(true)
    }

    // update data handler
    const updatehandler =(id)=>{
      dispatch(HousingBracketOptionSingleData(id))
      setModal(true)
      setUpdateState(true)
    }

    // delete data handler

    const deleteHandler = (id) =>{
      setModal(true)
      setShowdeleteModal(true)
      setIds(id)
    }
   
    if(loading){
        return <div>Loading...</div>
    }

    if(data){
      
  return (
    <div>

<button onClick={() => AddDataHandler()}>Add Data</button>

<table>
          <tr>
            <th>PartNo</th>
            <th>BracketOption</th>
          </tr>
{
    data[0].meta.map((res)=><React.Fragment key = {res._id}>
        <tr>
            <td>
              {res.PartNo}
            </td>
            <td>
              {res.BracketOption}
            </td>

            <button
                      onClick={() => updatehandler(res._id)}
                      style={{ cursor: "pointer" }}
                    >
                      update
                    </button>
                    <button
                      onClick={(e) => deleteHandler( res._id)}
                      style={{ cursor: "pointer" }}
                    >
                      delete
                    </button>
        </tr>
    </React.Fragment>)

}
{
  modal?<HousingBracketOptionModal id={ids} setModal={setModal} showDeleteModal={showDeleteModal} setShowdeleteModal={setShowdeleteModal} updateState={updateState} setUpdateState={setUpdateState} ></HousingBracketOptionModal>:<div></div>
}
         
        </table>

    </div>
  )}
}

export default HousingBracketOptionTable