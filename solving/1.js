// 완주하지 못한 선수

function solution(participant, completion) {
    let answer = '';
    let check = participant.filter(val => !completion.includes(val));

    // 동명이인이 없는 경우
    if (check) {
        answer = check.join("");
    }
    // 동명이인이 있는 경우
    else {
        participant.sort();
        completion.sort();
        for (let i = 0; i < participant.length; i++) {
            if (participant[i] !== completion[i]) {
                answer = participant[i];
                console.log(answer);
            }
        }
    }

    return answer;
}