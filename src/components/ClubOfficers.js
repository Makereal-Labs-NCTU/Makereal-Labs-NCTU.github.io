import "./ClubOfficers.css";
import { HiOutlineMail } from 'react-icons/hi'
import { useEffect, useState } from "react";

const officers = {
    chairperson: [{ name: "陳逸安", email: "yianchen.ee13@nycu.edu.tw" }],
    vice_president: [
      { name: "劉亭妤", email: "doratyliu@gmail.com" },
      { name: "張家慈", email: "haleychang.ee13@nycu.edu.tw" },
      { name: "游柏竣", email: "timber1118@gmail.com" },
    ],
    teaching_leader: [
      { name: "劉以翔", email: "viecon342524.cs13@nycu.edu.tw" },
      { name: "楊峻宇", email: "shinmeow1338.cs13@nycu.edu.tw" },
      { name: "朱修毅", email: "jsy0305.cs13@nycu.edu.tw" },
      { name: "張家瑞", email: "violetff.ee13@nycu.edu.tw" },
      { name: "賴香伊", email: "laidependent.cs13@nycu.edu.tw" },
    ],
    PR: [
      { name: "吳昱輝", email: "wuni1102@gmail.com" },
      { name: "施俊宇", email: "junyushi1@gmail.com" },
    ],
    AD: [
      { name: "陳冠霆", email: "marvin.ee13@nycu.edu.tw" },
      { name: "蔡俊則", email: "toshi.cs12@nycu.edu.tw" },
    ],
    IM: [
      { name: "陳冠霆", email: "marvin.ee13@nycu.edu.tw" },
      { name: "游柏竣", email: "timber1118@gmail.com" }
    ],
    doc: [{ name: "魏靖彤", email: "evawei456@gmail.com" }],
    GA: [{ name: "楊庭愷", email: "antoniotkyang.cs13@nycu.edu.tw" }],
    Web: [
      { name: "游柏竣", email: "timber1118@gmail.com" },
      { name: "張雅安", email: "buioyc1129euuio@gmail.com" }
    ],
    Cloud: [{ name: "張雅安", email: "buioyc1129euuio@gmail.com" }],
};

const OfficerSection = ({ roleKey, displayTitle }) => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
  
    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
  
    const members = officers[roleKey];
    if (!members) return null;
  
    return (
      <div className="officer_section">
        <p className="officer_title">{displayTitle}</p>
        <hr className="officer_line"/>
        {members.map((member, index) => (
          <div className="officer_member" key={index}>
            <p className="officer_name">{member.name}</p>
            <a target="_blank" rel="noreferrer" href={`mailto:${member.email}`} className="officer_email_wrapper">
                <HiOutlineMail className="officer_icon" />
                <p className="officer_email">{member.email}</p>
            </a>
          </div>
        ))}
      </div>
    );
};
  

export default function ClubOfficers({ windowSize }) {
    return (
      <div className="club_officers">
        <OfficerSection roleKey="chairperson" displayTitle="社長" />
        <OfficerSection roleKey="vice_president" displayTitle="副社長"/>
        <OfficerSection roleKey="teaching_leader" displayTitle="教學"/>
        <OfficerSection roleKey="PR" displayTitle="公關"/>
        <OfficerSection roleKey="AD" displayTitle="美宣"/>
        <OfficerSection roleKey="IM" displayTitle="資材"/>
        <OfficerSection roleKey="doc" displayTitle="文書"/>
        <OfficerSection roleKey="GA" displayTitle="總務"/>
        <OfficerSection roleKey="Cloud" displayTitle="雲端"/>
        <OfficerSection roleKey="Web" displayTitle="網頁"/>
      </div>
    );
}

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}