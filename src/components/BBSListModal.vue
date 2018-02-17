<template>
  <div>
    <div class="modal fade" id="inputPassModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">パスワード入力</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>投稿『{{ this.title }}』を{{ this.function === 'edit' ? '編集します。' : '削除します。' }}</p>
            <div class="input-group">
              <input type="password" class="form-control">
              <button class="btn append" :data-modal-id="this.id" @click="clickModal">OK</button>
            </div>
            <small class="form-text text-muted">4桁の半角数字で入力してください。</small>
            <div class="alert alert-danger d-none" id="modal-pass-wrong">パスワードが間違っています。</div>
            <div class="alert alert-success d-none" id="modal-complete">削除しました。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {database} from '@/main.js';

export default {
  data: function () {
    return {
      password: '',
    };
  },
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    function: {
      type: String,
    },
  },
  watch: {
    id: function () {
      database.ref(`/bbs/${this.id}/password`).once('value', (res) => {
        this.password = res.val();
      });
    },
  },
  methods: {
    clickModal: function (event) {
      const input = event.target.previousElementSibling.value;

      // wrong password
      if (input !== this.password) {
        event.target.previousElementSibling.value = '';
        document.getElementById('modal-pass-wrong').classList.remove('d-none');
        return;
      }

      if (this.function === 'edit') {

      } else if (this.function === 'delete') {
        document.getElementById('modal-pass-wrong').classList.add('d-none');
        document.getElementById('modal-complete').classList.remove('d-none');
        database.ref(`/bbs/${this.id}`).update({
          'delete': true,
        });
      }
    },
  }
};
</script>