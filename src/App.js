import './App.css'
import CardList from './components/CardList/CardList.jsx'
import Header from './components/Header/Header'

function App() {
  const jobs = [
    {
      id: 1,
      company: 'PhotoSnap',
      logo: './images/photosnap.svg',
      pill: {
        new: true,
        featured: true
      },
      title: 'Senior Frontend Developer',
      details: {
        datePost: '10/10/2021',
        hourPost: '12:22 pm',
        fulltime: true,
        usaOnly: true,
        remote: true
      },
      tags: 'Frontend, Senior, Html, CSS, JavaScript'
    },
    {
      id: 2,
      company: 'Manage',
      logo: './images/manage.svg',
      pill: {
        new: true,
        featured: true
      },
      title: 'Fullstack Developer',
      details: {
        datePost: '10/10/2021',
        hourPost: '08:11 pm',
        fulltime: false,
        usaOnly: false,
        remote: true
      },
      tags: 'Fullstack, Midweight, Python, React'
    },
    {
      id: 3,
      company: 'Account',
      logo: './images/account.svg',
      pill: {
        new: true,
        featured: true
      },
      title: 'Junior Frontend Developer',
      details: {
        datePost: '10/10/2021',
        hourPost: '16:00 pm',
        fulltime: true,
        usaOnly: true,
        remote: true
      },
      tags: 'Frontend, Junior, React, Sass, JavaScript'
    }
  ]

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <CardList jobs={jobs} />
      </div>
    </>
  )
}

export default App
