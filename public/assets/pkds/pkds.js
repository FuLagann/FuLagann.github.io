// In Loving Memory of Aaron Ramirez Jr. 1993 - 2017
var pkds = function() {
    var e = null,
        t = null,
        s = 0,
        i = 0,
        n = 1,
        o = 0,
        a = 0,
        r = 0,
        u = [0, 0],
        d = !1,
        c = 0,
        l = function(e) {
            switch (e) {
                case "hp":
                    return "Swag";
                case "atk":
                    return "Hustle";
                case "def":
                    return "Thiccness";
                case "satk":
                    return "Pimpness";
                case "sdef":
                    return "Awesomeness";
                case "spd":
                    return "Quickness"
            }
        },
        h = {
            text: "",
            type: "",
            getText: function() {
                var e = this.text.substring(0, 48),
                    t = this.text.substring(48);
                return t = t.substring(0, 48), [e.trim(), t.trim()]
            },
            draw: function() {
                if ("" != this.text) {
                    var e = this.getText();
                    t.font = "12px monospace", t.fillStyle = "black", t.fillRect(u[0] - 258, u[1] - 66, 516, 52), t.fillStyle = "white", t.fillRect(u[0] - 256, u[1] - 64, 512, 48), t.fillStyle = "black", t.fillText(e[0], u[0] - 252, u[1] - 64 + 16), t.fillText(e[1], u[0] - 252, u[1] - 64 + 32), t.fillRect(u[0] + 68, u[1] - 64, 4, 48), t.fillText("Type: " + this.type, u[0] + 76, u[1] - 64 + 16)
                }
            }
        },
        g = {
            t: 0,
            dur: 6,
            dude: null,
            oldHP: 0,
            newHP: 0,
            turnInfo: 0,
            isAnimating: !1,
            set: function(e, t, s, i) {
                var n = (i + 1) % 2;
                this.oldHP = e, this.newHP = t, this.dude = s, this.turnInfo = 0 == n ? m : p, this.newHP < 0 && (this.newHP = 0), this.isAnimating = !0
            },
            update: function() {
                this.isAnimating && (this.t += Timer.deltaT(), this.dude.tempStats[0] = z(this.oldHP, this.newHP, this.t / this.dur), this.t >= this.dur && (0 == this.newHP && (this.turnInfo.t = 0), this.t = 0, this.dude = null, this.isAnimating = !1))
            }
        },
        f = {
            t: 0,
            dur: 6,
            isUp: !1,
            text: "",
            set: function(e) {
                this.text = e, this.isUp = !0, this.t = 0
            },
            draw: function() {
                this.isUp && (t.fillStyle = "ghostwhite", t.fillRect(10, 10, s / 2, 32), t.fillStyle = "#101820", t.font = "16px times", t.fillText(this.text, 16, 30))
            },
            update: function() {
                this.isUp && (this.t += Timer.deltaT(), this.t >= this.dur && (this.isUp = !1, this.t = 0))
            }
        },
        m = {
            id: 0,
            tick: 0,
            dur: 4,
            t: 0,
            minmax: [-.5, .5, .5, -.5],
            bob: {
                t: 0,
                dur: 2,
                min: 0,
                max: 16,
                dir: 0
            }
        },
        p = {
            id: 1,
            tick: 0,
            dur: 4,
            t: 0,
            minmax: [-.5, .5, .5, -.5],
            bob: {
                t: 0,
                dur: 2,
                min: 0,
                max: 16,
                dir: 0
            }
        },
        b = {
            init: function() {
                e = document.getElementById("cvs"), t = e.getContext("2d"), C(), window.addEventListener("resize", B), window.addEventListener("mousemove", function(e) {
                    u[0] = e.clientX - 29, u[1] = e.clientY - 12
                }), B(), S.battle.loop = !0, S.battle.play(), S.click.volume = .1
            },
            draw: function() {
                if (t.fillStyle = k(), t.fillRect(0, 0, s, i), 0 != c) return t.font = "50px times", t.fillStyle = "black", void(c > 0 ? t.fillText("You Won Against the Dudebro!", s / 4, i / 2) : t.fillText("You Lost Against the Dudebro!", s / 4, i / 2));
                I.draw(), H.draw(), f.draw(), h.draw()
            },
            update: function() {
                I.update(), H.update(), 3 === o && E(), f.update(), g.update()
            }
        },
        k = function() {
            var e = Math.trunc(z(0, 255, w.rt / w.rdur)),
                t = Math.trunc(z(0, 255, w.gt / w.gdur)),
                s = Math.trunc(z(0, 255, w.bt / w.bdur));
            return w.rt += (w.rfor ? 1 : -1) * Timer.deltaT(), w.gt += (w.gfor ? 1 : -1) * Timer.deltaT(), w.bt += (w.bfor ? 1 : -1) * Timer.deltaT(), (w.rt <= 0 || w.rt >= w.rdur) && (w.rt = q(w.rt, 0, w.rdur), w.rfor = !w.rfor), (w.gt <= 0 || w.gt >= w.gdur) && (w.gt = q(w.gt, 0, w.gdur), w.gfor = !w.gfor), (w.bt <= 0 || w.bt >= w.bdur) && (w.bt = q(w.bt, 0, w.bdur), w.bfor = !w.bfor), e = e < 16 ? "0" + e.toString(16) : e.toString(16), t = t < 16 ? "0" + t.toString(16) : t.toString(16), s = s < 16 ? "0" + s.toString(16) : s.toString(16), "#" + e + t + s
        },
        w = {
            rt: 0,
            rdur: 20,
            rfor: !0,
            gt: 0,
            gdur: 35,
            gfor: !0,
            bt: 0,
            bdur: 47,
            bfor: !0
        },
        y = {
            water: [.5, 2, .5, 1, 1, 2, .5, 1, 1, 1],
            fire: [.5, 1, .5, 1, 1, .5, 2, 2, 2, 1],
            dirt: [2, 2, .5, .5, 1, 2, 1, 1, .5, 2],
            wind: [1, 2, 2, 1, .5, 1, 1, 1, .5, 1],
            dust: [1, 2, 1, .5, 1, 2, 1, 1, .5, 1],
            food: [1, .5, .5, .5, .5, .5, 2, 2, .5, 1],
            grass: [2, .5, 2, 1, 1, .5, 1, .5, .5, 1],
            swole: [1, 1, 1, 1, 1, .5, 1, 2, 2, 2],
            metal: [1, .5, 2, 1, 1, 2, 2, .5, .5, 1],
            lightning: [2, .5, .5, 1, 1, .5, 1, 1, 2, 1]
        },
        v = function(e) {
            var t = document.createElement("img");
            return t.src = e, t
        },
        S = {
            click: new Audio("../public/assets/csmuga/click.mp3"),
            pew: new Audio("../public/assets/csmuga/pew.mp3"),
            battle: new Audio("../public/assets/pkds/battle.mp3")
        },
        x = {
            brotean: v("../public/assets/pkds/brotean.png"),
            noobroo: v("../public/assets/pkds/noobroo.png"),
            wakar: v("../public/assets/pkds/wakar.png"),
            weebee: v("../public/assets/pkds/weebee.png"),
            rollan: v("../public/assets/pkds/rollan.png"),
            brogan: v("../public/assets/pkds/brogan.png"),
            timebox: v("../public/assets/pkds/timebox.png"),
            fishguy: v("../public/assets/pkds/fishguy.png"),
            minic: v("../public/assets/pkds/minic.png"),
            scally: v("../public/assets/pkds/scally.png"),
            mistr: v("../public/assets/pkds/mistr.png"),
            borb: v("../public/assets/pkds/borb.png"),
            teknica: v("../public/assets/pkds/teknica.png"),
            miska: v("../public/assets/pkds/miska.png"),
            goy: v("../public/assets/pkds/goy.png"),
            monkgai: v("../public/assets/pkds/monkgai.png"),
            spach: v("../public/assets/pkds/spach.png"),
            toastems: v("../public/assets/pkds/toastems.png"),
            aspot: v("../public/assets/pkds/aspot.png"),
            smugge: v("../public/assets/pkds/smugge.png"),
            debbie: v("../public/assets/pkds/debbie.png"),
            flestaff: v("../public/assets/pkds/flestaff.png"),
            mobiex: v("../public/assets/pkds/mobiex.png"),
            dinkie: v("../public/assets/pkds/dinkie.png"),
            murgburg: v("../public/assets/pkds/murgburg.png"),
            vergie: v("../public/assets/pkds/vergie.png"),
            skorm: v("../public/assets/pkds/skorm.png"),
            dunbal: v("../public/assets/pkds/dunbal.png"),
            hefunnie: v("../public/assets/pkds/hefunnie.png"),
            chams: v("../public/assets/pkds/chams.png"),
            nyugette: v("../public/assets/pkds/nyugette.png"),
            allito: v("../public/assets/pkds/allito.png"),
            shucky: v("../public/assets/pkds/shucky.png")
        },
        _ = function(e, t, s, i, n, o, a, r) {
            return r || (r = 0), {
                name: t,
                desc: s,
                type: e,
                power: i,
                effect: n,
                curr: o,
                max: o,
                isPhysical: a,
                priority: r,
                clone: function() {
                    return new _(this.type, this.name, this.desc, this.power, this.effect, this.max, this.isPhysical, this.priority)
                }
            }
        },
        T = function(e, t, s, i, n, o) {
            return o || (o = {}), {
                name: e,
                types: t,
                stats: s,
                tempStats: function() {
                    var e = [0, 0, 0, 0, 0, 0];
                    if (!s) return e;
                    for (var t = 0; t < s.length; t++) e[t] = 0 == t ? 50 * (2 * s[t] + 32) / 100 + 60 : 50 * (2 * s[t] + 32) / 100 + 5;
                    return e
                }(),
                maxStats: function() {
                    var e = [0, 0, 0, 0, 0, 0];
                    if (!s) return e;
                    for (var t = 0; t < s.length; t++) e[t] = 0 == t ? 50 * (2 * s[t] + 32) / 100 + 60 : 50 * (2 * s[t] + 32) / 100 + 5;
                    return e
                }(),
                moveset: function() {
                    for (var e = [], t = 0; t < i.length; t++) e.push((M[i[t]] || i[t]).clone());
                    return e
                }(),
                img: n,
                takeDamage: function(e) {
                    this.tempStats[0] -= e, this.tempStats[0] < 0 && (this.tempStats[0] = 0)
                },
                heal: function(e, t) {
                    g.set(this.tempStats[0], Math.min(this.tempStats[0] + this.maxStats[0] * e, this.maxStats[0]), this, t)
                },
                getStat: function(e) {
                    switch (e) {
                        case "atk":
                            return this.tempStats[1];
                        case "def":
                            return this.tempStats[2];
                        case "satk":
                            return this.tempStats[3];
                        case "sdef":
                            return this.tempStats[4];
                        case "spd":
                            return this.tempStats[5]
                    }
                },
                clone: function() {
                    return new T(this.name, this.types, this.stats, this.moveset.slice(), this.img.cloneNode(), {
                        tempStats: this.tempStats || [0, 0, 0, 0, 0, 0]
                    })
                },
                reduce: function(e, t, s) {
                    switch (e) {
                        case "atk":
                            this.tempStats[1] *= .875 * t;
                            break;
                        case "def":
                            this.tempStats[2] *= .875 * t;
                            break;
                        case "satk":
                            this.tempStats[3] *= .875 * t;
                            break;
                        case "sdef":
                            this.tempStats[4] *= .875 * t;
                            break;
                        case "spd":
                            this.tempStats[5] *= .875 * t
                    }
                    setTimeout(function() {
                        f.set(s + "'s " + l(e) + " has decreased!")
                    }, 250)
                },
                boost: function(e, t, s) {
                    switch (e) {
                        case "atk":
                            this.tempStats[1] *= 1.25 * t;
                            break;
                        case "def":
                            this.tempStats[2] *= 1.25 * t;
                            break;
                        case "satk":
                            this.tempStats[3] *= 1.25 * t;
                            break;
                        case "sdef":
                            this.tempStats[4] *= 1.25 * t;
                            break;
                        case "spd":
                            this.tempStats[5] *= 1.25 * t
                    }
                    setTimeout(function() {
                        f.set(s + "'s " + l(e) + " has increased!")
                    }, 250)
                },
                isAlive: function() {
                    return this.tempStats[0] > 0
                }
            }
        },
        D = [],
        A = function(e, t, s) {
            if (D.length > 0)
                if (t.priority > D[0].atk.priority || e.getStat("spd") > D[0].dude.getStat("spd")) {
                    var i = D[0];
                    D.slice(), D.push({
                        atk: t,
                        dude: e,
                        id: s
                    }), D.push(i)
                } else D.push({
                    atk: t,
                    dude: e,
                    id: s
                });
            else D.push({
                atk: t,
                dude: e,
                id: s
            })
        },
        M = {
            feel_the_burn: _("fire", "feel_the_burn", "Increase the heat to make the pocketdude sweat his booty off", 95, function() {}, 10, !1),
            flex: _("swole", "flex", "Flex your pectorals to show just how strong you is", 0, function(e) {
                e.boost("atk", 1, e.name)
            }, 20, !0),
            gut_punch: _("swole", "gut_punch", "Punch the pocketdude right in the gut!", 45, function() {}, 15, !0),
            flash_food: _("food", "flash_food", "Give a quick flash of nothing but food. Damage is done in food coma", 30, function() {}, 10, !0, 2),
            sweep: _("dust", "sweep", "Sweeps the area, damage is dealt from the newly surfaced dust", 65, function() {}, 10, !0),
            recharge: _("lightning", "recharge", "Heals for 50% health", 0, function(e, t) {
                e.heal(.5, t)
            }, 5, !1),
            discharge: _("lightning", "discharge", "Lets off a distressing discharge of electricity", 75, function() {}, 15, !1),
            ram: _("metal", "ram", "Goes for a full on charged ram", 50, function() {}, 25, !0, 2),
            grind_away: _("metal", "grind_away", "Uses two objects to slowly chip away at the pocketdude", 80, function() {}, 15, !0),
            gas_drench: _("water", "gas_drench", "Drenches the pocketdude in some serious gas action", 75, function() {}, 15, !0),
            rev: _("metal", "rev", "Revs whatever motor is available. Damage is done in noise pollution", 85, function() {}, 15, !0),
            pollenize: _("dust", "pollenize", "Shoots pollen right at the pocketdude", 65, function() {}, 15, !0),
            silver_wind: _("dust", "silver_wind", "Summons a dusty and gross wind that glows silver", 75, function() {}, 10, !1),
            hunnify: _("food", "hunnify", "Turns the pocketdude into delicious honey for a while. Damage is done in tastiness", 90, function() {}, 10, !0),
            overgrow: _("grass", "overgrow", "Lets plants overtake the place and overwhelms the pocketdude", 80, function() {}, 15, !1),
            blaze_it: _("fire", "blaze_it", "Sets the pocketdude on fire", 95, function() {}, 15, !1),
            munchies: _("food", "munchies", "Starts munching on the pocketdude", 65, function() {}, 15, !1),
            chokehold: _("swole", "chokehold", "Gets the pocketdude in a chokehold", 85, function() {}, 15, !0),
            electrify: _("lightning", "electrify", "Electrifies the pocketdude", 80, function() {}, 15, !1, 2),
            magnet_bomb: _("metal", "magnet_bomb", "Throws a bunch of magnets at the pocketdude, like chucking cool rocks.", 70, function() {}, 15, !1),
            rise: _("lightning", "rise", "Increases your " + l("spd"), 0, function(e) {
                e.boost("spd", 1, e.name)
            }, 5, !1),
            diversify: _("swole", "diversify", "Reminds the pocketdude to diversify for a good trading portfolio", 50, function() {}, 10, !1),
            drown: _("water", "drown", "Tries to drown the pocketdude", 95, function() {}, 15, !1),
            soak: _("water", "soak", "Drenches the pocketdude in water. Damage is done in embarresment", 75, function() {}, 25, !1),
            gobble: _("dirt", "gobble", "Just straight up eats the pocketdude whole", 100, function() {}, 15, !0),
            anchor_swing: _("metal", "anchor_swing", "Gives a good punch that impacts as hard as if it was a ship's anchor", 90, function() {}, 10, !0),
            mistify: _("water", "mistify", "Either surprise the pocketdude or summon mist, or both... both is good.", 80, function() {}, 15, !1),
            crackle: _("lightning", "crackle", "Sends unpredictable shoots of lightning to the pocketdude", 95, function() {}, 10, !1),
            overheat: _("fire", "overheat", "Turns up the heat and tries to overheat the pocketdude", 85, function() {}, 10, !1),
            calculate: _("lightning", "calculate", "Increases your " + l("satk"), 0, function(e) {
                e.boost("satk", 1, e.name)
            }, 15, !1),
            sing: _("wind", "sing", "Sings to the pocketdude. Damage is done in annoyance levels.", 75, function() {}, 10, !1),
            golden_wind: _("wind", "golden_wind", "Sings beautifully to the pocketdude. Damage is done in infatuation.", 80, function() {}, 10, !1),
            super_toast: _("food", "super_toast", "I mean, do I have to describe it to you?? It's super toast bruh!!!", 100, function() {}, 5, !1),
            smog: _("dust", "smog", "Causes a big smog field. Damage is done in the lungs", 75, function() {}, 20, !1),
            gust: _("wind", "gust", "Throws a huge gust wind. Damage is done in annoyance levels", 80, function() {}, 15, !1),
            boast: _("dust", "boast", "Increases your " + l("satk"), 0, function(e) {
                e.boost("satk", 1, e.name)
            }, !0),
            splash: _("water", "splash", "Splashes on the ground with whatever water is nearby. Does literally nothing bruh.", 0, function() {}, 15, !1),
            cry: _("water", "cry", "Heavily cries at the pocketdude. Damage is done in annoyance levels.", 75, function() {}, 20, !0),
            perplex: _("lightning", "perplex", "Confuse, amaze, and daze the pocketdude", 95, function() {}, 15, !1),
            get_stranded: _("dirt", "get_stranded", "Stands the pocketdude to the middle of nowhere. Damage is done in loss of hope.", 95, function() {}, 10, !0),
            spook: _("food", "spook", "Spooks the pocketdude. Damage is done in the closeness of having a heart attack.", 75, function() {}, 10, !1),
            deliciousness: _("food", "deliciousness", "Provides a nice and delicious meal. Damage is done in deliciousness", 85, function() {}, 15, !1),
            overwhelm: _("dust", "overwhelm", "What's worse than just one dust bunny in your face? Too much of them!", 75, function() {}, 10, !0),
            dust_dance: _("dust", "dust_dance", "Dances to create a cloud of dust", 80, function() {}, 15, !0),
            inflate: _("wind", "inflate", "Inflates the pocketdude", 80, function() {}, 10, !1)
        },
        R = {
            brotean: T("Brotean", ["swole", "food"], [105, 105, 75, 65, 100, 50], ["feel_the_burn", "flex", "gut_punch", "flash_food"], x.brotean),
            noobroo: T("Noobroo", ["lightning"], [75, 90, 50, 110, 80, 95], ["sweep", "recharge", "discharge", "ram"], x.noobroo),
            wakar: T("Wakar", ["fire", "metal"], [67, 89, 116, 79, 116, 33], ["grind_away", "feel_the_burn", "rev", "gas_drench"], x.wakar),
            weebee: T("Weebee", ["grass", "dust"], [78, 92, 75, 74, 63, 118], ["pollenize", "silver_wind", "hunnify", "flash_food"], x.weebee),
            rollan: T("Rollan", ["grass", "fire"], [77, 70, 90, 145, 75, 43], ["feel_the_burn", "overgrow", "blaze_it", "munchies"], x.rollan),
            brogan: T("Brogan", ["swole"], [72, 105, 115, 54, 86, 68], ["flex", "ram", "gut_punch", "chokehold"], x.brogan),
            timebox: T("Timebox", ["lightning"], [55, 50, 45, 135, 95, 120], ["discharge", "electrify", "rise", "magnet_bomb"], x.timebox),
            fishguy: T("Fishguy", ["water"], [80, 82, 78, 95, 80, 85], ["diversify", "drown", "blaze_it", "soak"], x.fishguy),
            minic: T("Minic", ["metal", "dirt"], [65, 100, 70, 80, 80, 105], ["gobble", "gut_punch", "ram", "munchies"], x.minic),
            scally: T("Scally", ["metal", "water"], [50, 50, 150, 50, 150, 50], ["ram", "anchor_swing", "drown", "rise"], x.scally),
            mistr: T("Mistr", ["dust", "water"], [100, 125, 100, 55, 85, 35], ["drown", "mistify", "silver_wind", "gut_punch"], x.mistr),
            borb: T("Borb", ["fire", "lightning"], [60, 100, 60, 100, 60, 120], ["feel_the_burn", "overheat", "crackle", "discharge"], x.borb),
            teknica: T("Teknica", ["metal", "lightning"], [60, 65, 60, 130, 75, 110], ["ram", "overheat", "rev", "calculate"], x.teknica),
            miska: T("Miska", ["wind"], [60, 100, 60, 100, 60, 120], ["sing", "mistify", "golden_wind", "sweep"], x.miska),
            goy: T("Goy", ["grass"], [85, 110, 90, 45, 90, 80], ["sing", "gut_punch", "overgrow", "rise"], x.goy),
            monkgai: T("Monkgai", ["swole"], [70, 110, 80, 55, 80, 105], ["flex", "ram", "gut_punch", "chokehold"], x.monkgai),
            spach: T("Spach", ["food", "swole"], [70, 130, 100, 55, 80, 65], ["chokehold", "overgrow", "gut_punch", "anchor_swing"], x.spach),
            toastems: T("Toastems", ["fire", "metal"], [71, 73, 88, 120, 89, 59], ["discharge", "blaze_it", "flash_food", "anchor_swing"], x.toastems),
            aspot: T("Aspot", ["food", "fire"], [60, 100, 60, 100, 60, 120], ["flash_food", "feel_the_burn", "munchies", "super_toast"], x.aspot),
            smugge: T("Smugge", ["dust"], [60, 65, 60, 130, 75, 110], ["silver_wind", "smog", "gust", "boast"], x.smugge),
            debbie: T("Debbie", ["water", "dirt"], [71, 73, 88, 120, 89, 59], ["splash", "drown", "soak", "cry"], x.debbie),
            mobiex: T("Mobiex", ["lightning", "wind"], [55, 50, 45, 135, 95, 120], ["gust", "calculate", "perplex", "crackle"], x.mobiex),
            dinkie: T("Dinkie", ["dirt"], [80, 125, 75, 40, 95, 85], ["get_stranded", "overgrow", "rise", "silver_wind"], x.dinkie),
            murgburg: T("Murgburg", ["food"], [90, 130, 75, 75, 75, 55], ["gobble", "munchies", "gut_punch", "spook"], x.murgburg),
            vergie: T("Vergie", ["food", "grass"], [90, 75, 75, 90, 100, 70], ["munchies", "blaze_it", "gobble", "deliciousness"], x.vergie),
            skorm: T("Skorm", ["dust"], [60, 65, 60, 130, 75, 110], ["silver_wind", "gust", "grind_away", "drown"], x.skorm),
            dunbal: T("Dunbal", ["dust"], [60, 130, 60, 65, 75, 110], ["silver_wind", "overwhelm", "munchies", "dust_dance"], x.dunbal),
            hefunnie: T("Hefunnie", ["wind"], [75, 50, 60, 130, 75, 110], ["diversify", "inflate", "gust", "calculate"], x.hefunnie),
            chams: T("Chams", ["metal", "lightning"], [170, 90, 45, 90, 45, 60], ["discharge", "calculate", "recharge", "perplex"], x.chams),
            nyugette: T("Nyugette", ["food", "fire"], [60, 70, 105, 70, 120, 75], ["munchies", "blaze_it", "flash_food", "feel_the_burn"], x.nyugette),
            shucky: T("Shucky", ["water", "wind"], [80, 82, 78, 95, 80, 85], ["inflate", "ram", "drown", "gust"], x.shucky)
        },
        P = function() {
            switch (Math.round(31 * Math.random())) {
                case 0:
                    return R.brotean.clone();
                case 1:
                    return R.noobroo.clone();
                case 2:
                    return R.wakar.clone();
                case 3:
                    return R.weebee.clone();
                case 4:
                    return R.rollan.clone();
                case 5:
                    return R.brogan.clone();
                case 6:
                    return R.timebox.clone();
                case 7:
                    return R.fishguy.clone();
                case 8:
                    return R.minic.clone();
                case 9:
                    return R.scally.clone();
                case 10:
                    return R.mistr.clone();
                case 11:
                    return R.borb.clone();
                case 12:
                    return R.teknica.clone();
                case 13:
                    return R.miska.clone();
                case 14:
                    return R.goy.clone();
                case 15:
                    return R.monkgai.clone();
                case 16:
                    return R.spach.clone();
                case 17:
                    return R.toastems.clone();
                case 18:
                    return R.aspot.clone();
                case 19:
                    return R.smugge.clone();
                case 20:
                    return R.debbie.clone();
                case 21:
                    return P();
                case 22:
                    return R.mobiex.clone();
                case 23:
                    return R.dinkie.clone();
                case 24:
                    return R.murgburg.clone();
                case 25:
                    return R.vergie.clone();
                case 26:
                    return R.skorm.clone();
                case 27:
                    return R.dunbal.clone();
                case 28:
                    return R.hefunnie.clone();
                case 29:
                    return R.chams.clone();
                case 30:
                    return R.nyugette.clone();
                case 31:
                    return R.shucky.clone()
            }
            return R.brotean.clone()
        },
        I = {
            pocketdudes: [P(), P(), P()],
            currDude: 0,
            getDude: function() {
                return this.pocketdudes[this.currDude]
            },
            draw: function() {
                switch (N(this, s / 4, i / 2 + 64, m), t.fillStyle = "ghostwhite", t.fillRect(32, i - 70, s / 2, 62), h.text = "", h.type = "", a) {
                    case 1:
                        t.fillRect(s / 2 + 40, i - 168, s / 2 - 68, 160), t.font = "20px monospace", 3 === r ? (t.fillStyle = "orange", h.text = this.getDude().moveset[0].desc, h.type = F(this.getDude().moveset[0].type)) : t.fillStyle = "midnightblue", t.fillText(F(this.getDude().moveset[0].name), s / 2 + 44, i - 168 + 32), 4 === r ? (t.fillStyle = "orange", h.text = this.getDude().moveset[1].desc, h.type = F(this.getDude().moveset[1].type)) : t.fillStyle = "midnightblue", t.fillText(F(this.getDude().moveset[1].name), s / 2 + 44, i - 168 + 64), 5 === r ? (t.fillStyle = "orange", h.text = this.getDude().moveset[2].desc, h.type = F(this.getDude().moveset[2].type)) : t.fillStyle = "midnightblue", t.fillText(F(this.getDude().moveset[2].name), s / 2 + 44, i - 168 + 96), 6 === r ? (t.fillStyle = "orange", h.text = this.getDude().moveset[3].desc, h.type = F(this.getDude().moveset[3].type)) : t.fillStyle = "midnightblue", t.fillText(F(this.getDude().moveset[3].name), s / 2 + 44, i - 168 + 128);
                        break;
                    case 2:
                        t.fillRect(s / 2 + 40, i - 168, s / 2 - 68, 160), t.font = "20px monospace", this.pocketdudes[0].isAlive() ? t.fillStyle = 3 === r ? "orange" : "midnightblue" : t.fillStyle = "dimgray", t.fillText(this.pocketdudes[0].name, s / 2 + 44, i - 168 + 32), this.pocketdudes[1].isAlive() ? t.fillStyle = 4 === r ? "orange" : "midnightblue" : t.fillStyle = "dimgray", t.fillText(this.pocketdudes[1].name, s / 2 + 44, i - 168 + 64), this.pocketdudes[2].isAlive() ? t.fillStyle = 5 === r ? "orange" : "midnightblue" : t.fillStyle = "dimgray", t.fillText(this.pocketdudes[2].name, s / 2 + 44, i - 168 + 96)
                }
                m.id == o && (t.fillStyle = 1 === r ? "orange" : "midnightblue", t.font = "24px monospace", t.fillText("Attack", 64, i - 32), t.fillStyle = 2 === r ? "orange" : "midnightblue", t.fillText("Swap Dudes", 164, i - 32))
            },
            update: function() {
                if (0 == o) {
                    if (!this.getDude().isAlive()) {
                        for (n = 0; n < this.pocketdudes.length; n++)
                            if (this.pocketdudes[n].isAlive()) return void(this.currDude = n);
                        return void(c = -1)
                    }
                    if (t.font = "24px monospace", Y([64, i - 32 - 24, t.measureText("Attack").width, 24], u)) 1 != r && S.click.play(), r = 1, !d && Timer.keys.mb0 ? (d = !0, a = 1) : d && !Timer.keys.mb0 && (d = !1);
                    else if (Y([164, i - 32 - 24, t.measureText("Swap Dudes").width, 24], u)) 2 != r && S.click.play(), r = 2, !d && Timer.keys.mb0 ? (d = !0, a = 2) : d && !Timer.keys.mb0 && (d = !1);
                    else {
                        for (var e = !1, n = 0; n < this.getDude().moveset.length; n++)
                            if (Y([s / 2 + 44, i - 168 + 32 * (n + 1) - 24, s / 2 - 68, 24], u)) {
                                1 == a ? (r != n + 3 && S.click.play(), !d && Timer.keys.mb0 ? (d = !0, a = 0, A(this.getDude(), this.getDude().moveset[n], 0), o = 1) : d && !Timer.keys.mb0 && (d = !1)) : 2 == a && n < 3 && this.currDude != n && this.pocketdudes[n].isAlive() && (r != n + 3 && S.click.play(), !d && Timer.keys.mb0 ? (d = !0, a = 0, A(this.getDude(), _("fire", "swap_dude", "", 0, function(e) {
                                    I.currDude = n
                                }, -1, !0, 1e3), 0), o = 1) : d && !Timer.keys.mb0 && (d = !1)), r = n + 3, e = !0;
                                break
                            }
                        e || (r = 0)
                    }
                }
            }
        },
        z = function(e, t, s) {
            return s < 0 ? e : s > 1 ? t : (1 - s) * e + s * t
        },
        H = {
            pocketdudes: [P(), P(), P()],
            currDude: 0,
            isUpdated: !1,
            isSwapped: !1,
            getDude: function() {
                return this.pocketdudes[this.currDude]
            },
            draw: function() {
                N(this, 3 * s / 4 + 64, i / 4, p)
            },
            update: function() {
                this.isSwapped || this.getDude().isAlive() || (this.isSwapped = !0, setTimeout(function(e) {
                    e.isSwapped = !1, ++e.currDude >= e.pocketdudes.length && (c = 1, e.currDude--)
                }, 3e3, this)), this.isUpdated || p.id != o || (this.isUpdated = !0, setTimeout(function(e) {
                    e.isUpdated = !1, A(e.getDude(), e.getDude().moveset[Math.trunc(3 * Math.random())], 1), o = 3
                }, 1e3, this))
            }
        },
        U = function(e, t, s) {
            return s.isPhysical ? (22 * e.getStat("atk") * s.power / t.getStat("def") / 50 + 2) * G(s.type, e.types) * L(s.type, t.types) * (Math.trunc(15 * Math.random() + 85) / 100) : (22 * e.getStat("satk") * s.power / t.getStat("sdef") / 50 + 2) * G(s.type, e.types) * L(s.type, t.types) * (Math.trunc(15 * Math.random() + 85) / 100)
        },
        E = function() {
            o = 4;
            for (var e = 0; e < 2; e++) setTimeout(function(e) {
                if (D[e].dude.isAlive()) {
                    var t = 0 == D[e].id ? H.getDude() : I.getDude(),
                        s = U(D[e].dude, t, D[e].atk),
                        i = L(D[e].atk.type, t.types);
                    0 == D[e].atk.power && (s = 0, i = 1), 0 == D[e].id ? H.getDude().isAlive() || setTimeout(function() {
                        f.set("Most Unpresidented! The dude wasn't even there!")
                    }, 2e3) : I.getDude().isAlive() || setTimeout(function() {
                        f.set("Most Unpresidented! The dude wasn't even there!")
                    }, 2e3), i > 1 ? setTimeout(function() {
                        f.set("Most Excellent Choice Dude!")
                    }, 2e3) : i < 1 && setTimeout(function() {
                        f.set("Most Egregious Choice Dude!")
                    }, 2e3), "swap_dude" != D[e].atk.name && f.set(0 == D[e].id ? D[e].dude.name + " used " + F(D[e].atk.name) + "!" : "The foe " + D[e].dude.name + " used " + F(D[e].atk.name) + "!"), setTimeout(function() {
                        D[e].atk.effect(D[e].dude, D[e].id), D[e].atk.power > 0 && (S.pew.play(), g.set(t.tempStats[0], t.tempStats[0] - s, t, D[e].id))
                    }, 250)
                } else f.set("Dude swagged out!")
            }, 3e3 * e, e);
            setTimeout(function() {
                D.splice(0), o = 0
            }, 7e3)
        },
        B = function(o) {
            var a = window.innerWidth - 64,
                r = window.innerHeight - 32,
                u = n;
            e.width = a * u, e.height = r * u, e.style.width = a + "px", e.style.height = r + "px", t.setTransform(u, 0, 0, u, 0, 0), s = a, i = r
        },
        C = function() {
            var e = window.devicePixelRatio || 1,
                s = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
            n = e / s
        },
        L = function(e, t) {
            for (var s = y[e], i = 1, n = 0; n < t.length; n++) i *= s[W(t[n])];
            return i
        },
        G = function(e, t) {
            for (var s = 0; s < t.length; s++)
                if (e == t[s]) return 1.5;
            return 1
        },
        W = function(e) {
            switch (e) {
                default:
                    case "water":
                    return 0;
                case "fire":
                        return 1;
                case "dirt":
                        return 2;
                case "wind":
                        return 3;
                case "dust":
                        return 4;
                case "food":
                        return 5;
                case "grass":
                        return 6;
                case "swole":
                        return 7;
                case "metal":
                        return 8;
                case "lightning":
                        return 9
            }
        },
        j = function(e) {
            return e <= .2 ? "#ff9999" : e <= .5 ? "#ffc500" : "#6ab4e6"
        },
        N = function(e, a, r, u) {
            var d = e.getDude().tempStats[0] / e.getDude().maxStats[0];
            if (t.fillStyle = "ghostwhite", t.fillRect(a - 64, r - 128 - 16, 168, 32), t.fillRect(a - 68, r - 83, 108, 14), t.fillRect(a - 132, r - 115, 236, 32), t.font = "24px times", t.fillStyle = "#101820", t.fillText("Lv. 50   " + e.getDude().name, a - 124, r - 91), t.font = "12px monospace", t.fillText(F(e.getDude().types[0]) + (e.getDude().types[1] ? " / " + F(e.getDude().types[1]) : ""), a - 60, r - 128), t.fillRect(a - 64, r - 82, 100, 12), t.fillStyle = j(d), t.fillRect(a - 64, r - 82, 100 * d, 12), e.getDude().img) {
                if (!e.getDude().isAlive()) return u.t += Timer.deltaT(), t.save(), t.translate(a, r + z(0, i, u.t / u.dur)), t.drawImage(e.getDude().img, -64 * n, -64 * n, 128 * n, 128 * n), t.translate(-a, -r - z(0, i, u.t / u.dur)), void t.restore();
                u.id === o ? (u.t += Timer.deltaT(), u.bob.t += Timer.deltaT(), t.save(), t.translate(a, r + z(0 === u.bob.dir ? u.bob.min : u.bob.max, 0 === u.bob.dir ? u.bob.max : u.bob.min, u.bob.t / u.bob.dur)), t.rotate(z(u.minmax[2 * u.tick], u.minmax[2 * u.tick + 1], u.t / u.dur)), t.drawImage(e.getDude().img, -64 * n, -64 * n, 128 * n, 128 * n), t.rotate(-z(u.minmax[2 * u.tick], u.minmax[2 * u.tick + 1], u.t / u.dur)), t.translate(-a, -r - z(0 === u.bob.dir ? u.bob.min : u.bob.max, 0 === u.bob.dir ? u.bob.max : u.bob.min, u.bob.t / u.bob.dur)), t.restore(), u.t >= u.dur && (u.tick++, u.tick %= u.minmax.length / 2, u.t = 0), u.bob.t >= u.bob.dur && (u.bob.dir++, u.bob.dir %= 2, u.bob.t = 0)) : (u.bob.t += Timer.deltaT(), t.save(), t.translate(a, r + z(0 === u.bob.dir ? u.bob.min : u.bob.max, 0 === u.bob.dir ? u.bob.max : u.bob.min, u.bob.t / u.bob.dur)), t.drawImage(e.getDude().img, -64 * n, -64 * n, 128 * n, 128 * n), t.translate(-a, -r - z(0 === u.bob.dir ? u.bob.min : u.bob.max, 0 === u.bob.dir ? u.bob.max : u.bob.min, u.bob.t / u.bob.dur)), t.restore(), u.bob.t >= u.bob.dur && (u.bob.dir++, u.bob.dir %= 2, u.bob.t = 0))
            } else t.fillRect(s / 4 - 64, i / 2, 128, 128)
        },
        Y = function(e, t) {
            return !(t[0] < e[0] || t[0] > e[0] + e[2]) && !(t[1] < e[1] || t[1] > e[1] + e[3])
        },
        F = function(e) {
            var t = e.split("_");
            e = "";
            for (var s = 0; s < t.length; s++) t[s] = t[s][0].toUpperCase() + t[s].substr(1), e += t[s] + (s < t.length - 1 ? " " : "");
            return e
        },
        q = function(e, t, s) {
            return e < t ? t : e > s ? s : e
        };
    return {
        run: function() {
            Timer.start(b)
        }
    }
}();