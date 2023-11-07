import { Request, Response } from 'express';
import TeamModel, { TeamInterface } from '../models/team.model';

export async function getLeaderBoard(req: Request, res: Response) {
  try {
    const { teamName, teamCode, lead, noOfMembers }: TeamInterface = req.body;
    const team = new TeamModel({
      teamName,
      teamCode,
      lead,
      noOfMembers,
    });
    const t = await team.save();
    res.json({ message: 'Team registered successfully', team: t });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
