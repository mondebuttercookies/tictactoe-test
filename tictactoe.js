var e, p, s, o, n;
var w, x, y, z;
var boardArea;
const ComputerMove = "O";
const YourMove = "X";
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]
const cells = document.querySelectorAll('.cell');

function MoveF(number) {
    return MoveF = number - 8 * Math.floor((number - 1) /8, 1)
}

function ComputerMove(index) {
    return boardArea = (cell(index-1)).Value = "X";
}

function YourMove() {
    let pilihan;
    boardArea = (cell(pilihan-1)).Value = "O";
    return YourMove == pilihan;
}

mulaiClick();
function mulaiClick() {
    boardArea = Array.from(Array(9).keys());
}

e = 9;
ComputerMove (e);
w = YourMove();
p = MoveF(w + 1);
ComputerMove (p);
x = YourMove();
if (x = MoveF(p + 4)) {
    s = MoveF(p + 2)
        ComputerMove (s)
        y = YourMove()
    if (y = MoveF(s + 4)) {
        if (w % 2 == 0) {
            o = MoveF(s + 3)
                ComputerMove (o)
                z = YourMove()
            if (z = MoveF(o + 4)) {
                n = MoveF(o + 6)
                    ComputerMove (n)
                    MsgBox ("Permainan selesai dengan hasil SERI")
            } else {
                n = MoveF(o + 4)
                    ComputerMove (n)
                    MsgBox ("KOMPUTER MENANG")
            }
        } else {
            o = MoveF(s + 7)
                ComputerMove (o)
                MsgBox ("KOMPUTER MENANG")
        }
    } else {
        o = MoveF(s + 4)
            ComputerMove (o)
            MsgBox ("KOMPUTER MENANG")
    }
} else {
    s = MoveF(p + 4)
        ComputerMove (s)
        MsgBox ("KOMPUTER MENANG")
}