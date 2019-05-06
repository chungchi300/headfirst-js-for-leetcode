var isSubsequence = function(s, t) {
  for (var i = 0; i < s.length; i++) {
    //abc=>three cycle
    //ahbgdc

    var index = t.indexOf(s.charAt(i));
    //ahbgdc => hbgdc
    t = t.slice(index + 1);
    if (index == -1) return false;
  }
  return true;
};
