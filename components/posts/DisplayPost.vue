<template>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from 'tiptap'
import {
  Bold,
  BulletList,
  Code,
  CodeBlock,
  Heading,
  Italic,
  Link,
  ListItem,
  OrderedList
} from 'tiptap-extensions'
import Blockquote from '~/scripts/custom-extensions/Blockquote.js'
import Paragraph from '~/scripts/custom-extensions/Paragraph.js'
import MyImage from '~/scripts/custom-extensions/Image.js'

export default {
  components: {
    EditorContent
  },
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
  // eslint-disable-next-line object-shorthand
  data: function () {
    return {
      editor: null
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  mounted () {
    this.editor = new Editor({
      editable: false,
      extensions: [
        new Bold(),
        new BulletList(),
        new Code(),
        new CodeBlock(),
        new Heading({ levels: [1, 2, 3] }),
        new Italic(),
        new Link(),
        new ListItem(),
        new OrderedList(),
        // Customer Extensions
        new Blockquote(),
        new Paragraph(),
        new MyImage()
      ],
      content: this.content
    })
  }
}
</script>
