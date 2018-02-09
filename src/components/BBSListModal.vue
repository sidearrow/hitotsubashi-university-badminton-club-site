<template>
  <div class="modal fade" id="inputPassModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">パスワード入力</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ this.text }}</p>
          <div class="input-group">
            <input type="password" class="form-control">
            <button class="btn append">OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.text = `投稿『${this.posttitle}』を` + (this.function === 'edit' ? '編集します。' : '削除します。');
  },
  data () {
    return {
      text: '',
    };
  },
  props: {
    pageid: {
      type: String,
    },
    posttitle: {
      type: String,
    },
    function: {
      type: String,
    },
  },
};
</script>