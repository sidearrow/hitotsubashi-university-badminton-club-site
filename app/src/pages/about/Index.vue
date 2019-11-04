<template>
  <div>
    <h1 class="title-main">部活情報</h1>
    <h2 class="title-sub">役職</h2>
    <section class="container mb-5">
      <div v-for="(v, i) in positions" :key="i" class="row mb-1">
        <div class="col-4 col-sm-3 py-1 alert-main">{{ v.position }}</div>
        <div class="col-8 col-sm-9 py-1">{{ v.name }}</div>
      </div>
    </section>
    <h2 class="title-sub">練習場所</h2>
    <section class="mb-5">
      <div class="mb-2">一橋大学 小平国際キャンパス内 体育館</div>
      <div class="row justify-content-center">
        <div class="text-center col-md-6">
          <iframe :src="mapUrl" class="w-100" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    <h2 class="title-sub">練習時間</h2>
    <section class="mt-3">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <table class="table table-bordered">
            <thead>
              <tr class="alert-main">
                <th class="text-center"></th>
                <th class="text-center">授業期</th>
                <th class="text-center">休業期</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(day, i) in practiceTimeTable.day" :key="i">
                <th class="text-center alert-main">{{ day }}</th>
                <td class="text-center">{{ practiceTimeTable.default[i] || '―' }}</td>
                <td class="text-center">{{ practiceTimeTable.vacation[i] || '―' }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="bg-light">
                <th class="text-center">備考</th>
                <td>{{ practiceTimeTable.defaultRemarks }}</td>
                <td>{{ practiceTimeTable.vacationRemarks }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import practiceTimeTable from "./practice_time_table.json";

export default {
  data: function() {
    return {
      positions: [
        { position: "部長", name: "髙橋 真弓" },
        { position: "監督", name: "小原 貴文" },
        { position: "コーチ", name: "	中山 朋子" },
        { position: "主将", name: "村山 康平" },
        { position: "女子主将", name: "植木 さやか" },
        { position: "主務", name: "	佐藤 和貴" }
      ],
      practiceTimeTable: practiceTimeTable,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12957.441488774683!2d139.46829484086692!3d35.71735473297284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e69b620ced03%3A0xf68c4deae0feda0c!2z5LiA5qmL5aSn5a2mIOWwj-W5s-Wbvemam-OCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1566569776838!5m2!1sja!2sjp"
    };
  }
};
</script>
