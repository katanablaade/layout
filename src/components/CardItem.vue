<template>
  <a href="single.html" @click.prevent="onEmmit(card.id)">
    <div class="item-wrapper d-flex flex-column mb-4">
      <img
        :src="require(`@/assets/img/${card.image}`)"
        class="mb-3"
        :alt="card.image"
      />

      <h3 class="">{{ card.title }}</h3>
      <div class="description">
        {{ card.description | addMore }}
        <br />
        <span>Читать далее ...</span>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit('onNavigate', id);
    },
  },
};
</script>
