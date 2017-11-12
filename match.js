'use strict';
//This class represent a single player
class Player {   
    constructor(game= null, name = '', pointsWon = 0, gamesWon = 0) {
        this.game = game;
        this.name = name;
        this.pointsWon = pointsWon;
        this.gamesWon = gamesWon;        
    }
    wonPoint(oponent) {
        this.pointsWon++;
        this.game.lastPointWinner = this;          
        if(this.game.tiebreaker) {
            this.isWinner(oponent);
            return;
        }                        
        if ( this.pointsWon > 3 && this.pointsWon - oponent.pointsWon > 1) {            
            this.wonGame(oponent);
        } else if( this.game.totalPointsWon >= 6) {            
            this.game.advantageTo = !(this.game.deuce = (this.pointsWon == oponent.pointsWon)) && this;            
        }
    }
    wonGame(oponent) {
        this.gamesWon++;
        this.pointsWon = oponent.pointsWon = this.game.totalPointsWon = 0;
        this.game.advantageTo = null;
        this.isWinner(oponent);
    }
    isWinner(oponent) {
        if((this.game.tiebreaker && (this.pointsWon > 6 && this.pointsWon - oponent.pointsWon > 1)) ||
            (this.gamesWon > 5 && this.gamesWon - oponent.gamesWon > 1) ) {
            this.game.winner = this;                                     
        } else {
            this.game.tiebreaker = (this.gamesWon == 6 && this.gamesWon == oponent.gamesWon);
        }
    }
}
//Match class to represent a single match played
class Match {
    constructor(p1, p2) {
        this.p1 = new Player(this, p1);
        this.p2 = new Player(this, p2);
        this.lastPointWinner = null;
        this.advantageTo = null;
        this.points = [0, 15, 30, 40];
        this.totalPointsWon = 0;
        this.tiebreaker = false;
        this.deuce = false;
        this.winner = null;
    }
    pointWonBy(player) {
        if(this.winner){return;}
        this.totalPointsWon++;         
        (player == this.p1.name) ? this.p1.wonPoint(this.p2) : this.p2.wonPoint(this.p1);
    }
    score() {
        if (this.winner) {
            return `Winner ${this.winner.name}`;
        }
        var gameScore = `${this.p1.gamesWon}-${this.p2.gamesWon}`;
        var pointScore = '';
        if (this.tiebreaker) {
            pointScore = `${this.p1.pointsWon}-${this.p2.pointsWon}`;
        } else if (this.deuce) {
            pointScore = 'Deuce';
        } else if (this.advantageTo) {
            pointScore = `Advantage ${this.advantageTo.name}`;
        } else {
            pointScore = `${this.points[this.p1.pointsWon]}-${this.points[this.p2.pointsWon]}`;
        }        
        return `${gameScore}, ${pointScore}`;
    }
}
module.exports = Match;