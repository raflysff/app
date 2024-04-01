const a0_0x28cdfc = a0_0x1510;
function a0_0x1510(_0x18dcf2, _0x5d286f) {
    const _0xb98d2f = a0_0xb98d();
    return a0_0x1510 = function (_0x151069, _0x2d52a2) {
        _0x151069 = _0x151069 - 0xe1;
        let _0x5e2ea5 = _0xb98d2f[_0x151069];
        return _0x5e2ea5;
    }, a0_0x1510(_0x18dcf2, _0x5d286f);
}
(function (_0x2da182, _0x31bf1a) {
    const _0x24888b = a0_0x1510, _0x2fa00b = _0x2da182();
    while (!![]) {
        try {
            const _0x1938f1 = -parseInt(_0x24888b(0xe9)) / 0x1 * (-parseInt(_0x24888b(0xf4)) / 0x2) + -parseInt(_0x24888b(0x102)) / 0x3 + -parseInt(_0x24888b(0xfc)) / 0x4 + parseInt(_0x24888b(0x105)) / 0x5 + -parseInt(_0x24888b(0x112)) / 0x6 * (parseInt(_0x24888b(0xe6)) / 0x7) + parseInt(_0x24888b(0x106)) / 0x8 + parseInt(_0x24888b(0xf9)) / 0x9;
            if (_0x1938f1 === _0x31bf1a)
                break;
            else
                _0x2fa00b['push'](_0x2fa00b['shift']());
        } catch (_0x193418) {
            _0x2fa00b['push'](_0x2fa00b['shift']());
        }
    }
}(a0_0xb98d, 0x8477c));
const Barang = require(a0_0x28cdfc(0xfd)), filter = require(a0_0x28cdfc(0xe4)), path = require(a0_0x28cdfc(0xf6));
module[a0_0x28cdfc(0xeb)][a0_0x28cdfc(0xea)] = async (_0x34afc0, _0x2fe529) => {
    const _0x320d04 = a0_0x28cdfc;
    try {
        const {quantity: _0x46fc48} = _0x34afc0[_0x320d04(0x104)];
        if (_0x34afc0[_0x320d04(0xed)]) {
            const _0x2a084d = filter(path[_0x320d04(0xf2)](_0x34afc0[_0x320d04(0xed)][_0x320d04(0x10d)]));
            if (_0x2a084d)
                return _0x34afc0[_0x320d04(0xef)](_0x320d04(0x10f), 'Format\x20file\x20yang\x20di\x20upload\x20tidak\x20sesuai.'), console[_0x320d04(0xf0)](_0x320d04(0x103)), _0x2fe529[_0x320d04(0xf5)](_0x320d04(0x10e));
            _0x34afc0['body']['picture'] = _0x320d04(0x114) + _0x34afc0['file']?.[_0x320d04(0xe3)];
        }
        if (_0x46fc48 < 0x1)
            return console[_0x320d04(0x101)](_0x320d04(0x10c)), _0x34afc0['flash'](_0x320d04(0x10f), _0x320d04(0x107)), _0x2fe529[_0x320d04(0xf5)](_0x320d04(0x10e));
        return new Barang(_0x34afc0['body'])[_0x320d04(0x10b)](), _0x34afc0[_0x320d04(0xef)](_0x320d04(0x10f), _0x320d04(0xfe)), console[_0x320d04(0xf0)](_0x320d04(0xe1)), _0x2fe529[_0x320d04(0xf5)](_0x320d04(0x10e));
    } catch (_0x352a92) {
        return console['error']('adding\x20barang\x20error!', _0x352a92), _0x34afc0['flash'](_0x320d04(0x10f), 'Gagal\x20menambahkan\x20barang,\x20silahkan\x20coba\x20lagi.'), _0x2fe529[_0x320d04(0xf5)](_0x320d04(0x10e));
    }
}, exports['edit'] = async (_0x520265, _0x45bcf9) => {
    const _0x2ceeb6 = a0_0x28cdfc;
    try {
        const {
                id: _0x125da8,
                name: _0x42ef41,
                code: _0x150a5c,
                brand: _0x5e8a4f,
                category: _0xcd6697,
                room: _0x5702f0,
                quantity: _0x2780f2
            } = _0x520265[_0x2ceeb6(0x104)], _0x4effcc = await Barang[_0x2ceeb6(0xf8)](_0x125da8);
        if (!_0x4effcc)
            return console[_0x2ceeb6(0x101)](_0x2ceeb6(0xe8)), _0x520265[_0x2ceeb6(0xef)](_0x2ceeb6(0x10f), _0x2ceeb6(0xfa)), _0x45bcf9[_0x2ceeb6(0xf5)](_0x2ceeb6(0x10e));
        let _0x3982f6 = _0x2ceeb6(0x114) + _0x520265['file']?.[_0x2ceeb6(0xe3)];
        return !_0x520265[_0x2ceeb6(0xed)] && (_0x3982f6 = _0x4effcc[_0x2ceeb6(0xee)]), await Barang[_0x2ceeb6(0x108)](_0x125da8, {
            '$set': {
                'name': _0x42ef41,
                'code': _0x150a5c,
                'brand': _0x5e8a4f,
                'category': _0xcd6697,
                'room': _0x5702f0,
                'quantity': _0x2780f2,
                'picture': _0x3982f6
            }
        }), console[_0x2ceeb6(0xf0)]('Barang\x20edited!'), _0x520265[_0x2ceeb6(0xef)]('notification', _0x2ceeb6(0x109)), _0x45bcf9[_0x2ceeb6(0xf5)](_0x2ceeb6(0x10e));
    } catch (_0x19f64b) {
        return console[_0x2ceeb6(0x101)](_0x2ceeb6(0xf3), _0x19f64b), _0x520265[_0x2ceeb6(0xef)](_0x2ceeb6(0x10f), 'Gagal\x20mengubah\x20barang,\x20silahkan\x20coba\x20lagi.'), _0x45bcf9[_0x2ceeb6(0xf5)](_0x2ceeb6(0x10e));
    }
}, exports[a0_0x28cdfc(0x113)] = async (_0x464156, _0x139314) => {
    const _0x3e439b = a0_0x28cdfc;
    try {
        const {id: _0x7d1a69} = _0x464156[_0x3e439b(0x104)], _0x4bd765 = await Barang[_0x3e439b(0xf8)](_0x7d1a69);
        if (!_0x4bd765)
            return console[_0x3e439b(0x101)](_0x3e439b(0xe8)), _0x464156[_0x3e439b(0xef)](_0x3e439b(0x10f), 'Barang\x20yang\x20akan\x20diubah\x20tidak\x20ditemukan.'), _0x139314[_0x3e439b(0xf5)]('back');
        return await Barang[_0x3e439b(0xe7)](_0x7d1a69), console[_0x3e439b(0xf0)]('Barang\x20deleted!'), _0x464156[_0x3e439b(0xef)]('notification', _0x3e439b(0xec)), _0x139314[_0x3e439b(0xf5)](_0x3e439b(0x10e));
    } catch (_0x4b73fe) {
        return console[_0x3e439b(0x101)](_0x3e439b(0x110), _0x4b73fe), _0x464156[_0x3e439b(0xef)](_0x3e439b(0x10f), _0x3e439b(0x10a)), _0x139314[_0x3e439b(0xf5)](_0x3e439b(0x10e));
    }
}, exports[a0_0x28cdfc(0xe5)] = async (_0x226324, _0x5a04f2) => {
    const _0x3c9bd8 = a0_0x28cdfc;
    try {
        const {
            field: _0x74c874,
            query: _0x1d354c
        } = _0x226324[_0x3c9bd8(0x104)];
        if (_0x74c874 === 'name')
            return _0x5a04f2[_0x3c9bd8(0xf5)](_0x3c9bd8(0xfb) + _0x74c874 + _0x3c9bd8(0xe2) + _0x1d354c);
        if (_0x74c874 === _0x3c9bd8(0x100))
            return _0x5a04f2[_0x3c9bd8(0xf5)]('/barang?field=' + _0x74c874 + _0x3c9bd8(0xe2) + _0x1d354c);
        if (_0x74c874 === _0x3c9bd8(0xff))
            return _0x5a04f2[_0x3c9bd8(0xf5)](_0x3c9bd8(0xfb) + _0x74c874 + _0x3c9bd8(0xe2) + _0x1d354c);
        if (_0x74c874 === _0x3c9bd8(0x111))
            return _0x5a04f2[_0x3c9bd8(0xf5)]('/barang?field=' + _0x74c874 + _0x3c9bd8(0xe2) + _0x1d354c);
        if (_0x74c874 === 'room')
            return _0x5a04f2[_0x3c9bd8(0xf5)]('/barang?field=' + _0x74c874 + _0x3c9bd8(0xe2) + _0x1d354c);
    } catch (_0x47d455) {
        return _0x226324['flash'](_0x3c9bd8(0x10f), _0x3c9bd8(0xf1)), console['error'](_0x3c9bd8(0xf7), _0x47d455), _0x5a04f2['redirect']('/');
    }
};
function a0_0xb98d() {
    const _0x4d406 = [
        'barang\x20not\x20found!',
        '8941NvLcnY',
        'add',
        'exports',
        'Barang\x20berhasil\x20dihapus.',
        'file',
        'picture',
        'flash',
        'log',
        'Terjadi\x20kesalahan\x20saat\x20melakukan\x20pencarian,\x20coba\x20lagi.',
        'extname',
        'editing\x20barang\x20error!',
        '10McLkHn',
        'redirect',
        'path',
        'barang\x20search\x20error.',
        'findById',
        '10211040aKMeSi',
        'Barang\x20yang\x20akan\x20diubah\x20tidak\x20ditemukan.',
        '/barang?field=',
        '2103952rtNpjn',
        '../models/barang',
        'Barang\x20berhasil\x20ditambahkan.',
        'brand',
        'code',
        'error',
        '431544zXApYV',
        'incorrect\x20file\x20format.',
        'body',
        '1911625IWzIbR',
        '3440008nlRGAX',
        'Jumlah\x20tidak\x20boleh\x20kurang\x20dari\x201.',
        'findByIdAndUpdate',
        'Barang\x20berhasil\x20diubah.',
        'Gagal\x20menghapus\x20barang,\x20silahkan\x20coba\x20lagi.',
        'save',
        'qunatity\x20below\x20zero!',
        'originalname',
        'back',
        'notification',
        'deleting\x20barang\x20error!',
        'category',
        '6ONwISX',
        'delete',
        '/upload/',
        'barang\x20baru\x20ditambahkan',
        '&query=',
        'filename',
        '../utils/fileFilter',
        'search',
        '5454169Onrhtg',
        'findByIdAndDelete'
    ];
    a0_0xb98d = function () {
        return _0x4d406;
    };
    return a0_0xb98d();
}