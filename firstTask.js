var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var str = '';
    var i = 0;
    var mass = [];
    
    while (i < s.length) {
        if (mass[s[i]]) {
            // Found a repeating character.
            if (str.length > max) {
                max = str.length;
            }
            var start = str.indexOf(s[i]);
            str = str.substring(start + 1);
        }

        if (i < s.length) {
            str += s[i];
            mass[s[i]] = i + 1;
            i++;
        }
    }
    
    if (str.length > max) {
        max = str.length;
    }
    
    return mass;
    
};
console.log(lengthOfLongestSubstring('abcabcd'));
