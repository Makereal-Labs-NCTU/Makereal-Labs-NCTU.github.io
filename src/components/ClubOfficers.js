import "./ClubOfficers.css";
import { HiOutlineMail } from 'react-icons/hi'
import { useEffect, useState } from "react";

const OfficerSection = ({ roleKey, displayTitle }) => {
    const [officers, setOfficers] = useState(null);

    useEffect(() => {
      const fetchOfficers = async () => {
        const response = await fetch("/club_officers.json");
        console.log(response);
        const data = await response.json();
        setOfficers(data);
      };

      fetchOfficers();
    }, []);

    if (!officers) {
      return <div>Loading...</div>;
    }

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
        <OfficerSection roleKey="PR" displayTitle="公關"/>
        <OfficerSection roleKey="AD" displayTitle="美宣"/>
        <OfficerSection roleKey="IM" displayTitle="資材"/>
        <OfficerSection roleKey="Web" displayTitle="網頁"/>
        <OfficerSection roleKey="doc" displayTitle="文書"/>
        <OfficerSection roleKey="GA" displayTitle="總務"/>
        <OfficerSection roleKey="Cloud" displayTitle="雲端"/>
        <OfficerSection roleKey="teaching_leader" displayTitle="教學"/>
      </div>
    );
}