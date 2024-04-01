function a4_0x2b34() {
    const _0x549c67 = [
        'error',
        'log',
        'session',
        '/views',
        'config',
        'Server\x20running\x20at\x20port\x20',
        '14010hKQtRL',
        '63UKtzFb',
        'listen',
        'locals',
        './routes/barang',
        '/public',
        '7971766mOhHhx',
        'express-session',
        '4xfnDzf',
        'catch',
        '178734ouRFQc',
        '4659600KWyPVW',
        'ejs',
        '/category',
        '690590qBCoqM',
        './routes/category',
        'mongodb+srv://valenoirs:4xHBwYVKcivAr9Xy@cluster.eqxf0au.mongodb.net/codename-unima-231001-prod?retryWrites=true&w=majority',
        '126KiVjfp',
        'status',
        'use',
        'Error',
        'join',
        '/ping',
        'urlencoded',
        '100sKxwWX',
        '908432TCimdc',
        '1734570UsxpGP',
        './routes/user',
        '_method',
        '/user',
        'get',
        'set',
        'mongoose',
        'send',
        'view\x20engine',
        'views',
        'path',
        'connect',
        './routes/view',
        'user'
    ];
    a4_0x2b34 = function () {
        return _0x549c67;
    };
    return a4_0x2b34();
}
const a4_0x383f39 = a4_0x17d6;
(function (_0xf09cf8, _0x20abf3) {
    const _0x4c86b5 = a4_0x17d6, _0x33e631 = _0xf09cf8();
    while (!![]) {
        try {
            const _0x4286a9 = -parseInt(_0x4c86b5(0x1a6)) / 0x1 + parseInt(_0x4c86b5(0x1a5)) / 0x2 * (parseInt(_0x4c86b5(0x18d)) / 0x3) + -parseInt(_0x4c86b5(0x195)) / 0x4 * (-parseInt(_0x4c86b5(0x1a7)) / 0x5) + parseInt(_0x4c86b5(0x197)) / 0x6 * (parseInt(_0x4c86b5(0x19e)) / 0x7) + parseInt(_0x4c86b5(0x198)) / 0x8 + -parseInt(_0x4c86b5(0x18e)) / 0x9 * (-parseInt(_0x4c86b5(0x19b)) / 0xa) + -parseInt(_0x4c86b5(0x193)) / 0xb;
            if (_0x4286a9 === _0x20abf3)
                break;
            else
                _0x33e631['push'](_0x33e631['shift']());
        } catch (_0x4da211) {
            _0x33e631['push'](_0x33e631['shift']());
        }
    }
}(a4_0x2b34, 0x861dd));
const express = require('express'), mongoose = require(a4_0x383f39(0x1ad)), expressLayouts = require('express-ejs-layouts'), session = require(a4_0x383f39(0x194)), methodOverride = require('method-override'), flash = require('connect-flash'), path = require(a4_0x383f39(0x1b1));
require('dotenv')[a4_0x383f39(0x18b)]();
mongoose.set('strictQuery', true)
function a4_0x17d6(_0x51f966, _0x4ac4ad) {
    const _0x2b34a6 = a4_0x2b34();
    return a4_0x17d6 = function (_0x17d69a, _0x59c273) {
        _0x17d69a = _0x17d69a - 0x188;
        let _0x2ea419 = _0x2b34a6[_0x17d69a];
        return _0x2ea419;
    }, a4_0x17d6(_0x51f966, _0x4ac4ad);
}
const app = express();
app[a4_0x383f39(0x1a0)](session({
    'secret': 'v4L3n01r5',
    'resave': ![],
    'saveUninitialized': !![],
    'cookie': { 'maxAge': 0x3e8 * 0x3c * 0x3c * 0x18 }
})), app['use']((_0x42adc4, _0x4272c8, _0xa99e13) => {
    const _0x4a6626 = a4_0x383f39;
    _0x42adc4[_0x4a6626(0x189)]['user'] && (_0x4272c8[_0x4a6626(0x190)][_0x4a6626(0x1b4)] = _0x42adc4[_0x4a6626(0x189)]['user']), _0xa99e13();
}), app[a4_0x383f39(0x1a0)](flash()), app[a4_0x383f39(0x1a0)](express['static'](path[a4_0x383f39(0x1a2)](__dirname + a4_0x383f39(0x192)))), app[a4_0x383f39(0x1a0)](express[a4_0x383f39(0x1a4)]({ 'extended': !![] })), app[a4_0x383f39(0x1a0)](express['json']()), app[a4_0x383f39(0x1a0)](methodOverride(a4_0x383f39(0x1a9))), app['set'](a4_0x383f39(0x1b0), path[a4_0x383f39(0x1a2)](__dirname + a4_0x383f39(0x18a))), app[a4_0x383f39(0x1ac)](a4_0x383f39(0x1af), a4_0x383f39(0x199)), app[a4_0x383f39(0x1a0)](expressLayouts), app[a4_0x383f39(0x1a0)]('/', require(a4_0x383f39(0x1b3))), app[a4_0x383f39(0x1a0)](a4_0x383f39(0x1aa), require(a4_0x383f39(0x1a8))), app['use']('/ruangan', require('./routes/ruangan')), app[a4_0x383f39(0x1a0)]('/barang', require(a4_0x383f39(0x191))), app['use'](a4_0x383f39(0x19a), require(a4_0x383f39(0x19c))), app[a4_0x383f39(0x1ab)](a4_0x383f39(0x1a3), (_0x20a7e8, _0x2efb86, _0x50ec55) => {
    const _0x23d8dd = a4_0x383f39;
    _0x2efb86[_0x23d8dd(0x1ae)]('pong!');
}), app[a4_0x383f39(0x1a0)]('/', (_0x36986c, _0x439e34) => {
    const _0x632576 = a4_0x383f39;
    _0x439e34[_0x632576(0x19f)](0x194)[_0x632576(0x1ae)]('<h1>404\x20:\x20Page\x20not\x20found.</h1>');
}), mongoose[a4_0x383f39(0x1b2)](a4_0x383f39(0x19d))['then'](() => {
    const _0x190f58 = a4_0x383f39;
    app[_0x190f58(0x18f)](0x1389, () => {
        const _0x258e06 = _0x190f58;
        console[_0x258e06(0x188)](_0x258e06(0x18c) + 0x1389);
    });
})[a4_0x383f39(0x196)](_0x3e129d => console[a4_0x383f39(0x1b5)](a4_0x383f39(0x1a1)));