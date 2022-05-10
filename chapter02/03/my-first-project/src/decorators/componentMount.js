import { createDecorator } from 'vue-class-component'
import componentMountLogger from './componentLogger'

export default createDecorator((options) => {
  options.mixins = [...options.extends.mixins, componentMountLogger]
})
