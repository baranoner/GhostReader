const Button = ({ text }) => {
  const onClick = () => {
    console.log('click')
  }
  return <button onClick={onclick} className="login-btn">Login</button>
}

export default Button