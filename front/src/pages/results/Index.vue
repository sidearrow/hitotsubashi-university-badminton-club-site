<template>
  <div>
    <h1 class="title-main">大会結果</h1>
    <div class="form-row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header alert-main">関東学生バドミントン連盟リーグ</div>
          <div class="card-body">
            <div>関東学生バドミントン連盟主催のリーグ戦の結果です。一年に春と秋の２度行なわれます。</div>
            <div class="mt-3 text-center">
              <router-link to="/results/league" class="stretched-link">結果を見る</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-md-0 mt-3">
        <div class="card">
          <div class="card-header alert-main">東商戦</div>
          <div class="card-body text-center py-5">準備中</div>
        </div>
      </div>
      <div class="col-md-6 mt-3">
        <div class="card">
          <div class="card-header alert-main">三商戦</div>
          <div class="card-body text-center py-5">準備中</div>
        </div>
      </div>
    </div>
  </div>
</template>
