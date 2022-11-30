import './index.css'

const SelectItem = props => {
  const {details, clickVisit} = props
  const {id, name, isVisited} = details

  //   const status = !isVisited ? 'button light-blue' : 'button blue'

  const visitButton = () => {
    clickVisit(id)
  }

  return (
    <li>
      <div className="list-item">
        <p className="country">{name}</p>
        {!isVisited ? (
          <button
            className="button light-blue"
            type="button"
            onClick={visitButton}
          >
            Visit
          </button>
        ) : (
          <p className="button blue">Visited</p>
        )}
      </div>
      <hr />
    </li>
  )
}

export default SelectItem
