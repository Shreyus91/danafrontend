import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HalfOptionDeletedata, PostHalfOptionData, UpdateHalfOptionData } from '../../services/HalfOptionServices';

const HalfOptionModal = ({id,
    setModal,
    updateState,
    showDeleteModal,
    setShowdeleteModal }) => {
    
    const dispatch = useDispatch()
    const [HalfOption, setHalfOption] = useState('')
    const [Wall,setWall] = useState('')
    const {singleData} = useSelector(state=> state.HalfOptionReducer)
    
    const halfoptionsingledata = {...singleData}
    const [datatarget,setDataTarget] = useState({...halfoptionsingledata.data})
    // handle clicks
    const handleUpdateChange = () => {
        const {_id,HalfOption,Wall} = datatarget
          dispatch(
            UpdateHalfOptionData({id:_id,HalfOption,Wall})
          );
        };
    const handleAddState = (e) => {
           dispatch(PostHalfOptionData({HalfOption,Wall}))
         
        };
      
    const deleteHandler = (e, id) => {
        
          dispatch(HalfOptionDeletedata(id))
          window.location.reload(false);
      
        }
      
    
    
  return (
    <div id="myModal" className="modal">
    <div className="modal-content">
        <span className="close" onClick={() => { setModal(false); setShowdeleteModal(false)  }}>
        &times;
      </span>
      {showDeleteModal ? <div>
        <div>Do You Really Want To delete?</div>
        <button onClick={(e)=> deleteHandler(e,id)} >Yes</button>
          <button onClick={() => { setModal(false); setShowdeleteModal(false)}} >No</button>
      </div>:<form >
         <div>
        { updateState?
         <input
              type="text"
              placeholder="HalfOption"
              defaultValue={halfoptionsingledata.data.HalfOption}
              onChange={(e) =>
                setDataTarget({ ...datatarget, HalfOption: e.target.value })
              }
            ></input>:
              <input type='text' placeholder="HalfOption" value={HalfOption} onChange={(e)=>setHalfOption(e.target.value)} ></input>
         }
         </div>
          <div>
{
  updateState?<input type="text" placeholder="Wall" defaultValue={halfoptionsingledata.data.Wall} onChange={(e)=> setDataTarget({...datatarget,Wall:e.target.value})} ></input>:<input type='text' placeholder="Wall" value={Wall} onChange={(e)=>setWall(e.target.value)} ></input>
}

          </div>
          <button type="submit" onClick={(e)=>updateState?handleUpdateChange(id):handleAddState(e) } > {updateState?'Update':'Add'} </button>
          </form>}
    </div>
  </div>
  )
}

export default HalfOptionModal