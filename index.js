function produceDrivingRange(blockRange) {
    return function(blockOne, blockTwo) {
        let range = blockTwo.substring(0, blockTwo.length - 2) - blockOne.substring(0, blockOne.length - 2); 

        if (range <= blockRange) {
            return `within range by ${range}`
        } else {
            let outOfRange = range - blockRange; 
            return `${outOfRange} blocks out of range`
        }
    }
}

function produceTipCalculator(percentTip) {
    return function(fare) {
        return fare * percentTip; 
    }
}

function createDriver() {
    let DriverId = 0; 

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++DriverId;
        }
    }
}

const Driver = createDriver(); 