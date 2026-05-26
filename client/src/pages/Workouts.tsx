import { useAuth } from '@/contexts/AuthContext';
import { useData } from '@/contexts/DataContext';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Trash2, Edit2, Plus, Dumbbell } from 'lucide-react';
import { toast } from 'sonner';

export default function Workouts() {
  const { user } = useAuth();
  const { workouts, deleteWorkout } = useData();

  if (!user || user.type !== 'teacher') {
    return null;
  }

  const myWorkouts = workouts.filter(w => w.teacherId === user.id);

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Tem certeza que deseja deletar o treino "${name}"?`)) {
      deleteWorkout(id);
      toast.success('Treino deletado com sucesso!');
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl text-foreground">Meus Treinos</h1>
            <p className="text-muted-foreground mt-1">Gerencie todos os seus treinos</p>
          </div>
          <Link href="/workouts/new">
            <Button className="bg-primary hover:bg-blue-700 gap-2">
              <Plus className="w-4 h-4" />
              Novo Treino
            </Button>
          </Link>
        </div>

        {/* Workouts List */}
        {myWorkouts.length === 0 ? (
          <Card className="border border-border">
            <CardContent className="pt-12 pb-12 text-center">
              <Dumbbell className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="font-heading text-lg text-foreground mb-2">Nenhum treino criado</h3>
              <p className="text-muted-foreground mb-6">Comece criando seu primeiro treino</p>
              <Link href="/workouts/new">
                <Button className="bg-primary hover:bg-blue-700">
                  Criar Primeiro Treino
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myWorkouts.map((workout) => (
              <Card key={workout.id} className="border border-border hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{workout.name}</CardTitle>
                      <CardDescription className="mt-1">{workout.description}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/workouts/${workout.id}/edit`}>
                        <Button size="sm" variant="outline" className="gap-1">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="gap-1 text-destructive hover:text-destructive"
                        onClick={() => handleDelete(workout.id, workout.name)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Exercises */}
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-3">Exercícios ({workout.exercises.length})</h4>
                    <div className="space-y-2">
                      {workout.exercises.map((exercise) => (
                        <div key={exercise.id} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                          <div>
                            <p className="font-medium text-sm text-foreground">{exercise.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {exercise.series}x{exercise.reps} {exercise.weight && `@ ${exercise.weight}kg`}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Assigned Students */}
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-2">
                      Alunos Atribuídos: {workout.assignedStudents?.length || 0}
                    </h4>
                    {workout.assignedStudents && workout.assignedStudents.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {workout.assignedStudents.map((studentId) => (
                          <span key={studentId} className="px-2 py-1 bg-blue-50 text-primary text-xs rounded-full font-medium">
                            Aluno {studentId.slice(0, 4)}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-muted-foreground">Nenhum aluno atribuído ainda</p>
                    )}
                  </div>

                  {/* Action Button */}
                  <Link href={`/workouts/${workout.id}`}>
                    <Button variant="outline" className="w-full">
                      Ver Detalhes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
