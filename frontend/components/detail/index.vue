<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else-if="error">
      <h2>Error data loading</h2>
      <p>{{ error }}</p>
      <a href="/">Back</a>
    </div>
    <div v-else>
      <h2>{{ result.Company }} ({{ result.Ticker }})</h2>
      <div class="company-info">
        <p><strong>Rank:</strong> {{ result.Rank }}</p>
        <p><strong>Sector:</strong> {{ result.Sector }}</p>
        <p><strong>Industry:</strong> {{ result.Industry }}</p>
        <p><strong>CEO:</strong> {{ result.CEO }}</p>
        <p><strong>Headquarters:</strong> {{ result.HeadquartersCity }}, {{ result.HeadquartersState }}</p>
        <p><strong>Country:</strong> {{ result.Country }}</p>
        <p><strong>Number of Employees:</strong> {{ result.Number_of_employees }}</p>
        <p><strong>Market Cap (March 28):</strong> ${{ result.MarketCap_March28_M }}M</p>
        <p><strong>Updated Market Cap:</strong> ${{ result.MarketCap_Updated_M }}M</p>
        <p><strong>Revenues:</strong> ${{ result.Revenues_M }}M</p>
        <p><strong>Revenue Percent Change:</strong> {{ result.RevenuePercentChange }}%</p>
        <p><strong>Profits:</strong> ${{ result.Profits_M }}M</p>
        <p><strong>Profits Percent Change:</strong> {{ result.ProfitsPercentChange }}%</p>
        <p><strong>Assets:</strong> ${{ result.Assets_M }}M</p>
        <p><strong>Growth in Jobs:</strong> {{result.Growth_in_Jobs }}</p>
        <p><strong>Change in Rank:</strong> {{result.Change_in_Rank }}</p>
        <p><strong>Gained in Rank:</strong> {{result.Gained_in_Rank ? 'Yes' : 'No' }}</p>
        <p><strong>Dropped in Rank:</strong> {{result.Dropped_in_Rank ? 'Yes' : 'No' }}</p>
        <p><strong>Newcomer to the Fortune 500:</strong> {{result.Newcomer_to_the_Fortune500 ? 'Yes' : 'No' }}</p>
        <p><strong>Global 500:</strong> {{result.Global500 ? 'Yes' : 'No' }}</p>
        <p><strong>World's Most Admired Companies:</strong> {{result.Worlds_Most_Admired_Companies ? 'Yes' : 'No' }}</p>
        <p><strong>Best Companies to Work For:</strong> {{result.Best_Companies_to_Work_For ? 'Yes' : 'No' }}</p>
        <p><strong>Founder is CEO:</strong> {{result.Founder_is_CEO ? 'Yes' : 'No' }}</p>
        <p><strong>Female CEO:</strong> {{result.FemaleCEO ? 'Yes' : 'No' }}</p>
        <p><strong>Footnote:</strong> <em>{{result.Footnote }}</em></p>
        <p><strong>Last Updated:</strong> {{ new Date(result.Updated).toLocaleDateString() }}</p>
        <p><strong>Website:</strong> <a :href="result.Website" target="_blank">{{result.Website }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
  companyId: {
    type: String,
    required: true,
  },
});

const loading = ref(true);
const error = ref('');
const result = ref(false);

const onSearch = async () => {
  loading.value = true;
  error.value = '';

  try {
    const { data } = await axios.get(`http://localhost:3010/api/companies/id/${props.companyId}`);
    if (data.length > 0) {
      result.value = data[0];
    } else {
      error.value = `No data for id #${props.companyId}`;
    }
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  onSearch();
});
</script>


<style>
.company-info {
  max-width: 400px;
}

</style>