import TeamCard from '../common/TeamCard';
import './TeamsSection.css';

export default function TeamsSection() {
  const faculty = [
    { name: 'Dr. Abir Chattopadhyay', role: 'Faculty Coordinator', img: './assset/DrAbir.jpeg', alt: 'Dr. Abir Chattopadhyay' },
    { name: 'Prof. Dr. Shreya Nag', role: 'Faculty Coordinator', img: './assset/DrShreya.jpeg', alt: 'Prof. Dr. Shreya Nag' },
  ];
  
  const leads = [
    { name: 'Abhiraj Saha', img: './assset/AbhirajSaha.jpeg', alt: 'Abhiraj Saha' },
    { name: 'Debdip Ghosh', img: './assset/DebdipGhosh.jpeg', alt: 'Debdip Ghosh' },
    { name: 'Shibangi Bose', img: './assset/ShibangiBose.jpeg', alt: 'Shibangi Bose' },
  ];
  
  const coordinators = [
    { name: 'subhankar Das Adhikary', role: 'Web dev', img: './assset/Subhankar.jpeg', alt: 'Subhankar Das Adhikary' },
    { name: 'Rohitaswa Singha', role: 'Graphics', img: './assset/Rohitaswa.jpeg', alt: 'Rohitaswa Singha' },
    { name: 'Rajdeb Pal', role: 'Sponsorship', img: './assset/RajdebPal.jpeg', alt: 'Rajdeb Pal' },
    { name: 'Raunak Dasgupta', role: 'Social media', img: './assset/Raunak.jpeg', alt: 'Raunak Dasgupta' },
    { name: 'Maupriya Pramanik', role: 'Decoration', img: './assset/Moupriya.jpeg', alt: 'Maupriya Pramanik' },
  ];

  let teamOffset = 0;
  const facultyWithIdx = faculty.map((m, i) => ({ ...m, idx: teamOffset++ }));
  const leadsWithIdx = leads.map((m, i) => ({ ...m, idx: teamOffset++ }));
  const coordWithIdx = coordinators.map((m, i) => ({ ...m, idx: teamOffset++ }));

  return (
    <section id="teams">
      <h1 className="section-title">Team</h1>
      <div className="group">
        <div className="group-label">Our Faculty Coordinator</div>
        <div className="grid" id="faculty-grid">
          {facultyWithIdx.map(m => (
            <TeamCard key={m.name} name={m.name} role={m.role} imgSrc={m.img} imgAlt={m.alt} index={m.idx} />
          ))}
        </div>
      </div>
      <div className="group">
        <div className="group-label">Leads</div>
        <div className="grid">
          {leadsWithIdx.map(m => (
            <TeamCard key={m.name} name={m.name} role={m.role} imgSrc={m.img} imgAlt={m.alt} index={m.idx} />
          ))}
        </div>
      </div>
      <div className="group">
        <div className="group-label">Coordinators</div>
        <div className="grid">
          {coordWithIdx.map(m => (
            <TeamCard key={m.name} name={m.name} role={m.role} imgSrc={m.img} imgAlt={m.alt} index={m.idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
