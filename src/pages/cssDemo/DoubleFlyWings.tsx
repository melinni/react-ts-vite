import React from 'react';

function DoubleFlyWings() {
  return (
    <div>
      <div id="main" style={{float:"left",width:"100%",backgroundColor:"blue"}}>
        <div className="main-wrap" style={{margin: "0 200px"}}>我是中间</div>
      </div>
      <div style={{float:"left",width:"200px",marginLeft:"-100%",backgroundColor:"red"}}>我是左边</div>
      <div style={{float:"left",width:"200px",marginLeft:"-200px",backgroundColor:"red"}}>我是右边</div>
    </div>
  )
}

export default DoubleFlyWings