<template>
  <div>
    <h1 class="mb-5">部員情報</h1>
    <b-tabs>
      <b-tab :title="`${grade.grade} 年生`" v-for="(grade, i) in memberData" :key="i" fill>
        <div class="row my-3">
          <div
            class="col-lg-4 col-sm-6 py-2"
            v-for="(member, j) in grade.members"
            :key="`${i}-${j}`"
          >
            <div class="card">
              <div class="card-body">
                <div
                  :class="`h5 pb-1 ${member.gender === 0 ? 'text-info' : 'text-danger'}`"
                >{{ member.fullName }}</div>
                <div class="pb-1">
                  <span
                    class="border border-dark rounded px-1 mb-1 mr-2 d-inline-block"
                  >{{ member.faculty }}</span>
                  <span
                    class="border border-dark rounded px-1 d-inline-block"
                  >{{ member.highschool }}</span>
                </div>
                <div class="pb-1" v-if="member.positions.length > 0">
                  <span
                    class="border border-dark rounded px-1 mr-1 mb-1 d-inline-block"
                    v-for="(pos, k) in member.position"
                    :key="`${i}-${j}-${k}`"
                  >{{ pos }}</span>
                </div>
                <div class="pb-1">{{ member.comment }}</div>
              </div>
            </div>
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import meta from '@/meta'
import memberData from "./list"

export default {
  metaInfo: meta('members'),
  data: function() {
    return {
      memberData: memberData
    };
  }
};
</script>
