type GridNum = {
    value: number,
    sort?: number,
}

type Game = {
    guessesLeft: number,
    grid: GridNum[],
    answer: number,
}

function baseGrid(answer: number): GridNum[] {
    return [
        { value: answer-1 },
        { value: answer+1 }
    ]
}

function shuffle(grid: GridNum[]): GridNum[] {
    return grid.map(value => ({ ...value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(value => ({ ...value, sort:undefined }))
}

function createGame(): Game {
    const answer = Math.floor(Math.random() * 100)
    const grid = shuffle(fillGrid(baseGrid(answer), answer));

    return {
        guessesLeft: 3,
        grid,
        answer
    }
}

function fillGrid(base: GridNum[], answer: number) {
    for(const _ of new Array(100 - base.length).map((_,i) => i)) {
        const index = base.length
        base[index] = { value: random(100, 1) }
        do {
            base[index] = { value: random(100, 1) }
        } while(base[index].value === answer)
    }
    return base
}

function random(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min) ) + min
}

export {
    createGame
}