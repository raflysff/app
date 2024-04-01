const a17_0x5b5692 = a17_0x1d82;
function a17_0x4e64() {
    const _0x328178 = [
        '2964984uWuyZp',
        '2897915lfvoEP',
        'getSupport',
        '8676pTzdNV',
        'push',
        '661747UrzFhN',
        './Apriori',
        '2CnWZRp',
        '6XoyOoj',
        '7461251lLbgZL',
        '1154970MEjoIN',
        '9QPRGun',
        'getConfidence',
        './ItemsetCollections',
        '9069384YqyUNO',
        'split',
        '15323QQaaKw',
        '8dLEfBV'
    ];
    a17_0x4e64 = function () {
        return _0x328178;
    };
    return a17_0x4e64();
}
function a17_0x1d82(_0x4d4dda, _0x38a6c1) {
    const _0x4e64dd = a17_0x4e64();
    return a17_0x1d82 = function (_0x1d82c7, _0x14a46d) {
        _0x1d82c7 = _0x1d82c7 - 0x10c;
        let _0x56cac6 = _0x4e64dd[_0x1d82c7];
        return _0x56cac6;
    }, a17_0x1d82(_0x4d4dda, _0x38a6c1);
}
(function (_0x55c89c, _0x3feeba) {
    const _0x5c1a57 = a17_0x1d82, _0x508a5c = _0x55c89c();
    while (!![]) {
        try {
            const _0x9eb9c2 = -parseInt(_0x5c1a57(0x11c)) / 0x1 * (parseInt(_0x5c1a57(0x10c)) / 0x2) + -parseInt(_0x5c1a57(0x117)) / 0x3 + parseInt(_0x5c1a57(0x116)) / 0x4 * (parseInt(_0x5c1a57(0x118)) / 0x5) + -parseInt(_0x5c1a57(0x10d)) / 0x6 * (parseInt(_0x5c1a57(0x10e)) / 0x7) + parseInt(_0x5c1a57(0x113)) / 0x8 * (parseInt(_0x5c1a57(0x110)) / 0x9) + parseInt(_0x5c1a57(0x10f)) / 0xa + parseInt(_0x5c1a57(0x115)) / 0xb * (parseInt(_0x5c1a57(0x11a)) / 0xc);
            if (_0x9eb9c2 === _0x3feeba)
                break;
            else
                _0x508a5c['push'](_0x508a5c['shift']());
        } catch (_0x3d8a2e) {
            _0x508a5c['push'](_0x508a5c['shift']());
        }
    }
}(a17_0x4e64, 0xaac73));
const ItemsetCollections = require(a17_0x5b5692(0x112)), Itemset = require('./Itemset.js'), Apriori = require(a17_0x5b5692(0x11d));
exports['getApriori'] = function getApriori(_0x35e45a, _0x57074f, _0x3a46ab) {
    const _0x1de319 = a17_0x5b5692;
    let _0x1df5b1 = new ItemsetCollections();
    for (var _0x598732 in _0x35e45a) {
        let _0x535ac6 = _0x35e45a[_0x598732][_0x1de319(0x114)](',\x20');
        _0x1df5b1[_0x1de319(0x11b)](Itemset['from'](_0x535ac6));
    }
    let _0x3bc9c2 = parseFloat(_0x57074f), _0x3abd4c = Apriori[_0x1de319(0x119)](_0x1df5b1, _0x3bc9c2), _0x16d715 = parseFloat(_0x3a46ab), _0x4dd275 = Apriori[_0x1de319(0x111)](_0x1df5b1, _0x3abd4c, _0x16d715);
    return {
        'itemSupport': _0x3abd4c,
        'allRules': _0x4dd275
    };
};