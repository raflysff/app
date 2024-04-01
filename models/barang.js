const a5_0x46c3d5 = a5_0x3aee;
function a5_0x3aee(_0x21a8fc, _0x4133b0) {
    const _0xe9374d = a5_0xe937();
    return a5_0x3aee = function (_0x3aee53, _0x9b6f4e) {
        _0x3aee53 = _0x3aee53 - 0x162;
        let _0x5d7d0d = _0xe9374d[_0x3aee53];
        return _0x5d7d0d;
    }, a5_0x3aee(_0x21a8fc, _0x4133b0);
}
function a5_0xe937() {
    const _0x2fbf4b = [
        'mongoose',
        '965940NuAOPp',
        '3cLZIoh',
        'Barang',
        '1746318QFhrhZ',
        '4602328yACJPr',
        '4920070vRStiK',
        '559254wUUNZQ',
        '828638nyIdze',
        'exports',
        '/image/default.png',
        '2821835SApGBX',
        '12RzTkRP',
        '9xZzWxv',
        'model'
    ];
    a5_0xe937 = function () {
        return _0x2fbf4b;
    };
    return a5_0xe937();
}
(function (_0x4b301a, _0x10e0c6) {
    const _0x1dac95 = a5_0x3aee, _0x150099 = _0x4b301a();
    while (!![]) {
        try {
            const _0x1177e4 = -parseInt(_0x1dac95(0x167)) / 0x1 + -parseInt(_0x1dac95(0x168)) / 0x2 * (parseInt(_0x1dac95(0x162)) / 0x3) + parseInt(_0x1dac95(0x170)) / 0x4 + parseInt(_0x1dac95(0x16b)) / 0x5 + parseInt(_0x1dac95(0x16c)) / 0x6 * (-parseInt(_0x1dac95(0x164)) / 0x7) + parseInt(_0x1dac95(0x165)) / 0x8 + -parseInt(_0x1dac95(0x16d)) / 0x9 * (-parseInt(_0x1dac95(0x166)) / 0xa);
            if (_0x1177e4 === _0x10e0c6)
                break;
            else
                _0x150099['push'](_0x150099['shift']());
        } catch (_0x48515f) {
            _0x150099['push'](_0x150099['shift']());
        }
    }
}(a5_0xe937, 0x61cf5));
const mongoose = require(a5_0x46c3d5(0x16f)), Barang = mongoose[a5_0x46c3d5(0x16e)](a5_0x46c3d5(0x163), new mongoose['Schema']({
        'name': {
            'type': String,
            'required': !![]
        },
        'code': {
            'type': String,
            'required': !![]
        },
        'brand': {
            'type': String,
            'required': !![]
        },
        'category': {
            'type': String,
            'required': !![]
        },
        'room': {
            'type': String,
            'required': !![]
        },
        'quantity': {
            'type': String,
            'default': 0x0
        },
        'picture': {
            'type': String,
            'default': a5_0x46c3d5(0x16a)
        }
    }));
module[a5_0x46c3d5(0x169)] = Barang;