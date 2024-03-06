let object = {
  username: "Santa",
  username1: "Rudolf",
  username2: "Mr. Grinch",
};

// Object.keys()

/* The Object.keys() static method returns an array of a given object's string-keyed property names.*/
/* Syntax:
        Objects.keys(obj)
        
    The parameter is an object.
    The returned value is an array of strings representing the given object's enumerable string-keyed properties. */

Object.keys(object).forEach((key) => {
  console.log(key, object[key]);
});

/* This gives back:
        username Santa
        username1 Rudolf
        username2 Mr. Grinch*/

// Object.values()

/* The Object.values() static method returns an array of a given object's enumerable string-keyed property values. */
/* Syntax:
        Object.values(object)
        
    The parameter is an object.
    The returned value is an array containing the given object's enumerable string-keyed property values. */
Object.values(object).forEach((value) => {
  console.log(value);
});

/* This gives back:
        Santa
        Rudolf
        Mr. Grinch*/

// Object.entries()

/* The Object.entries() static method returns an array of a given object's enumerable string-keyed property key-value pairs. */
/* Syntax:
        Object.entries(obj)
        
        The parameter is an object.
        The returned value is an array of the given object's enumerable string-keyed property key-value pairs. */
Object.entries(object).forEach((value) => {
  console.log(value);
});

// another example
Object.entries(object).map((value) => {
  return value[1] + value[0].replace("username", "");
});

// Object.fromEntries()

/* The Object.fromEntries() static method transforms a list of key-value pairs into an object. */
/* Syntax:
        Object.fromEntries(iterable)
        
        The parameter is an iterable, such as an Array or a Map, containing a list of objects. Each object should have two properties:
        0: a string or a symbol representing the property key
        1: the property value
        
        The returned value is a new object whose properties are given by the entries of the iterable. */
userProfiles = [
  ["commanderTom", 23],
  ["Derek", 40],
  ["Barka", 25],
];
Object.fromEntries(userProfiles);
