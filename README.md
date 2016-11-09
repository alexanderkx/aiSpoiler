# Simple JavaScript Spoiler

Простенький плагин для реализации спойлеров на сайте. Отлично подойдет при использовании с WYSWIYG-редакторами, например **TinyMCE** или **CKEditor**.

Достаточно обернуть нужный фрагмент текста в блок с неким классом и инициализировать плагин.

## Использование

Подключаем плагин

```html
<script src="/path/to/aiSpoiler.min.js"></script>
```

Оборачиваем нужный фрагмент контента в блок с классом

```html
<div class="spoiler">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ullam recusandae rem doloremque iste? Soluta magnam quibusdam neque illum maiores adipisci iste totam aut eius laborum, in ipsum. Magnam, et.</p>
</div>
```

и инициализируем плагин

```javascript
var sp = new aiSpoiler;
sp.initSpoiler(".spoiler");
```

Вторым параметром в `initSpoiler` можно передать объект с настройками. По умолчанию выставлены такие параметры:

```javascript
{
    showText: "Show", // Текст элемента "Показать блок"
    hideText: "Hide", // Текст элемента "Скрыть блок"
    bottom: false, // Положении элемента при открытии скрытого контента
    element: { // Настройки элемнта
        tagName: "button", // button/a/img ...
        attr: { // Аттрибуты элемента
            title: "my title",
            class: "btn"
        }
    }
}
```
