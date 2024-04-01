function a1_0x1d16() {
    const _0x528c48 = [
        '../models/barang',
        'delete',
        'log',
        'findOne',
        '1978092JASRqQ',
        'deleting\x20category\x20error!',
        'add',
        'findById',
        'body',
        'notification',
        'save',
        '3XDAyts',
        'flash',
        '4672056uNWlxs',
        'redirect',
        'Gagal\x20menambahkan\x20kategori,\x20silahkan\x20coba\x20lagi.',
        '888552SIUcnr',
        '2248245cfwugN',
        'error',
        'Gagal\x20menghapus\x20kategori,\x20ada\x20barang\x20yang\x20terdaftar\x20dengan\x20kategori\x20yang\x20akan\x20dihapus.',
        '5600560sQNogO',
        'findByIdAndDelete',
        'back',
        'Kategori\x20tidak\x20ditemukan.',
        '725886bkpJzC',
        'Category\x20deleted!',
        'Kategori\x20berhasil\x20dihapus.',
        'exports',
        'name',
        'Kategori\x20berhasil\x20ditambahkan.',
        '19944315AJkQkU',
        '8dBLDEG',
        'category\x20baru\x20ditambahkan'
    ];
    a1_0x1d16 = function () {
        return _0x528c48;
    };
    return a1_0x1d16();
}
const a1_0x47db51 = a1_0x4046;
function a1_0x4046(_0x4ac289, _0x42abee) {
    const _0x1d1601 = a1_0x1d16();
    return a1_0x4046 = function (_0x4046d0, _0x260596) {
        _0x4046d0 = _0x4046d0 - 0x1a8;
        let _0x4b10c8 = _0x1d1601[_0x4046d0];
        return _0x4b10c8;
    }, a1_0x4046(_0x4ac289, _0x42abee);
}
(function (_0x2e7b5b, _0xc9c752) {
    const _0x3fb6d6 = a1_0x4046, _0x1c7338 = _0x2e7b5b();
    while (!![]) {
        try {
            const _0x43d402 = parseInt(_0x3fb6d6(0x1c6)) / 0x1 + -parseInt(_0x3fb6d6(0x1be)) / 0x2 * (-parseInt(_0x3fb6d6(0x1b9)) / 0x3) + -parseInt(_0x3fb6d6(0x1b2)) / 0x4 + parseInt(_0x3fb6d6(0x1bf)) / 0x5 + parseInt(_0x3fb6d6(0x1bb)) / 0x6 + parseInt(_0x3fb6d6(0x1c2)) / 0x7 + parseInt(_0x3fb6d6(0x1ac)) / 0x8 * (-parseInt(_0x3fb6d6(0x1ab)) / 0x9);
            if (_0x43d402 === _0xc9c752)
                break;
            else
                _0x1c7338['push'](_0x1c7338['shift']());
        } catch (_0x4854fa) {
            _0x1c7338['push'](_0x1c7338['shift']());
        }
    }
}(a1_0x1d16, 0x77249));
const Category = require('../models/category'), Barang = require(a1_0x47db51(0x1ae));
module[a1_0x47db51(0x1a8)][a1_0x47db51(0x1b4)] = async (_0x3841a1, _0x17db72) => {
    const _0x5b5407 = a1_0x47db51;
    try {
        const {name: _0x4e5ffa} = _0x3841a1['body'], _0x5218bd = await Category[_0x5b5407(0x1b1)]({ 'name': _0x4e5ffa });
        if (_0x5218bd)
            return console['error']('adding\x20category\x20error!'), _0x3841a1[_0x5b5407(0x1ba)]('notification', 'Kategori\x20sudah\x20terdaftar.'), _0x17db72[_0x5b5407(0x1bc)]('back');
        return new Category(_0x3841a1[_0x5b5407(0x1b6)])[_0x5b5407(0x1b8)](), console[_0x5b5407(0x1b0)](_0x5b5407(0x1ad)), _0x3841a1[_0x5b5407(0x1ba)](_0x5b5407(0x1b7), _0x5b5407(0x1aa)), _0x17db72[_0x5b5407(0x1bc)](_0x5b5407(0x1c4));
    } catch (_0xd1c0d1) {
        return console[_0x5b5407(0x1c0)]('adding\x20category\x20error!', _0xd1c0d1), _0x3841a1['flash'](_0x5b5407(0x1b7), _0x5b5407(0x1bd)), _0x17db72[_0x5b5407(0x1bc)](_0x5b5407(0x1c4));
    }
}, exports[a1_0x47db51(0x1af)] = async (_0x49bf36, _0x5dad8c) => {
    const _0x395d1c = a1_0x47db51;
    try {
        const {id: _0x4480fc} = _0x49bf36['body'], _0x14be69 = await Category[_0x395d1c(0x1b5)](_0x4480fc);
        if (!_0x14be69)
            return console['error']('category\x20not\x20found!'), _0x49bf36['flash'](_0x395d1c(0x1b7), _0x395d1c(0x1c5)), _0x5dad8c[_0x395d1c(0x1bc)]('back');
        const _0x193b93 = await Barang[_0x395d1c(0x1b1)]({ 'category': _0x14be69[_0x395d1c(0x1a9)] });
        if (_0x193b93)
            return console[_0x395d1c(0x1c0)]('category\x20used!'), _0x49bf36[_0x395d1c(0x1ba)]('notification', _0x395d1c(0x1c1)), _0x5dad8c[_0x395d1c(0x1bc)](_0x395d1c(0x1c4));
        return await Category[_0x395d1c(0x1c3)](_0x4480fc), _0x49bf36[_0x395d1c(0x1ba)](_0x395d1c(0x1b7), _0x395d1c(0x1c8)), console[_0x395d1c(0x1b0)](_0x395d1c(0x1c7)), _0x5dad8c['redirect'](_0x395d1c(0x1c4));
    } catch (_0x32a71a) {
        return console[_0x395d1c(0x1c0)](_0x395d1c(0x1b3), _0x32a71a), _0x49bf36['flash'](_0x395d1c(0x1b7), 'Gagal\x20menghapus\x20kategori,\x20silahkan\x20coba\x20lagi.'), _0x5dad8c[_0x395d1c(0x1bc)](_0x395d1c(0x1c4));
    }
};