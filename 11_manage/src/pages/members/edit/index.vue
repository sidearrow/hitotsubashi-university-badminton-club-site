<template>
  <div>
    <div class="row">
      <div class="col-6">
        <cmp-input-name-family ref="inputNameFamily"/>
      </div>
      <div class="col-6">
        <cmp-input-name-given ref="inputNameGiven" />
      </div>
    </div>
    <cmp-input-year ref="inputYear" />
    <cmp-input-highschool ref="inputHighschool" />
    <cmp-input-prefecture ref="inputPrefecture" />
    <!--<cmp-input-image />
    <cmp-input-intro v-model="input.intro" />-->
    <div class="text-center">
      <button
        class="btn btn-sm btn-primary"
        @click="submitMemberData()"
      >保存</button>
      <router-link
        to="/members"
        class="btn btn-sm btn-secondary ml-2"
      >キャンセル</router-link>
    </div>
  </div>  
</template>

<script>
import cmpInputNameFamily from './cmp-input-name-family'
import cmpInputNameGiven from './cmp-input-name-given'
import cmpInputYear from './cmp-input-year'
import cmpInputHighschool from './cmp-input-highschool'
import cmpInputPrefecture from './cmp-input-prefecture'
import cmpInputImage from './cmp-input-image'
import cmpInputIntro from './cmp-input-intro'

export default {
  created: function () {
    if (this.isNew) return

    this.fetchMemberData()
  },
  methods: {
    fetchMemberData: function () {
      this.$axios
        .get(`/members/${this.memberId}`)
        .then((res) => {
          this.$refs.inputNameFamily.set(res.data.name_family)
          this.$refs.inputNameGiven.set(res.data.name_given)
          this.$refs.inputYear.set(res.data.year)
          this.$refs.inputPrefecture.set(res.data.prefecture)
          this.$refs.inputHighschool.set(res.data.highschool)
        })
    },
    submitMemberData: function () {
      if (
        this.$refs.inputNameFamily.isError ||
        this.$refs.inputNameGiven.isError ||
        this.$refs.inputPrefecture.isError ||
        this.$refs.inputYear.isError ||
        this.$refs.inputHighschool.isError
      ) return

      const data = {}
      data.name_family = this.$refs.inputNameFamily.value
      data.name_given  = this.$refs.inputNameGiven.value
      data.prefecture  = this.$refs.inputPrefecture.value
      data.year        = this.$refs.inputYear.value
      data.highschool  = this.$refs.inputHighschool.value

      if (this.isNew) {
        this.$axios
          .post('/members', data)
          .then(() => {
            this.$router.push('/members')
          })
      } else {
        this.$axios
          .put(`/members/${this.memberId}`, data)
          .then(() => {
            this.$router.push('/members')
          })
      }
    }
  },
  data: function () {
    return {
      isNew: this.$route.path === '/members/new',
      memberId: this.$route.params.id,
    }
  },
  components: {
    'cmp-input-year': cmpInputYear,
    'cmp-input-name-family': cmpInputNameFamily,
    'cmp-input-name-given': cmpInputNameGiven,
    'cmp-input-highschool': cmpInputHighschool,
    'cmp-input-prefecture': cmpInputPrefecture,
    'cmp-input-image': cmpInputImage,
    'cmp-input-intro': cmpInputIntro,
  },
}
</script>