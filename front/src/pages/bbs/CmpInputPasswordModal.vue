<template>
  <div>
    <div class="modal" id="slf-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              class="close"
              @click="close"
            ><span>&times;</span></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade" id="slf-modal-back"></div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    document.getElementById('slf-modal-back').style.display = 'none'
  },
  props: {
    isOpen: Boolean,
    id: String
  },
  methods: {
    close: function () {
      this.$emit('child-event')
    }
  },
  watch: {
    'isOpen': function () {
      console.log(this.id)
      if (this.isOpen) {
        document.body.classList.add('modal-open')
        document.getElementById('slf-modal').style.display = 'block'
        document.getElementById('slf-modal-back').classList.add('show')
      } else {
        document.body.classList.remove('modal-open')
        document.getElementById('slf-modal').style.display = 'none'
        document.getElementById('slf-modal-back').classList.remove('show')
      }
    }
  }
}
</script>