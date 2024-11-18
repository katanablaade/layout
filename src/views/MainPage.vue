<template>
  <div class="container">
    <div class="grid d-flex justify-content-between flex-wrap">
      <card-item
        v-for="card in tours"
        :key="card.id"
        :card="card"
        @onNavigate="navigate"
      />
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem.vue';

export default {
  components: { CardItem },
  computed: {
    tours() {
      return this.$store.getters['getTours'];
    },
  },
  methods: {
    navigate(id) {
      this.$router.push({ name: 'tours', params: { id: id } });
      console.log(this.name);
    },
  },
};
</script>
