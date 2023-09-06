import { readData } from '../utils';
import chalk from 'chalk';

import {calculatePlay, Play} from "../../shared/day-2";

export async function day2a(dataPath?: string) {
  const data = await readData(dataPath);
  let scores = {
    a: 0,
    b: 0
  }

  for (let play of data) {
    let [playA, playB] = play.split(' ');
    let finalPlay = calculatePlay(Play[playA], Play[playB]);

    scores.a += finalPlay[0];
    scores.b += finalPlay[1];
  }

  return scores.b;
}

// don't change below this line
// this makes sure we don't call the function when we import it for tests
if (process.argv.includes('--run')) {
  day2a().then((answer) => {
    console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
  });
}
