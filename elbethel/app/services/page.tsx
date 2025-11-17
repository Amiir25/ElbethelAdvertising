import { serviceDetail } from "./assets/assets";
import HandleServices from "./HandleServices";
import bgServices from './assets/bg-services.webp';
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Services | Elbethel Advertising",
  description: "Discover Elbethel Advertising’s services: LED signage, digital printing, vehicle branding, and more in Addis Ababa.",
  keywords: [
    "printing and signage services Addis Ababa",
    "advertising services Ethiopia",
    "LED signage services Ethiopia",
    "light box installation Addis Ababa",
    "large format printing Ethiopia",
    "vehicle branding services Addis Ababa",
    "indoor and outdoor advertising Ethiopia",
    "promotional item printing Ethiopia",
    "interior branding services Addis Ababa",
    "professional advertising solutions Ethiopia",
    "business branding services Ethiopia"
  ],
};

const Services = () => {

    return (
        
        <section>

            {/* Hero */}
            <div
            style={{ backgroundImage: `url(${ bgServices.src })` }}
            className="w-screen h-screen bg-cover md:bg-contain bg-right bg-no-repeat mb-20">
                <div className='w-full h-full px-6 md:px-12 lg:px24 xl:px-32 flex items-center
                bg-linear-to-r from-white via-white/60 md:via-white to-white/30 md:to-white/60'>
                    <div className='w-80 md:w-120 lg:w-180 mt-20 bg-whit'>
                        <h1 className='text-5xl md:text-7xl font-bold'>
                            Transforming Ideas into Visual Impact
                        </h1>
                        <p className='mt-8 text-xl md:text-2xl tracking-wider'>
                            From concept to creation, we provide complete services to make your brand stand out and leave lasting impression.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Services */}
            <div>
                {
                    serviceDetail.map((service, i) => (
                        <HandleServices
                            key={i}
                            title={ service.title }
                            description={ service.description }
                            images={ service.images } />
                    ))
                }
            </div>

            {/* Call to action */}
            <CallToAction/>
        </section>
    )
}

export default Services;