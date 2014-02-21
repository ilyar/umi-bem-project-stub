# Разработка на UMI.CMS по методологии БЭМ

Заготовка для разработки проектов на UMI.CMS по методологии БЭМ

## Термины

- **Система** - UMI.CMS
- **Системная папка** - директория на хостинге или локально в которую установлена система
- **Стандартный тип данных** - тип данных в поставке актуальной версии системы
- **Системный файл** - файл идущий в поставке системы и может быть изменен при обновлении

## Реализация

Реализация проекта ведется по т.н. [новому формату расширения функционала](http://api.docs.umi-cms.ru/razrabotka_nestandartnogo_funkcionala/razrabotka_sobstvennyh_makrosov_i_modulej/novyj_format_rasshireniya_funkcionala/) доступного с версии 2.8.5, подробно описан основной документации системы с использование XSLT-шаблонизатора.

## Модификации системы

Модификация системы делается исключительно в не системных файлах в особенности это касается [модификации административного интерфейса](http://api.docs.umi-cms.ru/razrabotka_nestandartnogo_funkcionala/kodirovanie_administrativnogo_interfejsa/)

## Разработка

Разработка ведется с применением БЭМ методологии, подробнее о структуре проекта:

<pre>
project/
  │
  ├── .bem/ (настройка БЭМ инструментов)
  ├── assets/ (результат сборки js, css, images)
  ├── blocks/ (блоки, могут располагаться в папках level_name.blocks, blocks.level_name)
  ├── bundles/ (результат сборки блоков (бандлы), могут располагаться в папках level_name.bundles, bundles.level_name)
  ├── classes/ (бекендн)
  ├── db/ (миграции базы данных)
  ├── umaps/ (протокол UMap — альтернативная маршрутизация адресов)
  ├── usels/ (протокол USel — обеспечивает выборки из базы)
  └── xslt/ (результат сборки всех бандлов)
</pre>

```bash
npm install -g bem-cli
git clone https://github.com/ilyar/umi-bem-project-stub project
cd project
npm install
bem server
```

Смотрим результат сборки бандла `index` http://localhost:8080/bundles/index/