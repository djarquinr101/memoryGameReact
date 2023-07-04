const Button = ({ text, handleClick }) => {
  return(
    <>
    <button className="bg-lime-600 text-neutral-50 border-0 text-2xl px-2 py-4 cursor-pointer outline-0 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    onClick={handleClick}
    >{text}</button>
    </>
  )
}

export default Button