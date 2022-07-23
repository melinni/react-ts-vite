/**
 * 一个简单的瀑布流实现
 */

import { useState } from "react"

function Waterfall() {

  const [total, setTotal] = useState([])
  const [list1, setList1] = useState([1,2,3,4,5])
  const [list2, setList2] = useState([])
  const [list3, setList3] = useState([])

  let row1 = list1.map((item: number, index: number) => {
    return <div key={index}>{item}</div>
  })

  return (
    <div className="waterfall">
      <div className="container" style={{ display: 'flex' }}>
        <div className="list1">
          {row1}
        </div>
        <div className="list2"></div>
        <div className="list3"></div>
      </div>
    </div>
  )
}

export default Waterfall