<template>
    <div>
        <h3>Nhập tháng của bạn:</h3>
        <input type="month" v-model="month"  />
        <p v-if="month <1 || month >12" style="color: red;">Vui lòng nhập tháng hợp lệ (1-12)</p>
        <p v-else-if="month >= 1 && month <= 3">Mùa xuân</p>
        <p v-else-if="month >= 4 && month <= 6">Mùa hạ</p>
        <p v-else-if="month >= 7 && month <= 9">Mùa thu</p>
        <p v-else>Mùa đông</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const month = ref(0);
</script>