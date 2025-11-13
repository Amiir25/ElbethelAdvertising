import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import { faEnvelope, faPhone, IconDefinition } from '@fortawesome/free-solid-svg-icons'

// Phone and Email contacts
interface contactList {
    id: number;
    icon: IconDefinition;
    name: string;
    contactInfo1: string;
    contactInfo2?: string;
}

export const contacts: contactList[] = [
    {
        id: 0,
        icon: faPhone,
        name: 'Phone',
        contactInfo1: '+251 911 107 495',
        contactInfo2: '+251 966 650 065',
    },
    {
        id: 1,
        icon: faEnvelope,
        name: 'Email',
        contactInfo1: 'itselbethel@gmail.com',
    },
]

// Social media contacts
interface socialMediaList {
    id: number;
    icon: IconDefinition;
    name: string;
    link: string;
}

export const socialMedia: socialMediaList[] = [
    {
        id: 0,
        icon: faLinkedin,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/elbethel-advert-a4b6081ab',
    },
    {
        id: 1,
        icon: faFacebook,
        name: 'facebook',
        link: 'https://www.facebook.com/share/1GhejT6oYS/',
    },
    {
        id: 2,
        icon: faTiktok,
        name: 'tiktok',
        link: 'https://www.tiktok.com/@elbetheladvert?_r=1&_t=ZM-9192x9dWAJv',
    },
    {
        id: 3,
        icon: faInstagram,
        name: 'Instagram',
        link: 'https://www.instagram.com/elbetheladvert?igsh=MXd2eHBoeXZmenZjdg==',
    },
];