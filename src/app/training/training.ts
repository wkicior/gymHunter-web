export interface IActivity {
  id: number;
  name: string;
}

export interface ITrainer {
  id: number;
  name: string;
}

export interface ITraining {
  id: number;
  activity: IActivity;
  trainer: ITrainer;
  slotsAvailable: number;
  start_date: Date;
  end_date: Date
}

export interface ITrainingsResponse {
  trainings: ITraining[];
}


export interface ITrainingResponse {
  training: ITraining;
}

export class Training implements ITraining {
  activity: IActivity;
  end_date: Date;
  id: number;
  slotsAvailable: number;
  start_date: Date;
  trainer: ITrainer;

  static orderByStartDate() {
    return (t1, t2) => {
      if (t1.start_date > t2.start_date) {
        return 1;
      } else if (t1.start_date < t2.start_date) {
        return -1
      }
      return 0;
    }
  }
}
