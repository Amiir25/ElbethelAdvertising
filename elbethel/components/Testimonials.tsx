import { testimonials } from "@/constants/testimonials";
import Title from "./Title";

const Testimonials = () => {

  return (
    <section className="mt-40 overflow-hidden">
      
      <Title
        normalTitle="What Our Clients "
        underlineTitle="Say?"
        subtitle="Don't just take our word for it — hear from our satisfied customers" />

      <div className='mt-10 flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-20 gap-y-10'>
        {
          testimonials.map((testimony, i) => (
            <div key={i} 
            className="w-80 md:w-100 flex flex-col px-4 py-10 border-primary rounded-xl" >
              <p className="font-serif tracking-wide">{ testimony.text }</p>
              <div className="mt-8 text-sm pt-4 border-t border-gray-200">
                <h2 className="font-semibold">{ testimony.name }</h2>
                <h3 className="text-gray-600">{ testimony.profession }</h3>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Testimonials;
