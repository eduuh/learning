import React from "react"
import "./Button.css"
const STYLES = ["btn--primary", "btn--outline"]
const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn-wide"]

const COLOR = ["primary", "blue", "red", "green"]
export const Button = ({
  children,
  type,
  onclick,
  buttonStyle,
  buttonsize,
  buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0]
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0]
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onclick={onclick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
