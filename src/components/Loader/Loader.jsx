import { DotLoader } from "react-spinners"
import s from "./loader.module.css"

const Loader = () => {
  return (
    <div className={s.loader}>
      <DotLoader
  color="#404BBF"
  size={70}
/>
    </div>
  )
}

export default Loader
