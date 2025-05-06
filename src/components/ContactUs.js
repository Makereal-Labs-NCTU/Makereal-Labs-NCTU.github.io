import ClubLogo from "./ClubLogo";
import ClubOfficers from "./ClubOfficers";
import './ContactUs.css';
import { HiOutlineMail } from 'react-icons/hi'
import { useEffect, useState } from "react";

const ContactUs = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className='contact_us'>
            <ClubLogo />
            <div className='inside_contact'>
                <p className='location_title'>
                    俱樂部總部
                </p>
                <p className='location_address'>
                    300093 新竹市東區大學路1001號 工程四館 417室
                </p>
                <a className="club_email_link" target="_blank" rel="noreferrer" href='mailto: makereallabsnctu@gmail.com'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='club_email_icon' />
                    <p className='club_email'>
                        makereallabsnctu@gmail.com
                    </p>
                </a>
                <iframe className="ED_google_map" title='NYCU_ED' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38681.97595020033!2d120.97740893772944!3d24.783728290876198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468360f99028df7%3A0x642392a8d294e075!2z6Zm95piO5Lqk6YCa5aSn5a245bel56iL5Zub6aSo!5e0!3m2!1szh-TW!2stw!4v1660239042269!5m2!1szh-TW!2stw" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            <ClubOfficers />
        </div >
    );
}

export default ContactUs;

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}
