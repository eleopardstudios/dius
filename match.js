'use strict';
//Match class to represent a single match played
var Match = function (p1, p2) {
    this.points = [0, 15, 30, 40];
    this.totalPointsWon = 0;
    this.p1 = {
        name: p1,
        pointsWon: 0,
        gamesWon: 0,
        advantage: false
    }
    this.p2 = {
        name: p2,
        pointsWon: 0,
        gamesWon: 0,
        advantage: false
    }
    this.tiebreaker = false;
    this.deuce = false;
    this.winner = null;
};

//function to update set status
Match.prototype.updateSetStatus = function () {
    if (this.tiebreaker) {
        if (this.p1.pointsWon > 6 && this.p1.pointsWon - this.p2.pointsWon > 1) {
            this.winner = this.p1;
            this.tiebreaker = false;
        } else if (this.p2.pointsWon > 6 && this.p2.pointsWon - this.p1.pointsWon > 1) {
            this.winner = this.p2;
            this.tiebreaker = false;
        }
        return;
    }
    if (this.p1.gamesWon > 5 && this.p1.gamesWon - this.p2.gamesWon > 1) {
        this.winner = this.p1;
    } else if (this.p2.gamesWon > 5 && this.p2.gamesWon - this.p1.gamesWon > 1) {
        this.winner = this.p2;
    } else if (this.p1.gamesWon == 6 && this.p1.gamesWon == this.p2.gamesWon) {
        this.tiebreaker = true;
    }
};

//Function to update game status
Match.prototype.updateGameStatus = function () {
    this.deuce = false;
    this.p1.advantage = false;
    this.p2.advantage = false;
    if (this.tiebreaker) {
        this.updateSetStatus();
        return;
    }
    if (this.p1.pointsWon - this.p2.pointsWon > 1 && this.p1.pointsWon > 3) {
        this.p1.gamesWon++;
        this.p1.pointsWon = 0;
        this.p2.pointsWon = 0;
        this.totalPointsWon = 0;
        this.updateSetStatus();
    } else if (this.p2.pointsWon - this.p1.pointsWon > 1 && this.p2.pointsWon > 3) {
        this.p2.gamesWon++;
        this.p2.pointsWon = 0;
        this.p1.pointsWon = 0;
        this.totalPointsWon = 0;
        this.updateSetStatus();
    } else if (this.totalPointsWon >= 6) {
        if (this.p1.pointsWon == this.p2.pointsWon) {
            this.deuce = true;
        } else if (this.p1.pointsWon > this.p2.pointsWon) {
            this.p1.advantage = true;
        } else if (this.p2.pointsWon > this.p1.pointsWon) {
            this.p2.advantage = true;
        }
    }
};

//Function to update points of a player
Match.prototype.pointWonBy = function (player) {
    this.totalPointsWon++;
    if (player == this.p1.name) {
        this.p1.pointsWon++;
    } else {
        this.p2.pointsWon++;
    }
    this.updateGameStatus();
};

//Function to display score
Match.prototype.score = function () {
    if (this.winner) {
        console.log("Winner " + this.winner.name);
        return;
    }
    var gameScore = this.p1.gamesWon + '-' + this.p2.gamesWon;
    var pointScore = '';
    if (this.tiebreaker) {
        pointScore = this.p1.pointsWon + '-' + this.p2.pointsWon;
    } else {
        if (this.deuce) {
            pointScore = 'Deuce';
        } else if (this.p1.advantage) {
            pointScore = 'Advantage Player 1';
        } else if (this.p2.advantage) {
            pointScore = 'Advantage Player 2';
        } else {
            pointScore = this.points[this.p1.pointsWon] + '-' + this.points[this.p2.pointsWon];
        }
    }
    console.log(gameScore + ", " + pointScore);
};

module.exports = Match;