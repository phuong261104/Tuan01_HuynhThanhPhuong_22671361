const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [players1, players2] = game.players;
console.log("players1,2:", players1, players2);
const [gk, ...fieldPlayers] = players1
console.log("Goalkeeper (gk):", gk);
console.log("Field Players:", fieldPlayers);
const allPlayers = [...players1, ...players2]
console.log("All Players:", allPlayers);
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log("players1Final:", players1Final);
const { team1, x, team2 } = game.odds
console.log("team1:", team1);
console.log("draw:", x);
console.log("team2:", team2);
const printGoals = (...players) => {
    console.log(`${players.length} players`);
    players.forEach(players => console.log(players))
}
printGoals(game.scored)
console.log(team1 < team2 && game.team1 || team2 < team1 && game.team2);