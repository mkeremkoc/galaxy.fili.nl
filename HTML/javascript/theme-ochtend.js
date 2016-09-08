var theme = {
    name: 'ochtend',

    audio: {},

    nebula: {
        mood: ['#ff6f00', '#80afbd'],
        diameter: 75
    },

    sprites: {
        planet: {
            'sprite-fili': [
                'fili-koffie',
                'trigger:sprite-signal:stop', 'fili-typen', 'fili-typen',
                'trigger:sprite-signal:stop', 'fili-gebeld', 'trigger:sprite-signal:stop',
                'fili-typen', 'fili-typen', 'trigger:sprite-signal:stop'
            ],
            'sprite-signal': ['empty', 'signal-normaal']
        }
    },

    animations: {
        'signal-normaal': {
            url: '//cdn.fili.nl/images/anim/signal.png',
            run: -1,
            delay: 50,
            cols: 13,
            rows: 1,
            left: 313,
            bottom: 346,
            script: [
                {sprite: 1},
                {sprite: 2},
                {sprite: 3},
                {sprite: 4},
                {sprite: 5},
                {sprite: 6},
                {sprite: 7},
                {sprite: 8},
                {sprite: 9},
                {sprite: 10},
                {sprite: 11},
                {sprite: 12},
                {sprite: 13, delay: 2000}
            ]
        },
        'empty': {
            url: '//cdn.fili.nl/images/anim/empty.png',
            run: 0,
            cols: 1,
            rows: 1
        }, ///////////


        'fili-typen': {
            url: '//cdn.fili.nl/images/anim/ochtend/pxlfili_typzijkant_S.png',
            run: 10, // loopbaar
            cols: 5,
            rows: 1,
            delay: 100,
            left: 116,
            bottom: 378
        },

        'fili-koffie': {
            url: '//cdn.fili.nl/images/anim/ochtend/pxlfili_koffie_S.png',
            run: 1,
            cols: 4,
            rows: 21,
            delay: 100,
            left: 116,
            bottom: 378,
            script: [
                {sprite: 1},
                {sprite: 2},
                {sprite: 3},
                {sprite: 4},
                {sprite: 5},
                {sprite: 6},
                {sprite: 7},
                {sprite: 8},
                {sprite: 9},
                {sprite: 10},
                {sprite: 11},
                {sprite: 12},
                {sprite: 13},
                {sprite: 14},
                {sprite: 15},
                {sprite: 16},
                {sprite: 17},
                {sprite: 18},
                {sprite: 19},
                {sprite: 20},
                {sprite: 21},
                {sprite: 22},
                {sprite: 23},
                {sprite: 24},
                {sprite: 25},
                {sprite: 26, delay: 800},
                {sprite: 27, delay: 800},
                {sprite: 28},
                {sprite: 29},
                {sprite: 30},
                {sprite: 31},
                {sprite: 32},
                {sprite: 33},
                {sprite: 34},
                {sprite: 35},
                {sprite: 36},
                {sprite: 37, delay: 800},
                {sprite: 38},
                {sprite: 39},
                {sprite: 40},
                {sprite: 41},
                {sprite: 42},
                {sprite: 43},
                {sprite: 44},
                {sprite: 45},
                {sprite: 46},
                {sprite: 47},
                {sprite: 48},
                {sprite: 49},
                {sprite: 50},
                {sprite: 51},
                {sprite: 52},
                {sprite: 53, delay: 400},
                {sprite: 54, delay: 400},
                {sprite: 53, delay: 400},
                {sprite: 59, delay: 400},
                {sprite: 60},
                {sprite: 61, delay: 400},
                {sprite: 62, delay: 400},
                {sprite: 61, delay: 1000},
                {sprite: 63},//
                {sprite: 64},
                {sprite: 65, delay: 400},
                {sprite: 66},
                {sprite: 67},
                {sprite: 68, delay: 2000},
                {sprite: 61, delay: 200},
                {sprite: 62, delay: 200},
                {sprite: 61, delay: 200},
                {sprite: 68, delay: 1000},
                {sprite: 63},//
                {sprite: 64},
                {sprite: 65, delay: 800},
                {sprite: 66},
                {sprite: 67},
                {sprite: 68, delay: 1000},
                {sprite: 61, delay: 200},
                {sprite: 62, delay: 200},
                {sprite: 61, delay: 200},
                {sprite: 63},//
                {sprite: 64},
                {sprite: 65, delay: 400},
                {sprite: 66},
                {sprite: 67},
                {sprite: 68, delay: 1000},
                {sprite: 63},//
                {sprite: 64},
                {sprite: 65},
                {sprite: 66},
                {sprite: 67},
                {sprite: 68},
                {sprite: 69},
                {sprite: 70},
                {sprite: 71},
                {sprite: 72},
                {sprite: 73},
                {sprite: 74},
                {sprite: 75},
                {sprite: 76},
                {sprite: 77},
                {sprite: 78},
                {sprite: 79},
                {sprite: 80},
                {sprite: 81},
                {sprite: 82},
                {sprite: 83},
                {sprite: 84}
            ]
        },

        'fili-gebeld': {
            url: '//cdn.fili.nl/images/anim/ochtend/pxlfili_gebeld_S.png',
            run: 1,
            cols: 6,
            rows: 13,
            delay: 100,
            left: 116,
            bottom: 378,
            script: [
                {sprite: 1},
                {sprite: 2},
                {sprite: 3},
                {sprite: 4},
                {sprite: 5},
                {sprite: 6},
                {sprite: 7},
                {sprite: 8},
                {sprite: 9},
                {sprite: 10},
                {sprite: 11},
                {sprite: 12},
                {sprite: 13},
                {sprite: 14},
                {sprite: 15},
                {sprite: 16},
                {sprite: 17},
                {sprite: 18},
                {sprite: 19},
                {sprite: 20},
                {sprite: 21},
                {sprite: 22},
                {sprite: 23},
                {sprite: 24},
                {sprite: 25},
                {sprite: 26},
                {sprite: 27},
                {sprite: 28},
                {sprite: 29},
                {sprite: 30},
                {sprite: 28},
                {sprite: 27},
                {sprite: 26},
                {sprite: 31},
                {sprite: 32},
                {sprite: 33},
                {sprite: 34},
                {sprite: 33},
                {sprite: 34},
                {sprite: 33, delay: 2000},
                {sprite: 34},
                {sprite: 33},
                {sprite: 34},
                {sprite: 33},
                {sprite: 34},
                {sprite: 33},

                {sprite: 35},//
                {sprite: 36},
                {sprite: 35},
                {sprite: 36, delay: 3000},
                {sprite: 35},
                {sprite: 36},
                {sprite: 35},
                {sprite: 36},
                {sprite: 35},
                {sprite: 36, delay: 1000},
                {sprite: 37},
                {sprite: 38},
                {sprite: 39},
                {sprite: 40},
                {sprite: 41},
                {sprite: 42},
                {sprite: 43},
                {sprite: 44},
                {sprite: 45},
                {sprite: 46, delay: 2000},
                {sprite: 47},
                {sprite: 48},
                {sprite: 47},
                {sprite: 48},
                {sprite: 47},
                {sprite: 48, delay: 3000},
                {sprite: 49},
                {sprite: 50},
                {sprite: 51},
                {sprite: 52},
                {sprite: 53},
                {sprite: 54},
                {sprite: 55},
                {sprite: 56},
                {sprite: 57},
                {sprite: 58},

                {sprite: 35},//
                {sprite: 36},
                {sprite: 35},
                {sprite: 36},
                {sprite: 35},
                {sprite: 36},
                {sprite: 37},
                {sprite: 38},
                {sprite: 39},
                {sprite: 40},
                {sprite: 41},
                {sprite: 42},
                {sprite: 43},
                {sprite: 44},
                {sprite: 45},
                {sprite: 46},
                {sprite: 47},
                {sprite: 48},
                {sprite: 47},
                {sprite: 48},
                {sprite: 47},
                {sprite: 48},
                {sprite: 49},
                {sprite: 50},
                {sprite: 51},
                {sprite: 52},
                {sprite: 53},
                {sprite: 54},
                {sprite: 55},
                {sprite: 56},
                {sprite: 57},
                {sprite: 58},

                {sprite: 59},
                {sprite: 60},
                {sprite: 61},
                {sprite: 62},
                {sprite: 63},
                {sprite: 64},
                {sprite: 27},
                {sprite: 28},
                {sprite: 29},
                {sprite: 28},
                {sprite: 27},
                {sprite: 26},
                {sprite: 64},
                {sprite: 65},
                {sprite: 66},
                {sprite: 67},
                {sprite: 68},
                {sprite: 69},
                {sprite: 70},
                {sprite: 71},
                {sprite: 72},
                {sprite: 73},
                {sprite: 74},
                {sprite: 75}
            ]
        }
    }
};
