<template>
<div>
  <h2 class="h2">OB通信 管理</h2>
  <div class="alert alert-info">
    <div>PDFファイルの名前は<span class="text-monospace mx-1">obmsgYYYYMM.pdf</span>の形式でアップロードしてください。</div>
    <div>2018年1月号の場合は<span class="text-monospace mx-1">obmsg201801.pdf</span></div>
  </div>
  <div class="my-3">
    <select v-model="nrwYear" :disabled="isNew || isNowUploading"
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
                    :disabled="isNew || isNowUploading"
                    @click="clickNew()"
            >新規作成</button>
          </th>
          <th style="width:120px">年度</th>
          <th style="width:150px">表示名</th>
          <th>ファイル</th>
        </tr>
      </thead>
      <tbody>

        <!-- 新規作成 -->
        <tr v-if="isNew">
          <td class="text-center">
            <button @click="clickSave()"
                    class="btn btn-sm btn-outline-success mr-1"
                    :disabled="isNowUploading">保存</button>
            <button @click="clickCancel()"
                    class="btn btn-sm btn-outline-secondary"
                    :disabled="isNowUploading">キャンセル</button>
          </td>
          <td>
            <select class="form-control form-control-sm" v-model="input.year">
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
            </select>
          </td>
          <td>
            <select class="form-control form-control-sm" v-model="input.fileName">
              <option v-for="(viewName, key) in viewNameList" :key="key">{{ viewName }}</option>
            </select>
          </td>
          <td>
            <input type="file" accept=".pdf" @change="changeFile"/>
          </td>
        </tr>
        <tr v-if="isNowUploading">
          <td colspan="4">
            <div class="alert alert-danger">
              <div class="row">
                <div class="col-auto">
                  <div class="spinner-border text-danger">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
                <div>ファイルをアップロード中です。<br>このページを離れないでください</div>
              </div>
            </div>
          </td>
        </tr>

        <!-- 表示 -->
        <tr v-for="(obMsg, key) in obMsgListView" :key="key + 'v'">
          <td class="text-center">
            <button @click="clickDelete(obMsg.id)"
                    class="btn btn-sm btn-outline-danger"
                    :disabled="isNew || isNowUploading">削除</button>
          </td>
          <td class="align-middle">{{ obMsg.year }}</td>
          <td class="align-middle">{{ obMsg.viewName }}</td>
          <td class="align-middle">
            <a :href="obMsg.link" _target="blank">{{ obMsg.fileName }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import storage from '@/storage'

export default {
  created() {
    this.obMsgListView = this.obMsgListOrig
  },
  methods: {
    clickNew: function () {
      this.isNew = true
    },
    clickDelete: function (id) {
      alert(id)
    },
    clickSave: async function () {
      this.isNowUploading = true
      const url = await storage.obMsgUpload('test.pdf', this.input.file)
      this.isNowUploading = false
      this.isNew = null
    },
    clickCancel: function () {
      this.isNew = null
    },
    changeFile: function (e) {
      e.preventDefault()
      if (!e.target.files[0]) {
        return
      }
      const targetFile = e.target.files[0]
      /*
      if (!targetFile.name.match(/obmsg\d\d\d\d\d\d/)) {
        return
      }
      */
      this.input.file = targetFile
    }
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
      isNew: false,
      isNowUploading: false,
      input: {
        year: '',
        viewName: '',
        file: '',
      },
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