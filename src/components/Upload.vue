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

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    props: {
        action: {
            type: String,
            require: true
        }
    },
    setup() {
        const fileInput = ref<null | HTMLInputElement>(null);
        const handleUpload = () => {
            console.log(fileInput);
            if (fileInput.value) {
                fileInput.value.click();
            }
        };
        return {
            fileInput,
            handleUpload
        };
    }
});
</script>

<style scoped>
.file-upload-input {
    display: none;
}
</style>
