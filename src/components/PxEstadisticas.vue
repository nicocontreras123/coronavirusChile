<template>
  <table class="table-auto">
    <thead class="bg-black flex text-white w-full">
      <tr class="flex w-full mb-4">
        <th></th>
        <th  class="p-4 w-1/4">
          <span>Fecha</span>
        </th>
        <th  class="p-4 w-1/4">Casos confirmados</th>
        <th  class="p-4 w-1/4">Recuperados</th>
        <th  class="p-4 w-1/4">Fallecimientos</th>
        <th  class="p-4 w-1/4">Casos Activos</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody  class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style="height: 50vh;">
      <tr
        v-for="a in assets"
        :key="a.Date"
        class="flex w-full mb-4"
      >
        <td class="p-4 w-1/4">{{ a.Date | moment("DD/MM/YYYY") }}</td>
        <td class="p-4 w-1/4">{{a.Confirmed}}</td>
        <td class="p-4 w-1/4">{{a.Recovered}}</td>
        <td class="p-4 w-1/4">{{a.Deaths}}</td>
        <td class="p-4 w-1/4">{{a.Active}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'PxEstadisticas',

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
    font-family: sans-serif;
  }

  th {
    padding: 12px;
  }
}
</style>
