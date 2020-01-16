<template>
    <div>
        <div class="mark">
            <div v-if="mark == 'big'">
                <div class="mark_big" />
            </div>
            <div v-else>
                <div class="mark_small" />
            </div>
        </div>
        <div class="arrow">
            <div v-if="checked !== value" @click="click">
                <div class="empty">0</div>
            </div>
            <div v-else>
                <div class="checked">x</div>
            </div>
        </div>
        <div>{{ label }}</div>
    </div>
</template>

<script>
export default {
    props: ["checked", "value", "mark", "label"],
    model: {
        prop: "checked"
    },
    methods: {
        click() {
            this.$emit("input", this.value);
        }
    }
};
</script>

<style lang="scss" scoped></style>
