import {readData} from '../utils';
import chalk from 'chalk';
import {getMaxCalories} from "../../shared/day-1/getMaxCalories";

export async function day1b(dataPath?: string) {
  const data = await readData(dataPath);

  return getMaxCalories(data, 3);
}

// don't change below this line
// this makes sure we don't call the function when we import it for tests
if (process.argv.includes('--run')) {
  day1b().then((answer) => {
    console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
  });
}
