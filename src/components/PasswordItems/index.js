// import {Component} from 'react'

import './index.css'

const bgIconColors = [
  {color: '#b91c1c'},
  {color: '#f97316'},
  {color: '#0b69ff'},
  {color: '#10b981'},
]

const PasswordItems = props => {
  const {eachObject, showPassword, deleteBtnElTriggered} = props
  const {id, websiteVal, usernameVal, passwordVal} = eachObject

  const bgIconIndexNumber = Math.floor(Math.random() * bgIconColors.length)

  const backgroundColorRandom = bgIconColors[bgIconIndexNumber].color

  const renderPassword = () => {
    if (!showPassword) {
      return (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="starsImage"
          />
        </>
      )
    }
    return <p>{passwordVal}</p>
  }

  const deleteButtonClicked = () => {
    deleteBtnElTriggered(id)
  }

  return (
    <li className="liContainer">
      <div className="passwordDetailsContainer">
        <div
          className="roundFirstIcon"
          style={{backgroundColor: backgroundColorRandom}}
        >
          <p>{websiteVal[0].toUpperCase()}</p>
        </div>
        <div className="passwordDetails">
          <p>{websiteVal}</p>
          <p>{usernameVal}</p>
          {renderPassword()}
        </div>
      </div>
      <button
        type="button"
        className="deleteButton"
        data-testid="delete"
        onClick={deleteButtonClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="deleteImage"
        />
      </button>
    </li>
  )
}

export default PasswordItems
