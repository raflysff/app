'use strict';
const a19_0x3563cf = a19_0x1c41;
function a19_0x1c41(_0x1e2b64, _0x1c0158) {
    const _0x4294ed = a19_0x4294();
    return a19_0x1c41 = function (_0x1c4191, _0x567392) {
        _0x1c4191 = _0x1c4191 - 0xf0;
        let _0x23a77a = _0x4294ed[_0x1c4191];
        return _0x23a77a;
    }, a19_0x1c41(_0x1e2b64, _0x1c0158);
}
function a19_0x4294() {
    const _0x26d240 = [
        'clear',
        'exports',
        '10864bDKrKE',
        '3893070kvZkqh',
        'includes',
        'length',
        '10421739QTWBCq',
        '5721228USTvZT',
        '1379492IbhSba',
        '6REOxKa',
        '652413FabxrI',
        './Itemset.js',
        '1372WnoYoZ',
        'gabungkanItemset',
        '2193720AKXPFE',
        '30wANpiG',
        'push',
        'getItemUnik'
    ];
    a19_0x4294 = function () {
        return _0x26d240;
    };
    return a19_0x4294();
}
(function (_0x3e5519, _0x272f40) {
    const _0x1224e4 = a19_0x1c41, _0x440e1d = _0x3e5519();
    while (!![]) {
        try {
            const _0x40c942 = -parseInt(_0x1224e4(0xf1)) / 0x1 + -parseInt(_0x1224e4(0x101)) / 0x2 * (parseInt(_0x1224e4(0xf0)) / 0x3) + -parseInt(_0x1224e4(0xf5)) / 0x4 + -parseInt(_0x1224e4(0xfc)) / 0x5 + parseInt(_0x1224e4(0x100)) / 0x6 + -parseInt(_0x1224e4(0xf3)) / 0x7 * (parseInt(_0x1224e4(0xfb)) / 0x8) + -parseInt(_0x1224e4(0xff)) / 0x9 * (-parseInt(_0x1224e4(0xf6)) / 0xa);
            if (_0x40c942 === _0x272f40)
                break;
            else
                _0x440e1d['push'](_0x440e1d['shift']());
        } catch (_0x4d2fd6) {
            _0x440e1d['push'](_0x440e1d['shift']());
        }
    }
}(a19_0x4294, 0xc3e1e));
const Itemset = require(a19_0x3563cf(0xf2));
class ItemsetCollections extends Array {
    constructor() {
        super();
    }
    [a19_0x3563cf(0xf8)]() {
        const _0x2f67e1 = a19_0x3563cf;
        let _0x5b0012 = new Itemset();
        for (var _0x2f6144 in this) {
            let _0x3723a1 = this[_0x2f6144];
            for (var _0x3799c0 = 0x0; _0x3799c0 < _0x3723a1[_0x2f67e1(0xfe)]; _0x3799c0 += 0x1) {
                !_0x5b0012[_0x2f67e1(0xfd)](_0x3723a1[_0x3799c0]) && _0x5b0012[_0x2f67e1(0xf7)](_0x3723a1[_0x3799c0]);
            }
        }
        return _0x5b0012;
    }
    ['cariAprioriSupport'](_0x7b3f77) {
        const _0x446adb = a19_0x3563cf;
        let _0x30a737 = 0x0;
        for (var _0x333bfd in this) {
            let _0x3a3d06 = this[_0x333bfd];
            _0x3a3d06[_0x446adb(0xf4)](_0x7b3f77) && (_0x30a737 += 0x1);
        }
        let _0x1e012b = _0x30a737 / this[_0x446adb(0xfe)] * 0x64;
        return _0x1e012b;
    }
    [a19_0x3563cf(0xf9)]() {
        const _0x5074d9 = a19_0x3563cf;
        this[_0x5074d9(0xfe)] = 0x0;
    }
}
module[a19_0x3563cf(0xfa)] = ItemsetCollections;