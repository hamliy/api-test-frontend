<template>
  <div>
    <my-header></my-header>
    <div class="article_list">
      <ul>
        <li v-for="i in list" v-bind:key="i.id">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <router-link :to="'/content/'+ i.id">
            {{ i.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyHeader from '../components/header.vue'
import MyFooter from '../components/footer.vue'

export default {
  components: {MyHeader, MyFooter},
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
    }
  }
}
</script>
