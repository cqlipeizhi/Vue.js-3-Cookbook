<template>
<!-- <a-row>
    <a-col> -->
        <a-form :model="tmpForm">
          <a-row>
            <a-col :span="12">
            <a-form-item label="Name" name="name">
                <a-input :disabled="disabled" v-model:value="tmpForm.name" placeholder="User Name" />
            </a-form-item>
            </a-col>
            <a-col :span="12">
            <a-form-item label="Email" name="email">
                <a-input :disabled="disabled" v-model:value="tmpForm.email" placeholder="User Email" />
            </a-form-item>
            </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
            <a-form-item label="Country" name="country">
                <a-input :disabled="disabled" v-model:value="tmpForm.country" placeholder="User Country" />
            </a-form-item>
            </a-col>
            <a-col :span="12">
            <a-form-item label="Phone" name="phone">
                <a-input :disabled="disabled" v-model:value="tmpForm.phone" placeholder="User Phone" />
            </a-form-item>
            </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
            <a-form-item label="Birthday" name="birthday">
                <a-input :disabled="disabled" v-model:value="tmpForm.birthday" placeholder="User Birthday" />
            </a-form-item>
            </a-col>
            </a-row>
        </a-form>
    <!-- </a-col>
</a-row> -->
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Object,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
    tmpForm: {}
  }),
  watch: {
    tmpForm: {
      handler (value) {
        this.$emit('input', value)
      },
      deep: true
    },
    modelValue: {
      handler (value) {
        this.tmpForm = value
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
