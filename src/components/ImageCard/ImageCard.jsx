import s from './imageCard.module.css'

const ImageCard = ({ src, alt, urlLarge, openModal }) => {
  const handleClick = () => {
    openModal(urlLarge);
   
    
  };
  
  return (
    <div  className={s.imageCard}>
      <img onClick={handleClick} src={src} alt={alt} className={s.image} />
</div>
  )
}

export default ImageCard
