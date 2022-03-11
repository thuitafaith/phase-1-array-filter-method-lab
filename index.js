// Code your solution here
function findMatching (arr,str) {
    return arr.filter((match)=> match.toLowerCase()=== str.toLowerCase());
}

function fuzzyMatch(arr,str){

    return arr.filter((letterBegin)=> letterBegin.indexOf(str) === 0) ;

}

function matchName(arr,str){

    return arr.filter((driverName)=> driverName.name === str)

}