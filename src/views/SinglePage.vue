<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="col-lg-10 offset-1">
        <img
          class="mb-4 w-100"
          :src="require(`@/assets/img/${card.image}`)"
          :alt="card.image"
        />
        <h2>{{ card.title }}</h2>
        <div class="description">
          {{ card.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem.vue';

export default {
  components: { CardItem },
  computed: {
    card() {
      return this.$store.getters['getCardById'](this.$route.params.id);
    },
  },
};
</script>
