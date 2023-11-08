import { faker } from '@faker-js/faker';

export function fakeTeamDetails(count: number) {
  const teamDetails = [];
  for (let i = 0; i < count; i++) {
    const teamDetail = {
      teamName: faker.company.name(),
      teamCode: faker.string.numeric({
        length: 4,
      }),
      lead: faker.person.fullName({ sex: 'male' }), // 'Fernando Schaefer'
      noOfMembers: faker.number.int({
        min: 2,
        max: 4,
      }),
    };
    teamDetails.push(teamDetail);
  }
  return teamDetails;
}
