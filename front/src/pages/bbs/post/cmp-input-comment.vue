<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">comment</h5>
        <div class="input-group input-group-sm mb-1">
          <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
          </div>
          <input type="text" class="form-control">
        </div>
        <div class="mb-1">
          <textarea class="form-control form-control-sm" rows="3"></textarea>
        </div>
        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text">Password</span>
          </div>
          <input type="password" class="form-control">
        </div>
        <div class="text-center mt-2">
          <button
            class="btn btn-sm bg-main text-white"
            @click="clickPost"
          >POST</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickPost: function () {
      console.log('aa')
    }
  }
}
</script>