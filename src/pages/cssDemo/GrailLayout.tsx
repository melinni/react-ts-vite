function GrailLayout() {
  return (
    <div id="container" className="container" style={{ paddingLeft: "200px",paddingRight: "150px",overflow: "auto"}}>
      <p
        className="center"
        style={{float:"left",width:"100%",backgroundColor:"red"}}
      >
        我是中间
      </p>
      <p
        className="left"
        style={{float:"left",width:"200px",position:"relative",left:"-200px",backgroundColor:"green"}}
      >
        我是左边
      </p>
      <p
        className="right"
        style={{float:"left",width:"150px",marginRight:"-150px",backgroundColor:"yellow"}}
      >
        我是右边
      </p>
    </div>
  )
}

export default GrailLayout