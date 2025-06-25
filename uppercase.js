 let a = ["john", "Bob", "Alice"];
    let uppercased = a.map(name => name.toUpperCase());
    console.log(uppercased);

    let b = [5, 10, 12, 6, 11];
let updated = b.map(num => num + 10);
console.log(updated);

    let nums = [1,2,3,4,5,6]
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i]);
    }
}
