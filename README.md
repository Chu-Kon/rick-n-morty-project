https://chu-kon.github.io/rick-n-morty-project/

Что нужно исправить:
Проблема 1:
Пагинация: при перемещении к последней странице 42 добавляются несуществующие страницы 43 и 44,
а общее количество страниц меняется с pages: 42 на pages: 138  (выводил в консоли),
при переходе на них страницы не отрисовываюстя, а в консоль падает ошибка

Проблема 2:
Смена кнопки "Удалить/добавить в избранное": когда удаление происходит непостредственно со страницы Избранное,
тогда на основной странице не меняется надпись у кнопки, 
функция продолжает работать, но toggle между подписью кнопки не работает корректно
Т.е. корректно тогглить можно только с главной страницы с персонажами
