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
    contactInfo: string;
}

export const contacts: contactList[] = [
    {
        id: 0,
        icon: faPhone,
        name: 'Phone',
        contactInfo: '+251 911 107 495',
    },
    {
        id: 1,
        icon: faEnvelope,
        name: 'Email',
        contactInfo: 'info@elbetheladvert.com',
    },
]

// Social media contacts
interface socialMediaList {
    id: number;
    icon: IconDefinition;
    name: string;
}

export const socialMedia: socialMediaList[] = [
    { id: 0, icon: faLinkedin, name: 'LinkedIn' },
    { id: 1, icon: faFacebook, name: 'facebook' },
    { id: 2, icon: faTiktok, name: 'tiktok' },
    { id: 3, icon: faInstagram, name: 'Instagram' },
];