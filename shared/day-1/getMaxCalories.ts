
interface GetMaxCalories {
    caloriesArray: number[];
    limit: number;
}
export const getMaxCalories = (data, number) => {
    let elfCalories: number[] = [];
    let runningCalories: number = 0;

    for (let i = 0; i < data.length; i++) {
        if (!data[i]) {
            elfCalories.push(runningCalories);
            runningCalories = 0;

            // Move to let i
            continue;
        }

        let currentCalories = parseInt(data[i]);
        runningCalories += currentCalories;
    }

    let sortedCalories = elfCalories.sort((a,b) => b - a);

    if (!sortedCalories || sortedCalories.length === 0) {
        return 0;
    }

    return number === 1 ? sortedCalories[0] : sortedCalories.slice(0, number - 1).reduce((acc, currVal) => acc + currVal);
}