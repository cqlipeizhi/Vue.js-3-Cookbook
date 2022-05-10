
import { Watch, mixins } from 'vue-property-decorator'
import DefaultNumber from './defaultNumber'

export default class NumberWatcher extends mixins(DefaultNumber) {
  @Watch('valueNumber')
  onValueNumberChanged (val: number) {
    console.log('WatchValueNumber: ' + val)
    console.log('this.valueNumber: ' + this.valueNumber)
    this.$emit('imput', val)
  }

  @Watch('value', { immediate: true })
  inValueChanged (val: number) {
    console.log('WatchValue: ' + val)
    this.valueNumber = val
  }
}
