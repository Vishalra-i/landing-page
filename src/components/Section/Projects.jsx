'use client'
import React, { useState } from 'react';
import IndustryIcon from '../Helpers/IndustryIcon';
import Image from 'next/image';

function Projects() {
  const [activeProject, setActiveProject] = useState(1);

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels',
      tags: ['Business analysis', 'iOS', 'Android', 'QA', 'UI/UX Design'],
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Project 2 description goes here...',
      tags: ['Tag1', 'Tag2', 'Tag3'],
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Project 3 description goes here...',
      tags: ['Tag1', 'Tag2', 'Tag3'],
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Project 4 description goes here...',
      tags: ['Tag1', 'Tag2', 'Tag3'],
    }
  ];

  const handleActive = (projectId) => {
    setActiveProject(projectId);
  };

  const renderTag = (tag) => {
    const parts = tag.split(' / ');
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        <span className="text-gray-500">{part}</span>
        <span className="text-yellow-500"> / </span>
      </React.Fragment>
    ));
  };

  const renderProjectDetails = (project) => (
    <div>
      <h3 className="text-4xl text-[#101828] font-bold">{project.title}</h3>
      <p className="mt-3 text-base font-normal text-[101828]">{project.description}</p>
      <div className="mt-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="mr-2 font-semibold my-10">{renderTag(tag)}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="media" className='py-16 px-8 w-full bg-[#F2F4F7]'>
      <h2 className='text-4xl font-bold'>Developed more than <span className='text-green-400'>100</span> <br /> projects in <span className='text-green-400'>15</span> industries</h2>
      
      {/* Different fields of projects */}
      <div className="grid max-sm:grid-cols-2 md:grid-cols-3 w-full gap-5 py-10">
        <IndustryIcon image={"social"} name={"Social Media"} />
        <IndustryIcon image={"education"} name={"Education"} />
        <IndustryIcon image={"ar"} name={"AR Technology"} />
        <IndustryIcon image={"ball"} name={"Fitness & Sports"} />
        <IndustryIcon image={"car"} name={"Auto,Transport"} />
        <IndustryIcon image={"tv"} name={"Tv series"} />
        <IndustryIcon image={"bank"} name={"Bank"} />
        <IndustryIcon image={"heart"} name={"Medicine,health"} />
        <IndustryIcon image={"work"} name={"Startups"} />
        <IndustryIcon image={"const"} name={"Construction"} />
        <IndustryIcon image={"bowl"} name={"Restraunts,food deivery"} />
        <IndustryIcon image={"magic"} name={"Religion"} />
        <IndustryIcon image={"game"} name={"Game projects"} />
        <IndustryIcon image={"market"} name={"Marketplaces"} />
        <IndustryIcon image={"cour"} name={"Online courses"} />
      </div>
      
      {/* Proud projects */}
      <div className="my-16 ">
        <h3 className="text-[#101828] text-4xl font-bold" >Projects we are proud of</h3>
        <p className='my-5 text-[15px] font-[500]'>
          Our software development company is truly proud of the wonderful clients we have <br /> 
          worked with. We enjoy a long-term partnership
        </p>

        {/* Projects */}
        <div className=" gap-4 mb-10  border-gray-300">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    className={`btn  ${activeProject === project.id ? 'border-yellow-500 border-b-4 text-black font-semibold' : 'text-gray-600'} p-2 `}
                    onClick={() => handleActive(project.id)}
                  >
                    {project.title}
                  </button>
                ))}
        </div>
        </div>

      {/* Project details and image */}
          <div className="flex flex-col md:flex-row">
            <div className='w-full md:w-1/2'>
              {renderProjectDetails(projects.find((project) => project.id === activeProject))}
              <div className="my-12 flex gap-10">
                <IndustryIcon image={"location"} name={"India"}/>
                <IndustryIcon image={"real"} name={"Real Estate"}/>
              </div>
              <span className='grid grid-cols-2 w-fit gap-x-1 gap-y-2'>
                <span className='text-2xl font-bold '>400%</span><span className='text-2xl font-bold '>+ 200 000</span>
                <span className='text-sm text-gray-400 font-semibold'>User Growth</span><span className='text-sm text-gray-400 font-semibold'>Active Users</span>
              </span>
              {/* //Playstore and app store  */}
              <div className="flex my-10 gap-5">
                 <Image src="/assets/appstore.png"  width={140} height={45}  alt="appstore" />
                 <Image src="/assets/playstore.png" width={140} height={45}   alt="playstore" />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
               <Image src={'/assets/image15.png'} alt='image' width={500} height={500}  />
            </div>
         </div>
    </section>
  )
}

export default Projects;
