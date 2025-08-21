<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  components: {
    QuillEditor,
  },
}
</script>

<template>
  <div id="rich-text-editor">
    <QuillEditor toolbar="essential" theme="snow" :options="{ placeholder: 'Write your content here...' }" />
  </div>
</template>
