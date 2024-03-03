import '../CSS/option.css'
const Option = ({ option, currentIndex, clickedOption, selectedOption, currectAnswer }) => {
  return (
    <div className='option'>
    <div className={
      currentIndex === currectAnswer
        ? "green"
        : currentIndex === selectedOption && selectedOption !== currectAnswer
          ? "red"
          : null
    }
      onClick={() => clickedOption(currentIndex)}><p>{option}</p></div>
      </div>
  )
}
export default Option