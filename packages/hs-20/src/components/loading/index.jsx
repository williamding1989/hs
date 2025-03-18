import { useEffect, useRef } from 'react'
import currcybox from '../../assets/currcybox.png'
import './index.less'

/**
 * Loading组件
 *
 */
const HsLoading = ({ show }) => {
  if (!show) return
  return (
    <div className="HsLoading">
      <div className="stepContainer">
        <img src={currcybox}></img>
      </div>
    </div>
  )
}

export default HsLoading
