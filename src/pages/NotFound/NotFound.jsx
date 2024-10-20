
import "./notFound.css"
import notFoundImg from "../../images/notFound.png"
const NotFound = () => {
  return (
    <>
    <div className="not-found-container">
    <img 
        src={notFoundImg} 
        alt="404 Not Found" 
        className="not-found-image" 
      />
    <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
    <a href="/" className="not-found-button">Go Back Home</a>
  </div>
    </>
    
  )
}

export default NotFound
