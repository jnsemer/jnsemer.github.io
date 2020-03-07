import React from 'react';
import './mystyles.scss';
import Header from './components/Header';
import Contact from './components/Contact';
import More from './components/More';
import ToggleRole from './components/resumecomps/ToggleRole';
import Education from './components/resumecomps/Education';

function App() {

  const roles = [{'roleId': 0, 'title':'analytics & data science'}, {'roleId':1, 'title':'software engineering'}, {'roleId':2, 'title':'people person'}];
  const headermsg = ['hey, it\'s jocelynn.','i like to learn, build, and analyze.', 'welcome to my site.'];
  const education = {'school': "University of Massachusetts Amherst", 'degree': "Bachelor of Science", 'major':"Computer Science", 'gradyear':2018}; 
  const contactpoints = [{'medium': 'LinkedIn', 'link':'https://www.linkedin.com/in/jocelynnsemer/', 'icon':'fab fa-linkedin-in'}, {'medium': 'GitHub', 'link':'https://github.com/jnsemer', 'icon':'fab fa-github'}];
  const experience = [
  {
    'company':'Endurance International Group', 
    'dates':'January 2019-Present', 
    'accomplishments':[
      {'role': 0, 'accomplishment':'Segmenting customers by domain name to establish customer understanding and optimize marketing efforts.'},
      {'role': 0, 'accomplishment':'Increased accuracy of forecasting and renewal calculation efforts by introducing survival analysis to the company.'},
      {'role': 0, 'accomplishment':'Developed and utilized engagement scoring model and designed corresponding testing strategy to drive customer publish rates, a key factor in customer renewal.'}, 
      {'role':0, 'accomplishment':'Acts as a leader in experimental design coordination around the company, educating and working with teams across multiple brands to ensure quality and scientifically rigorous testing practices are used.'},
      {'role': 1, 'accomplishment':'Automated ETL processes in Hadoop joining multiple disparate data sources together.'},
      {'role':1, 'accomplishment': 'Converts one-time analyses to production-ready automated processes for the team.'},
      {'role': 1, 'accomplishment':'Refactored lifetime revenue report for improved accuracy and adaptation to new data lake platform.'},
      {'role': 1, 'accomplishment':'Developed a self-service marketing campaign evaluation and A/B testing tool used across teams.'},
      {'role': 1, 'accomplishment':'Constructed an inverted index of our customers\' domains to be used for generic search, finding industry verticals, and machine learning.'},
      {'role':2, 'accomplishment':'Acts as an internal consultant for one of our pillar brands.'},
      {'role':2, 'accomplishment':'Manages stakeholder relationships on the Domain.com brand by updating stakeholders, recommending project prioritization, and managing the analytical development of the brand\'s capabilities.'},
      {'role':2, 'accomplishment':'Presents on the analytical progress of Domain.com to senior members of the company. '},
      {'role':2, 'accomplishment':'Establishes relationships with data-owners throughout the company to facilitate the creation of unifiied datasets across the company.'}
    ]
  }, 
  {
    'company':'Office Depot', 
    'dates':'May 2019-August 2019', 
    'accomplishments':[
      {'role': 0, 'accomplishment':'Developed a neural network to predict orders that would not be fulfilled due to supply chain failures.'}, 
      {'role': 0, 'accomplishment':'Uncovered a back-of-site issue with coupon processing via analyzing google analytics, which ultimately transformed our coupon processing system to create more successful transactions.'},
      {'role':1, 'accomplishment':'Participated in code reviews with the team.'},
      {'role':1, 'accomplishment':'Scaled one-time analyses to ongoing analytical modules in production.'},
      {'role':2, 'accomplishment':'Tracked progress as part of an Agile team.'},
      {'role':2, 'accomplishment':'Presented findings to stakeholders across the company to ensure understanding and maintain communication from the top.'},
      {'role':2, 'accomplishment':'Worked on a cross-functional team to support the relaunch of the company\'s app experience, coordinating with analytics, marketing, and other product owners around the company.'}
    ]
  },
  {
    'company':'Oceanos Inc.', 
    'dates':'May 2018-January 2019', 
    'accomplishments':[
      {'role': 0, 'accomplishment':'Developed a scoring model for our contact database based on data-quality and trustworthiness to deliver the best quality contacts to our customers.'}, 
      {'role': 0, 'accomplishment':'Wrote stored procedures to automate reporting to the CEO.'},
      {'role': 1, 'accomplishment':'Worked across the full-stack to develop an automatic data ingestion tool to process customer contact requests. The tool saved the marketing team hours of manual work per request.'},
      {'role':1, 'accomplishment':'Enhanced search capabilities for contact search to accomodate more detailed customer requests.'},
      {'role': 2, 'accomplishment':'Documented code and functionality to support future developers.'},
      {'role':2, 'accomplishment':'Communicated with users across the company to enhance connectivity between development and end-users.'},
      {'role':2, 'accomplishment':'Presented findings and finished projects to multiple teams, including the CEO.'}
    ]
  }
];


  return (
    <div className='App'>
      <Header msgs={headermsg}/>
      <ToggleRole experience={experience} roles={roles} education={education} />
      <Education education={education}/>
      <More />
      <Contact contact={contactpoints} />
    </div>
  );
}

export default App;
