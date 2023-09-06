export const getMaxCalories = (data: string[], limit: number) => {
    let elfCalories: number[] = [];
    let runningCalories: number = 0;

    for (let i = 0; i < data.length; i++) {
        if (!data[i]) {
            elfCalories.push(runningCalories);
            runningCalories = 0;

            continue;
        }

        let currentCalories = parseInt(data[i]);
        runningCalories += currentCalories;

        if (i === data.length - 1) {
            elfCalories.push(runningCalories);
        }
    }

    let sortedCalories = elfCalories.sort((a,b) => b - a);

    if (!sortedCalories || sortedCalories.length === 0) {
        return 0;
    }

    return limit === 1 ? sortedCalories[0] : sortedCalories.slice(0, limit).reduce((acc, currVal) => acc + currVal);
}