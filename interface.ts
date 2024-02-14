//reusing interface in different places
interface HeightIFace {
    heightInCm(): number
}

const userData = {
    name: 'Arghajeet',
    age: 29,
    height: 5.7,
    heightInCm() {
        return (this.height * 10)
    }
};

const myCar2 = {
    maker: 'tesla',
    colour: 'red',
    speed: 40,
    height: 13.5,
    heightInCm() {
        return (this.height * 10)
    }
}

const printData = (uData: HeightIFace) => {
    console.log(uData.heightInCm());
}

printData(userData);
printData(myCar2);