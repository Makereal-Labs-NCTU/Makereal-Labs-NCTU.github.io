import ClubLogo from "./ClubLogo";
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

            <div className="contact_people">
                <p className="chairperson_title">
                    社長
                </p>
                <hr className='chairperson_separate_line' />
                <p className="chairperson_name">
                    陳逸安
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:yianchen.ee13@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='chairperson_email_icon' />
                    <p className="chairperson_email">
                        yianchen.ee13@nycu.edu.tw
                    </p>
                </a>


                <p className="vice_president_title">
                    副社長
                </p>
                <hr className='vice_president_separate_line' />
                <p className="vice_president_1_name">
                    劉亭妤
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:doratyliu@gmail.com'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='vice_president_1_email_icon' />
                    <p className="vice_president_1_email">
                        doratyliu@gmail.com
                    </p>
                </a>
                <p className="vice_president_title">
                    副社長
                </p>
                <hr className='vice_president_separate_line' />
                <p className="vice_president_2_name">
                    張家慈
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:haleychang.ee13@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='vice_president_2_email_icon' />
                    <p className="vice_president_2_email">
                        haleychang.ee13@nycu.edu.tw
                    </p>
                </a>
                <p className="vice_president_title">
                    副社長
                </p>
                <hr className='vice_president_separate_line' />
                <p className="vice_president_3_name">
                    游柏竣
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:timber1118@gmail.com'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='vice_president_3_email_icon' />
                    <p className="vice_president_3_email">
                        timber1118@gmail.com
                    </p>
                </a>


                <p className="teaching_leader_title">
                    教學
                </p>
                <hr className='teaching_leader_separate_line' />
                <p className="teaching_leader_name">
                    劉以翔
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:viecon342524.cs13@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='teaching_leader_email_icon' />
                    <p className="teaching_leader_email">
                    viecon342524.cs13@nycu.edu.tw
                    </p>
                </a>
                <p className="teaching_leader2_name">
                   楊峻宇
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:shinmeow1338.cs13@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='teaching_leader2_email_icon' />
                    <p className="teaching_leader2_email">
                    shinmeow1338.cs13@nycu.edu.tw
                    </p>
                </a>
                <p className="teaching_leader3_name">
                    朱修毅
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:jsy0305.cs13@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='teaching_leader3_email_icon' />
                    <p className="teaching_leader3_email">
                    jsy0305.cs13@nycu.edu.tw
                    </p>
                </a>
                <p className="teaching_leader4_name">
                    張家瑞
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:violetff.ee13@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='teaching_leader4_email_icon' />
                    <p className="teaching_leader4_email">
                    violetff.ee13@nycu.edu.tw
                    </p>
                </a>
                <p className="teaching_leader5_name">
                    賴香伊
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:laidependent.cs13@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='teaching_leader5_email_icon' />
                    <p className="teaching_leader5_email">
                    laidependent.cs13@nycu.edu.tw
                    </p>
                </a>


                <p className="PR_title">
                    公關
                </p>
                <hr className='PR_separate_line' />
                <p className="PR_name">
                    吳昱輝
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:wuni1102@gmail.com'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='PR_email_icon' />
                    <p className="PR_email">
                    wuni1102@gmail.com
                    </p>
                </a>
                <p className="PR2_name">
                    蔡俊則
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:toshi.cs12@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='PR2_email_icon' />
                    <p className="PR2_email">
                    toshi.cs12@nycu.edu.tw
                    </p>
                </a>
                <p className="PR3_name">
                    施俊宇
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:junyushi1@gmail.com'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='PR3_email_icon' />
                    <p className="PR3_email">
                    junyushi1@gmail.com
                    </p>
                </a>


                <p className="AD_title">
                    美宣兼資材
                </p>
                <hr className='AD_separate_line' />
                <p className="AD_1_name">
                    陳冠霆
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:marvin.ee13@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='AD_1_email_icon' />
                    <p className="AD_1_email">
                    marvin.ee13@nycu.edu.tw
                    </p>
                </a>


                <p className="doc_title">
                    文書
                </p>
                <hr className='doc_separate_line' />
                <p className="doc_name">
                    魏靖彤
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:evawei456@gmail.com'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='doc_email_icon' />
                    <p className="doc_email">
                    evawei456@gmail.com
                    </p>
                </a>


                <p className="GA_title">
                    總務
                </p>
                <hr className='GA_separate_line' />
                <p className="GA_name">
                    楊庭愷
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:antoniotkyang.cs13@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='GA_email_icon' />
                    <p className="GA_email">
                    antoniotkyang.cs13@nycu.edu.tw
                    </p>
                </a>


                <p className="WM_title">
                    網頁兼雲端
                </p>
                <hr className='WM_separate_line' />
                <p className="WM_name">
                    張雅安
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:buioyc1129euuio@gmail.com'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='WM_email_icon' />
                    <p className="WM_email">
                    buioyc1129euuio@gmail.com
                    </p>
                </a>


                {/* <p className="GA2_name">
                    彭弈睿
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:ray.ee11@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='GA2_email_icon' />
                    <p className="GA2_email">
                        ray.ee11@nycu.edu.tw
                    </p>
                </a>                
                <p className="internet_manager_title">
                    網頁
                </p>
                <hr className='internet_manager_separate_line' />
                <p className="internet_manager_name">
                    莊采蒨
                </p>
                <a target="_blank" rel="noreferrer" href='mailto:caician.ee11@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='internet_manager_email_icon' />
                    <p className="internet_manager_email">
                        caician.ee11@nycu.edu.tw
                    </p>
                </a> */}
            </div>
        </div >
    );
}

export default ContactUs;

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}
