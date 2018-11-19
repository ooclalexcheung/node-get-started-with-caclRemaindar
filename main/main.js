// Write your cade below:
function caclRemaindar( x, y) {
    return x% y;
};

function caclSum(inputarray) {
    var sum =0;
    for (let i=0; i<inputarray.length; i++)
    {
        sum += (inputarray[i]);
    }
    return sum;

};

function caclSumInConditon(inputarray,number) {
    var sum =0;
    for (let i=0; i<inputarray.length; i++)
    {
        if(inputarray[i]< number)
        sum += (inputarray[i]);
    }
    return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}