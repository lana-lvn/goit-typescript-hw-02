import s from "./errorMessage.module.css"



const ErrorMessage = () => {
  return (
    <div className={s.container}>
      <h2 className={s.error}>Ooops! Something went wrong 🤕 Try reloading the page.</h2>
    </div>
   

    
    
  )
}

export default ErrorMessage
