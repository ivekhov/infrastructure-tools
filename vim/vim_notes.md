Vim


vim file1 file2 -p т
поиск символа
		до конца документа /S
		до начала документа ?
в конец строки и начать вводить: A
в начало строки и начать вводить: I
вставить новую строку вниз: o
вставить новую стрку над: O 

o — перейти в режим ввода с новой строки под курсором
O — перейти в режим ввода с новой строки над курсором

выделить строку SHIFT V


^ - в начало текущей строки (к первому непробельному символу);
$ - в конец текущей строки;
w - на слово вправо;
b - на слово влево;

gg - перейти в начало файла;
G - перейти в конец файла; 

n - повторить поиск;
N - повторить поиск назад;

S - удаляет всю текущую строку и переходит в режим ввода. Число перед командой показывает сколько нужно удалить 
		строк начиная с текущей. Например 4S удалит четыре строки включая текущую.


x — удалить символ под курсором (<число>x удаляет указанное число символов начиная с того который находится под курсором);
X — удалить символ влево (удалить символ перед курсором);

u — отмена последней команды;
U — отмена всех последних изменений в строке, если строка удалена, то применить эту команду к данной строке будет невозможно.

с — команда аналогичная d, но после удаление переходит в режим ввода;
сс - команда удаляет текущую строку и переходит в режим ввода;


