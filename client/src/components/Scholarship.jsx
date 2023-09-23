import React from 'react';


const scholarships = [
  {
    name: 'National Scholarship Portal (NSP)',
    link: 'https://scholarships.gov.in/',
  },
  {
    name: 'Post Matric Scholarship for SC/ST Students',
    link: 'https://scholarships.gov.in/',
  },
  {
    name: 'Central Sector Scholarship Scheme for College and University Students',
    link: 'https://scholarships.gov.in/',
  },
  {
    name: "Prime Minister's Scholarship Scheme for Central Armed Police Forces and Assam Rifles",
    link: 'https://scholarships.gov.in/',
  },
  {
    name: 'Kishore Vaigyanik Protsahan Yojana (KVPY)',
    link: 'https://kvpy.iisc.ac.in/main/index.htm',
  },
  {
    name: 'Indian Oil Academic Scholarships',
    link: 'https://www.iocl.com/PeopleCareers/Scholarships.aspx',
  },
  {
    name: 'Ramanujan Fellowship by SERB (Science and Engineering Research Board)',
    link: 'https://www.serbonline.in/SERB/HomePage.do',
  },
  {
    name: 'Tata Trusts Scholarships',
    link: 'https://www.tatatrusts.org/',
  },
  {
    name: 'LIC Golden Jubilee Scholarship Scheme',
    link: 'https://www.licindia.in/Home/scholarship',
  },
  {
    name: 'Dr. Abdul Kalam Scholarship for Meritorious Students',
    link: 'https://abdulkalam.com/',
  },
];
const backgroundStyle = {
    backgroundImage: `url('/scholar1.jpg')`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    height: '100vh',
    opacity:'50%',
    
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    minHeight: '100vh', 
    height:'80vh',
    width:'80vw',
    margin:'auto',
    opacity:'200%',
  };
  


function Scholarship() {
  return (
    <div style={backgroundStyle} >
    <div style={containerStyle}>
    <div className="scholarship-container   ">
      
      <ul className="scholarship-list">
        {scholarships.map((scholarship, index) => (
          <li key={index} className="scholarship-item">
            <a href={scholarship.link} target="_blank" rel="noopener noreferrer" className="scholarship-link">
              {scholarship.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
}

export default Scholarship;