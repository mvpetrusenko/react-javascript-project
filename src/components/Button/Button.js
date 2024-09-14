// Button/Button.js

// creating custom button to reuse it throughout the whole project

import '../Button/Button.css'

// buttonClicked is an event
export default function Button ({ children, buttonClicked }) {
    return <button onClick={buttonClicked}>{ children }</button>
}