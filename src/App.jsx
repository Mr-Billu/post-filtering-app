import { useState } from 'react'
import './App.css'
import './boxes.css'


    
function App() {

 const Job = [ 

    {
      company : "Photosnap",
      position : "Senior Frontend Developer",
      new : "NEW!",
      fatured : "Featured",
      time : "1d ago",
      location : "USA only",
      jobtime : "Full Time",
      skills : [
        "Frontend", "Senior", "HTML", "CSS" , "Javascript"
      ]
    },
    
    {
      
      company : "Manage",
      position : "Fullstack Developer",
      new : "NEW!",
      fatured : "Featured",
      time : "1d ago",
      location : "Remote",
      jobtime : "Part Time",
      skills : [
        "FullStack", "Midweight", "React","Python"
      ]
    },
    
    {
      
      company : "Account",
      position : "Junior Frontend Developer",
      new : "NEW!",
      fatured : "Featured",
      time : "2d ago",
      jobtime : "Part Time",
      location : "USA only",
      skills : [
        "Frontend", "Junior", "React", "Sass", "Javascript"
      ]
    },

    {
      
      company : "MyHome",
      position : "Junior Frontend Developer",
      new : "NEW!",
      fatured : "Featured",
      time : "5d ago",
      jobtime : "Contract",
      location : "USA only",
      skills : [
        "Frontend", "Junior", "CSS" , "Javascript"
      ]
    },
    
    {
      
      company : "Loop Studios",
      position : "Software Engineer",
      new : "NEW!",
      fatured : "Featured",
      time : "5d ago",
      jobtime : "Full Time",
      location : "World Wide",
      skills : [
        "Fullstack", "Midweight", "Javascript", "Sass", "Ruby"
      ]
    },
    
    {
      
      company : "Face it",
      position : "Junior Backend Developer",
      new : "NEW!",
      fatured : "Featured",
      time : "2w ago",
      jobtime : "Full Time",
      location : "UK only",
      skills : [
        "Backend","Junior", "Ruby", "RoR"
      ]
    },
    
    {
      
      company : "Shortly",
      position : "Junior Developer",
      new : "NEW!",
      fatured : "Featured",
      time : "2w ago",
      jobtime : "Full Time",
      location : "World Wide",
      skills : [
        "Frontend", "Junior", "HTML", "Sass", "Javascript"
      ]
    },
    
    {
      
      company : "Insure",
      position : "Junior Frontend Developer",
      new : "NEW!",
      fatured : "Featured",
      time : "22 ago",
      jobtime : "Full Time",
      location : "USA only",
      skills : [
        "Frontend", "Junior", "Vue", "Javascript", "Sass"
      ]
    },
    
    {
      
      company : "Eyecam Co.",
      position : "Full Stack Engineer",
      new : "NEW!",
      fatured : "Featured",
      time : "3w ago",
      jobtime : "Full Time",
      location : " World Wide",
      skills : [
        "Fullstack", "Midweight", "Javascript", "Django", "Python"
      ]
    },

    {
      
      company : "The Air Filter Company",
      position : "Front-end Dev",
      new : "NEW!",
      fatured : "Featured",
      time : "1m ago",
      jobtime : "Part Time",
      location : " World Wide",
      skills : [
        "Frontend", "Junior", "React", "Sass", "Javascript"
      ]
    },
    {
      company : "Loop Studios",
      position : "Software Engineer",
      new : "NEW!",
      fatured : "Featured", 
      time : "1w ago",
      location : "Worldwide",
      jobtime : "Full Time",
      skills : [
        "Sass", "JavaScript", "Ruby", "RoR"
      ]
    },
    
    {
      company : "FaceIt",
      position : "Junior Backend Developer",
      new : "NEW!",
      fatured : "Featured",
      time : "2w ago", 
      location : "UK only",
      jobtime : "Full Time",
      skills : [
        "Python", "React", "Django"
      ]
    },
    
    {
      company : "Shortly",
      position : "Junior Developer",
      new : "NEW!",
      fatured : "Featured",
      time : "2w ago",
      location : "Worldwide", 
      jobtime : "Full Time",
      skills : [
        "HTML", "Sass", "JavaScript"
      ]
    },
    
    {
      company : "Insure",
      position : "Junior Frontend Developer",
      new : "NEW!",
      fatured : "Featured",
      time : "2w ago",
      location : "USA only",
      jobtime : "Full Time", 
      skills : [
        "Vue", "JavaScript", "Sass"
      ]
    },
    
    {
      company : "Eyecam Co.",
      position : "Full Stack Engineer",
      new : "NEW!",
      fatured : "Featured",
      time : "3w ago",
      location : "Worldwide",
      jobtime : "Full Time",
      skills : [
        "JavaScript", "Django", "React", "Python"
      ]
    },
    
    {
      company : "The Air Filter Company",
      position : "Front-end Dev",
      new : "NEW!",
      fatured : "Featured", 
      time : "1mo ago",
      location : "Worldwide",
      jobtime : "Part Time",
      skills : [
        "React", "Sass", "JavaScript"
      ]
    }

    
  ]
  
  const [filters, setfilters] = useState([]);

  const filterSkills = (skill) => {
    if(!filters.includes(skill)){
      setfilters([...filters,skill])
    }
  }
 
  const removeSkill = (skills) => {
    setfilters(filters.filter((skill) => skill !== skills))
  }


  const filteredJobs = filters.length 
  ? Job.filter((job) => filters.every((skills) =>
    job.skills.includes(skills))): Job; 


  return (
    <>
      <div className='main-box'>
        <header className='head'>
         <div className=" filtered-div">
          {filters.map((filter, id) => (
            <span key={id} style={{display:'flex', gap:"10px", alignItems:'center'}}
             className='skilltag'> {filter} 
            <button  className='CrossBtn'  onClick={() => (removeSkill(filter))}>X</button>
            </span>
          ))}
          </div>
        </header>
      <div className='main-section'>
      {filteredJobs.map((job) => (
        <div className="box">
          <div className="inner-box">
            <div className="info-box">
              <div>
              <h4 className='company-name'>{job.company}</h4>
              <span className='new-tag'>{job.new}</span>
              <span className='featured-tag'>{job.fatured}</span>
              </div>
              <h3 className="job-title">{job.position}</h3>
              <p className="descript">
                 <span> {job.time}  </span>
                 . <span> {job.jobtime}</span>
                 .  <span> {job.location} </span>
             </p>   
            </div>
            <hr className='hr'/>
           <div className="skill-box">
          <ul className="skills-list">
            {job.skills.map((skill) => (
             <li key={job.id} className='skills' onClick={() => (filterSkills(skill))}>{skill}</li>
             ))}
            </ul>
          </div>
         </div>
        </div>
      ))}
      </div>
      </div>

    </>
  )
}

export default App
