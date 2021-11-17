import React from 'react'
import Card from '../Card/Card.jsx'

export default function CardList(props) {
  return props.jobs.map(job => (
    <div>
      <Card
        id={job.id}
        company={job.company}
        logo={job.logo}
        pill={job.pill}
        title={job.title}
        details={job.details}
        tags={job.tags}
      />
    </div>
  ))
}
