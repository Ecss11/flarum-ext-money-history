# Money History

[License](https://github.com/Ecss11/flarum-ext-money-history/blob/master/LICENSE.md)

A [Flarum](http://flarum.org) extension. money history

用于记录用户资金消费数据，以便于用户查看自己的资产流向信息。

### 注意：该插件不会自动记录，需要插件主动通知本插件的记录事件来完成消费。在其他插件为适配本插件之前，可以使用 [money history auto](https://github.com/Mattoids/flarum-ext-money-history-auto) 插件来实现自动记录功能

## Installation

Install with composer:

```sh
composer require ecss11/flarum-ext-money-history:"*"
```

## Updating

```sh
composer update ecss11/flarum-ext-money-history:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/ecss11/flarum-ext-money-history)
- [GitHub](https://github.com/Ecss11/flarum-ext-money-history)
