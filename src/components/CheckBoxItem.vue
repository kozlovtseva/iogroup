<template>
    <div class="checkbox">
        <div
            class="checkbox__item"
            v-if="checked.includes(value)"
            @click="click"
        >
            ✔
        </div>
        <div class="checkbox__item" v-else @click="click"></div>
        <div class="checkbox__label">{{ label }}</div>
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

<style lang="scss" scoped>
.checkbox {
    display: flex;
    width: 170px;
    margin-bottom: 7px;
    &__item {
        border: 1px solid #525252;
        border-radius: 3px;
        color: #610c5d;
        cursor: pointer;
        font-size: 20px;
        height: 14px;
        line-height: 14px;
        width: 14px;
    }
    &__label {
        color: #150101;
        display: flex;
        font-family: "Roboto", sans-serif;
        font-size: 12px;
        font-weight: bold;
        margin-left: 5px;
    }
}
</style>
