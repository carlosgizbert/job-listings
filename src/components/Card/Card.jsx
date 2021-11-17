import React from 'react'

export default function Card(props) {
  return (
    <>
      <div className="card-job radius-small">
        <div className="logo-company"></div>
        <span className="header-job">
          <span className="company">{props.company}</span>
          <div className="pill">NEW!</div>
          <div className="pill pill-dark">FEATURED</div>
        </span>
        <h1>{props.title}</h1>
        <div className="card-details">
          <ul>
            <li>1d ago</li>
            <li>Full Time</li>
            <li>USA only</li>
          </ul>
        </div>
        <hr></hr>
        <span className="footer-job">
          <button className="bt-skill radius-small">Frontend</button>
          <button className="bt-skill radius-small">Senior</button>
          <button className="bt-skill radius-small">HTML</button>
          <button className="bt-skill radius-small">CSS</button>
          <button className="bt-skill radius-small">JavaScript</button>
        </span>
      </div>
    </>
  )
}
