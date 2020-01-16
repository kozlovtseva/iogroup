<template>
    <div>
        <div>{{ label }}</div>
        <div v-if="checked.includes(value)" @click="click">
            x
        </div>
        <div v-else @click="click">
            0
        </div>
    </div>
</template>

<script>
export default {
    props: ["checked", "value", "label"],
    model: {
        prop: "checked"
    },
    methods: {
        click() {
            let checked = [].concat(this.checked);
            if (checked.includes(this.value)) {
                checked.splice(checked.indexOf(this.value), 1);
            } else {
                checked.push(this.value);
            }
            this.$emit("input", checked);
        }
    }
};
</script>

<style lang="scss" scoped></style>
