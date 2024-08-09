// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianNames2 = ["Ayaz", "Fayas", "Tariq", "madad"];
var magicianNamesCopy = __spreadArray([], magicianNames2, true);
function show_magicians(greet) {
    var withGreeting = "";
    for (var _i = 0, magicianNamesCopy_1 = magicianNamesCopy; _i < magicianNamesCopy_1.length; _i++) {
        var item = magicianNamesCopy_1[_i];
        withGreeting += "".concat(greet, " ").concat(item, "\n");
    }
    return withGreeting;
}
;
var myGreeting = show_magicians("Hello!");
var makeArray = myGreeting.split('\n');
console.log(makeArray);
console.log(magicianNames2);
