import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

// import InputContainerItems from '../InputContainerItems/index'

import PasswordItems from '../PasswordItems/index'

import './index.css'
/*

const inputContainerItemsList = [
  {
    id: 1,
    iconUrl:
      'https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png',
    altOfIcon: 'website',
    placeholderText: 'Enter Website',
    typeOfText: 'url',
  },
  {
    id: 2,
    iconUrl:
      'https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png',
    altOfIcon: 'username',
    placeholderText: 'Enter Username',
    typeOfText: 'text',
  },
  {
    id: 3,
    iconUrl:
      'https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png',
    altOfIcon: 'password',
    placeholderText: 'Enter Password',
    typeOfText: 'password',
  },
]

*/

class PasswordManager extends Component {
  state = {
    websiteValue: '',
    usernameValue: '',
    passwordValue: '',
    passwordDetailsArray: [],

    showPassword: false,
    searchInput: '',
  }

  addBtnClicked = event => {
    event.preventDefault()
    const {websiteValue, usernameValue, passwordValue} = this.state
    const newPasswordDetailsObject = {
      id: uuidv4(),
      websiteVal: websiteValue,
      usernameVal: usernameValue,
      passwordVal: passwordValue,
    }
    this.setState(prevState => ({
      passwordDetailsArray: [
        ...prevState.passwordDetailsArray,
        newPasswordDetailsObject,
      ],
      websiteValue: '',
      usernameValue: '',
      passwordValue: '',
    }))
  }

  websiteChanging = event => {
    this.setState({websiteValue: event.target.value})
  }

  usernameChanging = event => {
    this.setState({usernameValue: event.target.value})
  }

  passwordChanging = event => {
    this.setState({passwordValue: event.target.value})
  }

  checkBoxClicked = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  deleteBtnElTriggered = idNum => {
    const {passwordDetailsArray} = this.state
    const remainingPasswordDetailsArray = passwordDetailsArray.filter(
      eachObject => eachObject.id !== idNum,
    )

    this.setState({passwordDetailsArray: remainingPasswordDetailsArray})
  }

  searchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      websiteValue,
      usernameValue,
      passwordValue,
      passwordDetailsArray,
      showPassword,
      searchInput,
    } = this.state

    const searchedArray = passwordDetailsArray.filter(eachObject =>
      eachObject.websiteVal.toLowerCase().includes(searchInput),
    )

    const count = searchedArray.length

    const renderPasswordView = () => {
      if (searchedArray.length === 0) {
        return (
          <div className="noView">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="noPasswordImage"
            />
            <p className="noPasswordTextStyle">No Passwords</p>
          </div>
        )
      }
      return searchedArray.map(eachObject => (
        <PasswordItems
          eachObject={eachObject}
          showPassword={showPassword}
          deleteBtnElTriggered={this.deleteBtnElTriggered}
          key={eachObject.id}
        />
      ))
    }

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="appLogoStyle"
        />
        <div className="passwordManagerContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="passwordManagerImageStyle"
          />
          <form className="formContainer">
            <h1 className="inputContainerHeading">Add New Password</h1>
            <div className="inputAreaContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="imgIconStyle"
              />
              <hr className="hrLine" />
              <input
                type="text"
                placeholder="Enter Website"
                className="inputStyling"
                value={websiteValue}
                onChange={this.websiteChanging}
              />
            </div>

            <div className="inputAreaContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="imgIconStyle"
              />
              <hr className="hrLine" />
              <input
                type="text"
                placeholder="Enter Username"
                className="inputStyling"
                value={usernameValue}
                onChange={this.usernameChanging}
              />
            </div>

            <div className="inputAreaContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="imgIconStyle"
              />
              <hr className="hrLine" />
              <input
                type="password"
                placeholder="Enter Password"
                className="inputStyling"
                value={passwordValue}
                onChange={this.passwordChanging}
              />
            </div>
            <button
              type="submit"
              className="btnAddEl"
              onClick={this.addBtnClicked}
            >
              Add
            </button>
          </form>
        </div>
        <div className="lowerMainContainer">
          <div className="upperContainer">
            <div className="upperFirst">
              <h1>Your Passwords</h1>
              <div className="numContainer">
                <p>{count}</p>
              </div>
            </div>

            <div className="SearchInputAreaContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="imgIconStyle"
              />
              <hr className="verticalLine" />
              <input
                type="search"
                placeholder="Search"
                className="inputStyling"
                value={searchInput}
                onChange={this.searchInputChange}
              />
            </div>
          </div>
          <hr className="bigHrLine" />
          <form className="formLower">
            <input
              type="checkbox"
              id="checkboxId"
              className="checkboxStyle"
              onClick={this.checkBoxClicked}
            />
            <label htmlFor="checkboxId">Show Passwords</label>
          </form>

          <ul className="ulContainer">{renderPasswordView()}</ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
