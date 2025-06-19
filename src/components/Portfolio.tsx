import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { addProject } from '../store/projectsSlice';

const Portfolio: React.FC = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    const newProject = {
      id: Date.now(),
      title: 'Nytt Projekt',
      description: 'Beskrivning av projektet.'
    };
    dispatch(addProject(newProject));
  };

  return (
    <div className="mt-10 px-4 max-w-6xl w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Våra projekt</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button onClick={handleAdd} className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full shadow hover:brightness-110 transition">Lägg till projekt</button>
      </div>
    </div>
  );
};

export default Portfolio;