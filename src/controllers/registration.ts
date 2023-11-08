import { Request, Response } from 'express';
import { fakeTeamDetails } from '../faker/teamDetails';
import TeamModel, { TeamInterface } from '../models/team.model';

export async function teamRegistration(req: Request, res: Response) {
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
export async function fakeTeamDetailsController(req: Request, res: Response) {
  try {
    const fakes = fakeTeamDetails(5);
    fakes.forEach(async (fake) => {
      await new TeamModel(fake).save();
    });
    res.json({ message: 'Teams added successfully', fakes });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
