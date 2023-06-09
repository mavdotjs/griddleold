type GridNum = {
    value: number,
    sort?: number,
}

export type Game = {
    guessesLeft: number,
    grid: GridNum[],
    answer: number,
    tolerance: number,
    modal: boolean,
    isCorrect: boolean,
}

function baseGrid(answer: number): GridNum[] {
    return [
        { value: answer-1 },
        { value: answer+1 }
    ]
}

export function shuffle(grid: GridNum[]): GridNum[] {
    return grid.map(value => ({ ...value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(value => ({ ...value, sort:undefined }))
}

function createGame(): Game {
    const answer = random(75, 25)
    const grid = shuffle(fillGrid(baseGrid(answer), answer));

    return {
        guessesLeft: 3,
        grid,
        answer,
        tolerance: 1,
        modal: false,
        isCorrect: false
    }
}

function fillGrid(base: GridNum[], answer: number) {
    for(const _ of new Array(100 - base.length).map((_,i) => i)) {
        const index = base.length
        let value;
        value = { value: random(100, 1) }
        do {
            value = { value: random(100, 1) }
        } while(value.value === answer)
        base[index] = value
    }
    return base
}

function random(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min) ) + min
}

export {
    createGame
}