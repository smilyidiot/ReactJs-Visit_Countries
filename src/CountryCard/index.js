import './index.css'

const CountryCard = props => {
  const {details, removeItem} = props
  const {id, name, imageUrl} = details

  const removeFlag = () => {
    removeItem(id)
  }

  return (
    <li className="visited-card">
      <img src={imageUrl} alt="thumbnail" className="flag" />
      <div className="container">
        <p className="name">{name}</p>
        <button type="button" className="remove-button" onClick={removeFlag}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryCard
