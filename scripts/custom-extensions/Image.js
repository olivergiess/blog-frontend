import { Image } from 'tiptap-extensions'
import ViewerImage from '~/components/ui/viewer/ViewerImage'

export default class MyImage extends Image {
  get schema () {
    return {
      attrs: {
        src: {},
        alt: {
          default: null
        },
        aspectRatio: {
          default: 4 / 3
        },
        position: {
          default: {
            x: 50,
            y: 50
          }
        }
      },
      group: 'block',
      draggable: true,
      parseDOM: [
        {
          tag: 'img[src]',
          getAttrs: dom => ({
            src: dom.getAttribute('src')
          })
        }
      ],
      toDOM: node => ['img', node.attrs]
    }
  }

  get view () {
    return ViewerImage
  }
}
