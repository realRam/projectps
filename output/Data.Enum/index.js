// Generated by purs version 0.11.6
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_MonadPlus = require("../Control.MonadPlus");
var Control_MonadZero = require("../Control.MonadZero");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Boolean = require("../Data.Boolean");
var Data_Bounded = require("../Data.Bounded");
var Data_Char = require("../Data.Char");
var Data_Either = require("../Data.Either");
var Data_Eq = require("../Data.Eq");
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Maybe = require("../Data.Maybe");
var Data_Newtype = require("../Data.Newtype");
var Data_NonEmpty = require("../Data.NonEmpty");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Data_Ring = require("../Data.Ring");
var Data_Semiring = require("../Data.Semiring");
var Data_Tuple = require("../Data.Tuple");
var Data_Unfoldable = require("../Data.Unfoldable");
var Data_Unit = require("../Data.Unit");
var Partial_Unsafe = require("../Partial.Unsafe");
var Prelude = require("../Prelude");
var Cardinality = function (x) {
    return x;
};
var Enum = function (Ord0, pred, succ) {
    this.Ord0 = Ord0;
    this.pred = pred;
    this.succ = succ;
};
var BoundedEnum = function (Bounded0, Enum1, cardinality, fromEnum, toEnum) {
    this.Bounded0 = Bounded0;
    this.Enum1 = Enum1;
    this.cardinality = cardinality;
    this.fromEnum = fromEnum;
    this.toEnum = toEnum;
};
var toEnum = function (dict) {
    return dict.toEnum;
};
var succ = function (dict) {
    return dict.succ;
};
var pred = function (dict) {
    return dict.pred;
};
var ordCardinality = Data_Ord.ordInt;
var newtypeCardinality = new Data_Newtype.Newtype(function (n) {
    return n;
}, Cardinality);
var intStepFromTo = function (step) {
    return function (from) {
        return function (to) {
            return Data_Unfoldable.unfoldr(Data_Unfoldable.unfoldableArray)(function (e) {
                var $54 = e <= to;
                if ($54) {
                    return Data_Maybe.Just.create(new Data_Tuple.Tuple(e, e + step | 0));
                };
                return Data_Maybe.Nothing.value;
            })(from);
        };
    };
};
var fromEnum = function (dict) {
    return dict.fromEnum;
};
var toEnumWithDefaults = function (dictBoundedEnum) {
    return function (b) {
        return function (t) {
            return function (x) {
                var v = toEnum(dictBoundedEnum)(x);
                if (v instanceof Data_Maybe.Just) {
                    return v.value0;
                };
                if (v instanceof Data_Maybe.Nothing) {
                    var $57 = x < fromEnum(dictBoundedEnum)(Data_Bounded.bottom(dictBoundedEnum.Bounded0()));
                    if ($57) {
                        return b;
                    };
                    return t;
                };
                throw new Error("Failed pattern match at Data.Enum line 260, column 28 - line 262, column 56: " + [ v.constructor.name ]);
            };
        };
    };
};
var eqCardinality = Data_Eq.eqInt;
var enumUnit = new Enum(function () {
    return Data_Ord.ordUnit;
}, Data_Function["const"](Data_Maybe.Nothing.value), Data_Function["const"](Data_Maybe.Nothing.value));
var enumTuple = function (dictEnum) {
    return function (dictBoundedEnum) {
        return new Enum(function () {
            return Data_Tuple.ordTuple(dictEnum.Ord0())((dictBoundedEnum.Enum1()).Ord0());
        }, function (v) {
            return Data_Maybe.maybe(Data_Functor.map(Data_Maybe.functorMaybe)(Data_Function.flip(Data_Tuple.Tuple.create)(Data_Bounded.top(dictBoundedEnum.Bounded0())))(pred(dictEnum)(v.value0)))(function ($101) {
                return Data_Maybe.Just.create(Data_Tuple.Tuple.create(v.value0)($101));
            })(pred(dictBoundedEnum.Enum1())(v.value1));
        }, function (v) {
            return Data_Maybe.maybe(Data_Functor.map(Data_Maybe.functorMaybe)(Data_Function.flip(Data_Tuple.Tuple.create)(Data_Bounded.bottom(dictBoundedEnum.Bounded0())))(succ(dictEnum)(v.value0)))(function ($102) {
                return Data_Maybe.Just.create(Data_Tuple.Tuple.create(v.value0)($102));
            })(succ(dictBoundedEnum.Enum1())(v.value1));
        });
    };
};
var enumOrdering = new Enum(function () {
    return Data_Ord.ordOrdering;
}, function (v) {
    if (v instanceof Data_Ordering.LT) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof Data_Ordering.EQ) {
        return new Data_Maybe.Just(Data_Ordering.LT.value);
    };
    if (v instanceof Data_Ordering.GT) {
        return new Data_Maybe.Just(Data_Ordering.EQ.value);
    };
    throw new Error("Failed pattern match at Data.Enum line 72, column 1 - line 72, column 39: " + [ v.constructor.name ]);
}, function (v) {
    if (v instanceof Data_Ordering.LT) {
        return new Data_Maybe.Just(Data_Ordering.EQ.value);
    };
    if (v instanceof Data_Ordering.EQ) {
        return new Data_Maybe.Just(Data_Ordering.GT.value);
    };
    if (v instanceof Data_Ordering.GT) {
        return Data_Maybe.Nothing.value;
    };
    throw new Error("Failed pattern match at Data.Enum line 72, column 1 - line 72, column 39: " + [ v.constructor.name ]);
});
var enumMaybe = function (dictBoundedEnum) {
    return new Enum(function () {
        return Data_Maybe.ordMaybe((dictBoundedEnum.Enum1()).Ord0());
    }, function (v) {
        if (v instanceof Data_Maybe.Nothing) {
            return Data_Maybe.Nothing.value;
        };
        if (v instanceof Data_Maybe.Just) {
            return Data_Maybe.Just.create(pred(dictBoundedEnum.Enum1())(v.value0));
        };
        throw new Error("Failed pattern match at Data.Enum line 80, column 1 - line 80, column 54: " + [ v.constructor.name ]);
    }, function (v) {
        if (v instanceof Data_Maybe.Nothing) {
            return Data_Maybe.Just.create(new Data_Maybe.Just(Data_Bounded.bottom(dictBoundedEnum.Bounded0())));
        };
        if (v instanceof Data_Maybe.Just) {
            return Data_Functor.map(Data_Maybe.functorMaybe)(Data_Maybe.Just.create)(succ(dictBoundedEnum.Enum1())(v.value0));
        };
        throw new Error("Failed pattern match at Data.Enum line 80, column 1 - line 80, column 54: " + [ v.constructor.name ]);
    });
};
var enumInt = new Enum(function () {
    return Data_Ord.ordInt;
}, function (n) {
    var $70 = n > Data_Bounded.bottom(Data_Bounded.boundedInt);
    if ($70) {
        return new Data_Maybe.Just(n - 1 | 0);
    };
    return Data_Maybe.Nothing.value;
}, function (n) {
    var $71 = n < Data_Bounded.top(Data_Bounded.boundedInt);
    if ($71) {
        return new Data_Maybe.Just(n + 1 | 0);
    };
    return Data_Maybe.Nothing.value;
});
var enumFromTo = function (dictEnum) {
    return function (dictUnfoldable) {
        return function (from) {
            return function (to) {
                var go = function (mx) {
                    return Control_Bind.bind(Data_Maybe.bindMaybe)(mx)(function (v) {
                        return Control_Bind.discard(Control_Bind.discardUnit)(Data_Maybe.bindMaybe)(Control_MonadZero.guard(Data_Maybe.monadZeroMaybe)(Data_Ord.lessThanOrEq(dictEnum.Ord0())(v)(to)))(function () {
                            return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(new Data_Tuple.Tuple(v, succ(dictEnum)(v)));
                        });
                    });
                };
                return Data_Unfoldable.unfoldr(dictUnfoldable)(go)(new Data_Maybe.Just(from));
            };
        };
    };
};
var enumFromThenTo = function (dictBoundedEnum) {
    return function (a) {
        return function (b) {
            return function (c) {
                var c$prime = fromEnum(dictBoundedEnum)(c);
                var b$prime = fromEnum(dictBoundedEnum)(b);
                var a$prime = fromEnum(dictBoundedEnum)(a);
                return Data_Functor.map(Data_Functor.functorArray)(function ($103) {
                    return Data_Maybe.fromJust()(toEnum(dictBoundedEnum)($103));
                })(intStepFromTo(b$prime - a$prime | 0)(a$prime)(c$prime));
            };
        };
    };
};
var enumEither = function (dictBoundedEnum) {
    return function (dictBoundedEnum1) {
        return new Enum(function () {
            return Data_Either.ordEither((dictBoundedEnum.Enum1()).Ord0())((dictBoundedEnum1.Enum1()).Ord0());
        }, function (v) {
            if (v instanceof Data_Either.Left) {
                return Data_Maybe.maybe(Data_Maybe.Nothing.value)(function ($104) {
                    return Data_Maybe.Just.create(Data_Either.Left.create($104));
                })(pred(dictBoundedEnum.Enum1())(v.value0));
            };
            if (v instanceof Data_Either.Right) {
                return Data_Maybe.maybe(Data_Maybe.Just.create(new Data_Either.Left(Data_Bounded.top(dictBoundedEnum.Bounded0()))))(function ($105) {
                    return Data_Maybe.Just.create(Data_Either.Right.create($105));
                })(pred(dictBoundedEnum1.Enum1())(v.value0));
            };
            throw new Error("Failed pattern match at Data.Enum line 86, column 1 - line 86, column 75: " + [ v.constructor.name ]);
        }, function (v) {
            if (v instanceof Data_Either.Left) {
                return Data_Maybe.maybe(Data_Maybe.Just.create(new Data_Either.Right(Data_Bounded.bottom(dictBoundedEnum1.Bounded0()))))(function ($106) {
                    return Data_Maybe.Just.create(Data_Either.Left.create($106));
                })(succ(dictBoundedEnum.Enum1())(v.value0));
            };
            if (v instanceof Data_Either.Right) {
                return Data_Maybe.maybe(Data_Maybe.Nothing.value)(function ($107) {
                    return Data_Maybe.Just.create(Data_Either.Right.create($107));
                })(succ(dictBoundedEnum1.Enum1())(v.value0));
            };
            throw new Error("Failed pattern match at Data.Enum line 86, column 1 - line 86, column 75: " + [ v.constructor.name ]);
        });
    };
};
var enumBoolean = new Enum(function () {
    return Data_Ord.ordBoolean;
}, function (v) {
    if (v) {
        return new Data_Maybe.Just(false);
    };
    return Data_Maybe.Nothing.value;
}, function (v) {
    if (!v) {
        return new Data_Maybe.Just(true);
    };
    return Data_Maybe.Nothing.value;
});
var diag = function (a) {
    return new Data_Tuple.Tuple(a, a);
};
var downFrom = function (dictEnum) {
    return function (dictUnfoldable) {
        return Data_Unfoldable.unfoldr(dictUnfoldable)(function ($108) {
            return Data_Functor.map(Data_Maybe.functorMaybe)(diag)(pred(dictEnum)($108));
        });
    };
};
var upFrom = function (dictEnum) {
    return function (dictUnfoldable) {
        return Data_Unfoldable.unfoldr(dictUnfoldable)(function ($109) {
            return Data_Functor.map(Data_Maybe.functorMaybe)(diag)(succ(dictEnum)($109));
        });
    };
};
var upFromIncluding = function (dictEnum) {
    return function (dictUnfoldable) {
        return function (x) {
            return new Data_NonEmpty.NonEmpty(x, upFrom(dictEnum)(dictUnfoldable)(x));
        };
    };
};
var defaultToEnum = function (dictBounded) {
    return function (dictEnum) {
        return function (n) {
            if (n < 0) {
                return Data_Maybe.Nothing.value;
            };
            if (n === 0) {
                return new Data_Maybe.Just(Data_Bounded.bottom(dictBounded));
            };
            if (Data_Boolean.otherwise) {
                return Control_Bind.bind(Data_Maybe.bindMaybe)(defaultToEnum(dictBounded)(dictEnum)(n - 1 | 0))(succ(dictEnum));
            };
            throw new Error("Failed pattern match at Data.Enum line 239, column 1 - line 239, column 65: " + [ n.constructor.name ]);
        };
    };
};
var defaultSucc = function (toEnum$prime) {
    return function (fromEnum$prime) {
        return function (a) {
            return toEnum$prime(fromEnum$prime(a) + 1 | 0);
        };
    };
};
var defaultPred = function (toEnum$prime) {
    return function (fromEnum$prime) {
        return function (a) {
            return toEnum$prime(fromEnum$prime(a) - 1 | 0);
        };
    };
};
var defaultFromEnum = function (dictEnum) {
    return function ($110) {
        return Data_Maybe.maybe(0)(function (prd) {
            return defaultFromEnum(dictEnum)(prd) + 1 | 0;
        })(pred(dictEnum)($110));
    };
};
var defaultCardinality = function (dictBounded) {
    return function (dictEnum) {
        var defaultCardinality$prime = function (i) {
            return function ($111) {
                return Data_Maybe.maybe(i)(defaultCardinality$prime(i + 1 | 0))(succ(dictEnum)($111));
            };
        };
        return Cardinality(defaultCardinality$prime(1)(Data_Bounded.bottom(dictBounded)));
    };
};
var charToEnum = function (v) {
    if (v >= Data_Bounded.bottom(Data_Bounded.boundedInt) && v <= Data_Bounded.top(Data_Bounded.boundedInt)) {
        return Data_Maybe.Just.create(Data_Char.fromCharCode(v));
    };
    return Data_Maybe.Nothing.value;
};
var enumChar = new Enum(function () {
    return Data_Ord.ordChar;
}, defaultPred(charToEnum)(Data_Char.toCharCode), defaultSucc(charToEnum)(Data_Char.toCharCode));
var cardinality = function (dict) {
    return dict.cardinality;
};
var boundedEnumUnit = new BoundedEnum(function () {
    return Data_Bounded.boundedUnit;
}, function () {
    return enumUnit;
}, 1, Data_Function["const"](0), function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(Data_Unit.unit);
    };
    return Data_Maybe.Nothing.value;
});
var boundedEnumTuple = function (dictBoundedEnum) {
    return function (dictBoundedEnum1) {
        return new BoundedEnum(function () {
            return Data_Tuple.boundedTuple(dictBoundedEnum.Bounded0())(dictBoundedEnum1.Bounded0());
        }, function () {
            return enumTuple(dictBoundedEnum.Enum1())(dictBoundedEnum1);
        }, Cardinality(Data_Newtype.unwrap(newtypeCardinality)(cardinality(dictBoundedEnum)) * Data_Newtype.unwrap(newtypeCardinality)(cardinality(dictBoundedEnum1)) | 0), (function () {
            var from = function (v) {
                return function (v1) {
                    return (fromEnum(dictBoundedEnum)(v1.value0) * v | 0) + fromEnum(dictBoundedEnum1)(v1.value1) | 0;
                };
            };
            return from(cardinality(dictBoundedEnum1));
        })(), (function () {
            var to = function (v) {
                return function (n) {
                    return Control_Apply.apply(Data_Maybe.applyMaybe)(Data_Functor.map(Data_Maybe.functorMaybe)(Data_Tuple.Tuple.create)(toEnum(dictBoundedEnum)(n / v | 0)))(toEnum(dictBoundedEnum1)(n % v));
                };
            };
            return to(cardinality(dictBoundedEnum1));
        })());
    };
};
var boundedEnumOrdering = new BoundedEnum(function () {
    return Data_Bounded.boundedOrdering;
}, function () {
    return enumOrdering;
}, 3, function (v) {
    if (v instanceof Data_Ordering.LT) {
        return 0;
    };
    if (v instanceof Data_Ordering.EQ) {
        return 1;
    };
    if (v instanceof Data_Ordering.GT) {
        return 2;
    };
    throw new Error("Failed pattern match at Data.Enum line 188, column 1 - line 188, column 53: " + [ v.constructor.name ]);
}, function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(Data_Ordering.LT.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(Data_Ordering.EQ.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(Data_Ordering.GT.value);
    };
    return Data_Maybe.Nothing.value;
});
var boundedEnumMaybe = function (dictBoundedEnum) {
    return new BoundedEnum(function () {
        return Data_Maybe.boundedMaybe(dictBoundedEnum.Bounded0());
    }, function () {
        return enumMaybe(dictBoundedEnum);
    }, Cardinality(Data_Newtype.unwrap(newtypeCardinality)(cardinality(dictBoundedEnum)) + 1 | 0), function (v) {
        if (v instanceof Data_Maybe.Nothing) {
            return 0;
        };
        if (v instanceof Data_Maybe.Just) {
            return fromEnum(dictBoundedEnum)(v.value0) + 1 | 0;
        };
        throw new Error("Failed pattern match at Data.Enum line 198, column 1 - line 198, column 68: " + [ v.constructor.name ]);
    }, function (v) {
        if (v === 0) {
            return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(Data_Maybe.Nothing.value);
        };
        return Data_Functor.map(Data_Maybe.functorMaybe)(Data_Maybe.Just.create)(toEnum(dictBoundedEnum)(v - 1 | 0));
    });
};
var boundedEnumEither = function (dictBoundedEnum) {
    return function (dictBoundedEnum1) {
        return new BoundedEnum(function () {
            return Data_Either.boundedEither(dictBoundedEnum.Bounded0())(dictBoundedEnum1.Bounded0());
        }, function () {
            return enumEither(dictBoundedEnum)(dictBoundedEnum1);
        }, Cardinality(Data_Newtype.unwrap(newtypeCardinality)(cardinality(dictBoundedEnum)) + Data_Newtype.unwrap(newtypeCardinality)(cardinality(dictBoundedEnum1)) | 0), function (v) {
            if (v instanceof Data_Either.Left) {
                return fromEnum(dictBoundedEnum)(v.value0);
            };
            if (v instanceof Data_Either.Right) {
                return fromEnum(dictBoundedEnum1)(v.value0) + Data_Newtype.unwrap(newtypeCardinality)(cardinality(dictBoundedEnum)) | 0;
            };
            throw new Error("Failed pattern match at Data.Enum line 205, column 1 - line 205, column 89: " + [ v.constructor.name ]);
        }, function (n) {
            var to = function (v) {
                if (n >= 0 && n < v) {
                    return Data_Functor.map(Data_Maybe.functorMaybe)(Data_Either.Left.create)(toEnum(dictBoundedEnum)(n));
                };
                if (Data_Boolean.otherwise) {
                    return Data_Functor.map(Data_Maybe.functorMaybe)(Data_Either.Right.create)(toEnum(dictBoundedEnum1)(n - v | 0));
                };
                throw new Error("Failed pattern match at Data.Enum line 212, column 5 - line 212, column 46: " + [ v.constructor.name ]);
            };
            return to(cardinality(dictBoundedEnum));
        });
    };
};
var boundedEnumChar = new BoundedEnum(function () {
    return Data_Bounded.boundedChar;
}, function () {
    return enumChar;
}, Data_Char.toCharCode(Data_Bounded.top(Data_Bounded.boundedChar)) - Data_Char.toCharCode(Data_Bounded.bottom(Data_Bounded.boundedChar)) | 0, Data_Char.toCharCode, charToEnum);
var boundedEnumBoolean = new BoundedEnum(function () {
    return Data_Bounded.boundedBoolean;
}, function () {
    return enumBoolean;
}, 2, function (v) {
    if (!v) {
        return 0;
    };
    if (v) {
        return 1;
    };
    throw new Error("Failed pattern match at Data.Enum line 169, column 1 - line 169, column 51: " + [ v.constructor.name ]);
}, function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(false);
    };
    if (v === 1) {
        return new Data_Maybe.Just(true);
    };
    return Data_Maybe.Nothing.value;
});
module.exports = {
    Cardinality: Cardinality, 
    BoundedEnum: BoundedEnum, 
    Enum: Enum, 
    cardinality: cardinality, 
    defaultCardinality: defaultCardinality, 
    defaultFromEnum: defaultFromEnum, 
    defaultPred: defaultPred, 
    defaultSucc: defaultSucc, 
    defaultToEnum: defaultToEnum, 
    downFrom: downFrom, 
    enumFromThenTo: enumFromThenTo, 
    enumFromTo: enumFromTo, 
    fromEnum: fromEnum, 
    pred: pred, 
    succ: succ, 
    toEnum: toEnum, 
    toEnumWithDefaults: toEnumWithDefaults, 
    upFrom: upFrom, 
    upFromIncluding: upFromIncluding, 
    newtypeCardinality: newtypeCardinality, 
    eqCardinality: eqCardinality, 
    ordCardinality: ordCardinality, 
    enumBoolean: enumBoolean, 
    enumInt: enumInt, 
    enumChar: enumChar, 
    enumUnit: enumUnit, 
    enumOrdering: enumOrdering, 
    enumMaybe: enumMaybe, 
    enumEither: enumEither, 
    enumTuple: enumTuple, 
    boundedEnumBoolean: boundedEnumBoolean, 
    boundedEnumChar: boundedEnumChar, 
    boundedEnumUnit: boundedEnumUnit, 
    boundedEnumOrdering: boundedEnumOrdering, 
    boundedEnumMaybe: boundedEnumMaybe, 
    boundedEnumEither: boundedEnumEither, 
    boundedEnumTuple: boundedEnumTuple
};
