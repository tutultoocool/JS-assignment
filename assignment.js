function feetToMile(feet){
    var mile = feet * 0.000189394;
    return mile;
}


function woodCalculator(chair, bed, _table){
    var chairCount = chair * 2;
    var bedCount = bed * 6;
    var _tableCount = _table *4;
    var totalWood = chairCount + bedCount + _tableCount;
    return totalWood;
}
     

function brickCalculator(part1, part2, part3){
    var part1Count = part1 * 15 * 1000;
    var part2Count = part2 * 12 * 1000;
    var part3Count = part3 * 10 * 1000;
    var totalBrick = part1Count + part2Count + part3Count;
    return totalBrick;
}


function tinyFriend(s){
    let shortest = Infinity;
    for (let i = 0; i < wordsArr.length; i ++){
        let wordsLength = wordsArr[i].length;
        if(wordsLength < shortest){
            shortest = wordLength
        }
    }
    return shortest;
}

