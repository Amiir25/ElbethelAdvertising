import Image from 'next/image'
import Title from './Title'
import { recentProjects } from '@/constants/recentProjects'

const RecentProjects = () => {
  return (
    <section className='mt-20'>

      <Title 
          normalTitle='Recent'
          underlineTitle='Projects'
          subtitle='Explore our recent printing projects and see the quality we deliver'/>

      <div className='md:flex flex-wrap items-center justify-center gap-x-10 gap-y-20'>
        {
          recentProjects.map((project, i) => (
            <div key={i}
            className='relative mt-10 w-120 h-120 group overflow-hidden rounded-xl' >
              
              <Image src={ project.image } alt='Project Image' width={0} height={0}
              className='w-84 md:w-full h-full transition-all duration-700 ease-in-out
              group-hover:scale-[1.2]'/>
              
              <div className='absolute bottom-8 left-4 text-amber-300 
              group-hover:text-amber-800 z-10 transition-all duration-500'>
                <h1 className='text-xl group-hover:text-2xl font-semibold transition-all duration-500'>
                  { project.title }
                </h1>
                <p className='group-hover:text-lg transition-all duration-500'>
                  { project.text }
                </p>
              </div>

              <div className='absolute -bottom-50 group-hover:bottom-0 w-full h-42
              bg-gradient-to-b from-transparent via-amber-300/50 to-amber-300
              transition-all duration-500'>

              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default RecentProjects