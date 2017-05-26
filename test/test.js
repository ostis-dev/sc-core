var assert = require('assert');
const types = require('../build/sc-core');

const ScType = types.ScType;

describe('ScType', function() {
    const allTypes = [
        ScType.Const,
        ScType.Var,
        ScType.Node,
        ScType.Link,
        ScType.EdgeAccess,
        ScType.Unknown,
        ScType.EdgeUCommon,
        ScType.EdgeDCommon,
        ScType.EdgeUCommonConst,
        ScType.EdgeDCommonConst,
        ScType.EdgeUCommonVar,
        ScType.EdgeDCommonVar,
        ScType.EdgeAccessConstPosPerm,
        ScType.EdgeAccessConstNegPerm,
        ScType.EdgeAccessConstFuzPerm,
        ScType.EdgeAccessConstPosTemp,
        ScType.EdgeAccessConstNegTemp,
        ScType.EdgeAccessConstFuzTemp,
        ScType.EdgeAccessVarPosPerm,
        ScType.EdgeAccessVarNegPerm,
        ScType.EdgeAccessVarFuzPerm,
        ScType.EdgeAccessVarPosTemp,
        ScType.EdgeAccessVarNegTemp,
        ScType.EdgeAccessVarFuzTemp,
        ScType.NodeConst,
        ScType.NodeVar,
        ScType.LinkConst,
        ScType.LinkVar,
        ScType.NodeConstStruct,
        ScType.NodeConstTuple,
        ScType.NodeConstRole,
        ScType.NodeConstNoRole,
        ScType.NodeConstClass,
        ScType.NodeConstAbstract,
        ScType.NodeConstMaterial,
        ScType.NodeVarStruct,
        ScType.NodeVarTuple,
        ScType.NodeVarRole,
        ScType.NodeVarNoRole,
        ScType.NodeVarClass,
        ScType.NodeVarAbstract,
        ScType.NodeVarMaterial
    ];

    describe('construct', function() {

        it('Empty', function() {
            const t = new ScType();
            assert.ok(!t.isValid());
            assert.ok(!t.equal(ScType.NodeConst));
        });

        it('From value', function() {
            const t = new ScType(types.ScType.NodeVar.getValue());
            assert.ok(t.isValid());
            assert.ok(t.equal(ScType.NodeVar));
        });
    });

    describe('is functions', function() {
        it('isNode', function() {
            var node_types = [
                ScType.Node,
                ScType.NodeConst,
                ScType.NodeVar,
                ScType.NodeConstStruct,
                ScType.NodeConstTuple,
                ScType.NodeConstRole,
                ScType.NodeConstNoRole,
                ScType.NodeConstClass,
                ScType.NodeConstAbstract,
                ScType.NodeConstMaterial,
                ScType.NodeVarStruct,
                ScType.NodeVarTuple,
                ScType.NodeVarRole,
                ScType.NodeVarNoRole,
                ScType.NodeVarClass,
                ScType.NodeVarAbstract,
                ScType.NodeVarMaterial
            ];  
            
            for (var i = 0; i < allTypes.length; ++i) {
                var type = allTypes[i];
                if (node_types.indexOf(type) !== -1)
                    assert.ok(type.isNode());
                else
                    assert.ok(!type.isNode());
            }
        });

        it('isEdge', function() {
            assert.ok(ScType.EdgeUCommon.isEdge());
            assert.ok(ScType.EdgeDCommon.isEdge());
            assert.ok(ScType.EdgeUCommonConst.isEdge());
            assert.ok(ScType.EdgeDCommonConst.isEdge());
            assert.ok(ScType.EdgeUCommonVar.isEdge());
            assert.ok(ScType.EdgeDCommonVar.isEdge());
            assert.ok(ScType.EdgeAccess.isEdge());
            assert.ok(ScType.EdgeAccessConstPosPerm.isEdge());
            assert.ok(ScType.EdgeAccessConstNegPerm.isEdge());
            assert.ok(ScType.EdgeAccessConstFuzPerm.isEdge());
            assert.ok(ScType.EdgeAccessConstPosTemp.isEdge());
            assert.ok(ScType.EdgeAccessConstNegTemp.isEdge());
            assert.ok(ScType.EdgeAccessConstFuzTemp.isEdge());
            assert.ok(ScType.EdgeAccessVarPosPerm.isEdge());
            assert.ok(ScType.EdgeAccessVarNegPerm.isEdge());
            assert.ok(ScType.EdgeAccessVarFuzPerm.isEdge());
            assert.ok(ScType.EdgeAccessVarPosTemp.isEdge());
            assert.ok(ScType.EdgeAccessVarNegTemp.isEdge());
            assert.ok(ScType.EdgeAccessVarFuzTemp.isEdge());

        });

        it('isLink', function() {
            assert.ok(ScType.Link.isLink());
            assert.ok(ScType.LinkConst.isLink());
            assert.ok(ScType.LinkVar.isLink());
        });

        it('isConst', function() {
            assert.ok(ScType.NodeConst.isConst());
            assert.ok(ScType.LinkConst.isConst());
            assert.ok(ScType.EdgeUCommonConst.isConst());
            assert.ok(ScType.EdgeDCommonConst.isConst());
            assert.ok(ScType.EdgeAccessConstPosPerm.isConst());
            assert.ok(ScType.EdgeAccessConstNegPerm.isConst());
            assert.ok(ScType.EdgeAccessConstFuzPerm.isConst());
            assert.ok(ScType.EdgeAccessConstPosTemp.isConst());
            assert.ok(ScType.EdgeAccessConstNegTemp.isConst());
            assert.ok(ScType.EdgeAccessConstFuzTemp.isConst());
        });

        it('isVar', function() {
            assert.ok(ScType.NodeVar.isVar());
            assert.ok(ScType.LinkVar.isVar());
            assert.ok(ScType.EdgeUCommonVar.isVar());
            assert.ok(ScType.EdgeDCommonVar.isVar());
            assert.ok(ScType.EdgeAccessVarPosPerm.isVar());
            assert.ok(ScType.EdgeAccessVarNegPerm.isVar());
            assert.ok(ScType.EdgeAccessVarFuzPerm.isVar());
            assert.ok(ScType.EdgeAccessVarPosTemp.isVar());
            assert.ok(ScType.EdgeAccessVarNegTemp.isVar());
            assert.ok(ScType.EdgeAccessVarFuzTemp.isVar());
        });

        it('isPos', function() {
            assert.ok(ScType.EdgeAccessConstPosPerm.isPos());
            assert.ok(ScType.EdgeAccessConstPosTemp.isPos());
            assert.ok(ScType.EdgeAccessVarPosPerm.isPos());
            assert.ok(ScType.EdgeAccessVarPosTemp.isPos());
        });
    });
});
