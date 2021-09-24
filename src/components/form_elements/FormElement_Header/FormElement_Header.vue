<template>
  <li role="button" id="field_item_control_head" class="field-item" data-fieldtype="control_head" data-fieldname="Header">
    <div class="field-icon">
      <span name="v4_header" class="ji ji-v4_header"></span>
    </div>
    <div class="field-name">Header</div>
  </li>
</template>
<script>
export default {
  name: 'FormElement_Header',
  data: () => ({
		
  }),
  components: {
		
  },
  methods: {
		
  },
  computed: {
		currentRouteName() {
			return this.$route.name;
    }
  },
	props: [
		
	]
}
</script>