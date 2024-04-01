function a3_0x4c11() {
    const _0x1eb395 = [
        '651352ZHgplM',
        '../models/user',
        '119943vbDVns',
        'Gagal\x20menghapus\x20user,\x20silahkan\x20coba\x20lagi.',
        '95Jfauoi',
        'User\x20logged\x20out!',
        'body',
        'adding\x20user\x20error!',
        'User\x20yang\x20akan\x20diubah\x20tidak\x20ditemukan.',
        'password\x20confirmation\x20failed.',
        'add',
        'Password\x20berhasil\x20diperbarui.',
        'error',
        '31180sllmbh',
        'role',
        'User\x20yang\x20akan\x20dihapus\x20tidak\x20ditemukan.',
        'Terjadi\x20kesalahan\x20saat\x20melakukan\x20pencarian,\x20coba\x20lagi.',
        'Gagal\x20mengubah\x20profile,\x20silahkan\x20coba\x20lagi.',
        'findByIdAndUpdate',
        'Terjadi\x20kesalahan\x20pada\x20server,\x20coba\x20lagi.',
        'flash',
        '/logout',
        'User\x20deleted!',
        'user\x20not\x20found!',
        '&query=',
        'user',
        'User\x20berhasil\x20diubah.',
        'edit',
        '/user?field=',
        'log',
        'password',
        'session',
        'Profile\x20edited!',
        'User\x20edited!',
        'findById',
        'updatePassword',
        'Profil\x20berhasil\x20diubah.',
        'login',
        '/profile',
        'search',
        '7YpusnO',
        'Update\x20password\x20success.',
        'exports',
        '502404gwacjc',
        'User\x20berhasil\x20dihapus.',
        'login-error',
        'Email\x20atau\x20password\x20salah.',
        'Gagal\x20mengubah\x20user,\x20silahkan\x20coba\x20lagi.',
        'findOne',
        '2510334CuWecj',
        'back',
        '11870946aczPLG',
        'logout',
        'editing\x20profile\x20error!',
        'delete',
        'User\x20not\x20found!',
        'save',
        'logout-error',
        'Gagal\x20melakukan\x20autentikasi,\x20password\x20salah.',
        'old\x20password\x20incorrect.',
        'Terjadi\x20kesalahan\x20saat\x20mencoba\x20memperbarui\x20password,\x20coba\x20lagi.',
        'notification',
        'redirect',
        'user\x20existed!',
        'Selamat\x20datang\x20',
        '102170jWXIyY'
    ];
    a3_0x4c11 = function () {
        return _0x1eb395;
    };
    return a3_0x4c11();
}
function a3_0xc7c4(_0x136f72, _0x5a8a2a) {
    const _0x4c114d = a3_0x4c11();
    return a3_0xc7c4 = function (_0xc7c45a, _0x1dc5cf) {
        _0xc7c45a = _0xc7c45a - 0x114;
        let _0x456d61 = _0x4c114d[_0xc7c45a];
        return _0x456d61;
    }, a3_0xc7c4(_0x136f72, _0x5a8a2a);
}
const a3_0x3086c6 = a3_0xc7c4;
(function (_0x4f453f, _0x66f623) {
    const _0xcc3a82 = a3_0xc7c4, _0x56167f = _0x4f453f();
    while (!![]) {
        try {
            const _0x3af239 = -parseInt(_0xcc3a82(0x14e)) / 0x1 + parseInt(_0xcc3a82(0x122)) / 0x2 + parseInt(_0xcc3a82(0x125)) / 0x3 + parseInt(_0xcc3a82(0x130)) / 0x4 * (parseInt(_0xcc3a82(0x127)) / 0x5) + -parseInt(_0xcc3a82(0x154)) / 0x6 * (parseInt(_0xcc3a82(0x14b)) / 0x7) + parseInt(_0xcc3a82(0x123)) / 0x8 + parseInt(_0xcc3a82(0x114)) / 0x9;
            if (_0x3af239 === _0x66f623)
                break;
            else
                _0x56167f['push'](_0x56167f['shift']());
        } catch (_0x161c19) {
            _0x56167f['push'](_0x56167f['shift']());
        }
    }
}(a3_0x4c11, 0xaf7c7));
const comparePassword = require('../utils/comparePassword'), User = require(a3_0x3086c6(0x124));
module[a3_0x3086c6(0x14d)][a3_0x3086c6(0x12d)] = async (_0xdb9d35, _0x5bea00) => {
    const _0x111426 = a3_0x3086c6;
    try {
        const {email: _0x1ce983} = _0xdb9d35['body'], _0x1c9bf2 = await User[_0x111426(0x153)]({ 'email': _0x1ce983 });
        if (_0x1c9bf2)
            return console[_0x111426(0x12f)](_0x111426(0x120)), _0xdb9d35['flash'](_0x111426(0x11e), 'User\x20sudah\x20terdaftar.'), _0x5bea00[_0x111426(0x11f)](_0x111426(0x155));
        return new User(_0xdb9d35[_0x111426(0x129)])[_0x111426(0x119)](), console[_0x111426(0x140)]('user\x20baru\x20ditambahkan'), _0x5bea00['redirect'](_0x111426(0x155));
    } catch (_0x4e7edd) {
        return console['error'](_0x111426(0x12a), _0x4e7edd), _0xdb9d35[_0x111426(0x137)](_0x111426(0x11e), 'Gagal\x20menambahkan\x20user,\x20silahkan\x20coba\x20lagi.'), _0x5bea00[_0x111426(0x11f)](_0x111426(0x155));
    }
}, exports[a3_0x3086c6(0x13e)] = async (_0x4bd158, _0x3741e7) => {
    const _0x4a8e53 = a3_0x3086c6;
    try {
        const {
                id: _0x45cce1,
                name: _0x3b2b29,
                email: _0x193414,
                password: _0x721c10,
                role: _0x2faf52
            } = _0x4bd158['body'], _0x13fb08 = await User[_0x4a8e53(0x145)](_0x45cce1);
        if (!_0x13fb08)
            return console[_0x4a8e53(0x12f)](_0x4a8e53(0x13a)), _0x4bd158['flash'](_0x4a8e53(0x11e), _0x4a8e53(0x12b)), _0x3741e7[_0x4a8e53(0x11f)](_0x4a8e53(0x155));
        return await User[_0x4a8e53(0x135)](_0x45cce1, {
            '$set': {
                'name': _0x3b2b29,
                'email': _0x193414,
                'password': _0x721c10,
                'role': _0x2faf52
            }
        }), console[_0x4a8e53(0x140)](_0x4a8e53(0x144)), _0x4bd158[_0x4a8e53(0x137)](_0x4a8e53(0x11e), _0x4a8e53(0x13d)), _0x3741e7[_0x4a8e53(0x11f)](_0x4a8e53(0x155));
    } catch (_0x2ece3e) {
        return console[_0x4a8e53(0x12f)]('editing\x20user\x20error!', _0x2ece3e), _0x4bd158[_0x4a8e53(0x137)]('notification', _0x4a8e53(0x152)), _0x3741e7[_0x4a8e53(0x11f)](_0x4a8e53(0x155));
    }
}, exports[a3_0x3086c6(0x117)] = async (_0x3529bf, _0x47f831) => {
    const _0x20d120 = a3_0x3086c6;
    try {
        const {id: _0x5f1e3a} = _0x3529bf['body'], _0x30b2db = await User[_0x20d120(0x145)](_0x5f1e3a);
        if (!_0x30b2db)
            return console[_0x20d120(0x12f)](_0x20d120(0x13a)), _0x3529bf[_0x20d120(0x137)](_0x20d120(0x11e), _0x20d120(0x132)), _0x47f831[_0x20d120(0x11f)]('back');
        return await User['findByIdAndDelete'](_0x5f1e3a), console[_0x20d120(0x140)](_0x20d120(0x139)), _0x3529bf['flash'](_0x20d120(0x11e), _0x20d120(0x14f)), _0x47f831[_0x20d120(0x11f)](_0x20d120(0x155));
    } catch (_0x45b6d3) {
        return console[_0x20d120(0x12f)]('deleting\x20user\x20error!', _0x45b6d3), _0x3529bf[_0x20d120(0x137)](_0x20d120(0x11e), _0x20d120(0x126)), _0x47f831[_0x20d120(0x11f)](_0x20d120(0x155));
    }
}, module['exports'][a3_0x3086c6(0x115)] = (_0x4ec2a4, _0x4eac3a) => {
    const _0x104936 = a3_0x3086c6;
    try {
        return delete _0x4ec2a4[_0x104936(0x142)][_0x104936(0x13c)], _0x4ec2a4[_0x104936(0x137)](_0x104936(0x11e), 'Logout\x20berhasil.'), console['log'](_0x104936(0x128)), _0x4eac3a[_0x104936(0x11f)]('/');
    } catch (_0xd539eb) {
        return console[_0x104936(0x12f)](_0x104936(0x11a), _0xd539eb), _0x4ec2a4[_0x104936(0x137)](_0x104936(0x11e), _0x104936(0x136)), _0x4eac3a[_0x104936(0x11f)](_0x104936(0x138));
    }
}, exports[a3_0x3086c6(0x148)] = async (_0x100624, _0x3179f6) => {
    const _0x40f1a0 = a3_0x3086c6;
    try {
        const {
                email: _0x5bc289,
                password: _0x5b71e9
            } = _0x100624['body'], _0x3ae384 = await User[_0x40f1a0(0x153)]({ 'email': _0x5bc289 });
        if (!_0x3ae384)
            return console[_0x40f1a0(0x140)](_0x40f1a0(0x118)), _0x100624[_0x40f1a0(0x137)]('notification', _0x40f1a0(0x151)), _0x3179f6[_0x40f1a0(0x11f)]('/');
        const _0x3baec4 = comparePassword(_0x5b71e9, _0x3ae384[_0x40f1a0(0x141)]);
        if (!_0x3baec4)
            return console[_0x40f1a0(0x140)]('Password\x20invalid!'), _0x100624[_0x40f1a0(0x137)](_0x40f1a0(0x11e), 'Email\x20atau\x20password\x20salah.'), _0x3179f6['redirect']('/');
        const {
                id: _0x48b553,
                name: _0x54e243,
                role: _0xdf6014
            } = _0x3ae384, _0x18ad83 = {
                'id': _0x48b553,
                'name': _0x54e243,
                'email': _0x5bc289,
                'role': _0xdf6014
            };
        return _0x100624['session']['user'] = _0x18ad83, _0x100624[_0x40f1a0(0x137)](_0x40f1a0(0x11e), _0x40f1a0(0x121) + _0x54e243 + '.'), console[_0x40f1a0(0x140)]('a\x20user\x20logged\x20in.'), _0x3179f6[_0x40f1a0(0x11f)]('/');
    } catch (_0x380ecb) {
        return console[_0x40f1a0(0x12f)](_0x40f1a0(0x150), _0x380ecb), _0x100624[_0x40f1a0(0x137)](_0x40f1a0(0x11e), _0x40f1a0(0x136)), _0x3179f6[_0x40f1a0(0x11f)]('/');
    }
}, exports['updateProfile'] = async (_0x46d285, _0x1947fa) => {
    const _0x5be7f4 = a3_0x3086c6;
    try {
        const {
                name: _0xf2e557,
                email: _0x235a4c
            } = _0x46d285[_0x5be7f4(0x129)], {id: _0x2f4ba2} = _0x46d285[_0x5be7f4(0x142)][_0x5be7f4(0x13c)], _0x53e45a = await User[_0x5be7f4(0x145)](_0x2f4ba2);
        if (!_0x53e45a)
            return console[_0x5be7f4(0x12f)](_0x5be7f4(0x13a)), _0x46d285[_0x5be7f4(0x137)](_0x5be7f4(0x11e), _0x5be7f4(0x12b)), _0x1947fa[_0x5be7f4(0x11f)](_0x5be7f4(0x149));
        return await User[_0x5be7f4(0x135)](_0x2f4ba2, { '$set': { 'name': _0xf2e557 } }), delete _0x46d285[_0x5be7f4(0x142)][_0x5be7f4(0x13c)], _0x46d285['session'][_0x5be7f4(0x13c)] = {
            'id': _0x2f4ba2,
            'name': _0xf2e557,
            'email': _0x235a4c,
            'role': _0x53e45a[_0x5be7f4(0x131)]
        }, console[_0x5be7f4(0x140)](_0x5be7f4(0x143)), _0x46d285[_0x5be7f4(0x137)](_0x5be7f4(0x11e), _0x5be7f4(0x147)), _0x1947fa[_0x5be7f4(0x11f)](_0x5be7f4(0x149));
    } catch (_0x676fa5) {
        return console[_0x5be7f4(0x12f)](_0x5be7f4(0x116), _0x676fa5), _0x46d285['flash'](_0x5be7f4(0x11e), _0x5be7f4(0x134)), _0x1947fa[_0x5be7f4(0x11f)]('/profile');
    }
}, exports[a3_0x3086c6(0x146)] = async (_0x4789f3, _0x215787) => {
    const _0x477819 = a3_0x3086c6;
    try {
        const {
                password: _0x131ec9,
                passwordConfirmation: _0x24a996,
                oldPassword: _0x2d2fec
            } = _0x4789f3['body'], {id: _0x333868} = _0x4789f3['session'][_0x477819(0x13c)], _0x4cd6a7 = await User[_0x477819(0x145)](_0x333868);
        if (!_0x4cd6a7)
            return console[_0x477819(0x140)](_0x477819(0x13a)), _0x4789f3[_0x477819(0x137)](_0x477819(0x11e), 'User\x20tidak\x20ditemukan.'), _0x215787[_0x477819(0x11f)]('/profile');
        if (_0x4cd6a7[_0x477819(0x141)] !== _0x2d2fec)
            return console[_0x477819(0x140)](_0x477819(0x11c)), _0x4789f3[_0x477819(0x137)](_0x477819(0x11e), _0x477819(0x11b)), _0x215787[_0x477819(0x11f)](_0x477819(0x149));
        if (_0x131ec9 !== _0x24a996)
            return console['log'](_0x477819(0x12c)), _0x4789f3[_0x477819(0x137)](_0x477819(0x11e), 'Konfirmasi\x20password\x20baru\x20gagal,\x20password\x20tidak\x20sama.'), _0x215787[_0x477819(0x11f)](_0x477819(0x149));
        return await User[_0x477819(0x135)](_0x333868, { '$set': { 'password': _0x131ec9 } }), console[_0x477819(0x140)](_0x477819(0x14c)), _0x4789f3[_0x477819(0x137)](_0x477819(0x11e), _0x477819(0x12e)), _0x215787[_0x477819(0x11f)]('/');
    } catch (_0x1f8c1c) {
        return console[_0x477819(0x140)]('update\x20password\x20error.', e), _0x4789f3[_0x477819(0x137)](_0x477819(0x11e), _0x477819(0x11d)), _0x215787[_0x477819(0x11f)]('/profile');
    }
}, exports[a3_0x3086c6(0x14a)] = async (_0x2a7ec0, _0x42edc6) => {
    const _0x4d866d = a3_0x3086c6;
    try {
        const {
            field: _0xd42658,
            query: _0x2dfe8f
        } = _0x2a7ec0[_0x4d866d(0x129)];
        if (_0xd42658 === 'name')
            return _0x42edc6[_0x4d866d(0x11f)](_0x4d866d(0x13f) + _0xd42658 + '&query=' + _0x2dfe8f);
        if (_0xd42658 === 'email')
            return _0x42edc6[_0x4d866d(0x11f)](_0x4d866d(0x13f) + _0xd42658 + _0x4d866d(0x13b) + _0x2dfe8f);
        if (_0xd42658 === 'role')
            return _0x42edc6['redirect'](_0x4d866d(0x13f) + _0xd42658 + _0x4d866d(0x13b) + _0x2dfe8f);
    } catch (_0x743ebb) {
        return _0x2a7ec0[_0x4d866d(0x137)](_0x4d866d(0x11e), _0x4d866d(0x133)), console[_0x4d866d(0x12f)]('barang\x20search\x20error.', _0x743ebb), _0x42edc6[_0x4d866d(0x11f)]('/');
    }
};