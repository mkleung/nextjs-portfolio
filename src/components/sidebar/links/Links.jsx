import React from 'react'


export const Links = () => {

  const items = ["Home", "About", "Portfolio", "Contact"]
  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  )
}
