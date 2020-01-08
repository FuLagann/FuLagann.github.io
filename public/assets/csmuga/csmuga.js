var carshmup = (function() {
    var t = null,
        e = null,
        i = 0,
        s = 0,
        r = 1,
        a = 0,
        c = 0,
        h = [],
        n = [],
        o = [],
        p = [],
        l = [],
        u = 0,
        m = 0,
        d = [0, 0],
        g = !1,
        f = null,
        w = 0,
        v = function(t) {
            var e = document.createElement("img");
            return e.src = t, e
		},
        T = [v("../public/assets/csmuga/purple_car.png"), v("../public/assets/csmuga/purple_car_right.png"), v("../public/assets/csmuga/purple_car_left.png"), v("../public/assets/csmuga/fireball.png"), v("../public/assets/csmuga/car.png"), v("../public/assets/csmuga/car_right.png"), v("../public/assets/csmuga/car_left.png"), v("../public/assets/csmuga/car_red.png"), v("../public/assets/csmuga/car_red_right.png"), v("../public/assets/csmuga/car_red_left.png"), v("../public/assets/csmuga/car_orange.png"), v("../public/assets/csmuga/car_orange_right.png"), v("../public/assets/csmuga/car_orange_left.png"), v("../public/assets/csmuga/car_green.png"), v("../public/assets/csmuga/car_green_right.png"), v("../public/assets/csmuga/car_green_left.png"), v("../public/assets/csmuga/background.png"), v("../public/assets/csmuga/explosion.png"), v("../public/assets/csmuga/fireballp.png"), v("../public/assets/csmuga/powerup.png")],
        y = {
            rect: [0, 0, 16, 32],
            img: T[0],
            speed: 3,
            isAlive: !0,
            deathAnim: 0,
            lives: 5,
            powerUp: 0,
            powerUpT: 0,
            powerUpDur: 60
        },
        A = function(a) {
            var c = window.innerWidth - 64,
                h = window.innerHeight - 32,
                n = r;
            t.width = c * n, t.height = h * n, t.style.width = c + "px", t.style.height = h + "px", e.setTransform(n, 0, 0, n, 0, 0), i = c, s = h
        },
        k = function() {
            var t = window.devicePixelRatio || 1,
                i = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
            r = t / i
        },
        M = function() {
            m = 0, o = [], h = [], n = [], l = [], p = [], d = [0, 0], y.rect[0] = window.innerWidth / 2 - 64, y.rect[1] = window.innerHeight / 2 - 32, y.img = T[0], y.deathAnim = 0, y.isAlive = !0, y.lives = 5, y.powerUp = 0, y.powerUpT = 0, a = 0, g = !1, c = 0
        },
        x = function() {
            t = document.getElementById("cvs"), e = t.getContext("2d"), k(), window.addEventListener("resize", A), window.addEventListener("mousemove", function(t) {
                y.lives >= 0 || (d = [t.clientX, t.clientY])
            }), A(), y.rect[0] = window.innerWidth / 2 - 64, y.rect[1] = window.innerHeight / 2 - 32, Timer.start({
                init: function() {
                    (f = new Audio("../public/assets/csmuga/chill.mp3")).loop = !0, f.play()
                },
                draw: function() {
                    if (y.lives < 0) return e.fillStyle = "tan", e.fillRect(0, 0, i, s), e.fillStyle = "black", e.font = "50px monospace", e.fillText("Game Over!", i / 2 - e.measureText("Game Over!").width / 2, s / 2), e.font = "24px monospace", e.fillStyle = !0 === g ? "teal" : "black", void e.fillText("Play Again?", i / 2 - e.measureText("Play Again?").width / 2, s / 2 + 50);
                    w += Timer.deltaT(), e.drawImage(T[16], 0, I(0, 1290, 1 - w / 60), 640, 215, 0, 0, i, s), e.drawImage(T[16], 0, I(0, 1290, 1 - w / 60) - 1290, 640, 215, 0, 0, i, s), w >= 60 && (w = 0), e.fillStyle = "black", e.font = "10px monospace", e.fillText("Score: " + m, 10, 16);
                    for (t = 0; t < y.lives; t++) e.drawImage(T[0], i - 10 * t - 16, 16, 8, 16);
                    y.isAlive ? R() : ++y.deathAnim <= 5 ? R() : y.deathAnim <= 10 || (y.deathAnim = 0);
                    for (t = 0; t < o.length; t++) o[t].draw();
                    for (t = 0; t < p.length; t++) p[t].draw();
                    for (t = 0; t < h.length; t++) h[t].draw();
                    for (t = 0; t < n.length; t++) n[t].draw();
                    for (var t = 0; t < l.length; t++) l[t].draw()
                },
                update: function() {
                    if (y.lives < 0) {
						X([i / 2 - e.measureText("Play Again?").width / 2, s / 2 + 50, e.measureText("Play Again?").width, 24], [d[0], d[1]]) ? (g || new Audio("../public/assets/csmuga/click.mp3").play(), g = !0, Timer.keys.mb0 && (M(), d = [0, 0])) : g = !1;
						finishedCallback();
					}
					else {
                        y.powerUp > 0 && (y.powerUpT += Timer.deltaT(), y.powerUpT >= y.powerUpDur && (y.powerUpT = 0, y.powerUp = 0));
                        for (t = 0; t < p.length; t++) p[t].update();
                        for (t = 0; t < h.length; t++) h[t].update(), h[t].isAlive || h.splice(t, 1);
                        for (t = 0; t < n.length; t++) n[t].update(), n[t].isAlive || n.splice(t, 1);
                        for (t = 0; t < l.length; t++) l[t].update(), l[t].isAlive || l.splice(t, 1);
                        Math.random() < .25 && c < 8 && (c++, setTimeout(S, 1e3 + 5e3 * Math.random())), Timer.keys.mb0 && _(h, !0, y), Timer.keys.w && (y.rect[1] = Math.max(y.rect[1] - y.speed, 0)), Timer.keys.s && (y.rect[1] = Math.min(y.rect[1] + y.speed, s)), Timer.keys.d && (y.rect[0] = Math.min(y.rect[0] + y.speed, i), y.img = T[1]), Timer.keys.a && (y.rect[0] = Math.max(y.rect[0] - y.speed, 0), y.img = T[2]), (!Timer.keys.d && !Timer.keys.a || Timer.keys.d && Timer.keys.a) && (y.img = T[0]);
                        for (var t = 0; t < o.length; t++) Y(o[t].rect, y.rect) && y.isAlive ? (B(), o.splice(t, 1)) : (o[t].update(), o[t].isAlive || (o.splice(t, 1), c--))
                    }
                }
            })
        },
        S = function() {
            for (var r = Math.round(3 * Math.random()), a = Math.round(3 * Math.random()), p = 0, l = [t.width, 0], u = 0, m = 0; m < h.length; m++) l[0] = Math.min(h[m].rect[0], l[0]), l[1] = Math.max(h[m].rect[0], l[1]);
            do {
                u++, p = Math.round(i * Math.random())
            } while (p >= l[0] && p <= l[1] || u > 500);
            u > 500 ? c-- : o.push({
                rect: [Math.random() * i, -20, 16, 32],
                img: T[4 + 3 * a],
                draw: function() {
                    e.drawImage(this.img, this.rect[0] - this.rect[2] / 2, this.rect[1] - this.rect[3] / 2, this.rect[2], this.rect[3])
                },
                update: function() {
                    switch (this.rect[1] > s && (this.isAlive = !1), this.aiType) {
                        default: switch (this.aiState) {
                            case 0:
                                this.t += Timer.deltaT(), this.rect[1] = I(-20, 48, this.t / 3), this.t >= 3 && (this.t = 0, this.aiState = 1, this.prevAIState = 1, this.properties.startX = this.rect[0], this.properties.startY = this.rect[1]);
                                break;
                            case 1:
                                this.aiState = 2, this.followPath();
                                break;
                            case 2:
                                this.bulletTick < this.maxBulletTick ? this.bulletTick++ : (this.bulletTick = 0, _(n, !1, this)), this.aiState = this.prevAIState;
                                break;
                            case 3:
                                this.aiState = 2, this.isWaiting || (setTimeout(function(t) {
                                    t.aiState = 4
                                }, 5e3, this), this.isWaiting = !0);
                                break;
                            case 4:
                                this.rect[1] += this.speed
                        }
                        break;
                        case 2:
                                this.rect[1] += this.speed
                    }
                },
                followPath: function() {
                    switch (this.aiType) {
                        default:
                            case 0:
                            t = 0;this.t += Timer.deltaT(),
                        (t = I(this.properties.startX, this.properties.playerX, this.t / this.dur)) - this.rect[0] < 0 ? this.img = T[6 + 3 * a] : t - this.rect[0] > 0 ? this.img = T[5 + 3 * a] : this.img = T[4 + 3 * a],
                        this.rect[0] = t,
                        this.rect[1] = I(this.properties.startY, this.properties.playerY - this.properties.deltaY, this.t / this.dur),
                        this.t >= this.dur && (this.t = 0, this.aiState = 3, this.prevAIState = 3, this.img = T[4 + 3 * a]);
                        break;
                        case 1:
                                var t = 0;this.t += Timer.deltaT(),
                            t = this.properties.playerX - this.properties.startX,
                            (t = I(this.properties.startX, this.properties.playerX + t, this.t / this.dur)) - this.rect[0] < 0 ? this.img = T[6 + 3 * a] : t - this.rect[0] > 0 ? this.img = T[5 + 3 * a] : this.img = T[4 + 3 * a],
                            this.rect[0] = t,
                            t = this.properties.playerY - this.properties.deltaY,
                            t -= this.properties.startY,
                            this.rect[1] = t * Math.sin(Math.PI * (this.t / this.dur)) + this.properties.startY,
                            this.t >= this.dur && (this.t = 0, this.aiState = 3, this.prevAIState = 3, this.img = T[4 + 3 * a])
                    }
                },
                isAlive: !0,
                isWaiting: !1,
                bulletTick: 0,
                maxBulletTick: Math.trunc(6 * Math.random() + 12),
                t: 0,
                dur: 5,
                speed: 4,
                properties: {
                    playerX: y.rect[0],
                    playerY: y.rect[1],
                    startX: 0,
                    startY: 0,
                    deltaY: 64
                },
                aiType: r,
                aiState: 0,
                prevAIState: 0
            })
        },
        _ = function(t, i, r) {
            if (i && a < (2 === y.powerUp ? 2 : 8)) a++;
            else {
                i && (a = 0);
                var h, n = Math.round(16 * Math.random());
                switch (n) {
                    case 8:
                        n = "../public/assets/csmuga/pewc.mp3";
                        break;
                    default:
                        n = "../public/assets/csmuga/pew.mp3"
                }(h = new Audio(n)).volume = .45, h.play(), n = 1 === (n = i ? y.powerUp : 0) ? 3 : 1;
                for (var p = 0; p < n; p++) t.push({
                    isPlayerBullet: i,
                    draw: function() {
                        e.drawImage(this.img, this.rect[0] - this.rect[2] / 2, this.rect[1] - this.rect[3] / 2, this.rect[2], this.rect[3])
                    },
                    update: function() {
                        if (this.isAlive)
                            if ((this.rect[1] < 0 || this.rect[1] > s) && (this.isAlive = !1), this.rect[1] -= (this.isPlayerBullet ? 1 : -1) * this.speed, this.isPlayerBullet)
                                for (var t = o.length - 1; t >= 0; t--) Y(this.rect, o[t].rect) && (0 === y.powerUp && Math.random() < .05 + .005 * u ? (u = 0, b(o[t])) : 0 === y.powerUp && u++, P(o[t]), o.splice(t, 1), c--, m += 100, this.isAlive = !1);
                            else Y(this.rect, y.rect) && y.isAlive && (B(), this.isAlive = !1)
                    },
                    isAlive: !0,
                    speed: 4,
                    color: "orange",
                    img: i ? T[18] : T[3],
                    rect: i ? 0 === p ? [r.rect[0], r.rect[1] - r.rect[3] / 2 - 8, 8, 8] : 1 === p ? [r.rect[0] - 13, r.rect[1] - r.rect[3] / 2 - 16, 8, 8] : [r.rect[0] + 13, r.rect[1] - r.rect[3] / 2 - 16, 8, 8] : [r.rect[0], r.rect[1] + r.rect[3] / 2 + 8, 8, 8]
                })
            }
        },
        b = function(t) {
            p.push({
                rect: [t.rect[0], t.rect[1], 16, 16],
                color: "limegreen",
                t: 0,
                dur: 16,
                id: Math.round(2 * Math.random()) + 1,
                draw: function() {
                    e.drawImage(T[19], this.rect[0] - this.rect[2] / 2, this.rect[1] - this.rect[3] / 2, this.rect[2], this.rect[3])
                },
                update: function() {
                    Y(this.rect, y.rect) && (3 === this.id ? y.lives++ : (y.powerUp = this.id, y.powerUpT = 0), u = 0, this.destroy()), this.t += Timer.deltaT(), this.t >= this.dur && this.destroy()
                },
                destroy: function() {
                    p.splice(0)
                }
            })
        },
        P = function(t) {
            var i = Math.round(4 * Math.random()) + 3;
            new Audio("../public/assets/csmuga/explosion.mp3").play();
            for (var s = 0; s < i; s++) l.push({
                img: T[17],
                imgPos: [0, 0],
                rect: [t.rect[0] + U(-t.rect[2] / 2, t.rect[2] / 2), t.rect[1] + U(-t.rect[3] / 2, t.rect[3] / 2), 16, 16],
                t: 0,
                dur: .05,
                pos: 0,
                draw: function() {
                    e.drawImage(this.img, 32 * this.imgPos[0], 32 * this.imgPos[1], 32, 32, this.rect[0] - this.rect[2] / 2, this.rect[1] - this.rect[3] / 2, this.rect[2], this.rect[3])
                },
                update: function() {
                    this.t < this.dur ? this.t += Timer.deltaT() : (this.t = 0, this.pos++, this.imgPos[0] = this.pos % 5, this.imgPos[1] = this.pos < 5 ? 0 : 1, this.pos >= 10 && (this.isAlive = !1))
                },
                isAlive: !0
            })
        },
        U = function(t, e) {
            return Math.random() * (e - t) + t
        },
        I = function(t, e, i) {
            return i < 0 ? t : i > 1 ? e : (1 - i) * t + i * e
        },
        Y = function(t, e) {
            return !(t[0] > e[0] + e[2] || t[0] + t[2] < e[0]) && !(t[1] > e[1] + e[3] || t[1] + t[3] < e[1])
        },
        X = function(t, e) {
            return !(e[0] < t[0] || e[0] > t[0] + t[2]) && !(e[1] < t[1] || e[1] > t[1] + t[3])
        },
        B = function() {
            y.isAlive && (y.lives--, y.isAlive = !1, setTimeout(function() {
                y.isAlive = !0
            }, 3e3))
        },
        R = function() {
            e.drawImage(y.img, y.rect[0] - y.rect[2] / 2, y.rect[1] - y.rect[3] / 2, y.rect[2], y.rect[3])
		},
		finishedCallback = function() {},
		setFinishedCallback = function(callback) {
			if(!callback) {
				return;
			}
			finishedCallback = callback;
		},
		startCallback = function() {},
		setStartCallback = function(callback) {
			if(!callback) {
				return;
			}
			startCallback = callback;
		};
    return {
		runGame: x,
		setFinishedCallback: setFinishedCallback,
		setStartCallback: setStartCallback
    }
})();