// Generated by purs version 0.11.6
"use strict";
var Control_Bind = require("../Control.Bind");
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Boolean = require("../Data.Boolean");
var Data_Eq = require("../Data.Eq");
var Data_Foldable = require("../Data.Foldable");
var Data_Functor = require("../Data.Functor");
var Data_Graph = require("../Data.Graph");
var Data_List = require("../Data.List");
var Data_List_ThreeOrMore = require("../Data.List.ThreeOrMore");
var Data_List_Types = require("../Data.List.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Graphics_Isometric = require("../Graphics.Isometric");
var Partial_Unsafe = require("../Partial.Unsafe");
var Prelude = require("../Prelude");
var Vertex = (function () {
    function Vertex(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Vertex.create = function (value0) {
        return function (value1) {
            return new Vertex(value0, value1);
        };
    };
    return Vertex;
})();
var toScene = function (vertices) {
    var dropIndex = function (v) {
        return v.value1;
    };
    return Data_Foldable.foldMap(Data_List_Types.foldableList)(Graphics_Isometric.monoidScene)(dropIndex)(vertices);
};
var flatten = function (v) {
    if (v instanceof Graphics_Isometric.Many) {
        return Control_Bind.bind(Data_List_Types.bindList)(v.value0)(flatten);
    };
    return Data_List.singleton(v);
};
var eqVertex = new Data_Eq.Eq(function (v) {
    return function (v1) {
        return v.value0 === v1.value0;
    };
});
var ordVertex = new Data_Ord.Ord(function () {
    return eqVertex;
}, function (v) {
    return function (v1) {
        return Data_Ord.compare(Data_Ord.ordInt)(v.value0)(v1.value0);
    };
});
var bounds = function (shape) {
    var min$prime = function ($45) {
        return Data_Maybe.fromJust()(Data_Foldable.minimum(Data_Ord.ordNumber)(Data_List_Types.foldableList)($45));
    };
    var max$prime = function ($46) {
        return Data_Maybe.fromJust()(Data_Foldable.maximum(Data_Ord.ordNumber)(Data_List_Types.foldableList)($46));
    };
    var coords = Data_List.concat(Data_Functor.map(Data_List_Types.functorList)(Data_List_ThreeOrMore.toList)(shape));
    var cZ = Data_Functor.map(Data_List_Types.functorList)(function (v) {
        return v.z;
    })(coords);
    var cY = Data_Functor.map(Data_List_Types.functorList)(function (v) {
        return v.y;
    })(coords);
    var cX = Data_Functor.map(Data_List_Types.functorList)(function (v) {
        return v.x;
    })(coords);
    return {
        minX: min$prime(cX), 
        maxX: max$prime(cX), 
        minY: min$prime(cY), 
        maxY: max$prime(cY), 
        minZ: min$prime(cZ), 
        maxZ: max$prime(cZ)
    };
};
var isBehind = function (dictPartial) {
    return function (v) {
        return function (v1) {
            var __unused = function (dictPartial1) {
                return function ($dollar14) {
                    return $dollar14;
                };
            };
            return __unused(dictPartial)((function () {
                if (v.value1 instanceof Graphics_Isometric.Fill && v1.value1 instanceof Graphics_Isometric.Fill) {
                    var b2 = bounds(v1.value1.value1);
                    var b1 = bounds(v.value1.value1);
                    var decide = (function () {
                        if (b1.maxX <= b2.minX) {
                            return true;
                        };
                        if (b2.maxX <= b1.minX) {
                            return false;
                        };
                        if (b1.maxY <= b2.minY) {
                            return true;
                        };
                        if (b2.maxY <= b1.minY) {
                            return false;
                        };
                        if (b1.maxZ <= b2.minZ) {
                            return true;
                        };
                        if (b2.maxZ <= b1.minZ) {
                            return false;
                        };
                        if (Data_Boolean.otherwise) {
                            return true;
                        };
                        throw new Error("Failed pattern match at Graphics.Isometric.DepthSort line 58, column 5 - line 65, column 25: " + [  ]);
                    })();
                    return decide;
                };
                throw new Error("Failed pattern match at Graphics.Isometric.DepthSort line 53, column 1 - line 53, column 51: " + [ v.constructor.name, v1.constructor.name ]);
            })());
        };
    };
};
var toGraph = function (scene) {
    var addKey = function (scene1) {
        return function (key) {
            return new Vertex(key, scene1);
        };
    };
    var addKeys = function (list) {
        return Data_List.zipWith(addKey)(list)(Data_List.range(0)(Data_List.length(list) - 1 | 0));
    };
    var vertices = addKeys(flatten(scene));
    var edges = function (i) {
        return Data_List.filter(function (j) {
            return isBehind()(i)(j);
        })(vertices);
    };
    return Data_Graph.unfoldGraph(ordVertex)(Data_List_Types.functorList)(Data_List_Types.foldableList)(Data_List_Types.foldableList)(vertices)(Control_Category.id(Control_Category.categoryFn))(edges);
};
var depthSort = function ($47) {
    return toScene(Data_Graph.topologicalSort(ordVertex)(toGraph($47)));
};
module.exports = {
    depthSort: depthSort
};
