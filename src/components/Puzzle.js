/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable no-use-before-define */

import NOT_ADDED from '../images/nothing added.png';
import './Puzzle.css';
import { PUZZLE_DIFFICULTY } from '../pages/Starred';

const PUZZLE_HOVER_TINT = '#009900';

let _stage;
let _canvas;

let _img;
let _pieces;
let _puzzleWidth;
let _puzzleHeight;
let _pieceWidth;
let _pieceHeight;
let _currentPiece;
let _currentDropPiece;

let _mouse;
let gameWin = false;

export function init() {
    _img = new Image();
    _img.addEventListener('load', onImage, false);
    _img.src = NOT_ADDED;
}
function onImage() {
    _pieceWidth = Math.floor(_img.width / PUZZLE_DIFFICULTY);
    _pieceHeight = Math.floor(_img.height / PUZZLE_DIFFICULTY);
    _puzzleWidth = _pieceWidth * PUZZLE_DIFFICULTY;
    _puzzleHeight = _pieceHeight * PUZZLE_DIFFICULTY;
    setCanvas();
    initPuzzle();
}
function setCanvas() {
    _canvas = document.getElementById('canvas');
    _stage = _canvas.getContext('2d');
    _canvas.width = _puzzleWidth;
    _canvas.height = _puzzleHeight;
    _canvas.style.border = '1px solid black';
}
function initPuzzle() {
    _pieces = [];
    _mouse = { x: 0, y: 0 };
    _currentPiece = null;
    _currentDropPiece = null;
    _stage.drawImage(
        _img,
        0,
        0,
        _puzzleWidth,
        _puzzleHeight,
        0,
        0,
        _puzzleWidth,
        _puzzleHeight
    );
    createTitle('Click to Start Puzzle');
    buildPieces();
}
function createTitle(msg) {
    _stage.fillStyle = '#000000';
    _stage.globalAlpha = 0.5;
    _stage.fillRect(80, _puzzleHeight - 40, _puzzleWidth - 160, 40);
    _stage.fillStyle = '#FFFFFF';
    _stage.globalAlpha = 1;
    _stage.textAlign = 'center';
    _stage.textBaseline = 'middle';
    _stage.font = '16px monospace';
    _stage.fillText(msg, _puzzleWidth / 2, _puzzleHeight - 20);
}
function buildPieces() {
    let i;
    let piece;
    let xPos = 0;
    let yPos = 0;
    for (i = 0; i < PUZZLE_DIFFICULTY * PUZZLE_DIFFICULTY; i++) {
        piece = {};
        piece.sx = xPos;
        piece.sy = yPos;
        _pieces.push(piece);
        xPos += _pieceWidth;
        if (xPos >= _puzzleWidth) {
            xPos = 0;
            yPos += _pieceHeight;
        }
    }
    document.onmousedown = shufflePuzzle;
}
function shufflePuzzle() {
    _pieces = shuffleArray(_pieces);
    _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
    let i;
    let piece;
    let xPos = 0;
    let yPos = 0;
    for (i = 0; i < _pieces.length; i++) {
        piece = _pieces[i];
        piece.xPos = xPos;
        piece.yPos = yPos;
        _stage.drawImage(
            _img,
            piece.sx,
            piece.sy,
            _pieceWidth,
            _pieceHeight,
            xPos,
            yPos,
            _pieceWidth,
            _pieceHeight
        );
        _stage.strokeRect(xPos, yPos, _pieceWidth, _pieceHeight);
        xPos += _pieceWidth;
        if (xPos >= _puzzleWidth) {
            xPos = 0;
            yPos += _pieceHeight;
        }
    }
    document.onmousedown = onPuzzleClick;
}
function onPuzzleClick(e) {
    if (e.clientX || e.clientX === 0) {
        _mouse.x = e.clientX - _canvas.offsetLeft;
        _mouse.y = e.clientY - _canvas.offsetTop;
    } else if (e.offsetX || e.offsetX === 0) {
        _mouse.x = e.offsetX - _canvas.offsetLeft;
        _mouse.y = e.offsetY - _canvas.offsetTop;
    }
    _currentPiece = checkPieceClicked();
    if (_currentPiece != null) {
        _stage.clearRect(
            _currentPiece.xPos,
            _currentPiece.yPos,
            _pieceWidth,
            _pieceHeight
        );
        _stage.save();
        _stage.globalAlpha = 0.9;
        _stage.drawImage(
            _img,
            _currentPiece.sx,
            _currentPiece.sy,
            _pieceWidth,
            _pieceHeight,
            _mouse.x - _pieceWidth / 2,
            _mouse.y - _pieceHeight / 2,
            _pieceWidth,
            _pieceHeight
        );
        _stage.restore();
        document.onmousemove = updatePuzzle;
        document.onmouseup = pieceDropped;
    }
}
function checkPieceClicked() {
    let i;
    let piece;
    for (i = 0; i < _pieces.length; i++) {
        piece = _pieces[i];
        if (
            _mouse.x < piece.xPos ||
            _mouse.x > piece.xPos + _pieceWidth ||
            _mouse.y < piece.yPos ||
            _mouse.y > piece.yPos + _pieceHeight
        ) {
            // PIECE NOT HIT
        } else {
            return piece;
        }
    }
    return null;
}
function updatePuzzle(e) {
    _currentDropPiece = null;
    if (e.clientX || e.clientX === 0) {
        _mouse.x = e.clientX - _canvas.offsetLeft;
        _mouse.y = e.clientY - _canvas.offsetTop;
    } else if (e.offsetX || e.offsetX === 0) {
        _mouse.x = e.offsetX - _canvas.offsetLeft;
        _mouse.y = e.offsetY - _canvas.offsetTop;
    }
    _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
    let i;
    let piece;
    for (i = 0; i < _pieces.length; i++) {
        piece = _pieces[i];
        if (piece === _currentPiece) {
            continue;
        }
        _stage.drawImage(
            _img,
            piece.sx,
            piece.sy,
            _pieceWidth,
            _pieceHeight,
            piece.xPos,
            piece.yPos,
            _pieceWidth,
            _pieceHeight
        );
        _stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
        if (_currentDropPiece == null) {
            if (
                _mouse.x < piece.xPos ||
                _mouse.x > piece.xPos + _pieceWidth ||
                _mouse.y < piece.yPos ||
                _mouse.y > piece.yPos + _pieceHeight
            ) {
                // NOT OVER
            } else {
                _currentDropPiece = piece;
                _stage.save();
                _stage.globalAlpha = 0.4;
                _stage.fillStyle = PUZZLE_HOVER_TINT;
                _stage.fillRect(
                    _currentDropPiece.xPos,
                    _currentDropPiece.yPos,
                    _pieceWidth,
                    _pieceHeight
                );
                _stage.restore();
            }
        }
    }
    _stage.save();
    _stage.globalAlpha = 0.6;
    _stage.drawImage(
        _img,
        _currentPiece.sx,
        _currentPiece.sy,
        _pieceWidth,
        _pieceHeight,
        _mouse.x - _pieceWidth / 2,
        _mouse.y - _pieceHeight / 2,
        _pieceWidth,
        _pieceHeight
    );
    _stage.restore();
    _stage.strokeRect(
        _mouse.x - _pieceWidth / 2,
        _mouse.y - _pieceHeight / 2,
        _pieceWidth,
        _pieceHeight
    );
}
function pieceDropped() {
    document.onmousemove = null;
    document.onmouseup = null;
    if (_currentDropPiece != null) {
        const tmp = { xPos: _currentPiece.xPos, yPos: _currentPiece.yPos };
        _currentPiece.xPos = _currentDropPiece.xPos;
        _currentPiece.yPos = _currentDropPiece.yPos;
        _currentDropPiece.xPos = tmp.xPos;
        _currentDropPiece.yPos = tmp.yPos;
    }
    resetPuzzleAndCheckWin();
}
function resetPuzzleAndCheckWin() {
    _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
    gameWin = true;
    let i;
    let piece;
    for (i = 0; i < _pieces.length; i++) {
        piece = _pieces[i];
        _stage.drawImage(
            _img,
            piece.sx,
            piece.sy,
            _pieceWidth,
            _pieceHeight,
            piece.xPos,
            piece.yPos,
            _pieceWidth,
            _pieceHeight
        );
        _stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
        if (piece.xPos !== piece.sx || piece.yPos !== piece.sy) {
            gameWin = false;
        }
    }
    if (gameWin) {
        setTimeout(gameOver, 1000);
    }
}
function gameOver() {
    document.onmousedown = null;
    document.onmousemove = null;
    document.onmouseup = null;
    document.body.insertAdjacentHTML(
        'afterend',
        '<div id="wonGame">CONGRATULATIONS!!!</div>'
    );

    initPuzzle();
}
function shuffleArray(o) {
    for (
        let j, x, i = o.length;
        i;
        j = parseInt(Math.random() * i, 10), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
}
