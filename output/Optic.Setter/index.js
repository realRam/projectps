// Generated by purs version 0.11.6
"use strict";
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Functor_Contravariant = require("../Data.Functor.Contravariant");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Identity = require("../Data.Identity");
var Data_Maybe = require("../Data.Maybe");
var Data_Newtype = require("../Data.Newtype");
var Data_Profunctor = require("../Data.Profunctor");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Optic_Internal_Setter = require("../Optic.Internal.Setter");
var Optic_Types = require("../Optic.Types");
var Prelude = require("../Prelude");
var sets = function (dictProfunctor) {
    return function (dictProfunctor1) {
        return function (dictSettable) {
            return function (pab2qst) {
                return function ($17) {
                    return Optic_Internal_Setter.taintedDot(dictSettable)(dictProfunctor1)(pab2qst(Optic_Internal_Setter.untaintedDot(dictSettable)(dictProfunctor)($17)));
                };
            };
        };
    };
};
var set$prime = function (sa) {
    return function (a) {
        return function ($18) {
            return Data_Newtype.unwrap(Data_Identity.newtypeIdentity)(sa(function ($19) {
                return Data_Identity.Identity(Data_Function["const"](a)($19));
            })($18));
        };
    };
};
var set = function (stab) {
    return function (b) {
        return function ($20) {
            return Data_Newtype.unwrap(Data_Identity.newtypeIdentity)(stab(function ($21) {
                return Data_Identity.Identity(Data_Function["const"](b)($21));
            })($20));
        };
    };
};
var setJust = function (stab) {
    return function (a) {
        return set(stab)(new Data_Maybe.Just(a));
    };
};
var over = function (dictProfunctor) {
    return function (pstab) {
        return function (pab) {
            return function ($22) {
                return Data_Newtype.unwrap(Data_Identity.newtypeIdentity)(pstab(Data_Profunctor.rmap(dictProfunctor)(Data_Identity.Identity)(pab))($22));
            };
        };
    };
};
var sub = function (dictRing) {
    return function (staa) {
        return function (a) {
            return over(Data_Profunctor.profunctorFn)(staa)(Data_Function.flip(Data_Ring.sub(dictRing))(a));
        };
    };
};
var or = function (dictHeytingAlgebra) {
    return function (staa) {
        return function (a) {
            return over(Data_Profunctor.profunctorFn)(staa)(Data_Function.flip(Data_HeytingAlgebra.disj(dictHeytingAlgebra))(a));
        };
    };
};
var mul = function (dictSemiring) {
    return function (staa) {
        return function (a) {
            return over(Data_Profunctor.profunctorFn)(staa)(Data_Function.flip(Data_Semiring.mul(dictSemiring))(a));
        };
    };
};
var mapped = function (dictFunctor) {
    return function (dictSettable) {
        return sets(Data_Profunctor.profunctorFn)(Data_Profunctor.profunctorFn)(dictSettable)(Data_Functor.map(dictFunctor));
    };
};
var div = function (dictEuclideanRing) {
    return function (staa) {
        return function (a) {
            return over(Data_Profunctor.profunctorFn)(staa)(Data_Function.flip(Data_EuclideanRing.div(dictEuclideanRing))(a));
        };
    };
};
var contramapped = function (dictContravariant) {
    return function (dictSettable) {
        return sets(Data_Profunctor.profunctorFn)(Data_Profunctor.profunctorFn)(dictSettable)(Data_Functor_Contravariant.cmap(dictContravariant));
    };
};
var concat = function (dictSemigroup) {
    return function (staa) {
        return function (a) {
            return over(Data_Profunctor.profunctorFn)(staa)(Data_Function.flip(Data_Semigroup.append(dictSemigroup))(a));
        };
    };
};
var argument = function (dictProfunctor) {
    return function (dictSettable) {
        return sets(Data_Profunctor.profunctorFn)(Data_Profunctor.profunctorFn)(dictSettable)(Data_Profunctor.lmap(dictProfunctor));
    };
};
var and = function (dictHeytingAlgebra) {
    return function (staa) {
        return function (a) {
            return over(Data_Profunctor.profunctorFn)(staa)(Data_Function.flip(Data_HeytingAlgebra.conj(dictHeytingAlgebra))(a));
        };
    };
};
var add = function (dictSemiring) {
    return function (staa) {
        return function (a) {
            return over(Data_Profunctor.profunctorFn)(staa)(Data_Function.flip(Data_Semiring.add(dictSemiring))(a));
        };
    };
};
module.exports = {
    add: add, 
    and: and, 
    argument: argument, 
    concat: concat, 
    contramapped: contramapped, 
    div: div, 
    mapped: mapped, 
    mul: mul, 
    or: or, 
    over: over, 
    set: set, 
    "set'": set$prime, 
    setJust: setJust, 
    sets: sets, 
    sub: sub
};
