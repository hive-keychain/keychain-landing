import React from 'react';

const Team = () => {
  const team = [
    {
      name: 'Quentin',
      role: 'Founder / Witness',
      hiveUsername: '@stoodkev',
      image: 'https://files.peakd.com/file/peakd-hive/stoodkev/273162954_469718881301752_2563467209379192939_n.png',
    },
    {
      name: 'Cédric',
      role: 'Lead Developer / Full-stack Dev',
      hiveUsername: '@cedricguillas',
      image: 'https://files.peakd.com/file/peakd-hive/cedricguillas/285053246_1250941865310987_7996652080792882831_n.jpg',
    },
    {
      name: 'Manu',
      role: 'Community Manager | Witness',
      hiveUsername: '@manuphotos',
      image: 'https://files.peakd.com/file/peakd-hive/manuphotos/IMG_5767.jpeg',
    },
    {
      name: 'Matt',
      role: 'Advisor / Witness',
      hiveUsername: '@yabapmatt',
      image: 'https://pbs.twimg.com/profile_images/1585239290459586560/XDaNWJ6u_400x400.png',
    },
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet the team
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <a
                  href={`https://peakd.com/${member.hiveUsername}`}
                  className="text-red-600 hover:text-red-700 transition-colors"
                  target="_blank"
                >
                  {member.hiveUsername}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;