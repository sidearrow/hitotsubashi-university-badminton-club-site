hit-u-bad

#### 本番環境構築手順
```
$ composer install --no-dev

$ php artisan key:generate
$ php artisan view:cache
$ php artisan optimize
```
