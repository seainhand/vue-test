<template>
    <div class="file-upload">
        <button @click="handleUpload">
            点击上传
        </button>
        <input
            ref="fileInput"
            type="file"
            class="file-upload-input"
        >
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue';

export default defineComponent({
    props: {
        action: {
            tyle: String,
            require: true
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.file-upload-input {
    display: none;
}
</style>
