<template>
  <div class="search">
    <input
      type="text"
      v-model="query"
      @input="onSearch"
      placeholder="Enter company name or ticker..."
    />
    <div v-if="loading">Loading...</div>
    <ul v-if="results.length">
      <li v-for="(result, index) in results" :key="result.id">
        <a :href="`/${result.id}`">
          {{ result.Company }}

          <span>{{ result.Ticker }}</span>
        </a>
      </li>
    </ul>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'Search',
  setup() {
    const query = ref('');
    const results = ref([]);
    const loading = ref(false);
    const error = ref('');

    const onSearch = async () => {
      if (query.value.length < 2) {
        results.value = [];
        return;
      }

      loading.value = true;
      error.value = '';

      try {
        const { data } = await axios.get(`http://localhost:3010/api/companies/query/${query.value}`);
        results.value = data;
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    return {
      query,
      results,
      loading,
      error,
      onSearch,
    };
  },
}
</script>


<style scoped>
input {
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  transition: .3s;

  &:hover {
    box-shadow: 0 0 10px #fff;
  }
}

.search {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 400px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  li {
    background-color: #333;
    border-radius: 10px;
    width: 100%;
    position: relative;
    transition: .3s;

    &:hover {
      box-shadow: 0 0 10px #fff;
    }

    span {
      font-size: 12px;
      background-color: #322;
      position: absolute;
      right: 5px;
      top: 5px;
      padding: 2px 5px;
      border-radius: 5px;
    }
  }

  a {
    color: #fff;
    padding: 10px;
    display: block;
    text-decoration: none;
  }
}

</style>