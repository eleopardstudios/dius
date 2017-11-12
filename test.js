var assert = require('assert');
var Match = require('./match.js');
var match = new Match("player 1", "player 2");

describe('match.pointWonBy("player 1")', function() {
    describe('match.score()', function() {
        it('should return 0-0, 15-0', function(){
            match.pointWonBy("player 1");
            assert.equal('0-0, 15-0', match.score());
        });    
    })
});

describe('match.pointWonBy("player 2")', function() {
    describe('match.score()', function() {
        it('should return 0-0, 15-15', function(){
            match.pointWonBy("player 2");
            assert.equal('0-0, 15-15', match.score());
        });    
    })
});

describe('match.pointWonBy("player 1")', function() {
    describe('match.score()', function() {
        it('should return 0-0, 30-15', function(){
            match.pointWonBy("player 1");
            assert.equal('0-0, 30-15', match.score());
        });    
    })
});

describe('match.pointWonBy("player 1")', function() {
    describe('match.score()', function() {
        it('should return 0-0, 40-15', function(){
            match.pointWonBy("player 1");
            assert.equal('0-0, 40-15', match.score());
        });    
    })
});

describe('match.pointWonBy("player 2")', function() {
    describe('match.score()', function() {
        it('should return 0-0, 40-30', function(){
            match.pointWonBy("player 2");
            assert.equal('0-0, 40-30', match.score());
        });    
    })
});

describe('match.pointWonBy("player 2")', function() {
    describe('match.score()', function() {
        it('should return 0-0, Deuce', function(){
            match.pointWonBy("player 2");
            assert.equal('0-0, Deuce', match.score());
        });    
    })
});

describe('match.pointWonBy("player 1")', function() {
    describe('match.score()', function() {
        it('should return 0-0, Advantage player 1', function(){
            match.pointWonBy("player 1");
            assert.equal('0-0, Advantage player 1', match.score());
        });    
    })
});

describe('match.pointWonBy("player 2")', function() {
    describe('match.score()', function() {
        it('should return 0-0, Deuce', function(){
            match.pointWonBy("player 2");
            assert.equal('0-0, Deuce', match.score());
        });    
    })
});

describe('match.pointWonBy("player 2")', function() {
    describe('match.score()', function() {
        it('should return 0-0, Advantage player 2', function(){
            match.pointWonBy("player 2");
            assert.equal('0-0, Advantage player 2', match.score());
        });    
    })
});

describe('match.pointWonBy("player 2")', function() {
    describe('match.score()', function() {
        it('should return 0-1, 0-0', function(){
            match.pointWonBy("player 2");
            assert.equal('0-1, 0-0', match.score());
        });    
    })
});