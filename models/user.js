const a8_0x1a9808 = a8_0x2877;
function a8_0x2877(_0x174fa9, _0x1b1436) {
    const _0x12a804 = a8_0x12a8();
    return a8_0x2877 = function (_0x287749, _0x4b0d06) {
        _0x287749 = _0x287749 - 0x12d;
        let _0x19ce1c = _0x12a804[_0x287749];
        return _0x19ce1c;
    }, a8_0x2877(_0x174fa9, _0x1b1436);
}
(function (_0x3a7da4, _0x44ff4a) {
    const _0x430c6b = a8_0x2877, _0x3afd11 = _0x3a7da4();
    while (!![]) {
        try {
            const _0x188739 = parseInt(_0x430c6b(0x136)) / 0x1 + parseInt(_0x430c6b(0x132)) / 0x2 + parseInt(_0x430c6b(0x131)) / 0x3 + parseInt(_0x430c6b(0x13b)) / 0x4 * (-parseInt(_0x430c6b(0x130)) / 0x5) + -parseInt(_0x430c6b(0x12f)) / 0x6 + parseInt(_0x430c6b(0x135)) / 0x7 * (parseInt(_0x430c6b(0x13a)) / 0x8) + -parseInt(_0x430c6b(0x139)) / 0x9;
            if (_0x188739 === _0x44ff4a)
                break;
            else
                _0x3afd11['push'](_0x3afd11['shift']());
        } catch (_0x261092) {
            _0x3afd11['push'](_0x3afd11['shift']());
        }
    }
}(a8_0x12a8, 0xdb8a3));
function a8_0x12a8() {
    const _0x16d874 = [
        '5IYHJnR',
        '1051227FGhjdU',
        '2913538cnoJzZ',
        'User',
        'mongoose',
        '7OsTokp',
        '1511717TNZgzB',
        'USER',
        'Schema',
        '27076689EKYwHr',
        '6907864wJcRFq',
        '458512pEDBNk',
        'exports',
        'model',
        '959964oEjwUj'
    ];
    a8_0x12a8 = function () {
        return _0x16d874;
    };
    return a8_0x12a8();
}
const mongoose = require(a8_0x1a9808(0x134)), User = mongoose[a8_0x1a9808(0x12e)](a8_0x1a9808(0x133), new mongoose[(a8_0x1a9808(0x138))]({
        'name': {
            'type': String,
            'required': !![]
        },
        'email': {
            'type': String,
            'required': !![],
            'unique': !![]
        },
        'role': {
            'type': String,
            'default': a8_0x1a9808(0x137)
        },
        'password': {
            'type': String,
            'required': !![]
        }
    }));
module[a8_0x1a9808(0x12d)] = User;