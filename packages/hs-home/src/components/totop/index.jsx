import totop from '../../assets/totop.png'

const Totop = () => {
  // 返回顶部
  const backtotop = () =>
    window.scrollTo({
      top: 0,
    })

  return (
    <div className="totop" onClick={backtotop}>
      <img src={totop} className="totop__icon"></img>
      <div>TOP</div>
    </div>
  )
}

export default Totop
