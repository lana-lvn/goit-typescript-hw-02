import s from "./loadMoreBtn.module.css"
const LoadMoreBtn = ({onClick}) => {
  return (
    <div className={s.container}>
      <button className={s.loadMore} onClick={onClick}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn
