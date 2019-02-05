<template>
<div>
  <h2 class="h2">OB通信 管理</h2>
  <div class="my-3">
    <select v-model="nrwYear" :disabled="targetId !== null"
            class="form-control form-control-sm" style="width:100px">
      <option></option>
      <option v-for="(year, key) in yearList" :key="key">{{ year }}</option>
    </select>
  </div>
  <div class="table-responsive">
    <table class="table" style="table-layout:fixed">
      <thead>
        <tr>
          <th class="text-center" style="width:180px">
            <button class="btn btn-sm btn-outline-primary mr-1"
                    :disabled="targetId !== null"
            >新規作成</button>
          </th>
          <th style="width:120px">年度</th>
          <th style="width:150px">表示名</th>
          <th>ファイル</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(obMsg, key) in obMsgListView">
          <!-- 表示 -->
          <tr v-if="obMsg.id !== targetId" :key="key + 'v'">
            <td class="text-center">
              <button @click="clickEdit(obMsg.id)"
                      class="btn btn-sm btn-outline-primary mr-1"
                      :disabled="targetId !== null">編集</button>
              <button @click="clickDelete(obMsg.id)"
                      class="btn btn-sm btn-outline-danger"
                      :disabled="targetId !== null">削除</button>
            </td>
            <td class="align-middle">{{ obMsg.year }}</td>
            <td class="align-middle">{{ obMsg.viewName }}</td>
            <td class="align-middle">
              <a :href="obMsg.link" _target="blank">{{ obMsg.fileName }}</a>
            </td>
          </tr>

          <!-- 編集 -->
          <tr v-else :key="key + 'e'">
            <td class="text-center">
              <button @click="clickSave(obMsg.id)"
                      class="btn btn-sm btn-outline-success mr-1">保存</button>
              <button @click="clickCancel(obMsg.id)"
                      class="btn btn-sm btn-outline-secondary">キャンセル</button>
            </td>
            <td>
              <select class="form-control form-control-sm">
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
              </select>
            </td>
            <td>
              <select class="form-control form-control-sm">
                <option v-for="(viewName, key) in viewNameList" :key="key">{{ viewName }}</option>
              </select>
            </td>
            <td>
              <input type="file" />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  created() {
    this.obMsgListView = this.obMsgListOrig
  },
  methods: {
    clickEdit: function (id) {
      this.targetId = id
    },
    clickDelete: function (id) {
      alert(id)
    },
    clickSave: function (id) {
      this.targetId = null
    },
    clickCancel: function (id) {
      this.targetId = null
    },
  },
  watch: {
    nrwYear: function () {
      if (this.nrwYear === '') {
        this.obMsgListView = this.obMsgListOrig
        return
      }
      this.obMsgListView = this.obMsgListOrig.filter(v => v.year === this.nrwYear)
    }
  },
  data: function () {
    return {
      nrwYear: '',
      targetId: null,
      obMsgListView: [],
      obMsgListOrig: [
        {
          id: 1,
          year: '2018',
          viewName: '1月号',
          fileName: 'obmsg201801.pdf',
          link: ''
        },
        {
          id: 2,
          year: '2012',
          viewName: '2月号',
          fileName: 'obmsg201801.pdf',
          link: ''
        }
      ],
      yearList: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
      viewNameList: ['1月号', '2月号', '3月号', '4月号', '5月号', '6月号',
                     '7月号', '8月号', '9月号', '10月号', '11月号', '12月号'],
    }
  }
}
</script>