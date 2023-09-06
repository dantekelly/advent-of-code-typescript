enum ShapeValue {
    Rock = 1,
    Paper = 2,
    Scissors = 3
}
enum OutcomeValue {
    Loss = 0,
    Draw = 3,
    Win = 6
}

enum Play {
    A = "Rock",
    B = "Paper",
    C = "Scissors",
    X = "Rock",
    Y = "Paper",
    Z = "Scissors",
}

const calculateOutcome = (play: Play, outcome: OutcomeValue) => ShapeValue[play] + outcome;
const calculatePlay = (a: Play, b: Play): number[] => {
    const {Draw, Win, Loss} = OutcomeValue;

    if (a === b) {
        return [calculateOutcome(a, Draw), calculateOutcome(b, Draw)];
    }

    if (a === "Rock") {
        if (b === "Paper") {
            return [calculateOutcome(a, Loss), calculateOutcome(b, Win)];
        }

        return [calculateOutcome(a, Win), calculateOutcome(b, Loss)]
    }

    if (a === "Scissors") {
        if (b === "Rock") {
            return [calculateOutcome(a, Loss), calculateOutcome(b, Win)]
        }

        return [calculateOutcome(a, Win), calculateOutcome(b, Loss)]
    }

    return calculatePlay(b, a).reverse();
}




export {ShapeValue, OutcomeValue, Play, calculateOutcome, calculatePlay}