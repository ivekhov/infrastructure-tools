# Regular expressions

Links: 
- online editor  https://regexr.com 
- cheet sheet  https://cheatography.com/davechild/cheat-sheets/regular-expressions/  

```
. - any values

.y - any values with y

1.9 - any values between 1 and 9

1\.9 - 1 and dot and 9 

\ - escape character

\\ - slash reversed
```

GROUPS:
```
[a-z] - letters from a to z

[0-9] - numbers

[^a-z] - excluding a - z

[az-] - defis

\d - group of digits

\D - NOT a group of digits

\s - spaces

\S - NOT a spaces

\w - letters, digits, underscores == [0-9a-zA-Z_]

\W - NOT letters, digits, underscores
```
POSITIONS

```
^ - only in the beginning of the word like '^t'
$ - only in at the end of the row like 't$'

\b - at the end of the word 'a\b'
\B - all EXCEPT at the end of the word 'a\B'

\b - at the beginning of the word '\ba'
\B - all EXCEPT at the beginning of the word '\bA'

```
ALTERNATIVES
```
gr(ay|ey) 
gr[ae]y

```
QUANTIFICATIONS
```
? - обозначает "поиск совпадений с повторением от нуля до одного раза":
/colou?/
  col(ou)?r
  col[ou]?r

+ - означает, что предшествующий ему символ, группа или класс символов, должны встречаться как минимум один раз '/colou+r/'

* - говорит об отсутствии повторений или о повторении один, или несколько раз, что дает нам совпадение во всех подстроках кроме colr:

Есть более точные квантификаторы, которые записываются в фигурных скобках {}. Достаточно указать в них необходимое число повторений:

/colou{2}r/

в фигурных скобках {} можно указать диапазон повторений. Например, от двух до трёх: /colou{2,3}r/

email example: 
^\w+@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}

? - чтобы из "жадного" квантификатора сделать "ленивый"

Взять скобки и между ними хотя бы 1 символ:
\([^?\)]+\)
или так
\(.+?\)

```
Группировки с обратной связью

```
/(ta|tu)-\1/ 

именованные группы - между угловых скобок
/(?<group1>ta|tu)-\k<group1>/

/(?:ta|tu)-\1/ - отключение обратной группировки

```

Модификаторы

```
(
  ?:  и далее модификаторы которые управляют поведением регулярки
      i - игнорирование размера шрифта
      s - возврат каретки
  отключение модификатора - знаком минуса перед ним
) 

```

Просмотр вперед и назад

Предположим, что нам не нужно включать в результаты поиска часть подстроки с какими-то символами
```
/LudovicXVI/ - вернет целиком
/Ludovic(?=XVI)/ - вернет только имя

80(?=:.)(?!.[a-z]) == 
(80)(?=:[^a-z])

()python(?=['"])

```

Поиск по условию

```

(?ifthen|else)
(?(?<=code)\d{4}|____)

```

Флаги
```
\g
\gi



```