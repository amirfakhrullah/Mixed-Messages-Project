const randomNumber = x => {
    return Math.floor(Math.random() * x);
};

const allMessages = {
    musician: ['Taylor Swift', 'Travis Scott', 'Drake', 'BTS', 'Billie Eilish', 'Kanye West'],
    typingSkill: ['old', 'quite old', 'newbie', 'expert'],
    level: ['Richard Hendricks', 'a badass Gilfoyle', 'Pakistani Denzel', 'a loyal Jared', 'JIAN YANG!!']
};

const createRandomMessages = (obj, func) => {
    const output = []
    for (let key in obj) {
        var ind = func(obj[key].length);
        output.push(obj[key][ind]);
    };
    return output;
}

const printMessages = (createRandomMessages, allMessages, randomNumber) => {
    const arr = createRandomMessages(allMessages, randomNumber);
    console.log(`You are as cool as ${arr[0]}`);
    console.log(`Based on your typing speed, I can guess that you are ${arr[1]}`);
    console.log(`Your coding skills is at the same level as ${arr[2]}`);
};

printMessages(createRandomMessages, allMessages, randomNumber);