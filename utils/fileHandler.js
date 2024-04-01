const a23_0x572dc5 = a23_0x215a;
(function (_0x155fe5, _0x421065) {
    const _0x487c65 = a23_0x215a, _0x1ffd4e = _0x155fe5();
    while (!![]) {
        try {
            const _0x4f012d = parseInt(_0x487c65(0x1e2)) / 0x1 + parseInt(_0x487c65(0x1e7)) / 0x2 + parseInt(_0x487c65(0x1e5)) / 0x3 * (parseInt(_0x487c65(0x1f2)) / 0x4) + -parseInt(_0x487c65(0x1f0)) / 0x5 + -parseInt(_0x487c65(0x1eb)) / 0x6 + -parseInt(_0x487c65(0x1f1)) / 0x7 + -parseInt(_0x487c65(0x1e9)) / 0x8 * (-parseInt(_0x487c65(0x1e1)) / 0x9);
            if (_0x4f012d === _0x421065)
                break;
            else
                _0x1ffd4e['push'](_0x1ffd4e['shift']());
        } catch (_0x1677ff) {
            _0x1ffd4e['push'](_0x1ffd4e['shift']());
        }
    }
}(a23_0x1286, 0x7c4df));
const multer = require(a23_0x572dc5(0x1ec)), path = require(a23_0x572dc5(0x1e6)), storage = multer['diskStorage']({
        'destination': function (_0x615535, _0x2b2a65, _0x4b1b9f) {
            const _0x584fab = a23_0x572dc5, _0x37d741 = path[_0x584fab(0x1ef)](__dirname, _0x584fab(0x1e8));
            try {
                mkdirSync(_0x37d741);
            } catch (_0x53703e) {
                console[_0x584fab(0x1ed)]('[server]\x20ERR!\x20directory-already-existed');
            }
            _0x4b1b9f(null, _0x37d741);
        },
        'filename': function (_0x477402, _0x48c83e, _0x1a267a) {
            const _0x546913 = a23_0x572dc5;
            _0x1a267a(null, Date[_0x546913(0x1ea)]() + path[_0x546913(0x1ee)](_0x48c83e[_0x546913(0x1e3)]));
        }
    }), multerOption = {
        'fileFilter': function (_0x30f278, _0x321afc, _0x2d3904) {
            _0x2d3904(null, !![]);
        },
        'storage': storage
    }, upload = multer(multerOption);
function a23_0x215a(_0x594ec9, _0x40d8bc) {
    const _0x128656 = a23_0x1286();
    return a23_0x215a = function (_0x215ad8, _0x230830) {
        _0x215ad8 = _0x215ad8 - 0x1e1;
        let _0x231bcc = _0x128656[_0x215ad8];
        return _0x231bcc;
    }, a23_0x215a(_0x594ec9, _0x40d8bc);
}
module[a23_0x572dc5(0x1e4)] = upload;
function a23_0x1286() {
    const _0x3cb0db = [
        '142164vteCAM',
        '../public/upload',
        '8CrQrry',
        'now',
        '1668456lbzuUJ',
        'multer',
        'log',
        'extname',
        'join',
        '3871755njGRvy',
        '5689131CXeTTu',
        '24HvGoRq',
        '6971661CJXDsg',
        '677224HGNalt',
        'originalname',
        'exports',
        '425688QwOPDM',
        'path'
    ];
    a23_0x1286 = function () {
        return _0x3cb0db;
    };
    return a23_0x1286();
}