function a2_0x33d2(_0x46e354, _0xe6282c) {
    const _0x3abc34 = a2_0x3abc();
    return a2_0x33d2 = function (_0x33d27c, _0x25489f) {
        _0x33d27c = _0x33d27c - 0x112;
        let _0x2eed5b = _0x3abc34[_0x33d27c];
        return _0x2eed5b;
    }, a2_0x33d2(_0x46e354, _0xe6282c);
}
const a2_0x5c8a5a = a2_0x33d2;
(function (_0x6c613e, _0x1543b3) {
    const _0x3ee228 = a2_0x33d2, _0x15107d = _0x6c613e();
    while (!![]) {
        try {
            const _0x5e6dd5 = -parseInt(_0x3ee228(0x11f)) / 0x1 + -parseInt(_0x3ee228(0x13d)) / 0x2 * (-parseInt(_0x3ee228(0x11e)) / 0x3) + -parseInt(_0x3ee228(0x131)) / 0x4 + -parseInt(_0x3ee228(0x13b)) / 0x5 + parseInt(_0x3ee228(0x13e)) / 0x6 * (parseInt(_0x3ee228(0x11b)) / 0x7) + -parseInt(_0x3ee228(0x13c)) / 0x8 * (-parseInt(_0x3ee228(0x116)) / 0x9) + parseInt(_0x3ee228(0x123)) / 0xa;
            if (_0x5e6dd5 === _0x1543b3)
                break;
            else
                _0x15107d['push'](_0x15107d['shift']());
        } catch (_0x266a8d) {
            _0x15107d['push'](_0x15107d['shift']());
        }
    }
}(a2_0x3abc, 0x2fdb8));
const Barang = require(a2_0x5c8a5a(0x134)), Ruangan = require(a2_0x5c8a5a(0x147)), filter = require(a2_0x5c8a5a(0x144)), path = require(a2_0x5c8a5a(0x125));
module['exports'][a2_0x5c8a5a(0x139)] = async (_0x4094ba, _0x1b6ce0) => {
    const _0x3192ea = a2_0x5c8a5a;
    try {
        const {name: _0x26ef22} = _0x4094ba[_0x3192ea(0x11d)], _0x5331c4 = await Ruangan[_0x3192ea(0x12b)]({ 'name': _0x26ef22 });
        if (_0x4094ba[_0x3192ea(0x13a)]) {
            const _0x3f4f31 = filter(path[_0x3192ea(0x118)](_0x4094ba[_0x3192ea(0x13a)][_0x3192ea(0x11c)]));
            if (_0x3f4f31)
                return _0x4094ba[_0x3192ea(0x146)]('notification', _0x3192ea(0x129)), console[_0x3192ea(0x141)](_0x3192ea(0x135)), _0x1b6ce0[_0x3192ea(0x130)](_0x3192ea(0x119));
            _0x4094ba['body']['picture'] = '/upload/' + _0x4094ba[_0x3192ea(0x13a)]?.[_0x3192ea(0x138)];
        }
        if (_0x5331c4)
            return console[_0x3192ea(0x114)](_0x3192ea(0x127)), _0x4094ba[_0x3192ea(0x146)](_0x3192ea(0x128), _0x3192ea(0x143)), _0x1b6ce0[_0x3192ea(0x130)](_0x3192ea(0x119));
        return new Ruangan(_0x4094ba['body'])[_0x3192ea(0x133)](), _0x4094ba[_0x3192ea(0x146)](_0x3192ea(0x128), _0x3192ea(0x126)), console['log'](_0x3192ea(0x136)), _0x1b6ce0[_0x3192ea(0x130)](_0x3192ea(0x119));
    } catch (_0x275e75) {
        return console[_0x3192ea(0x114)](_0x3192ea(0x12f), _0x275e75), _0x4094ba['flash']('notification', _0x3192ea(0x11a)), _0x1b6ce0[_0x3192ea(0x130)](_0x3192ea(0x119));
    }
}, exports['edit'] = async (_0x4ac401, _0x421281) => {
    const _0x4e0652 = a2_0x5c8a5a;
    try {
        const {
                id: _0x339b2b,
                name: _0x411906
            } = _0x4ac401[_0x4e0652(0x11d)], _0x5ed5f5 = await Ruangan['findById'](_0x339b2b);
        if (!_0x5ed5f5)
            return console[_0x4e0652(0x114)](_0x4e0652(0x137)), _0x4ac401[_0x4e0652(0x146)]('notification', 'Ruangan\x20yang\x20akan\x20diubah\x20tidak\x20ditemukan.'), _0x421281[_0x4e0652(0x130)](_0x4e0652(0x119));
        await Barang[_0x4e0652(0x140)]({ 'room': _0x5ed5f5[_0x4e0652(0x113)] }, { '$set': { 'room': _0x411906 } });
        let _0x3a5ab1 = _0x4e0652(0x12d) + _0x4ac401[_0x4e0652(0x13a)]?.[_0x4e0652(0x138)];
        return !_0x4ac401[_0x4e0652(0x13a)] && (_0x3a5ab1 = _0x5ed5f5['picture']), await Ruangan[_0x4e0652(0x122)](_0x339b2b, {
            '$set': {
                'name': _0x411906,
                'picture': _0x3a5ab1
            }
        }), console[_0x4e0652(0x141)](_0x4e0652(0x142)), _0x4ac401[_0x4e0652(0x146)]('notification', _0x4e0652(0x121)), _0x421281['redirect']('back');
    } catch (_0x48c0a4) {
        return console['error']('editing\x20ruangan\x20error!', _0x48c0a4), _0x4ac401[_0x4e0652(0x146)]('notification', _0x4e0652(0x145)), _0x421281['redirect'](_0x4e0652(0x119));
    }
}, exports[a2_0x5c8a5a(0x120)] = async (_0x36abf1, _0x136442) => {
    const _0x479e52 = a2_0x5c8a5a;
    try {
        const {id: _0x55f3ed} = _0x36abf1[_0x479e52(0x11d)], _0x208564 = await Ruangan[_0x479e52(0x12c)](_0x55f3ed);
        if (!_0x208564)
            return console[_0x479e52(0x114)](_0x479e52(0x12e)), _0x36abf1[_0x479e52(0x146)](_0x479e52(0x128), _0x479e52(0x115)), _0x136442[_0x479e52(0x130)]('back');
        const _0x13a573 = await Barang[_0x479e52(0x12b)]({ 'room': _0x208564['name'] });
        if (_0x13a573)
            return console[_0x479e52(0x114)](_0x479e52(0x124)), _0x36abf1['flash'](_0x479e52(0x128), _0x479e52(0x132)), _0x136442['redirect'](_0x479e52(0x119));
        return await Ruangan[_0x479e52(0x13f)](_0x55f3ed), console[_0x479e52(0x141)]('Ruangan\x20deleted!'), _0x136442[_0x479e52(0x130)](_0x479e52(0x119));
    } catch (_0x4805f3) {
        return console[_0x479e52(0x114)](_0x479e52(0x112), _0x4805f3), _0x36abf1['flash']('notification', _0x479e52(0x117)), _0x136442['redirect'](_0x479e52(0x119));
    }
}, exports['search'] = async (_0x3f3068, _0x1b4112) => {
    const _0xb12455 = a2_0x5c8a5a;
    try {
        const {query: _0x432012} = _0x3f3068[_0xb12455(0x11d)];
        return _0x1b4112[_0xb12455(0x130)](_0xb12455(0x12a) + _0x432012);
    } catch (_0x3060bc) {
        return _0x3f3068['flash'], _0x3060bc(_0xb12455(0x128), 'Terjadi\x20kesalahan\x20saat\x20melakukan\x20pencarian,\x20coba\x20lagi.'), console[_0xb12455(0x114)]('ruangan\x20search\x20error.', _0x3060bc), _0x1b4112[_0xb12455(0x130)]('/');
    }
};
function a2_0x3abc() {
    const _0x1b7206 = [
        'findById',
        '/upload/',
        'delete\x20ruangan\x20not\x20found!',
        'adding\x20ruangan\x20error!',
        'redirect',
        '389016IFzOTc',
        'Gagal\x20menghapus\x20ruangan,\x20ada\x20barang\x20yang\x20terdaftar\x20dengan\x20ruangan\x20yang\x20akan\x20dihapus.',
        'save',
        '../models/barang',
        'incorrect\x20file\x20format.',
        'ruangan\x20baru\x20ditambahkan',
        'edit\x20not\x20found!',
        'filename',
        'add',
        'file',
        '1472215kKFWil',
        '24qIZpFN',
        '60KKcxDg',
        '498TdMrAS',
        'findByIdAndDelete',
        'updateMany',
        'log',
        'Ruangan\x20edited!',
        'Nama\x20ruangan\x20sudah\x20terdaftar.',
        '../utils/fileFilter',
        'Gagal\x20mengubah\x20ruangan,\x20silahkan\x20coba\x20lagi.',
        'flash',
        '../models/ruangan',
        'deleting\x20ruangan\x20error!',
        'name',
        'error',
        'Ruangan\x20yang\x20akan\x20dihapus\x20tidak\x20ditemukan.',
        '868473XNnFZy',
        'Gagal\x20menghapus\x20ruangan,\x20silahkan\x20coba\x20lagi.',
        'extname',
        'back',
        'Gagal\x20menambahkan\x20ruangan,\x20silahkan\x20coba\x20lagi.',
        '10633BejNiU',
        'originalname',
        'body',
        '13047XNluex',
        '319781bjSRdn',
        'delete',
        'Ruangan\x20berhasil\x20diubah.',
        'findByIdAndUpdate',
        '3614640wlOCer',
        'ruangan\x20used!',
        'path',
        'Ruangan\x20baru\x20berhasil\x20ditambahkan.',
        'room\x20name\x20existed!',
        'notification',
        'Format\x20file\x20yang\x20di\x20upload\x20tidak\x20sesuai.',
        '/ruangan?query=',
        'findOne'
    ];
    a2_0x3abc = function () {
        return _0x1b7206;
    };
    return a2_0x3abc();
}