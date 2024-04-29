import React from 'react'
// icons
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

// services data
const services = [
  {
    name: 'UI/UX Designer',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, numquam. Inventore voluptatem',
    link: 'Learn More',
  },
  {
    name: 'Developement',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, numquam. Inventore voluptatem',
    link: 'Learn More',
  },
  {
    name: 'Project Branding',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, numquam. Inventore voluptatem',
    link: 'Learn More',
  }
]
const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & icons */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Freelancer Fron-end Developer with over 5 years of experience.
            </h3>
            <button className='btn btn-sm'>See my Work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* service list */}
            <div >
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div key={index} className='border-b border-white/20 h[146px] mb-[38px] flex'>
                    <div className='mx-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight '>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-center'>
                      <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight /></a>
                      <a href='#' className='text-gradient text-sm flex flex-row'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services