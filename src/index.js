module.exports = function(arr) {
  let hs = {};
  let ans = 0;
  
  arr.forEach(elem => hs[elem] = true);

  arr.forEach(elem => {
    if (!(elem-1 in hs)) {
      let st = elem;

      while (st in hs) {
        st++;
        // counter++
      }

      ans = Math.max(ans, st - elem);
    }
  });

  return ans;
}