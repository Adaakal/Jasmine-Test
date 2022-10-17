function calculateTaxes(income) {
    if (!Number.isFinite(income)) {
        throw new Error('Invalid income!');
    }
    if (income > 30000) {
        return income * 0.25;
    } else {
        return income * 0.15;
    }
}

function removeDupes(values) {
    const arr = [...new Set(values)];
    if (typeof values === 'string') return arr.join('')
    return arr;
}

function remove(arr, val) {
    return arr.filter((el) => {
        el !== val
    });    
}

function append(arr, val) {
    arr.push(val);
}

function appendPure(arr, val) {
    return [...arr, val]
}

let usernames = [];
let input = document.getElementById('username');

function submitForm() {
    usernames.push(input.value);
}



console.log(calculateTaxes(500))