function myFirstApp(name, age) {
    alert(`Привет, меня зовут ${name} и это моя первая программа!`);

    function showSkills() {
        let skills = [
            'html',
            'css',
            'js'
        ]
        for (let i = 0; i < skills.length; i++) {
            alert(`Я владею: ${skills[i]}`);
        }
    }
    showSkills()

    function checkAge() {
        if (age >= 18) {
            alert('У тебя отличные шансы стать FrontEnd dev!')
        } else {
            alert('Молодец что так рано решился!')
        }
    }
    checkAge()

    function calcPow(num) {
        return num * num;
    }
    alert(calcPow(4))
}

myFirstApp('Максим', 23);
