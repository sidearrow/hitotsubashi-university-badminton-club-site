<?php

namespace App\Views\Pages;

use App\Views\Layouts\MainLayoutView;

class IndexView extends MainLayoutView
{
    public function draw(array $topImages)
    {
        $this->layout(function () use ($topImages) {
            $this->content($topImages);
        });
    }

    private function content(array $topImages)
    {
        ?>
    <div class="alert alert-warning">
        <div>こちらは β 版です。</div>
        <span>最新の情報は <a href="http://jfn.josuikai.net/circle/sports/badminton/" target="__blank">こちら</a> からご確認下さい。</span>
    </div>
    <div id="topImagesCaruosel" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
            <?php foreach ($topImages as $i => $v) : ?>
                <div class="carousel-item <?= $i === 0 ? 'active' : '' ?>">
                    <img src="<?= $v ?>" class="d-block w-100">
                </div>
            <?php endforeach; ?>
        </div>
        <a class="carousel-control-prev" href="#topImagesCaruosel" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#topImagesCaruosel" data-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
<?php
}
}
