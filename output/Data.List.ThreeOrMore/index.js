// Generated by purs version 0.11.6
"use strict";
var Data_List = require("../Data.List");
var Data_List_Types = require("../Data.List.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_NonEmpty = require("../Data.NonEmpty");
var Data_Semigroup = require("../Data.Semigroup");
var Prelude = require("../Prelude");
var toList = function (v) {
    return new Data_List_Types.Cons(v.value0, new Data_List_Types.Cons(v.value1.value0, new Data_List_Types.Cons(v.value1.value1.value0, v.value1.value1.value1)));
};
var reverse = function (v) {
    var v1 = Data_List.reverse(v.value1.value1.value1);
    if (v1 instanceof Data_List_Types.Nil) {
        return new Data_NonEmpty.NonEmpty(v.value1.value1.value0, new Data_NonEmpty.NonEmpty(v.value1.value0, new Data_NonEmpty.NonEmpty(v.value0, Data_List_Types.Nil.value)));
    };
    if (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Nil) {
        return new Data_NonEmpty.NonEmpty(v1.value0, new Data_NonEmpty.NonEmpty(v.value1.value1.value0, new Data_NonEmpty.NonEmpty(v.value1.value0, new Data_List_Types.Cons(v.value0, Data_List_Types.Nil.value))));
    };
    if (v1 instanceof Data_List_Types.Cons && (v1.value1 instanceof Data_List_Types.Cons && v1.value1.value1 instanceof Data_List_Types.Nil)) {
        return new Data_NonEmpty.NonEmpty(v1.value0, new Data_NonEmpty.NonEmpty(v1.value1.value0, new Data_NonEmpty.NonEmpty(v.value1.value1.value0, new Data_List_Types.Cons(v.value1.value0, new Data_List_Types.Cons(v.value0, Data_List_Types.Nil.value)))));
    };
    if (v1 instanceof Data_List_Types.Cons && (v1.value1 instanceof Data_List_Types.Cons && v1.value1.value1 instanceof Data_List_Types.Cons)) {
        return new Data_NonEmpty.NonEmpty(v1.value0, new Data_NonEmpty.NonEmpty(v1.value1.value0, new Data_NonEmpty.NonEmpty(v1.value1.value1.value0, Data_Semigroup.append(Data_List_Types.semigroupList)(v1.value1.value1.value1)(new Data_List_Types.Cons(v.value1.value1.value0, new Data_List_Types.Cons(v.value1.value0, new Data_List_Types.Cons(v.value0, Data_List_Types.Nil.value)))))));
    };
    throw new Error("Failed pattern match at Data.List.ThreeOrMore line 25, column 3 - line 29, column 64: " + [ v1.constructor.name ]);
};
var last = function (v) {
    return Data_Maybe.fromMaybe(v.value1.value1.value0)(Data_List.last(v.value1.value1.value1));
};
module.exports = {
    last: last, 
    reverse: reverse, 
    toList: toList
};
