import img from './error.gif'

const ErrorMessage = () => {
    return(
        // <img src={process.env.PUBLIC_URL + '/error.gif'}></img>
        <img src={img} alt="error" />
    )
}

export default ErrorMessage;