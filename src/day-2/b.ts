import { readData } from '../utils';
import chalk from 'chalk';

import {calculatePlay, Play} from "../../shared/day-2";


enum winningPlay {
  Rock = "B",
  Paper = "C",
  Scissors = "A"
}

enum losingPlay {
    Rock = "C",
    Paper = "A",
    Scissors = "B"
}

enum DesiredOutcome {
  X = "Loss",
  Y = "Draw",
  Z = "Win"
}

const calculateDesiredPlay = (play: Play, desiredOutcome: DesiredOutcome): Play => {
  switch (desiredOutcome) {
    case "Loss":
      return Play[losingPlay[play]];

    case "Win":
      return Play[winningPlay[play]];

    default:
      return play;
  }
}

export async function day2b(dataPath?: string) {
  const data = await readData(dataPath);

  let scores = {
    a: 0,
    b: 0
  }

  for (let play of data) {
    let [playA, desiredOutcome] = play.split(' ');
    let desiredPlay = calculateDesiredPlay(Play[playA], DesiredOutcome[desiredOutcome]);
    let finalPlay = calculatePlay(Play[playA], desiredPlay);

    scores.a += finalPlay[0];
    scores.b += finalPlay[1];
  }

  return scores.b;
}

// don't change below this line
// this makes sure we don't call the function when we import it for tests
if (process.argv.includes('--run')) {
  day2b().then((answer) => {
    console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
  });
}
