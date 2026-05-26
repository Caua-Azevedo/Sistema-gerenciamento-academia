import React, { createContext, useContext, useState } from 'react';

export interface Exercise {
  id: string;
  name: string;
  series: number;
  reps: number;
  weight?: number;
  notes?: string;
}

export interface Workout {
  id: string;
  name: string;
  description: string;
  teacherId: string;
  teacherName: string;
  exercises: Exercise[];
  createdAt: string;
  assignedStudents?: string[];
}

export interface ConsultationRequest {
  id: string;
  studentId: string;
  studentName: string;
  teacherId?: string;
  status: 'pending' | 'accepted' | 'rejected';
  message: string;
  createdAt: string;
}

interface DataContextType {
  workouts: Workout[];
  consultationRequests: ConsultationRequest[];
  addWorkout: (workout: Workout) => void;
  updateWorkout: (id: string, workout: Partial<Workout>) => void;
  deleteWorkout: (id: string) => void;
  assignWorkoutToStudent: (workoutId: string, studentId: string) => void;
  addConsultationRequest: (request: ConsultationRequest) => void;
  updateConsultationRequest: (id: string, status: 'accepted' | 'rejected') => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Mock data
const MOCK_WORKOUTS: Workout[] = [
  {
    id: '1',
    name: 'Treino de Peito e Tríceps',
    description: 'Treino focado em desenvolvimento de peito e tríceps',
    teacherId: 'teacher1',
    teacherName: 'Prof. Carlos',
    exercises: [
      { id: '1', name: 'Supino Reto', series: 4, reps: 8, weight: 100 },
      { id: '2', name: 'Supino Inclinado', series: 3, reps: 10, weight: 80 },
      { id: '3', name: 'Rosca Tríceps', series: 3, reps: 12, weight: 40 },
    ],
    createdAt: new Date().toISOString(),
    assignedStudents: ['student1'],
  },
  {
    id: '2',
    name: 'Treino de Costas e Bíceps',
    description: 'Treino para desenvolvimento de costas e bíceps',
    teacherId: 'teacher1',
    teacherName: 'Prof. Carlos',
    exercises: [
      { id: '4', name: 'Puxada Frontal', series: 4, reps: 8, weight: 80 },
      { id: '5', name: 'Rosca Direta', series: 3, reps: 10, weight: 30 },
      { id: '6', name: 'Remada Curvada', series: 3, reps: 8, weight: 60 },
    ],
    createdAt: new Date().toISOString(),
  },
];

const MOCK_CONSULTATION_REQUESTS: ConsultationRequest[] = [
  {
    id: '1',
    studentId: 'student1',
    studentName: 'João Silva',
    status: 'pending',
    message: 'Gostaria de uma consultoria sobre nutrição e treino',
    createdAt: new Date().toISOString(),
  },
];

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [workouts, setWorkouts] = useState<Workout[]>(MOCK_WORKOUTS);
  const [consultationRequests, setConsultationRequests] = useState<ConsultationRequest[]>(MOCK_CONSULTATION_REQUESTS);

  const addWorkout = (workout: Workout) => {
    setWorkouts([...workouts, workout]);
  };

  const updateWorkout = (id: string, updates: Partial<Workout>) => {
    setWorkouts(workouts.map(w => w.id === id ? { ...w, ...updates } : w));
  };

  const deleteWorkout = (id: string) => {
    setWorkouts(workouts.filter(w => w.id !== id));
  };

  const assignWorkoutToStudent = (workoutId: string, studentId: string) => {
    setWorkouts(workouts.map(w => {
      if (w.id === workoutId) {
        const assignedStudents = w.assignedStudents || [];
        if (!assignedStudents.includes(studentId)) {
          return { ...w, assignedStudents: [...assignedStudents, studentId] };
        }
      }
      return w;
    }));
  };

  const addConsultationRequest = (request: ConsultationRequest) => {
    setConsultationRequests([...consultationRequests, request]);
  };

  const updateConsultationRequest = (id: string, status: 'accepted' | 'rejected') => {
    setConsultationRequests(consultationRequests.map(r => r.id === id ? { ...r, status } : r));
  };

  return (
    <DataContext.Provider value={{
      workouts,
      consultationRequests,
      addWorkout,
      updateWorkout,
      deleteWorkout,
      assignWorkoutToStudent,
      addConsultationRequest,
      updateConsultationRequest,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData deve ser usado dentro de um DataProvider');
  }
  return context;
}
