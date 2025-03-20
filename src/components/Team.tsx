import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Team = () => {
  const { t } = useLanguage();
  const team = [
    {
      name: 'Quentin',
      role: t('team.quentin.text'),
      hiveUsername: '@stoodkev',
      image: 'https://files.peakd.com/file/peakd-hive/stoodkev/273162954_469718881301752_2563467209379192939_n.png',
    },
    {
      name: 'Cédric',
      role: t('team.cedric.text'),
      hiveUsername: '@cedricguillas',
      image: 'https://files.peakd.com/file/peakd-hive/cedricguillas/285053246_1250941865310987_7996652080792882831_n.jpg',
    },
    {
      name: 'Manu',
      role: t('team.manu.text'),
      hiveUsername: '@manuphotos',
      image: 'https://files.peakd.com/file/peakd-hive/manuphotos/IMG_5767.jpeg',
    },
    {
      name: 'Carlo',
      role: t('team.carlo.text'),
      hiveUsername: '@krios.003',
      image: 'https://files.peakd.com/file/peakd-hive/krios003/118886.jpg',
    },
    {
      name: 'Matt',
      role: t('team.matt.text'),
      hiveUsername: '@yabapmatt',
      image: 'https://cdn.steemitimages.com/DQmaj4WmfPgxL2iGkDLUVxiAySQmptZtkJoBxnS4DDNPtDY/profile_yabapmatt_800.jpg',
    },
  ];

  return (
    <section id="team" className="py-16 bg-[#E5EDF5]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('team.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 md:gap-4">
          {team.map((member, index) => (
            <div
  key={index}
  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
>
  <div className="relative w-full aspect-w-1 aspect-h-1">
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-cover object-center"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
    <p className="text-gray-600 mb-2">{member.role}</p>
    <a
      href={`https://peakd.com/${member.hiveUsername}`}
      className="text-red-600 hover:text-red-700 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
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