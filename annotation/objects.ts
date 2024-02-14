const myProfileData = {
    fullName: 'Arghajeet',
    age: 29,
    coordinates: {
        lat: 20,
        long: 40
    },
    setAge(age1: number) {
        this.age = age1
    }
}

const { age, fullName }: { age: number, fullName: string } = myProfileData;
const { coordinates: { lat, long } }: { coordinates: { lat: number, long: number } } = myProfileData;




