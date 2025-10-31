import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CTAButton = ({ cta }: { cta: string }) => {
  return (
    <button className="mt-10 md:text-xl border border-[#ff4000] px-4 py-2 rounded
    flex items-center justify-center gap-2
    hover:border-white hover:bg-[#ff4000] hover:text-white active:opacity-80
    cursor-pointer transition-all duration-100 ease-in-out group">
        { cta }
        <FontAwesomeIcon icon={ faArrowRight }
        className='text-sm group-hover:ml-4 transition-all duration-200' />
    </button>
  )
}

export default CTAButton