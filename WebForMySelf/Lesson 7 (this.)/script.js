let person = {
    name: 'Max',
    age: 30,
    job: 'Front-End developer',
    displayInfo: function(ms) {
        let self = this

        setTimeout(function() {
            console.log('Name: ' + self.name);
            console.log('Job: ' + self.job);
            console.log('Age: ' + self.age);
        }, ms)
    }
}

person.displayInfo(2000)