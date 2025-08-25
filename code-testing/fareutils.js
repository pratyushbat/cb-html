rate = {
    fixed: 50,
    minkm: 5,
    perKm: 10,
    freeMin: 15,
    perMin: 2
}

function calcFare(km, min){
    let fare = rate.fixed;
    fare += (km > rate.minkm) ? ((km - rate.minkm) * 10) : 0;
    fare += (min > rate.freeMin) ? ((min - rate.freeMin) * 2) : 0;
    return fare;

}
exports = module.exports = {
    rate,calcFare

}