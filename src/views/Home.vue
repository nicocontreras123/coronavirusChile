<template>
  <div>
    <px-estadisticas :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxEstadisticas from "@/components/PxEstadisticas";

export default {
  name: "Home",
  components: { PxEstadisticas },
  data() {
    return {
      assets: []
    };
  },
  created() {
      api.getCasosChile()
      .then(assets => (this.assets = assets)) 

  }
};
</script>
