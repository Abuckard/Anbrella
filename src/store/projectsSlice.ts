import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: number;
  title: string;
  description: string;
}

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: [
    { id: 1, title: 'Webbplats för Kund A', description: 'Byggde en modern React-webbplats.' },
    { id: 2, title: 'Projektledning åt Företag B', description: 'Ledde ett IT-projekt med Scrum.' }
  ]
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    }
  }
});

export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;

