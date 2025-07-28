import React from 'react'
import './experience.css'
import {BsBookmarkCheckFill, BsFolderCheck} from 'react-icons/bs'
import { FaSuitcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Experience</h5>
      <h2>Skills & Tools</h2>
      <div className='container experience_container'>
        {/* lANGUAGES */}
        <div className="experience_languages">
          <h3>Languages and Tools</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Kotlin</h4>
                <small className='text-light'>Novice</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Visual Studio Code</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>VS Community</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>IntelliJ IDEA</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Microsoft Office</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Android Studio</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Pentaho</h4>
                <small className='text-light'>Novice</small>
              </div>
            </article>
          </div>

        </div>

        {/* TOOLS */}
        <div className="experience_tools">
          <h3>Work Experience</h3>
          <div className='experience_content2'>
          <article className='experience_details2'>
              <FaSuitcase className='experience_details-icon2'/>
              <div>
                <h4>Administrative Specialist III</h4>
                <h5>LACOE, Best Project, HCM Conversion Team</h5>
                <h6>Dec.2024 - June 2025</h6>
                <small className='experience_details_small'>
                  -  Assumed Data Analyst responsibilities in assisting with the HCM system conversion for BEST Project.
                  <br />
                  - Executed scripts in Pentaho Maps to convert and generate configuration workbooks for HCM system loading.
                  <br />
                  - Utilized SQL queries and scripts to produce error logs, validate data, and perform system updates in the HCM system
                  <br />
                  - Leveraged WinSCP and IST system to import, verify, and update information in the HCM system.
                  <br />
                  - Assisted the BEST Project Team in creating and reviewing district-specific configuration workbooks.
                  <br />
                </small>
              </div>
            </article>

          <article className='experience_details2'>
              <FaSuitcase className='experience_details-icon2'/>
              <div>
                <h4>Administrative Specialist II</h4>
                <h5>LACOE, Applications Development and Support (AD&S)</h5>
                <h6>Dec.2024 - June 2025</h6>
                <small className='experience_details_small'>- Deployed various Power BI reports and SQL Server data models to multiple sharepoints and workspaces
                  <br />
                  - Assisted the Business Intelligence team in constructing and updating Power BI reports to accurately reflect HCM system data
                  <br />
                  - Deployed various Power BI reports and SQL Server data models to multiple SharePoints and workspaces
                  <br />
                  - Performed daily checks and updates on various districts/agencies’ Power BI reports and data models.
                  <br />
                  - Developed and updated PowerShell queries to automate everyday tasks and Power BI features.
                  <br />
                  - Constructed a data dictionary for all data models to aid users in understanding correlations between HCM system and Power BI data fields.
                  <br />
                  - Utilized RemedyForce to aid users with Power BI related issues.
                  <br />
                </small>
              </div>
            </article>

            <article className='experience_details2'>
              <FaSuitcase className='experience_details-icon2'/>
              <div>
                <h4>Administrative Specialist II</h4>
                <h5>LACOE, BEST Team</h5>
                <h6>Oct.2024 - Dec.2024</h6>
                <small className='experience_details_small'>
                  - Loaded various HR and Payroll tables to the HCM system using company standard procedures.
                  <br />
                  - Reviewed and updated various client information within the HCM system to ensure accuracy.
                  <br />
                </small>
              </div>
            </article>
        </div>
        </div>

      </div>

    </section>
    
  )
}

export default Experience