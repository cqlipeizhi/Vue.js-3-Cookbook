import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

export default class DefaultNumber extends Vue {
    valueNumber:number = 0;

    @Prop(Number) readonly value:number|undefined;

    get formattedNumber () {
      return `Your total number is: ${this.valueNumber}`
    }
}
