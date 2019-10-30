import React from "react"

export default ({
  title,
  color,
  backGroundColor,
  border,
  borderRadius,
  height,
  width,
  opacity,
}) => {
  return (
    <>
      <button
        style={{
          backgroundColor: backGroundColor,
          color: color,
          border: border,
          borderRadius: borderRadius,
          opacity: opacity,
          width: width,
          height: height,
        }}
      >
        {title}
      </button>
    </>
  )
}
