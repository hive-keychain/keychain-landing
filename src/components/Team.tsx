import React from 'react';

const Team = () => {
  const team = [
    {
      name: 'John Doe',
      role: 'Lead Developer',
      hiveUsername: '@johndoe',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      hiveUsername: '@janesmith',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      name: 'Mike Johnson',
      role: 'Security Expert',
      hiveUsername: '@mikejohnson',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    },
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
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
                  href={`https://hive.blog/@${member.hiveUsername}`}
                  className="text-red-600 hover:text-red-700 transition-colors"
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