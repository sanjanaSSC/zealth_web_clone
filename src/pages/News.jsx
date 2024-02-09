import React from 'react'
import Navbar from '../components/Navbar'
import NewsCard from '../components/NewsCard'
import Footerpage from '../components/Footerpage'

export default function News() {
  return (
    <div>
      <Navbar/>
      <h2 className='text-center text-blue-900 text-2xl font-bold pt-28'>News</h2>
      <div className='flex flex-col md:grid md:grid-cols-2 py-10 px-4 md:px-28'>
        <div className='md:grid md:col-span-1'>
          <NewsCard title="Monitoring of CareShare using Prometheus & Grafana" text="We recently had to setup metrics monitoring for CareShare. CareShare’s backend is a node.js application that is being run using PM2 clusters." author="Dheeraj Mundra" date="June 8, 2021"/>
        </div>
        <div className='grid col-span-1'>
          <NewsCard title="Monitoring of CareShare using Prometheus & Grafana" text="We recently had to setup metrics monitoring for CareShare. CareShare’s backend is a node.js application that is being run using PM2 clusters." author="Dheeraj Mundra" date="June 8, 2021"/>
        </div><div className='grid col-span-1'>
          <NewsCard title="Monitoring of CareShare using Prometheus & Grafana" text="We recently had to setup metrics monitoring for CareShare. CareShare’s backend is a node.js application that is being run using PM2 clusters." author="Dheeraj Mundra" date="June 8, 2021"/>
        </div><div className='grid col-span-1'>
          <NewsCard title="Monitoring of CareShare using Prometheus & Grafana" text="We recently had to setup metrics monitoring for CareShare. CareShare’s backend is a node.js application that is being run using PM2 clusters." author="Dheeraj Mundra" date="June 8, 2021"/>
        </div><div className='grid col-span-1'>
          <NewsCard title="Monitoring of CareShare using Prometheus & Grafana" text="We recently had to setup metrics monitoring for CareShare. CareShare’s backend is a node.js application that is being run using PM2 clusters." author="Dheeraj Mundra" date="June 8, 2021"/>
        </div><div className='grid col-span-1'>
          <NewsCard title="Monitoring of CareShare using Prometheus & Grafana" text="We recently had to setup metrics monitoring for CareShare. CareShare’s backend is a node.js application that is being run using PM2 clusters." author="Dheeraj Mundra" date="June 8, 2021"/>
        </div>
      </div>
      <Footerpage/>
    </div>
  )
}
