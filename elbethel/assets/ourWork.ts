// Desktop Images
import abyssiniaDesktop from '@/public/our-work/desktop/abyssinia-bank.webp';
import addisAbabaDesktop from '@/public/our-work/desktop/addis-ababa.webp';
import awashInsuranceDesktop from '@/public/our-work/desktop/awash-insurance.webp';
import bimahiRealestateDesktop from '@/public/our-work/desktop/bimahi-realestate.webp';
import boraDesktop from '@/public/our-work/desktop/bora.webp';
import churchDesktop from '@/public/our-work/desktop/church.webp';
import dellaMobileDesktop from '@/public/our-work/desktop/della-mobile.webp';
import eshetuMamoDesktop from '@/public/our-work/desktop/eshetu-mamo.webp';
import friendshipDesktop from '@/public/our-work/desktop/friendship.webp';
import madoHotelDesktop from '@/public/our-work/desktop/mado-hotel.webp';
import magnusCarDesktop from '@/public/our-work/desktop/magnus-car.webp';
import mamokachaDesktop from '@/public/our-work/desktop/mamokacha.webp';
import noahRealestateDesktop from '@/public/our-work/desktop/noah-realestate.webp';
import sunriseDesktop from '@/public/our-work/desktop/sunrise.webp';
import zimbabweEmbassyDesktop from '@/public/our-work/desktop/zimbabwe-embassy.webp';
import caramelPastryDesktop from '@/public/our-work/desktop/caramel-pastry.webp';
import caramiSchoolDesktop from '@/public/our-work/desktop/carmi-school.webp';
import mafiCityMallDesktop from '@/public/our-work/desktop/mafi-city-mall.webp';
import etOnlineCollageDesktop from '@/public/our-work/desktop/et-online-collage.webp';
import tesheabBusinessCenterDesktop from '@/public/our-work/desktop/tesheab-business-center.webp';

// Mobile Images
import abyssiniaMobile from '@/public/our-work/mobile/abyssinia-bank.webp';
import addisAbabaMobile from '@/public/our-work/mobile/addis-ababa.webp';
import awashInsuranceMobile from '@/public/our-work/mobile/awash-insurance.webp';
import friendshipMobile from '@/public/our-work/mobile/friendship.webp';
import tesheabBusinessCenterMobile from '@/public/our-work/mobile/tesheab-commercial-center.webp';
import sunriseMobile from '@/public/our-work/mobile/sunrise.webp';
import noahRealestateMobile from '@/public/our-work/mobile/noah-realestate.webp';
import caramelPastryMobile from '@/public/our-work/mobile/caramel-pastry.webp';
import eshetuMamoCommercialMobile from '@/public/our-work/mobile/eshetu-mamo-commercial.webp';
import boraMobile from '@/public/our-work/mobile/bora.webp';
import madoHotelMobile from '@/public/our-work/mobile/mado-hotel.webp';
import etOnlineCollageMobile from '@/public/our-work/mobile/et-online-collage.webp';
import dellaMobileMobile from '@/public/our-work/mobile/della-mobile.webp';
import mamokachaMobile from '@/public/our-work/mobile/mamokacha.webp';
import bimahiRealestateMobile from '@/public/our-work/mobile/bimahi-realestate.webp';
import mafiCityMallMobile from '@/public/our-work/mobile/mafi-city-mall.webp';
import caramiSchoolMobile from '@/public/our-work/mobile/carami-school.webp';
import magnusCarMobile from '@/public/our-work/mobile/magnus-car.webp';
import churchMobile from '@/public/our-work/mobile/church.webp';
import zimbabweEmbassyMobile from '@/public/our-work/mobile/zimbabwe-embassy.webp';


import { StaticImageData } from 'next/image';

interface workList {
    id: number;
    desktopImage: StaticImageData;
    mobileImage: StaticImageData;
    alt: string;
}

export const ourWork: workList[] = [
    {
        id: 1,
        desktopImage: abyssiniaDesktop,
        mobileImage: abyssiniaMobile,
        alt: 'LED signage for Bank Of Abyssinia'
    },
    {
        id: 2,
        desktopImage: addisAbabaDesktop,
        mobileImage: addisAbabaMobile,
        alt: 'LED signage for Addis Ababa City Administration'
    },
    {
        id: 3,
        desktopImage: awashInsuranceDesktop,
        mobileImage: awashInsuranceMobile,
        alt: 'LED signage for Awash Insurance'
    },
    {
        id: 4,
        desktopImage: bimahiRealestateDesktop,
        mobileImage: bimahiRealestateMobile,
        alt: 'LED signage for Bimahi Realestate'
    },
    {
        id: 5,
        desktopImage: boraDesktop,
        mobileImage: boraMobile,
        alt: 'LED signage for Bora Amusement Park'
    },
    {
        id: 6,
        desktopImage: churchDesktop,
        mobileImage: churchMobile,
        alt: 'LED signage for Church'
    },
    {
        id: 7,
        desktopImage: dellaMobileDesktop,
        mobileImage: dellaMobileMobile,
        alt: 'LED signage for Della Mobile Shop'
    },
    {
        id: 8,
        desktopImage: eshetuMamoDesktop,
        mobileImage: eshetuMamoCommercialMobile,
        alt: 'LED signage for Eshetu Mamo Commercial'
    },
    {
        id: 9,
        desktopImage: friendshipDesktop,
        mobileImage: friendshipMobile,
        alt: 'LED signage for Friendship City Center'
    },
    {
        id: 10,
        desktopImage: madoHotelDesktop,
        mobileImage: madoHotelMobile,
        alt: 'LED signage for Mado Hotel'
    },
    {
        id: 11,
        desktopImage: magnusCarDesktop,
        mobileImage: magnusCarMobile,
        alt: 'LED signage for Magnus Car Importer'
    },
    {
        id: 12,
        desktopImage: mamokachaDesktop,
        mobileImage: mamokachaMobile,
        alt: 'LED signage for Mamokacha'
    },
    {
        id: 13,
        desktopImage: noahRealestateDesktop,
        mobileImage: noahRealestateMobile,
        alt: 'LED signage for Noah Realestate'
    },
    {
        id: 14,
        desktopImage: sunriseDesktop,
        mobileImage: sunriseMobile,
        alt: 'LED signage for Sunrise Realestate'
    },
    {
        id: 15,
        desktopImage: zimbabweEmbassyDesktop,
        mobileImage: zimbabweEmbassyMobile,
        alt: 'Printed sign for Embassy of The Republic of Zimbabwe'
    },
    {
        id: 16,
        desktopImage: caramelPastryDesktop,
        mobileImage: caramelPastryMobile,
        alt: 'LED signage for Caramel Pastry'
    },
    {
        id: 17,
        desktopImage: caramiSchoolDesktop,
        mobileImage: caramiSchoolMobile,
        alt: 'LED signage for Carmi International School'
    },
    {
        id: 18,
        desktopImage: mafiCityMallDesktop,
        mobileImage: mafiCityMallMobile,
        alt: 'LED signage for Mafi City Mall'
    },
    {
        id: 19,
        desktopImage: etOnlineCollageDesktop,
        mobileImage: etOnlineCollageMobile,
        alt: 'LED signage for ET Online Collage'
    },
    {
        id: 20,
        desktopImage: tesheabBusinessCenterDesktop,
        mobileImage: tesheabBusinessCenterMobile,
        alt: 'LED signage for Tesheab Business Center'
    },
];