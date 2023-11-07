import { Schema, model } from 'mongoose';

export interface TeamInterface {
  teamName: string;
  teamCode: string;
  lead: string;
  noOfMembers: number;
  stage: {
    currentStage: number;
    timeStamps: StageTimeStamp[];
  };
}

export interface StageTimeStamp {
  stage: number;
  time: Date;
}

const TeamSchema = new Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    teamCode: {
      type: String,
      required: true,
    },
    lead: {
      type: String,
      required: true,
    },
    noOfMembers: {
      type: Number,
      required: true,
    },
    stage: {
      currentStage: {
        type: Number,
        default: 1,
      },
      timeStamps: [
        {
          stage: Number,
          time: Date,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const TeamModel = model<TeamInterface>('Team', TeamSchema);
export default TeamModel;
