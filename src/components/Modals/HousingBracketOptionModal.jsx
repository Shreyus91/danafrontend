import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteHoisingBracketOption, HousingBracketOptionUpdate, PostHousingBracketOption } from "../../services/HousingBracketOptionService";
import { TrackWidthAddData, TrackWidthDelete, TrackWidthUpdate } from "../../services/TracwidthService";
import './Modal.css'
const HousingBracketOptionModal = ({
  id,
  setModal,
  updateState,
  showDeleteModal,
  setShowdeleteModal,
}) => {
    const [PartNo,setPartNo] = useState('')
    const [BracketOption,setBracketOption] = useState('')
  const { loading,data,success,singleData } = useSelector((state) => state.HousingBracketOptionReducer);
  
  const housingbodata = { ...singleData };
  const [datatarget, setDataTarget] = useState({ ...housingbodata.data });
  const dispatch = useDispatch();
  const handleUpdateChange = () => {
  const {_id,PartNo,BracketOption} = datatarget
    dispatch(
    HousingBracketOptionUpdate({id:_id,PartNo,BracketOption})
    );
  };
  const handleAddState = (e) => {
    dispatch(PostHousingBracketOption({PartNo,BracketOption}))
   
  };

  const deleteHandler = (e,id) => {
    dispatch(DeleteHoisingBracketOption(id))
    window.location.reload(false);

  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => {setModal(false), setShowdeleteModal(false)  }}>
          &times;
        </span>
        {showDeleteModal ? <div>
          <div>Do You Really Want To delete?</div>
          <button onClick={(e)=> deleteHandler(e,id)} >Yes</button>
          <button onClick={() => {setModal(false), setShowdeleteModal(false)}} >No</button>
        </div>:<form >
           <div>
          { updateState?
           <input
                type="text"
                placeholder="PartNo"
                defaultValue={housingbodata.data.PartNo}
                onChange={(e) =>
                  setDataTarget({ ...datatarget, PartNo: e.target.value })
                }
              ></input>:
                <input type='text' placeholder="PartNo" value={PartNo} onChange={(e)=>setPartNo(e.target.value)} ></input>
           }
           </div>
            <div>
{
    updateState?<input type="text" placeholder="BracketOption" defaultValue={housingbodata.data.BracketOption} onChange={(e)=> setDataTarget({...datatarget,BracketOption:e.target.value})} ></input>:<input type='text' placeholder="BracketOption" value={BracketOption} onChange={(e)=>setBracketOption(e.target.value)} ></input>
}

            </div>
            <button type="submit" onClick={(e)=>updateState?handleUpdateChange(id):handleAddState(e) } > {updateState?'Update':'Add'} </button>
            </form>}
      </div>
    </div>
  );
};

export default HousingBracketOptionModal;
