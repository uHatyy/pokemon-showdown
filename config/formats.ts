// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [


	{
		section: "FurretUsed",
	},

	{
		name: "[Gen 9] FurretUsed",
		mod: 'gen9',
		ruleset: ['Min Source Gen = 9', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', '- All Pokemon', '+ Furret', 'Nickname Clause'],
		onValidateTeam(team) {
			for (const set of team) {
				const name = set.name;
				const species = this.dex.species.get(name);
				if (species.name === "Furret"){
					return[
						`One cannot simply name a Furret "Furret"`
					]
				}
			}
		},
	},
];
